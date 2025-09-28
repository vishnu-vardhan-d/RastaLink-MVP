package com.rastalink.identity.domain;

import com.rastalink.shared.domain.ValueObject;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.util.regex.Pattern;

/**
 * Email value object with validation.
 */
@Getter
@EqualsAndHashCode
@ToString
public class Email implements ValueObject {
    
    private static final Pattern EMAIL_PATTERN = Pattern.compile(
        "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
    );
    
    private final String value;
    
    private Email(String value) {
        validate(value);
        this.value = value.toLowerCase().trim();
    }
    
    public static Email of(String value) {
        return new Email(value);
    }
    
    private void validate(String value) {
        if (value == null || value.trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }
        
        if (!EMAIL_PATTERN.matcher(value.trim()).matches()) {
            throw new IllegalArgumentException("Invalid email format");
        }
    }
}