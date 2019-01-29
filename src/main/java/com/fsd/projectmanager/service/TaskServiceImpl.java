package com.fsd.projectmanager.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.projectmanager.model.Task;
import com.fsd.projectmanager.repository.TaskRepository;



@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	TaskRepository taskRepository;

	

	@Override
	public Task addUpdateTask(Task task) {		
		return taskRepository.save(task);
	}

	@Override
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}

	

	
}

