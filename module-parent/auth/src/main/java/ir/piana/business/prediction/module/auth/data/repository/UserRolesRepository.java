package ir.piana.business.prediction.module.auth.data.repository;

import ir.piana.business.prediction.module.auth.data.entity.UserRolesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRolesRepository extends JpaRepository<UserRolesEntity, Long> {
}
