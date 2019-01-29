package com.fsd.projectmanager.service;

import java.util.List;

import com.fsd.projectmanager.model.Task;

public interface TaskService {

	Task addUpdateTask(Task task);

	List<Task> getAllTasks();

}
