# RastaLink - AI-Powered Lorry Transport Solutions

## Overview

RastaLink is a comprehensive trucking network platform designed to connect small-scale lorry business owners across India. The application provides AI-powered real-time truck tracking, load matching, and fleet management solutions spanning from Kashmir to Kanyakumari. It features an industrial blueprint design aesthetic inspired by technical CAD software and maritime tracking platforms, offering both web and mobile interfaces for drivers, fleet owners, and logistics coordinators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom industrial blueprint theme featuring dark navy backgrounds, blueprint cyan accents, and technical grid overlays
- **Component System**: Radix UI primitives with shadcn/ui for accessible, customizable components
- **State Management**: TanStack React Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Design System
- **Theme**: Industrial blueprint aesthetic with dark navy backgrounds (210 25% 8%), blueprint cyan accents (185 85% 65%), and technical grid patterns
- **Typography**: JetBrains Mono for technical elements, Inter for readable content
- **Layout**: Grid-based technical layout with 4, 6, 8, 12, 16, 24 spacing units
- **Component Categories**: Technical dashboard widgets, real-time tracking maps, CAD-like interfaces, and blueprint-style navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for full-stack type safety
- **API Pattern**: RESTful API with /api prefix for all endpoints
- **Session Management**: Express sessions with PostgreSQL session store via connect-pg-simple
- **Error Handling**: Centralized error handling middleware with status code management

### Data Storage Solutions
- **Database**: PostgreSQL as primary database
- **ORM**: Drizzle ORM for type-safe database queries and schema management
- **Schema Definition**: Shared schema definitions between client and server in TypeScript
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Connection**: Neon serverless PostgreSQL for cloud database hosting

### Authentication and Authorization
- **Session-based Authentication**: Server-side sessions stored in PostgreSQL
- **User Schema**: Simple username/password authentication with UUID primary keys
- **Password Security**: Planned implementation of password hashing (bcrypt or similar)
- **Session Configuration**: Configurable session timeout and security settings

### Real-time Features
- **Live Tracking**: Mock data structure prepared for GPS coordinates and truck status updates
- **Status Management**: Comprehensive truck status system (loaded, empty, halted, break, breakdown, repair)
- **Notifications**: Live notification system for breakdowns, deliveries, weather alerts, and load availability
- **Rate Ticker**: Real-time freight rate updates across major Indian routes

### Component Architecture
- **Dashboard Widgets**: Modular analytics dashboard, driver portal, load matching grid
- **Mapping Interface**: Technical blueprint-style maps with live position tracking
- **Order Management**: Live orders feed, confirmation system, and quick dispatch functionality
- **Monitoring**: Weather and fuel price widgets, notification center, rate tracking

## External Dependencies

### UI and Design
- **Radix UI**: Comprehensive primitive component library for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom industrial theme configuration
- **Lucide React**: Icon library for technical and industrial iconography
- **Class Variance Authority**: Type-safe variant creation for component styling

### Development Tools
- **TypeScript**: Static typing across full application stack
- **Vite**: Fast build tool with HMR and development server
- **PostCSS**: CSS processing with Tailwind CSS integration
- **ESBuild**: Fast JavaScript/TypeScript bundler for production builds

### Database and Storage
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Drizzle ORM**: Modern TypeScript ORM with compile-time query validation
- **Drizzle Kit**: Database migration and schema management tools

### Server Framework
- **Express.js**: Web application framework for Node.js
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **Date-fns**: Date manipulation and formatting utilities

### State Management
- **TanStack React Query**: Server state management with caching, synchronization, and background updates
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

### Planned Integrations
- **GPS Tracking APIs**: Real-time vehicle location services
- **Weather APIs**: Weather condition monitoring for route planning
- **Fuel Price APIs**: Dynamic fuel cost tracking across regions
- **Payment Gateways**: Transaction processing for freight payments
- **SMS/WhatsApp APIs**: Communication with drivers and customers