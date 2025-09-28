package com.rastalink.shared.domain;

import java.time.Instant;
import java.util.UUID;

/**
 * Base interface for all domain events.
 * Domain events represent important business occurrences.
 */
public interface DomainEvent {
    
    /**
     * Unique identifier for this event.
     */
    default String getEventId() {
        return UUID.randomUUID().toString();
    }
    
    /**
     * When this event occurred.
     */
    default Instant getOccurredOn() {
        return Instant.now();
    }
    
    /**
     * The name of the event for serialization/routing.
     */
    default String getEventType() {
        return this.getClass().getSimpleName();
    }
}