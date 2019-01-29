package com.fsd.projectmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.projectmanager.model.Project;
import com.fsd.projectmanager.model.Status;
import com.fsd.projectmanager.model.UpdateProject;
import com.fsd.projectmanager.service.ProjectService;

@RestController // This means that this class is a Controller
@RequestMapping(path = "/project")
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@PostMapping(path = "/updateProject") // Map ONLY GET Requests
	public UpdateProject updateProject(@RequestBody Project project) {
		projectService.addUpdateProject(project);
		UpdateProject response = new UpdateProject();
		Status status = new Status();
		status.setResult(true);
		status.setMessage("Saved");
		response.setStatus(status);
		response.setProject(project);
		return response;
	}

	@GetMapping(path = "/getAllProjects") // Map ONLY GET Requests
	public List<Project> getAllProjects() {
		List<Project> projects = projectService.getAllProjects();
		return projects;
	}

}
