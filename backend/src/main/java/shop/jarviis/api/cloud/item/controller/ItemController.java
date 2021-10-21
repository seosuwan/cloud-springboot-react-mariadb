package shop.jarviis.api.cloud.item.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import shop.jarviis.api.cloud.common.CommonController;
import shop.jarviis.api.cloud.item.entity.Item;
import shop.jarviis.api.cloud.item.repository.ItemRepository;


import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor

public class ItemController implements CommonController<Item, Long> {
    private final ItemRepository itemRepository;

    @Override
    public ResponseEntity<List<Item>> findAll() {
        return ResponseEntity.ok(itemRepository.findAll());
    }

    @Override
    public ResponseEntity<Item> getById(Long id) {
        return ResponseEntity.ok(itemRepository.getById(id));
    }

    @Override
    public ResponseEntity<String> save(Item item) {
        itemRepository.save(item);
        return ResponseEntity.ok("SUCCESS");
    }

    @Override
    public ResponseEntity<Optional<Item>> findById(Long id) {
        return ResponseEntity.ok(itemRepository.findById(id));
    }

    @Override
    public ResponseEntity<Boolean> existsById(Long id) {
        return ResponseEntity.ok(itemRepository.existsById(id));
    }

    @Override
    public ResponseEntity<Long> count() {
        return ResponseEntity.ok(itemRepository.count());
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        itemRepository.deleteById(id);
        return ResponseEntity.ok("SUCCESS");
    }
}