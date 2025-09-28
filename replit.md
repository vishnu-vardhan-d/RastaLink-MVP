# RastaLink Frontend Application

## Overview

RastaLink is a frontend web application built with modern JavaScript technologies. The project is structured as a development environment that includes a frontend application and utilities for GitHub integration. The application uses a simplified development setup with a custom launcher script to work around Replit environment limitations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: The main application is located in the `rastalink-frontend` directory, suggesting a separation of concerns between development utilities and the actual application code
- **Development Setup**: Uses a custom Node.js launcher script (`dev.js`) that changes to the frontend directory and executes the standard npm development server
- **Package Management**: Utilizes npm for dependency management and script execution

### Development Environment
- **Custom Launcher**: The `dev.js` script provides a workaround for Replit's package.json modification limitations by programmatically starting the frontend application
- **Process Management**: Implements proper error handling and process exit codes for reliable development workflow
- **Directory Structure**: Separates development utilities from the main application code for better organization

### Build and Deployment
- **Development Scripts**: Custom package configuration in `package-dev.json` to handle the non-standard setup
- **GitHub Integration**: Includes utilities for syncing code to GitHub repositories with OAuth-based authentication

## External Dependencies

### GitHub Integration
- **Octokit REST API**: Uses `@octokit/rest` for programmatic GitHub repository management
- **Authentication**: Implements OAuth token management with automatic refresh capabilities
- **Replit Connectors**: Integrates with Replit's connector system for seamless GitHub authentication
- **Repository Creation**: Automated repository creation functionality for deployment workflows

### Development Dependencies
- **Node.js**: Runtime environment for development scripts and utilities
- **npm**: Package manager for frontend dependencies and script execution
- **Replit Environment**: Leverages Replit-specific environment variables and identity tokens for authentication

### Environment Variables
- `REPLIT_CONNECTORS_HOSTNAME`: Replit connector service endpoint
- `REPL_IDENTITY`: Replit identity token for authentication
- `WEB_REPL_RENEWAL`: Alternative authentication token for web deployments