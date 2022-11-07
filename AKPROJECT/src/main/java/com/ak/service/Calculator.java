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
	int c;
	int num;

	public int add(int a, int b) {
		c = a + b;
		return  c;
	}

	public int sub(int a, int b) {
		c = a - b;
		return  c;
	}

	public int mul(int a, int b) {
		c = a * b;
		return  c;
	}

	public int div(int a, int b) {
		c = a / b;
		return c;
	}

	public int prop(String operation, int a, int b) {
		
		String property = Env.getProperty(operation);
	int cals = 0;
		if (property == null) {
			num = 4;
		} else {
			num = Integer.parseInt(property);
		}
		switch (num) {
		case 1:
			cals = add(a, b);
			break;
		case 2:
			cals = sub(a, b);
			break;
		case 3:
			cals = mul(a, b);
			break;
		case 4:
			cals = div(a, b);
			break;

		default:
			System.out.println("Enter the valid operation:");
		}
//		ArrayList<int> al = new ArrayList<>(
//				Arrays.asList(add(a, b), sub(a, b), mul(a, b), div(a, b), "invalid"));
		return cals;
	}

}
