create sequence IF NOT EXISTS master_seq START WITH 1000 INCREMENT BY 50;

CREATE TABLE IF NOT EXISTS users (
  id bigint primary key,
  user_uuid char(36),
  username varchar(64),
  email varchar(256),
  mobile char(11) NOT NULL,
  password char(128),
  form_password char(128),
  email_verified number(1),
  name varchar(64),
  picture_url varchar(256),
  locale char(2),
  family_name varchar(64),
  given_name varchar(64)
);

INSERT INTO users (id, user_uuid, username, email, mobile, email_verified, password, form_password, locale, given_name, picture_url)
select * from (select 1 id, 'admin' user_uuid, 'admin' username, 'rahmatii1366@gmail.com' email, '09128855402' mobile,
                      1 email_verified,
                      '$2a$10$2fjZZJRFTRcZmoJwdTc27.46C9djzkBDmnm47PQ4.XrIVfRM9rKpe' password,
                      '$2a$10$2fjZZJRFTRcZmoJwdTc27.46C9djzkBDmnm47PQ4.XrIVfRM9rKpe' form_password, 'fa' locale,
                      'admin' given_name, 'https://lh3.googleusercontent.com/a-/AOh14Gg8K7kIHhlEo0-oJjPmGBG73ciHeRQnMFuRWRjQ4A=s96-c' picture_url
              ) where not exists(select * from users);

CREATE TABLE IF NOT EXISTS user_roles (
    id bigint default master_seq.nextval primary key,
    user_id bigint not null,
    role_name varchar(64) NOT NULL,
    constraint fk_user_roles_2_user_by_id FOREIGN KEY (user_id)
        REFERENCES users(id)
);

INSERT INTO user_roles (id, user_id, role_name) select * from (
    select 1 id, 1 user_id, 'ROLE_ADMIN' role_name union
    select 2, 1, 'ROLE_USER'
) where not exists(select * from user_roles);
