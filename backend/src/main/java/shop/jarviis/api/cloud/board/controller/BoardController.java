package shop.jarviis.api.cloud.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;
import shop.jarviis.api.cloud.board.service.BoardService;

@RestController
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
}
