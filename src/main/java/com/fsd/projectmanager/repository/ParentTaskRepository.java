package com.fsd.projectmanager.repository;

import org.springframework.data.repository.CrudRepository;

import com.fsd.projectmanager.model.ParentTask;

public interface ParentTaskRepository extends CrudRepository<ParentTask, Long> {
	
}
