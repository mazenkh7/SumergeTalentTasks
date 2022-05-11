package com.maze.userauth.controllers;

import com.maze.userauth.models.AuthRequest;
import com.maze.userauth.services.AuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @Tag(name = "Authenticate", description = "Post request to authenticate with username and password in request body.")
    @PostMapping("/")
    public ResponseEntity authenticate(@RequestBody AuthRequest authRequest){
        return authService.authenticate(authRequest);
    }

    @Tag(name = "Dummy Get", description = "Dummy get api to show off in SwaggerV3.")
    @GetMapping("/")
    public String dummyGet(){
        return "Dummy Text";
    }

}
