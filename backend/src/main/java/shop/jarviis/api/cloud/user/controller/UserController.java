package shop.jarviis.api.cloud.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import shop.jarviis.api.cloud.user.domain.User;
import shop.jarviis.api.cloud.user.domain.UserDto;
import shop.jarviis.api.cloud.user.service.UserServiceImpl;

import java.util.Optional;

@CrossOrigin("*")
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public final class UserController {
        private final Logger logger = LoggerFactory.getLogger(this.getClass());
        private final UserServiceImpl userService;

        @PostMapping("")
        public ResponseEntity<User> join(@RequestBody User user){
            logger.info(String.format("User Join Info is %s", user.toString()));
            return null;
        }

        @PostMapping("/login")
        public ResponseEntity<Optional<User>> login(@RequestBody UserDto user){
            return new ResponseEntity<>(
                    userService.login(user.getUsername(), user.getPassword()), HttpStatus.OK);
        }

        @GetMapping("/{id}")
        public ResponseEntity<UserDto> getById(@PathVariable long id) throws JsonProcessingException {
            User user = userService.findById(id).get();
            UserDto userDto = UserDto.builder()
                    .userId(user.getUserId())
                    .username(user.getUsername())
                    .password(user.getPassword())
                    .name(user.getName())
                    .email(user.getEmail())
                    .regDate(user.getRegDate())
                    .build();
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        }
    }

