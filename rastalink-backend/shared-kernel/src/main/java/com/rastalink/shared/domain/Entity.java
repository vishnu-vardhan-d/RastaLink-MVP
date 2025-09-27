package com.rastalink.shared.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * Base entity with identity
 */
@Getter
@RequiredArgsConstructor
@EqualsAndHashCode(of = "id")
public abstract class Entity<ID> {
    protected final ID id;
}