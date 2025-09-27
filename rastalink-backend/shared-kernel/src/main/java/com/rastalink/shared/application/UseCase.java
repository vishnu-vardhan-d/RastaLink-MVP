package com.rastalink.shared.application;

/**
 * Marker interface for use cases (application services)
 * Represents a single business operation
 */
public interface UseCase<INPUT, OUTPUT> {
    OUTPUT execute(INPUT input);
}