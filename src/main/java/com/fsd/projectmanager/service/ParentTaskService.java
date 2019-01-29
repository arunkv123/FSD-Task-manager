package com.fsd.projectmanager.service;

import java.util.List;

import com.fsd.projectmanager.model.ParentTask;

public interface ParentTaskService {

	ParentTask addUpdateParentTask(ParentTask parentTask);

	List<ParentTask> getallParentTasks();

}
