package com.rastalink.api.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.management.ManagementFactory;
import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

/**
 * Health Controller - Maintains exact same API contract as Node.js backend
 * Endpoint: GET /api/health
 */
@RestController
@RequestMapping("/api")
@Slf4j
public class HealthController {
    
    @Value("${spring.profiles.active:dev}")
    private String environment;
    
    /**
     * Health check endpoint - matches Node.js response format exactly
     * @return health status with timestamp, uptime, and environment
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        log.debug("Health check requested");
        
        Map<String, Object> response = new HashMap<>();
        response.put("status", "ok");
        response.put("timestamp", Instant.now().toString());
        response.put("uptime", ManagementFactory.getRuntimeMXBean().getUptime() / 1000); // in seconds
        response.put("environment", environment);
        
        return ResponseEntity.ok(response);
    }
}