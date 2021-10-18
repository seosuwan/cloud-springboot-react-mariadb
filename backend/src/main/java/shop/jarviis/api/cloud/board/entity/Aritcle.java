package shop.jarviis.api.cloud.board.entity;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.stereotype.Component;
import shop.jarviis.api.cloud.user.entity.User;

import javax.persistence.*;

@Entity
@Data @Component @Table(name ="articles")
public class Aritcle {
    @Id
    @Column(name = "article_id")
    @GeneratedValue
    private long articleId;
    @Column @NotNull private String title;
    @Column @NotNull private String content;
    @Column(name = "written_date") @NotNull private String  writtenDate;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY) //LAZY 요청했을때 모든 데이터가 들어오면 내보내라
    @JoinColumn(name = "item_id")
    private User item;


}
