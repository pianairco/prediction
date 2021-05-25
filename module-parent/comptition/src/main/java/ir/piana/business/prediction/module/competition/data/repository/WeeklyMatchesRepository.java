package ir.piana.business.prediction.module.competition.data.repository;

import ir.piana.business.prediction.module.competition.data.entity.WeeklyMatchesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WeeklyMatchesRepository extends JpaRepository<WeeklyMatchesEntity, Long> {
    @Query(value = "SELECT * FROM weekly_matches wm WHERE wm.start_date between :first and :second", nativeQuery = true)
    List<WeeklyMatchesEntity> findFutureWeeklyMatches(@Param("first") String first, @Param("second") String second);
}
