package ir.piana.business.prediction.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class TestRest {
    @GetMapping(path = "error")
    public ResponseEntity error(HttpServletRequest request) {
        return ResponseEntity.ok("not fund");
    }

    @PostMapping(path = "login")
    public ResponseEntity login(HttpServletRequest request) {
        return ResponseEntity.ok("logged in");
    }

    @GetMapping(path = "test")
    public ResponseEntity testGet(HttpServletRequest request) {
        return ResponseEntity.ok("Hello World");
    }

    @GetMapping(path = "api/test")
    public ResponseEntity apiTestGet(HttpServletRequest request) {
        return ResponseEntity.ok("Hello World");
    }
}
