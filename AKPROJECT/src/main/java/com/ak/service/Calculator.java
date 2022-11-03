package com.ak.service;

import org.springframework.stereotype.Service;

@Service
public class Calculator implements Operation
{
	long c;
public String add(long a,long b) {
	c=a+b;
	return "ADDITION = "+c;
}
public String sub(long a,long b) {
	c=a-b;
	return "SUBTRACTION = "+c;
}
public String mul(long a,long b) {
	c=a*b;
	return "MULTIPLICATION = "+c;
}
public String div(long a,long b) {
	c=a/b;
	return "DIVITION = "+c;
}

}
