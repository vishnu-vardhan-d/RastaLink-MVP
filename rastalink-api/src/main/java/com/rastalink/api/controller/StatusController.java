package com.rastalink.api.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Status Controller - Maintains exact same API contract as Node.js backend
 * Endpoint: GET /api/status
 */
@RestController
@RequestMapping("/api")
@Slf4j
public class StatusController {
    
    @Value("${spring.application.name:rastalink-api}")
    private String applicationName;
    
    /**
     * API status endpoint - matches Node.js response format exactly
     * @return API status with message, version, and features
     */
    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> status() {
        log.debug("Status check requested");
        
        Map<String, Object> response = new HashMap<>();
        response.put("message", "RastaLink API is running");
        response.put("version", "1.0.0");
        response.put("application", applicationName);
        response.put("features", List.of(
            "Real-time truck tracking",
            "Load matching",
            "Fleet management", 
            "Live rate ticker",
            "Health monitoring"
        ));
        
        return ResponseEntity.ok(response);
    }
}