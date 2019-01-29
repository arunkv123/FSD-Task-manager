package com.fsd.projectmanager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.projectmanager.model.Project;
import com.fsd.projectmanager.repository.ProjectRepository;


@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	ProjectRepository projectRepository;

	
@Override
	public List<Project> getAllProjects() {
		List<Project> projects = projectRepository.findAll();
		return projects;
	}
@Override
	public Project addUpdateProject(Project project) {

		return projectRepository.save(project);
	}

	

	
}