package shop.jarviis.api.cloud.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shop.jarviis.api.cloud.board.entity.Aritcle;

@Repository
public interface BoardRepository extends JpaRepository<Aritcle,Long> {
}
