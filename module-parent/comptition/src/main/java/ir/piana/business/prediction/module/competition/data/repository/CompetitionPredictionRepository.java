package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.view.CompetitionPredictionView;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CompetitionPredictionRepository extends JpaRepository<CompetitionPredictionView, Long> {
    @Query(value = "select WEEKLY_MATCHES_COMPETITION_ID id, registering_time, host_goals, guest_goals from weekly_matches_competition_result r where (WEEKLY_MATCHES_COMPETITION_ID, registering_time) in (" +
            "select WEEKLY_MATCHES_COMPETITION_ID, max(registering_time) registering_time from weekly_matches_competition_result r, weekly_matches_competition c where r.WEEKLY_MATCHES_COMPETITION_ID = c.id and c.weekly_matches_id = 2 group by WEEKLY_MATCHES_COMPETITION_ID)",
            nativeQuery = true)
    List<CompetitionPredictionView> findViews(
            @Param("userId") long userId,
            @Param("weeklyMatchId") long weeklyMatchId);
}
