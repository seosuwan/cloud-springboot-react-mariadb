package shop.jarviis.api.cloud.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.jarviis.api.cloud.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
