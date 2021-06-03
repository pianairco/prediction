create sequence IF NOT EXISTS master_seq START WITH 1000 INCREMENT BY 50;

CREATE TABLE IF NOT EXISTS league_organizer (
    id bigint primary key,
    name varchar(64),
    name_en varchar(64),
    parent_id bigint,
    start_date char(4)
);

INSERT INTO league_organizer (id, name, name_en, parent_id, start_date) select * from (
    select 1 id, 'فیفا' name, 'fifa' name_en, 0 parent_id, '1990' start_date union
    select 2, 'آسیا', 'afc', 1, '1990' union
    select 3, 'آفریقا', 'caf', 1, '1990' union
    select 4, 'آمریکای چنوبی', 'concacaf', 1, '1990' union
    select 5, 'آمریکای شمالی', 'conmebol', 1, '1990' union
    select 6, 'اقیانوسیه', 'ofc', 1, '1990' union
    select 7, 'اروپا', 'uefa', 1, '1990' union
    select 8, 'ایران', 'iran', 2, '1990' union
    select 9, 'انگلستان', 'england', 7, '1990' union
    select 10, 'آلمان', 'germany', 7, '1990' union
    select 11, 'ایتالیا', 'italy', 7, '1990' union
    select 12, 'اسپانیا', 'spain', 7, '1990'
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
    select 5, 12, 'لالیگا اسپانیا', 'apnia laliga', 0 union
    select 6, 2, 'مقدماتی جام جهانی آسیا', 'Asian World Cup qualifiers', 1 union
    select 7, 7, 'مقدماتی جام جهانی اروپا', 'European World Cup qualifiers', 1
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
    select 16, 8, 'سایپا' ,'Saipa F.C.', '16.png' UNION
    select 17, 2, 'عراق' ,'Iraq', '17.png' UNION
    select 18, 2, 'بحرین' ,'Bahrain', '18.png' UNION
    select 19, 2, 'هنگ کنگ' ,'Hong kong', '19.png' UNION
    select 20, 2, 'ایران' ,'Iran', '20.png' UNION
    select 21, 2, 'کامبوج' ,'Cambodia', '21.png'
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
    select 1 id, 1 league_id, '2019' start_date, '2020' end_date, '2019-20' tag UNION
    select 2, 6, '2022', '2022', 'Group C'
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
    select 16, 16, 1 union
    select 17, 17, 2 union
    select 18, 18, 2 union
    select 19, 19, 2 union
    select 20, 20, 2 union
    select 21, 21, 2
) where not exists(select * from team_season);

CREATE TABLE IF NOT EXISTS weekly_match_status (
    id bigint primary key,
    title varchar(64),
    title_en varchar(64)
);

INSERT INTO weekly_match_status (id, title, title_en) select * from (
    select 1 id, 'پیش از بازی ها' title, 'before_matches' title_en union
    select 2 id, 'شروع بازی ها' title, 'start_matches' title_en union
    select 3 id, 'امتیاز دهی' title, 'scoring' title_en union
    select 4 id, 'پایان' title, 'end' title_en
) where not exists(select * from weekly_match_status);

CREATE TABLE IF NOT EXISTS weekly_matches (
    id bigint primary key,
    weekly_match_status_id bigint,
    season_id bigint,
    week_number bigint,
    start_date char(10),
    end_date char(10),
    is_active bigint default 1,
    constraint fk_weekly_matches_2_weekly_match_status_by_weekly_match_status_id FOREIGN KEY (weekly_match_status_id) REFERENCES weekly_match_status(id),
    constraint fk_weekly_matches_2_season_by_season_id FOREIGN KEY (season_id) REFERENCES season(id)
);

INSERT INTO weekly_matches (id, weekly_match_status_id, season_id, week_number, start_date, end_date, is_active) select * from (
    select 1 id, 1 weekly_match_status_id, 1 season_id, 24 week_number, '1400/03/20' start_date, '1400/03/22' end_date, 1 is_active union
    select 2, 1, 2, 6, '1400/03/13', '1400/03/13', 1
) where not exists(select * from weekly_matches);

CREATE TABLE IF NOT EXISTS weekly_matches_competition (
    id bigint primary key,
    weekly_matches_id bigint,
    host_team_id bigint,
    guest_team_id bigint,
    date char(10),
    time char(5),
    constraint fk_weekly_matches_competition_2_weekly_matches_by_weekly_matches_id FOREIGN KEY (weekly_matches_id) REFERENCES weekly_matches(id),
    constraint fk_weekly_matches_competition_2_team_by_host_team_id FOREIGN KEY (host_team_id) REFERENCES team(id),
    constraint fk_weekly_matches_competition_2_team_by_guest_team_id FOREIGN KEY (guest_team_id) REFERENCES team(id)
);

INSERT INTO weekly_matches_competition (id, weekly_matches_id, host_team_id, guest_team_id, date, time) select * from (
    select 1 id, 1 weekly_matches_id, 7 host_team_id, 12 guest_team_id, '1400/03/27' date, '19:00' time  union
    select 2, 1, 1, 14, '1400/03/27', '19:00' union
    select 3, 1, 3, 4, '1400/03/27', '19:00' union
    select 4, 1, 11, 2, '1400/03/27', '19:00' union
    select 5, 1, 9, 16, '1400/03/27', '19:00' union
    select 6, 1, 15, 6, '1400/03/27', '19:00' union
    select 7, 1, 13, 10, '1400/03/27', '19:00' union
    select 8, 1, 5, 8, '1400/03/27', '19:00' union
    select 9, 2, 20, 19, '1400/03/13', '19:00' union
    select 10, 2, 18, 21, '1400/03/13', '21:00'
) where not exists(select * from weekly_matches_competition);

CREATE TABLE IF NOT EXISTS prediction_result (
    id bigint primary key,
    title varchar(32),
    title_en char(5)
);

INSERT INTO prediction_result (id, title, title_en) select * from (
    select 1 id, 'برد' title, 'win' title_en union
    select 2, 'تساوی', 'equal' union
    select 3, 'باخت', 'loss'
) where not exists(select * from prediction_result);

CREATE TABLE IF NOT EXISTS weekly_matches_competition_result (
    id bigint primary key,
    weekly_matches_competition_id bigint,
    host_goals bigint,
    guest_goals bigint,
    registering_time bigint default 0,
    constraint fk_weekly_matches_competition_result_2_weekly_matches_competition_by_weekly_matches_competition_id FOREIGN KEY (weekly_matches_competition_id) REFERENCES weekly_matches_competition(id)
);

CREATE TABLE IF NOT EXISTS weekly_matches_competition_prediction (
    id bigint primary key,
    weekly_matches_competition_id bigint,
    user_id bigint,
    host_goals bigint,
    guest_goals bigint,
    constraint fk_weekly_matches_competition_prediction_2_weekly_matches_competition_by_weekly_matches_competition_id FOREIGN KEY (weekly_matches_competition_id) REFERENCES weekly_matches_competition(id),
    constraint fk_weekly_matches_competition_prediction_2_user_by_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS scoring (
    id bigint primary key,
    weekly_matches_competition_id bigint,
    user_id bigint,
    score bigint,
    step bigint,
    host_goals bigint,
    guest_goals bigint,
    is_final bigint,
    constraint fk_scoring_2_weekly_matches_competition_by_weekly_matches_competition_id FOREIGN KEY (weekly_matches_competition_id) REFERENCES weekly_matches_competition(id),
    constraint fk_scoring_2_user_by_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);
