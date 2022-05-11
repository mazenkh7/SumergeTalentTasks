package com.maze.userauth.repos;

import com.maze.userauth.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends MongoRepository<User,Integer> {
    public User findUserByUserName(String userName);
    public User findUserById(String id);
    public void deleteById(String id);

}
