package com.rastalink.identity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Identity Service - Handles user authentication and authorization
 * 
 * Features:
 * - User registration and authentication
 * - JWT token management
 * - Role-based access control
 * - User profile management
 */
@SpringBootApplication(scanBasePackages = {
    "com.rastalink.identity",
    "com.rastalink.shared"
})
@EnableJpaRepositories
public class IdentityServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(IdentityServiceApplication.class, args);
    }
}