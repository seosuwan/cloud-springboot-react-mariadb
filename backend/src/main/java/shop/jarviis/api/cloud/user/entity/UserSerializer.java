package shop.jarviis.api.cloud.user.entity;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@AllArgsConstructor
@Data
public class UserSerializer implements Serializable {
    private static final long serialVersionUID = 1L;

    private long userId;
    private String userName;
    private String userPassword;
    private String name;
    private String email;
    private String regDate;
}
