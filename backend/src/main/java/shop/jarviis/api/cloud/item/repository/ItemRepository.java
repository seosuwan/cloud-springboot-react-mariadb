package shop.jarviis.api.cloud.item.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import shop.jarviis.api.cloud.item.entity.Item;


public interface ItemRepository extends JpaRepository<Item, Long> {
}
