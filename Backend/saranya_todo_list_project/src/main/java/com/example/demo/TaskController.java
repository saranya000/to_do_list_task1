package com.example.demo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/tasks")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController 
{
	@Autowired
	TaskRepository taskrepo;
	
	@GetMapping("/gtd")
	public List<Task> getAllTasks()
	{
		return taskrepo.findAll();
	}
	
	@DeleteMapping("/dlt/{id}")
	public void delete(@PathVariable int id)
	{
		taskrepo.deleteById(id);
	}
	
	@PostMapping("/pt")
	public Task createTask(@RequestBody Task task)
	{
		task.setAddedOn(LocalDate.now());                  
	    task.setDeadLine(LocalDate.now().plusDays(7));     
	    task.setStatus("Incomplete"); 
		return taskrepo.save(task);
	}
	@PutMapping("/edit/{id}")
	public Task editTask(@PathVariable int id,@RequestBody Task task)
	{
		Task existingTask=taskrepo.findById(id)
				.orElseThrow(() -> new RuntimeException("Task not found with ID: " + id));
		existingTask.setTaskName(task.getTaskName());
		
		return taskrepo.save(existingTask);
	}
	
}
