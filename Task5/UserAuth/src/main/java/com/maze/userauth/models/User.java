package com.maze.userauth.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;


@Getter
@Setter
@NoArgsConstructor

@Document
public class User {

    @Id
    private String id;
    @Field
    private String userName;
    @Field
    private String password;

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    @Override
    public String toString() {
        return String.format("User[id='%s', userName='%s', password='%s']",id,userName,password);
    }
}
