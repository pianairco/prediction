package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface WeeklyMatchesCompetitionRepository extends JpaRepository<WeeklyMatchesCompetitionEntity, Long> {
    List<WeeklyMatchesCompetitionEntity> findAllByWeeklyMatchesId(long weeklyMatchesId);
}
