package com.fsd.projectmanager.model;

public class UpdateTask {

	Status status;
	TaskModel taskModel;
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public TaskModel getTaskModel() {
		return taskModel;
	}
	public void setTaskModel(TaskModel taskModel) {
		this.taskModel = taskModel;
	}
}
