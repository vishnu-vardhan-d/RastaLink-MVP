# RastaLink Backend API

Java Spring Boot backend for the RastaLink trucking platform.

## Tech Stack
- **Java 21**
- **Spring Boot 3.2.1**
- **Maven 3.9+**
- **Hibernate JPA**
- **HSQL Database** (Development)
- **PostgreSQL** (Production)

## Quick Start

### Prerequisites
- Java 21+
- Maven 3.9+

### Run Locally
```bash
# Development (HSQL Database)
mvn spring-boot:run

# Production (PostgreSQL)
mvn spring-boot:run -Dspring.profiles.active=prod
```

### Build JAR
```bash
mvn clean package -DskipTests
java -jar target/rastalink-api-1.0.0.jar
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/status` | GET | System status |
| `/api/users` | GET | List users |
| `/api/users` | POST | Create user |

## Database Configuration

### Development (HSQL)
- **URL**: `jdbc:hsqldb:mem:rastalink`
- **Auto-creates** tables on startup
- **In-memory** database

### Production (PostgreSQL)
Set environment variables:
```bash
export DATABASE_URL=jdbc:postgresql://localhost:5432/rastalink
export DB_USERNAME=your_username
export DB_PASSWORD=your_password
```

## CORS Configuration

Configured for frontend origins:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (React dev server)
- Production domains

## Docker

```bash
# Build image
docker build -t rastalink-backend .

# Run container
docker run -p 8080:8080 rastalink-backend
```