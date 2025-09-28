package com.rastalink.identity.domain;

import com.rastalink.shared.domain.AggregateRoot;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.UUID;

/**
 * User aggregate root - represents a system user with authentication capabilities.
 * This is the main entity in the Identity bounded context.
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends AggregateRoot<UserId> {
    
    private Username username;
    private Email email;
    private HashedPassword password;
    private UserRole role;
    private UserStatus status;
    private Instant createdAt;
    private Instant lastLoginAt;
    
    public User(Username username, Email email, HashedPassword password, UserRole role) {
        super(UserId.generate());
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = UserStatus.ACTIVE;
        this.createdAt = Instant.now();
        
        // Register domain event
        registerEvent(new UserRegisteredEvent(this.getId(), username, email, role));
    }
    
    public void authenticate(String rawPassword) {
        if (!password.matches(rawPassword)) {
            throw new InvalidCredentialsException("Invalid password");
        }
        
        if (status != UserStatus.ACTIVE) {
            throw new UserNotActiveException("User account is not active");
        }
        
        this.lastLoginAt = Instant.now();
        registerEvent(new UserAuthenticatedEvent(this.getId(), username));
    }
    
    public void changePassword(String currentPassword, String newPassword) {
        if (!password.matches(currentPassword)) {
            throw new InvalidCredentialsException("Current password is incorrect");
        }
        
        this.password = HashedPassword.fromRaw(newPassword);
        registerEvent(new UserPasswordChangedEvent(this.getId()));
    }
    
    public void deactivate() {
        this.status = UserStatus.INACTIVE;
        registerEvent(new UserDeactivatedEvent(this.getId(), username));
    }
    
    public void updateProfile(Username newUsername, Email newEmail) {
        Username oldUsername = this.username;
        Email oldEmail = this.email;
        
        this.username = newUsername;
        this.email = newEmail;
        
        registerEvent(new UserProfileUpdatedEvent(this.getId(), oldUsername, newUsername, oldEmail, newEmail));
    }
    
    public boolean isActive() {
        return status == UserStatus.ACTIVE;
    }
    
    public boolean hasRole(UserRole expectedRole) {
        return this.role == expectedRole;
    }
}