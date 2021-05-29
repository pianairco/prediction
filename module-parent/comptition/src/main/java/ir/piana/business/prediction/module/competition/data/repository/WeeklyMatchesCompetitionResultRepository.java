package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeeklyMatchesCompetitionResultRepository extends JpaRepository<WeeklyMatchesCompetitionResultEntity, Long> {
}
