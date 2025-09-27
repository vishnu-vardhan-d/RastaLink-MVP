package com.rastalink.shared.infrastructure;

import com.rastalink.shared.domain.DomainEvent;

/**
 * Port for publishing domain events
 */
public interface DomainEventPublisher {
    void publish(DomainEvent event);
    void publishAll(Iterable<DomainEvent> events);
}