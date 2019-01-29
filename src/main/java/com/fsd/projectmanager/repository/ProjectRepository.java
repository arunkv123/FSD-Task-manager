package com.fsd.projectmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fsd.projectmanager.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
	
}
