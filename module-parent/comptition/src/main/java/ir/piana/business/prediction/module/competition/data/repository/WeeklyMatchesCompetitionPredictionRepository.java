package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionPredictionEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WeeklyMatchesCompetitionPredictionRepository
        extends JpaRepository<WeeklyMatchesCompetitionPredictionEntity, Long> {

    @Query(value = "SELECT * FROM weekly_matches_competition_prediction cp, weekly_matches_competition c WHERE " +
            "cp.user_id = :userId and c.id in (:weeklyMatchId) and " +
            "cp.weekly_matches_competition_id = c.id", nativeQuery = true)
    List<WeeklyMatchesCompetitionPredictionEntity> findRegisteredByUserAndCompetition(
            @Param("userId") long userId,
            @Param("weeklyMatchId") List<Long> weeklyMatchId);
    List<WeeklyMatchesCompetitionPredictionEntity> findAllByCompetitionEntity(WeeklyMatchesCompetitionEntity competitionEntity);
}
