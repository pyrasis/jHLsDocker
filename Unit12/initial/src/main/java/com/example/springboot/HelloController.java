package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class HelloController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/")
	public @ResponseBody Iterable<User> index() {
		User n = new User();
		n.setName("hello");
		n.setEmail("hello@world.com");
		userRepository.save(n);

		return userRepository.findAll();
	}

}
