package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.SeasonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SeasonRepository extends JpaRepository<SeasonEntity, Long> {
    @Query(value = "SELECT * FROM season s WHERE s.id in (:ids)", nativeQuery = true)
    List<SeasonEntity> findAllByIds(@Param("ids") List<Long> ids);
}
