package com.rastalink.api.service;

import com.rastalink.api.domain.User;
import com.rastalink.api.dto.CreateUserDto;
import com.rastalink.api.dto.UserDto;
import com.rastalink.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * User Service - Business logic for User operations
 * Mirrors the functionality from Node.js MemStorage interface
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    /**
     * Get all users
     * @return List of UserDto
     */
    public List<UserDto> getAllUsers() {
        log.debug("Fetching all users");
        return userRepository.findAll()
                .stream()
                .map(UserDto::fromUser)
                .collect(Collectors.toList());
    }
    
    /**
     * Get user by ID
     * @param id the user ID
     * @return Optional containing UserDto if found
     */
    public Optional<UserDto> getUserById(String id) {
        log.debug("Fetching user by ID: {}", id);
        return userRepository.findById(id)
                .map(UserDto::fromUser);
    }
    
    /**
     * Get user by username
     * @param username the username
     * @return Optional containing UserDto if found
     */
    public Optional<UserDto> getUserByUsername(String username) {
        log.debug("Fetching user by username: {}", username);
        return userRepository.findByUsername(username)
                .map(UserDto::fromUser);
    }
    
    /**
     * Create new user
     * @param createUserDto the user creation data
     * @return created UserDto
     * @throws IllegalArgumentException if username already exists
     */
    public UserDto createUser(CreateUserDto createUserDto) {
        log.debug("Creating new user with username: {}", createUserDto.getUsername());
        
        // Check if username already exists
        if (userRepository.existsByUsername(createUserDto.getUsername())) {
            throw new IllegalArgumentException("Username already exists: " + createUserDto.getUsername());
        }
        
        // Create new user with hashed password
        User user = new User();
        user.setUsername(createUserDto.getUsername());
        user.setPassword(passwordEncoder.encode(createUserDto.getPassword()));
        
        User savedUser = userRepository.save(user);
        log.info("User created successfully with ID: {}", savedUser.getId());
        
        return UserDto.fromUser(savedUser);
    }
    
    /**
     * Delete user by ID
     * @param id the user ID
     * @return true if deleted, false if not found
     */
    public boolean deleteUser(String id) {
        log.debug("Deleting user with ID: {}", id);
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            log.info("User deleted successfully with ID: {}", id);
            return true;
        }
        return false;
    }
}