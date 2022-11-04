package com.ak.service;

import java.io.IOException;

import org.springframework.http.ResponseEntity;

public interface Operation {
	String add(long a, long b);

	String sub(long a, long b);

	String mul(long a, long b);

	String div(long a, long b);

	String prop(String operation, long a, long b); 



}
