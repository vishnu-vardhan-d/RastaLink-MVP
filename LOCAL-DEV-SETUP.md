# RastaLink - Local Development Setup

## Quick Start (After Git Clone)

### Prerequisites
- **Java 21+** - [Download from Adoptium](https://adoptium.net/)
- **Maven 3.8+** - [Download from Apache Maven](https://maven.apache.org/install.html)
- **Node.js 18+** - [Download from Node.js](https://nodejs.org/)

### Start Local Development

**Linux/Mac:**
```bash
# Clone the repository
git clone <repository-url>
cd rastalink

# Start both frontend and backend
./start-local-dev.sh
```

**Windows:**
```cmd
# Clone the repository
git clone <repository-url>
cd rastalink

# Start both frontend and backend
start-local-dev.bat
```

This will start:
- **Frontend (React)**: http://localhost:3000
- **Backend (Spring Boot)**: http://localhost:8080/api
- **H2 Database Console**: http://localhost:8080/api/h2-console

### Stop Local Development

**Linux/Mac:**
```bash
./stop-local-dev.sh
```

**Windows:**
```cmd
stop-local-dev.bat
```

## Manual Setup (Alternative)

### Backend (Spring Boot + H2)
```bash
cd rastalink-backend
./run-local.sh
```

### Frontend (React + Vite)
```bash
cd rastalink-frontend
npm install
./run-local.sh
```

## Local Development Configuration

### Environment Separation
- **Local Development**: H2 in-memory database, debug logging, port 3000/8080
- **Production**: PostgreSQL database, minimal logging, configurable ports

### Key Endpoints
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080/api`
- Health Check: `http://localhost:8080/api/actuator/health`
- H2 Console: `http://localhost:8080/api/h2-console`
  - JDBC URL: `jdbc:h2:mem:rastalink_local`
  - Username: `sa`
  - Password: (empty)

### Development Features
- Hot reload enabled for frontend
- DevTools enabled for backend
- Full debug logging
- H2 web console for database inspection
- CORS configured for localhost:3000

## Architecture
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Spring Boot 3.2.1 + Maven + Hibernate + JPA
- **Database**: H2 (local) / PostgreSQL (production)
- **Build Tool**: Maven (backend) + Vite (frontend)

## Production Deployment
See production configuration files:
- `rastalink-frontend/.env.production`
- `rastalink-backend/modules/identity/src/main/resources/application-production.yml`
- `rastalink-frontend/run-production.sh`
- `rastalink-backend/run-production.sh`