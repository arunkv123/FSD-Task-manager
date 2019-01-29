package com.fsd.projectmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsd.projectmanager.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
	
}
