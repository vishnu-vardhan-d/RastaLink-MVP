package com.rastalink.shared.domain;

/**
 * Marker interface for value objects in DDD.
 * Value objects are immutable and defined by their attributes rather than identity.
 * 
 * Implementation guidelines:
 * - Make all fields final
 * - Implement equals() and hashCode() based on all attributes
 * - Provide validation in constructor
 * - Make class immutable
 */
public interface ValueObject {
}