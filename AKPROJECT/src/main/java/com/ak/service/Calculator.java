package com.ak.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class Calculator implements Operation {
	@Autowired
	Environment Env;
	long c;
	int num;

	public String add(long a, long b) {
		c = a + b;
		return "ADDITION = " + c;
	}

	public String sub(long a, long b) {
		c = a - b;
		return "SUBTRACTION = " + c;
	}

	public String mul(long a, long b) {
		c = a * b;
		return "MULTIPLICATION = " + c;
	}

	public String div(long a, long b) {
		c = a / b;
		return "DIVITION = " + c;
	}

	public String prop(String operation, long a, long b) {
		
		String property = Env.getProperty(operation);
	
		if (property == null) {
			num = 4;
		} else {
			num = Integer.parseInt(property);
		}
		ArrayList<String> al = new ArrayList<>(
				Arrays.asList(add(a, b), sub(a, b), mul(a, b), div(a, b), "invalid"));
		return al.get(num);
	}

}
