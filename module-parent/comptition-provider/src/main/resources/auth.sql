create sequence IF NOT EXISTS master_seq START WITH 1000 INCREMENT BY 50;

CREATE TABLE IF NOT EXISTS prediction_result (
    id bigint primary key,
    title char(5)
);

INSERT INTO prediction_result (id, title) select * from (
    select 1 id, 'win' title union
    select 2, 'equal' union
    select 3, 'loss'
) where not exists(select * from prediction_result);

CREATE TABLE IF NOT EXISTS weekly_matches_comptition_result (
    id bigint primary key,
    weekly_matches_comptition_id bigint,
    host_goals bigint,
    guest_goals bigint,
    constraint fk_weekly_matches_comptition_prediction_2_weekly_matches_comptition_by_weekly_matches_comptition_id FOREIGN KEY (weekly_matches_comptition_id) REFERENCES weekly_matches_comptition(id)
);


CREATE TABLE IF NOT EXISTS weekly_matches_comptition_prediction (
    id bigint primary key,
    weekly_matches_comptition_id bigint,
    user_id bigint,
    host_goals bigint,
    guest_goals bigint,
    constraint fk_weekly_matches_comptition_prediction_2_weekly_matches_comptition_by_weekly_matches_comptition_id FOREIGN KEY (weekly_matches_comptition_id) REFERENCES weekly_matches_comptition(id),
    constraint fk_weekly_matches_comptition_prediction_2_user_by_user_id FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS scoring (
    id bigint primary key,
    weekly_matches_comptition_id bigint,
    user_id bigint,
    score bigint,
    step bigint,
    is_final bigint,
    constraint fk_weekly_matches_comptition_prediction_2_weekly_matches_comptition_by_weekly_matches_comptition_id FOREIGN KEY (weekly_matches_comptition_id) REFERENCES weekly_matches_comptition(id),
    constraint fk_weekly_matches_comptition_prediction_2_user_by_user_id FOREIGN KEY (user_id) REFERENCES user(id)
);
