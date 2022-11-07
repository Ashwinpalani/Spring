package com.ak.controller;

import java.io.FileInputStream;
import java.util.Map;
import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ak.service.Calculator;



@RestController
@Configuration

public class TestController {
	@Autowired
	Calculator cal;
	
	@Value("${fath}")
	String paths;
	Logger log = LogManager.getLogger("AKPROJECT");
	@GetMapping(value = "testAPI")
	public ResponseEntity<?> testAPI(@RequestParam Map<String, String> requestParams) throws Exception {
		System.out.println(requestParams);
		try {
			
			log.debug("testAPI started: " + requestParams);
			log.info("testAPI started: " + requestParams);
			String operation = requestParams.get("operation");
			int a = Integer.parseInt(requestParams.get("a"));
			int b = Integer.parseInt(requestParams.get("b"));
			String result = String.valueOf(cal.prop(operation, a, b));
			requestParams.put("result :", result+"");
			requestParams.put("Status:", "success");
			log.debug("testAPI started: " + requestParams);
			log.info("testAPI started: " + requestParams);
			
		}
		catch (Exception e) {
			log.error("testAPI Eror: " + e);
		;
		}
		return new ResponseEntity<>(requestParams, HttpStatus.OK);
	}
	
	@GetMapping(value = "loadProperty")
	public ResponseEntity<?> loadProperty() throws Exception {
		System.out.println(paths);
		FileInputStream file;
		Properties p = null;
		try {
			file = new FileInputStream(paths);
            p = new Properties();
            p.load(file);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(p, HttpStatus.OK);
	}
	

}