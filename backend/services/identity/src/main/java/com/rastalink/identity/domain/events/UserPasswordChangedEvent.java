package com.rastalink.identity.domain.events;

import com.rastalink.identity.domain.UserId;
import com.rastalink.shared.domain.DomainEvent;

/**
 * Domain event fired when a user changes their password.
 */
public record UserPasswordChangedEvent(
    UserId userId
) implements DomainEvent {
}