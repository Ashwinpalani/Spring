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
	Environment env;
	
	@GetMapping(value = "testAPI")
	public ResponseEntity<?> testAPI()
			throws Exception {
		String  property = env.getProperty("sub");
//		FileWriter file = new FileWriter("E:\\Spring\\AKPROJECT\\src\\main\\resources\\test.txt");
//		file.write(property);

//		//String property = Env.getProperty(operation);
//		int num;
//		if(Env.getProperty(operation).equals(operation)) {
//		num =4;
//		}
//		else
//		{
//			num = Integer.parseInt(property);
//		}
//		
//		ArrayList<String> al = new ArrayList<>(
//				Arrays.asList(cal.add(a, b), cal.sub(a, b), cal.mul(a, b), cal.div(a, b),"invalid"));
		return new ResponseEntity<>(property , HttpStatus.OK);
	}

}