package shop.jarviis.api.cloud.user.service;

import org.springframework.stereotype.Component;
import shop.jarviis.api.cloud.user.entity.User;

import java.util.Optional;

@Component
public interface UserService {
    Optional<User> findById(long userId);
}
