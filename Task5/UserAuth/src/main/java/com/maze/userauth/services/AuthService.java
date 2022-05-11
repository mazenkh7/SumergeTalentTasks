package com.maze.userauth.services;

import com.maze.userauth.models.AuthRequest;
import com.maze.userauth.models.User;
import com.maze.userauth.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public record AuthService(UserRepo userRepo) {

    @Autowired
    public AuthService {
    }

    public ResponseEntity authenticate(AuthRequest authRequest) {
        System.out.println("AUTHENTICATING");
        User user = userRepo.findUserByUserName(authRequest.getUserName());
        if(user==null){
            //Wrong username, forbidden 403
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("User not found");
        }else{
            if (user.getPassword().equals(authRequest.getPassword())){
                //Correct username and password, OK 200
                return ResponseEntity.ok().body("Success, Authenticated");
            }else {
                //Wrong password, forbidden 403
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Password incorrect");
            }
        }
    }
}
