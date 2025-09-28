package com.rastalink.shared.application;

import java.util.Objects;
import java.util.Optional;
import java.util.function.Function;

/**
 * Result wrapper for use case operations.
 * Represents either success with data or failure with error.
 */
public sealed interface Result<T, E> permits Result.Success, Result.Failure {
    
    /**
     * Check if the result is successful.
     */
    boolean isSuccess();
    
    /**
     * Check if the result is a failure.
     */
    default boolean isFailure() {
        return !isSuccess();
    }
    
    /**
     * Get the success value if present.
     */
    Optional<T> getValue();
    
    /**
     * Get the error if present.
     */
    Optional<E> getError();
    
    /**
     * Transform the success value if present.
     */
    <U> Result<U, E> map(Function<T, U> mapper);
    
    /**
     * Create a successful result.
     */
    static <T, E> Result<T, E> success(T value) {
        return new Success<>(value);
    }
    
    /**
     * Create a failed result.
     */
    static <T, E> Result<T, E> failure(E error) {
        return new Failure<>(error);
    }
    
    /**
     * Successful result implementation.
     */
    record Success<T, E>(T value) implements Result<T, E> {
        
        public Success {
            Objects.requireNonNull(value, "Success value cannot be null");
        }
        
        @Override
        public boolean isSuccess() {
            return true;
        }
        
        @Override
        public Optional<T> getValue() {
            return Optional.of(value);
        }
        
        @Override
        public Optional<E> getError() {
            return Optional.empty();
        }
        
        @Override
        public <U> Result<U, E> map(Function<T, U> mapper) {
            return new Success<>(mapper.apply(value));
        }
    }
    
    /**
     * Failed result implementation.
     */
    record Failure<T, E>(E error) implements Result<T, E> {
        
        public Failure {
            Objects.requireNonNull(error, "Failure error cannot be null");
        }
        
        @Override
        public boolean isSuccess() {
            return false;
        }
        
        @Override
        public Optional<T> getValue() {
            return Optional.empty();
        }
        
        @Override
        public Optional<E> getError() {
            return Optional.of(error);
        }
        
        @Override
        @SuppressWarnings("unchecked")
        public <U> Result<U, E> map(Function<T, U> mapper) {
            return (Result<U, E>) this;
        }
    }
}