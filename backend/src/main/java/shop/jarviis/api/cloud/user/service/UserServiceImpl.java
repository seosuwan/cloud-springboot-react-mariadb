package shop.jarviis.api.cloud.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import shop.jarviis.api.cloud.user.entity.User;
import shop.jarviis.api.cloud.user.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;


    @Override
    public Optional<User> findById(long userId) {
        return userRepository.findById(userId);
    }
}
