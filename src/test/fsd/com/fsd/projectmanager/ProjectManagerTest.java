package com.fsd.projectmanager;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fsd.projectmanager.controller.TaskController;
import com.fsd.projectmanager.model.Task;
import com.fsd.projectmanager.model.TaskModel;
import com.fsd.projectmanager.service.TaskService;

@RunWith(SpringRunner.class)
// @WebMvcTest
@SpringBootTest(classes=Application.class,webEnvironment = WebEnvironment.MOCK)
//@WebMvcTest(TaskController.class)
public class ProjectManagerTest {


	@Autowired
	  private WebApplicationContext webApplicationContext;
	  private MockMvc mockMvc;

	  @Before
	  public void setUp() {
	    mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	  }


	@MockBean
	private TaskService taskService;

	@Test
	public void addTaskMockTest() throws Exception {
		TaskModel model=new TaskModel();
		model.setEndDate(new Date());
		model.setParentId(1l);
		model.setParentName("mock");
		model.setPriority(20);
		model.setProjectId(2l);
		model.setProjectName("test");
		ObjectMapper mapper = new ObjectMapper();

		when(taskService.addUpdateTask(new Task())).thenReturn(new Task());
		this.mockMvc
				.perform(MockMvcRequestBuilders.post("/task/updateTask").contentType(MediaType.APPLICATION_JSON_UTF8_VALUE)
						.content(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(model)))
				.andExpect(status().isOk());
	}
}
