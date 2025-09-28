package com.rastalink.identity.domain.exceptions;

/**
 * Exception thrown when attempting to authenticate an inactive user.
 */
public class UserNotActiveException extends RuntimeException {
    
    public UserNotActiveException(String message) {
        super(message);
    }
}