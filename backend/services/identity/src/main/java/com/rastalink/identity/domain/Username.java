package com.rastalink.identity.domain;

import com.rastalink.shared.domain.ValueObject;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

/**
 * Username value object with validation rules.
 */
@Getter
@EqualsAndHashCode
@ToString
public class Username implements ValueObject {
    
    private static final int MIN_LENGTH = 3;
    private static final int MAX_LENGTH = 50;
    private static final String VALID_PATTERN = "^[a-zA-Z0-9_-]+$";
    
    private final String value;
    
    private Username(String value) {
        validate(value);
        this.value = value;
    }
    
    public static Username of(String value) {
        return new Username(value);
    }
    
    private void validate(String value) {
        if (value == null || value.trim().isEmpty()) {
            throw new IllegalArgumentException("Username cannot be null or empty");
        }
        
        String trimmed = value.trim();
        
        if (trimmed.length() < MIN_LENGTH) {
            throw new IllegalArgumentException("Username must be at least " + MIN_LENGTH + " characters long");
        }
        
        if (trimmed.length() > MAX_LENGTH) {
            throw new IllegalArgumentException("Username cannot exceed " + MAX_LENGTH + " characters");
        }
        
        if (!trimmed.matches(VALID_PATTERN)) {
            throw new IllegalArgumentException("Username can only contain letters, numbers, underscores, and hyphens");
        }
    }
}