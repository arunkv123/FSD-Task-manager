package com.fsd.projectmanager.service;

import java.util.List;

import com.fsd.projectmanager.model.Project;

public interface ProjectService {

	List<Project> getAllProjects();

	Project addUpdateProject(Project project);

}
