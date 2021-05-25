package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.LeagueOrganizerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeagueOrganizerRepository extends JpaRepository<LeagueOrganizerEntity, Long> {
}
