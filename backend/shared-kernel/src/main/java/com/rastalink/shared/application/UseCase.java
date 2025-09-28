package com.rastalink.shared.application;

/**
 * Marker interface for application use cases.
 * Use cases orchestrate domain logic and coordinate between domain and infrastructure.
 * 
 * @param <REQUEST> The input data for the use case
 * @param <RESPONSE> The output data from the use case
 */
public interface UseCase<REQUEST, RESPONSE> {
    
    /**
     * Execute the use case with the given request.
     * 
     * @param request The input data
     * @return The result of the use case execution
     */
    RESPONSE execute(REQUEST request);
}