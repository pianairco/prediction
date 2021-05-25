-- create sequence IF NOT EXISTS master_seq;
create sequence IF NOT EXISTS master_seq START WITH 1000 INCREMENT BY 50;

CREATE TABLE IF NOT EXISTS league_organizer (
    id bigint primary key,
    name varchar(64),
    parent_id bigint,
    start_date char(4)
);

INSERT INTO league_organizer (id, name, parent_id, start_date) select * from (
    select 1 id, 'fifa' name, 0 parent_id, '1990' start_date union
    select 2, 'afc', 1, '1990' union
    select 3, 'caf', 1, '1990' union
    select 4, 'concacaf', 1, '1990' union
    select 5, 'conmebol', 1, '1990' union
    select 6, 'ofc', 1, '1990' union
    select 7, 'uefa', 1, '1990' union
    select 8, 'iran', 2, '1990' union
    select 9, 'england', 7, '1990' union
    select 10, 'germany', 7, '1990' union
    select 11, 'italy', 7, '1990' union
    select 12, 'spain', 7, '1990'
) where not exists(select * from league_organizer);


CREATE TABLE IF NOT EXISTS league (
    id bigint primary key,
    league_organizer_id bigint,
    name varchar(64),
    name_en varchar(64),
    is_active bigint default 0,
    constraint fk_league_2_league_organizer_by_league_organizer_id FOREIGN KEY (league_organizer_id) REFERENCES league_organizer(id)
);

INSERT INTO league (id, league_organizer_id, name, name_en, is_active) select * from (
    select 1 id, 8 league_organizer_id, 'لیگ برتر ایران' name, 'persian golf' name_en, 1 is_active union
    select 2, 9, 'لیگ برتر انگلستان', 'premier league', 0 union
    select 3, 10, 'بوندس لیگا آلمان', 'bundes liga', 0 union
    select 4, 11, 'سری آ ایتالیا', 'serie a league', 0 union
    select 5, 12, 'لالیگا اسپانیا', 'apnia laliga', 0
) where not exists(select * from league);

CREATE TABLE IF NOT EXISTS team (
    id bigint primary key,
    league_organizer_id bigint,
    name varchar(64),
    name_en varchar(64),
    logo varchar(256),
    constraint fk_team_2_league_organizer_by_league_organizer_id FOREIGN KEY (league_organizer_id) REFERENCES league_organizer(id)
);

INSERT INTO team (id, league_organizer_id, name, name_en, logo) select * from (
    select 1 id, 8 league_organizer_id, 'پیکان تهران' name, 'Paykan' name_en, '1.png' logo union
    select 2, 8, 'گل گهرسيرجان', 'Gol Gohar', '2.png' union
    select 3, 8, 'ذوب آهن', 'Zob Ahan', '3.png' union
    select 4, 8, 'آلومينيوم اراک', 'Aluminium Arak', '4.png' union
    select 5, 8, 'شهر خودرو مشهد', 'Shahre Khodro Mashhad', '5.png' union
    select 6, 8, 'نساجی مازندران', 'Nassaji Mazandaran', '6.png' union
    select 7, 8, 'فولاد خوزستان', 'Foolad', '7.png' union
    select 8, 8, 'تراکتور', 'Tractor', '8.png' union
    select 9, 8, 'صنعت نفت آبادان', 'Sanat Naft', '9.png' union
    select 10, 8, 'پرسپولیس', 'Perspolis', '10.png' union
    select 11, 8, 'استقلال', 'Esteghlal F.C.', '11.png' union
    select 12, 8, 'سپاهان', 'Sepahan', '12.png' union
    select 13, 8, 'مس رفسنجان', 'Mes Rafsanjan', '13.png' union
    select 14, 8, 'نفت مسجد سلیمان' ,'Naft Masjed Soleyman', '14.png' union
    select 15, 8, 'ماشین سازی' ,'Machine Sazi', '15.png' union
    select 16, 8, 'سایپا' ,'Saipa F.C.', '16.png'
) where not exists(select * from team);

CREATE TABLE IF NOT EXISTS season (
    id bigint primary key,
    league_id bigint,
    start_date char(4),
    end_date char(4),
    tag char(7),
    constraint fk_season_2_league_by_league_id FOREIGN KEY (league_id) REFERENCES league(id)
);

INSERT INTO season (id, league_id, start_date, end_date, tag) select * from (
    select 1 id, 1 league_id, '2019' start_date, '2020' end_date, '2019-20' tag
) where not exists(select * from season);

CREATE TABLE IF NOT EXISTS team_season (
    id bigint primary key,
    team_id bigint,
    season_id bigint,
    constraint fk_team_season_2_team_by_team_id FOREIGN KEY (team_id) REFERENCES team(id),
    constraint fk_team_season_2_season_by_season_id FOREIGN KEY (season_id) REFERENCES season(id)
);

INSERT INTO team_season (id, team_id, season_id) select * from (
    select 1 id, 1 team_id, 1 season_id union
    select 2, 2, 1 union
    select 3, 3, 1 union
    select 4, 4, 1 union
    select 5, 5, 1 union
    select 6, 6, 1 union
    select 7, 7, 1 union
    select 8, 8, 1 union
    select 9, 9, 1 union
    select 10, 10, 1 union
    select 11, 11, 1 union
    select 12, 12, 1 union
    select 13, 13, 1 union
    select 14, 14, 1 union
    select 15, 15, 1 union
    select 16, 16, 1
) where not exists(select * from season);

CREATE TABLE IF NOT EXISTS weekly_matches (
    id bigint primary key,
    season_id bigint,
    week_number bigint,
    is_active bigint default 0,
    constraint fk_weekly_matches_2_season_by_season_id FOREIGN KEY (season_id) REFERENCES season(id)
);

INSERT INTO weekly_matches (id, season_id, week_number, is_active) select * from (
    select 1 id, 1 season_id, 24 week_number, 1 is_active
) where not exists(select * from season);

CREATE TABLE IF NOT EXISTS weekly_matches_comptition (
    id bigint primary key,
    weekly_matches_id bigint,
    host_team_id bigint,
    guest_team_id bigint,
    constraint fk_weekly_matches_comptition_2_weekly_matches_by_weekly_matches_id FOREIGN KEY (weekly_matches_id) REFERENCES weekly_matches(id),
    constraint fk_weekly_matches_comptition_2_team_by_host_team_id FOREIGN KEY (host_team_id) REFERENCES team(id),
    constraint fk_weekly_matches_comptition_2_team_by_guest_team_id FOREIGN KEY (guest_team_id) REFERENCES team(id)
);

INSERT INTO weekly_matches_comptition (id, weekly_matches_id, host_team_id, guest_team_id) select * from (
    select 1 id, 1 weekly_matches_id, 7 host_team_id, 12 guest_team_id union
    select 2, 1, 1, 14 union
    select 3, 1, 3, 4 union
    select 4, 1, 11, 2 union
    select 5, 1, 9, 16 union
    select 6, 1, 15, 6 union
    select 7, 1, 13, 10 union
    select 8, 1, 5, 8
) where not exists(select * from season);
