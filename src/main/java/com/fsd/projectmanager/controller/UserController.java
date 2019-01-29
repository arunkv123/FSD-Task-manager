package com.fsd.projectmanager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.projectmanager.model.Status;
import com.fsd.projectmanager.model.UpdateUser;
import com.fsd.projectmanager.model.User;
import com.fsd.projectmanager.service.UserService;

@RestController    // This means that this class is a Controller
@RequestMapping(path="/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	
	
	@PostMapping(path="/updateUser",produces=MediaType.APPLICATION_JSON_UTF8_VALUE ) // Map ONLY GET Requests
	public  UpdateUser updateUser (@RequestBody  User user) {				
		userService.addUpdateUser(user);
		UpdateUser response = new UpdateUser();
		Status status = new Status();
		status.setResult(true);
		status.setMessage("Saved");
		response.setStatus(status);
		response.setUser(user);
		return response;
	}
	
	
	
	@GetMapping(path="/getAllUsers",produces=MediaType.APPLICATION_JSON_UTF8_VALUE ) // Map ONLY GET Requests
	public List<User> getAllUsers () {
		List<User> users= userService.getAllUsers();	  
		return users;
	}
	
	

}
