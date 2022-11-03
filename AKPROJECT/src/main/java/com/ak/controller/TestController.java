package com.ak.controller;

import java.io.FileOutputStream;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ak.service.Operation;

@RestController
@Configuration
public class TestController {
	@Autowired
	Operation cal;
	@Autowired
	Environment Env;
	
	@GetMapping(value = "testAPI")
	public ResponseEntity<?> testAPI(@RequestParam String operation, @RequestParam long a, @RequestParam long b)
			throws Exception {

		String property = Env.getProperty(operation);
		int num;
		if(Env.getProperty(operation).equals(operation)) {
		num =4;
		}
		else
		{
			num = Integer.parseInt(property);
		}
		
		ArrayList<String> al = new ArrayList<>(
				Arrays.asList(cal.add(a, b), cal.sub(a, b), cal.mul(a, b), cal.div(a, b),"invalid"));
		return new ResponseEntity<>(al.get(num), HttpStatus.OK);
	}

}