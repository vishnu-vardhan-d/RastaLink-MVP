package com.rastalink.shared.domain;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

/**
 * Base aggregate root following DDD patterns
 * Manages domain events and ensures aggregate consistency
 */
@Slf4j
@Getter
public abstract class AggregateRoot<ID> extends Entity<ID> {
    
    private final List<DomainEvent> domainEvents = new ArrayList<>();
    
    protected AggregateRoot(ID id) {
        super(id);
    }
    
    protected void registerEvent(DomainEvent event) {
        this.domainEvents.add(event);
        log.debug("Domain event registered: {}", event.getClass().getSimpleName());
    }
    
    public void clearEvents() {
        this.domainEvents.clear();
    }
    
    public List<DomainEvent> getUncommittedEvents() {
        return new ArrayList<>(domainEvents);
    }
}