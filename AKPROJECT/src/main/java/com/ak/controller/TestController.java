package com.ak.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ak.service.Calculator;

@RestController
@Configuration
public class TestController{
	@Autowired
	Calculator cal;

	@GetMapping(value = "testAPI")
	public ResponseEntity<?> testAPI(@RequestParam String operation, @RequestParam long a, @RequestParam long b)
			throws Exception {
				String prop = cal.prop(operation, a, b);
				return new ResponseEntity<>(prop,HttpStatus.OK);
	}

}