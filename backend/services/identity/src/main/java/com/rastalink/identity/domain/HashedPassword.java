package com.rastalink.identity.domain;

import com.rastalink.shared.domain.ValueObject;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Hashed password value object.
 * Encapsulates password hashing and verification logic.
 */
@Getter
@EqualsAndHashCode
public class HashedPassword implements ValueObject {
    
    private static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();
    private static final int MIN_RAW_LENGTH = 6;
    private static final int MAX_RAW_LENGTH = 100;
    
    private final String hashedValue;
    
    private HashedPassword(String hashedValue) {
        if (hashedValue == null || hashedValue.trim().isEmpty()) {
            throw new IllegalArgumentException("Hashed password cannot be null or empty");
        }
        this.hashedValue = hashedValue;
    }
    
    public static HashedPassword fromRaw(String rawPassword) {
        validateRawPassword(rawPassword);
        String hashed = PASSWORD_ENCODER.encode(rawPassword);
        return new HashedPassword(hashed);
    }
    
    public static HashedPassword fromHashed(String hashedPassword) {
        return new HashedPassword(hashedPassword);
    }
    
    public boolean matches(String rawPassword) {
        if (rawPassword == null) {
            return false;
        }
        return PASSWORD_ENCODER.matches(rawPassword, hashedValue);
    }
    
    private static void validateRawPassword(String rawPassword) {
        if (rawPassword == null || rawPassword.isEmpty()) {
            throw new IllegalArgumentException("Password cannot be null or empty");
        }
        
        if (rawPassword.length() < MIN_RAW_LENGTH) {
            throw new IllegalArgumentException("Password must be at least " + MIN_RAW_LENGTH + " characters long");
        }
        
        if (rawPassword.length() > MAX_RAW_LENGTH) {
            throw new IllegalArgumentException("Password cannot exceed " + MAX_RAW_LENGTH + " characters");
        }
    }
    
    @Override
    public String toString() {
        return "[PROTECTED]";
    }
}