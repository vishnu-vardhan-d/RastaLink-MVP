package com.rastalink.identity.domain;

/**
 * User roles in the system.
 * Represents the authorization level and permissions of a user.
 */
public enum UserRole {
    
    /**
     * System administrator with full access.
     */
    ADMIN("Administrator"),
    
    /**
     * Fleet manager - manages trucking operations.
     */
    FLEET_MANAGER("Fleet Manager"),
    
    /**
     * Dispatcher - assigns loads and manages routes.
     */
    DISPATCHER("Dispatcher"),
    
    /**
     * Driver - operates trucks and delivers loads.
     */
    DRIVER("Driver"),
    
    /**
     * Customer - books loads and tracks shipments.
     */
    CUSTOMER("Customer");
    
    private final String displayName;
    
    UserRole(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
    
    public boolean isAdministrative() {
        return this == ADMIN || this == FLEET_MANAGER;
    }
    
    public boolean isOperational() {
        return this == DISPATCHER || this == DRIVER;
    }
    
    public boolean isExternal() {
        return this == CUSTOMER;
    }
}