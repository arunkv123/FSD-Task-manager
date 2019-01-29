package com.fsd.projectmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.fsd.projectmanager.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
	
}