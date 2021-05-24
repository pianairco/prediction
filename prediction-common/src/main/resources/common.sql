-- create sequence IF NOT EXISTS master_seq;
create sequence IF NOT EXISTS master_seq START WITH 1000 INCREMENT BY 50;

CREATE TABLE IF NOT EXISTS league_organizer (
    id bigint primary key,
    name varchar(64),
    parent_id bigint,
    start_date char(4)
);

CREATE TABLE IF NOT EXISTS league (
    id bigint primary key,
    league_organizer_id bigint,
    name varchar(64),
    season char(7),
    start_date char(4),
    end_date char(4),
    is_active bigint default 0,
    constraint fk_league_2_league_organizer_by_league_organizer_id FOREIGN KEY (league_organizer_id) REFERENCES league_organizer(id)
);

CREATE TABLE IF NOT EXISTS team (
    id bigint primary key,
    league_organizer_id bigint,
    name varchar(64),
    logo varchar(256),
    constraint fk_team_2_league_organizer_by_league_organizer_id FOREIGN KEY (league_organizer_id) REFERENCES league_organizer(id)
);

CREATE TABLE IF NOT EXISTS team_league (
    id bigint primary key,
    team_id bigint,
    league_id bigint,
    constraint fk_team_league_2_team_by_team_id FOREIGN KEY (team_id) REFERENCES team(id),
    constraint fk_team_league_2_league_by_league_id FOREIGN KEY (league_id) REFERENCES league(id)
);

CREATE TABLE IF NOT EXISTS weekly_matches (
    id bigint primary key,
    league_id bigint,
    week_number bigint,
    is_active bigint default 0,
    constraint fk_weekly_matches_2_league_by_league_id FOREIGN KEY (league_id) REFERENCES league(id)
);

CREATE TABLE IF NOT EXISTS weekly_matches_comptition (
    id bigint primary key,
    weekly_matches_id bigint,
    host_team_id bigint,
    guest_team_id bigint,
    constraint fk_weekly_matches_comptition_2_weekly_matches_by_weekly_matches_id FOREIGN KEY (weekly_matches_id) REFERENCES weekly_matches(id),
    constraint fk_weekly_matches_2_team_by_host_team_id FOREIGN KEY (host_team_id) REFERENCES team(id),
    constraint fk_weekly_matches_2_team_by_guest_team_id FOREIGN KEY (guest_team_id) REFERENCES team(id)
);

