package com.rastalink.identity.domain.events;

import com.rastalink.identity.domain.UserId;
import com.rastalink.identity.domain.Username;
import com.rastalink.shared.domain.DomainEvent;

/**
 * Domain event fired when a user successfully authenticates.
 */
public record UserAuthenticatedEvent(
    UserId userId,
    Username username
) implements DomainEvent {
}