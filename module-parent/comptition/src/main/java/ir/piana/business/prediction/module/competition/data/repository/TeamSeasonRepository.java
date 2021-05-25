package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.TeamSeasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamSeasonRepository extends JpaRepository<TeamSeasonEntity, Long> {
}
