package com.fsd.projectmanager.service;

import java.util.List;

import com.fsd.projectmanager.model.User;

public interface UserService {

	User getUser(Long id);

	List<User> getAllUsers();

	User addUpdateUser(User user);

}
