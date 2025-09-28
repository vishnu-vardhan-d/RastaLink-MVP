package com.rastalink.identity.domain;

import com.rastalink.shared.domain.ValueObject;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.util.UUID;

/**
 * User identifier value object.
 * Ensures type safety and prevents mixing up different ID types.
 */
@Getter
@EqualsAndHashCode
@ToString
public class UserId implements ValueObject {
    
    private final String value;
    
    private UserId(String value) {
        if (value == null || value.trim().isEmpty()) {
            throw new IllegalArgumentException("User ID cannot be null or empty");
        }
        this.value = value;
    }
    
    public static UserId of(String value) {
        return new UserId(value);
    }
    
    public static UserId generate() {
        return new UserId(UUID.randomUUID().toString());
    }
    
    public static UserId fromString(String value) {
        return new UserId(value);
    }
}