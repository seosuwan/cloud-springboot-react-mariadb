package shop.jarviis.api.cloud.user.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.jarviis.api.cloud.board.entity.Aritcle;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data @Component @Table(name = "users")
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue
    private long userId;
    @Column @NotNull private String userName;
    @Column @NotNull private String userPassword;
    @Column @NotNull private String name;
    @Column @NotNull private String email;
    @Column(name = "reg_date") @NotNull private String regDate;
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Aritcle> articleList = new ArrayList<>();
}
