package shop.jarviis.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import shop.jarviis.api.cloud.user.entity.User;
import shop.jarviis.api.cloud.user.entity.UserSerializer;
import shop.jarviis.api.cloud.user.service.UserService;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/users/{id}")
    public ResponseEntity<UserSerializer>getById(@PathVariable long id) throws JsonProcessingException{
        User user = userService.findById(id).get();
        UserSerializer userSerializer = new UserSerializer(user.getUserId(),
                user.getUserName(),user.getUserPassword(), user.getName(), user.getEmail(), user.getRegDate());
        return new ResponseEntity<>(userSerializer, HttpStatus.OK);
    }
}
