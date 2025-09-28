package com.rastalink.identity.domain.events;

import com.rastalink.identity.domain.Email;
import com.rastalink.identity.domain.UserId;
import com.rastalink.identity.domain.Username;
import com.rastalink.shared.domain.DomainEvent;

/**
 * Domain event fired when a user's profile is updated.
 */
public record UserProfileUpdatedEvent(
    UserId userId,
    Username oldUsername,
    Username newUsername,
    Email oldEmail,
    Email newEmail
) implements DomainEvent {
}