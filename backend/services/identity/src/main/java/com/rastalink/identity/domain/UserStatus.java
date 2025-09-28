package com.rastalink.identity.domain;

/**
 * User account status.
 */
public enum UserStatus {
    
    /**
     * User account is active and can authenticate.
     */
    ACTIVE,
    
    /**
     * User account is temporarily inactive.
     */
    INACTIVE,
    
    /**
     * User account is suspended due to violations.
     */
    SUSPENDED,
    
    /**
     * User account is pending email verification.
     */
    PENDING_VERIFICATION,
    
    /**
     * User account is locked due to too many failed login attempts.
     */
    LOCKED
}