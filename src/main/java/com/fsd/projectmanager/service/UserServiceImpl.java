package com.fsd.projectmanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.projectmanager.model.User;
import com.fsd.projectmanager.repository.UserRepository;



@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	@Override
	public User getUser(Long id) {
		Optional<User> user = userRepository.findById(id);
		return user.get();
	}
	@Override
	public List<User> getAllUsers() {
		List<User> users = userRepository.findAll();
		return users;
	}
	@Override
	public User addUpdateUser(User user) {

		return userRepository.save(user);
	}

}