package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.ScoringEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesCompetitionEntity;
import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ScoringRepository extends JpaRepository<ScoringEntity, Long> {
    List<ScoringEntity> findAllByCompetitionEntity(WeeklyMatchesCompetitionEntity competitionEntity);
}
