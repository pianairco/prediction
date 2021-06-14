package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionResultEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface WeeklyMatchesCompetitionResultRepository
        extends JpaRepository<WeeklyMatchesCompetitionResultEntity, Long> {
//    @Query(value = "select o.* from (SELECT weekly_matches_competition_id , max(registering_time) registering_time FROM weekly_matches_competition_result cr " +
//            " WHERE cr.weekly_matches_competition_id = :competitionId group by weekly_matches_competition_id) t, weekly_matches_competition_result o " +
//            " where o.weekly_matches_competition_id = t.weekly_matches_competition_id and o.registering_time = t.registering_time", nativeQuery = true)
//    WeeklyMatchesCompetitionResultEntity findLastResult(@Param("competitionId") long competitionId);

    @Query(value = "select o.* from (SELECT cr.weekly_matches_competition_id, max(registering_time) registering_time FROM weekly_matches_competition_result cr, weekly_matches_competition wc " +
            " WHERE wc.id = cr.weekly_matches_competition_id and wc.weekly_matches_id = :weeklyMatchesId group by weekly_matches_competition_id) t, weekly_matches_competition_result o " +
            " where o.weekly_matches_competition_id = t.weekly_matches_competition_id and o.registering_time = t.registering_time", nativeQuery = true)
    List<WeeklyMatchesCompetitionResultEntity> findLastResults(@Param("weeklyMatchesId") long weeklyMatchesId);

    @Query(value = "select o.* from weekly_matches_competition_result o " +
            " where (weekly_matches_competition_id, registering_time) in (" +
            " SELECT weekly_matches_competition_id, max(registering_time) registering_time " +
            " FROM weekly_matches_competition_result WHERE weekly_matches_competition_id = :competitionId " +
            " group by weekly_matches_competition_id)",
            nativeQuery = true)
    Optional<WeeklyMatchesCompetitionResultEntity> findLastResult(@Param("competitionId") long competitionId);

}
