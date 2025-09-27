package com.rastalink.identity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.rastalink.identity", "com.rastalink.shared"})
public class IdentityApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(IdentityApplication.class, args);
    }
}