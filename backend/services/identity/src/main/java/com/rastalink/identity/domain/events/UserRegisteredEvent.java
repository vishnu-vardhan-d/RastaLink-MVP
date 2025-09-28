package com.rastalink.identity.domain.events;

import com.rastalink.identity.domain.Email;
import com.rastalink.identity.domain.UserId;
import com.rastalink.identity.domain.UserRole;
import com.rastalink.identity.domain.Username;
import com.rastalink.shared.domain.DomainEvent;

/**
 * Domain event fired when a new user registers.
 */
public record UserRegisteredEvent(
    UserId userId,
    Username username,
    Email email,
    UserRole role
) implements DomainEvent {
}