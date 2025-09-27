package com.rastalink.shared.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import java.time.Instant;
import java.util.UUID;

/**
 * Base implementation of domain events
 */
@Getter
@EqualsAndHashCode(of = "eventId")
public abstract class DomainEventBase implements DomainEvent {
    
    private final UUID eventId;
    private final Instant occurredOn;
    
    protected DomainEventBase() {
        this.eventId = UUID.randomUUID();
        this.occurredOn = Instant.now();
    }
    
    @Override
    public String getEventType() {
        return this.getClass().getSimpleName();
    }
}