package com.ak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= {"com.ak"})
public class AkprojectApplication {
	public static void main(String[] args) {
		SpringApplication.run(AkprojectApplication.class, args);
	}

}
