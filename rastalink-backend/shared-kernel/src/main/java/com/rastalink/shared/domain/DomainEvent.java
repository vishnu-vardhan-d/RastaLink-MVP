package com.rastalink.shared.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.Instant;
import java.util.UUID;

/**
 * Base domain event
 */
public interface DomainEvent {
    
    UUID getEventId();
    
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    Instant getOccurredOn();
    
    String getEventType();
}