package com.rastalink.api.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

/**
 * User DTO - Data Transfer Object for User responses
 * Excludes sensitive information like passwords
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String id;
    private String username;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    public static UserDto fromUser(com.rastalink.api.domain.User user) {
        return new UserDto(
            user.getId(),
            user.getUsername(),
            user.getCreatedAt(),
            user.getUpdatedAt()
        );
    }
}