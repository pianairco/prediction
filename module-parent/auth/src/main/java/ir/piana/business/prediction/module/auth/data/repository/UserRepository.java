package ir.piana.business.prediction.module.auth.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByEmail(String email);
    UserEntity findByMobile(String mobile);
}
