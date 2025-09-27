-- RastaLink Database Schema V1
-- Initial schema for users table

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for username lookups
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- Sample data for development (optional)
-- INSERT INTO users (id, username, password) VALUES 
-- ('550e8400-e29b-41d4-a716-446655440000', 'admin', '$2a$10$...');  -- Password: admin123