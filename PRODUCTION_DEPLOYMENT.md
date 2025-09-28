# RastaLink Enterprise Platform - Production Deployment Guide

## 🏗️ Architecture Overview

**Enterprise Java EE Backend + React TypeScript Frontend**
- **Backend**: Spring Boot 3.2.1 with Maven multi-module architecture
- **Frontend**: React 18 + TypeScript with Feature-Sliced Design
- **Database**: PostgreSQL for production with Flyway migrations
- **Configuration**: Environment-specific with production hardening

---

## 🚀 Production Deployment

### **Backend Deployment (Spring Boot Application)**

#### **1. Build the Backend**
```bash
cd backend/services/identity
mvn clean package -DskipTests
```

#### **2. Run as Spring Boot Application**
```bash
# Set production environment variables
export DATABASE_URL=jdbc:postgresql://your-db-host:5432/rastalink_prod
export DB_USERNAME=rastalink
export DB_PASSWORD=your-secure-password
export PORT=8081
export MANAGEMENT_PORT=8082

# Run the Spring Boot Application
java -jar target/identity-service-1.0.0-SNAPSHOT.jar
```

#### **3. Backend Environment Variables**
- `DATABASE_URL`: PostgreSQL connection string
- `DB_USERNAME`: Database username
- `DB_PASSWORD`: Database password  
- `PORT`: Application port (default: 8081)
- `MANAGEMENT_PORT`: Actuator management port (default: 8082)
- `LOG_FILE`: Log file path (default: ./logs/identity-service.log)

---

### **Frontend Deployment (React Application)**

#### **1. Build the Frontend**
```bash
cd frontend
npm install
npm run build
```

#### **2. Deploy Static Files**
The build creates a `dist/` folder with optimized static files:
- Deploy to CDN (CloudFlare, AWS CloudFront)
- Or serve with Nginx/Apache
- Or host on Vercel/Netlify

#### **3. Frontend Environment Variables**
- `VITE_API_BASE_URL`: Backend API URL (https://api.rastalink.in/api/v1)
- `VITE_APP_NAME`: Application name (RastaLink)
- `VITE_ENV`: Environment (production)

---

## 🏢 Enterprise Features

### **Scalable Architecture**
- **Domain-Driven Design**: Rich domain models with proper boundaries
- **Hexagonal Architecture**: Clean separation of concerns  
- **Event-Driven**: Domain events for microservice communication
- **Multi-Module Maven**: Ready for additional services (Fleet, Loads, Dispatch)

### **Production Security**
- **PostgreSQL**: Enterprise database with connection pooling
- **CORS Configuration**: Restricted to production domains
- **Actuator Security**: Limited endpoints with authorization
- **Logging**: Structured logging with separate management port

### **Database Management**
- **Flyway Migrations**: Version-controlled schema changes
- **Connection Pooling**: HikariCP with optimized settings
- **Schema Validation**: Production schema validation only

---

## 📁 Project Structure

```
rastalink-platform/
├── backend/
│   ├── platform-bom/           # Enterprise dependency management
│   ├── shared-kernel/          # DDD primitives
│   └── services/
│       └── identity/           # Identity microservice
│           └── target/         # Built JAR files
├── frontend/
│   ├── dist/                   # Production build output
│   ├── src/                    # React TypeScript source
│   └── package.json            # Frontend dependencies
└── PRODUCTION_DEPLOYMENT.md    # This guide
```

---

## 🔧 Microservice Expansion

Ready to add new services:

### **Fleet Management Service**
```bash
cd backend/services
mkdir fleet
# Copy identity structure and implement fleet domain
```

### **Load Management Service**
```bash
cd backend/services  
mkdir loads
# Copy identity structure and implement loads domain
```

### **Dispatch Service**
```bash
cd backend/services
mkdir dispatch  
# Copy identity structure and implement dispatch domain
```

---

## 🌐 Production URLs

- **Frontend**: https://rastalink.in
- **API Gateway**: https://api.rastalink.in
- **Identity Service**: https://api.rastalink.in/api/v1/identity
- **Management**: https://api.rastalink.in:8082/actuator

---

## 🛡️ Security Checklist

- ✅ PostgreSQL with encrypted connections
- ✅ CORS restricted to production domains
- ✅ Actuator endpoints secured and limited
- ✅ Environment variables for secrets
- ✅ Structured logging with security audit trail
- ✅ Database migrations with version control

**Enterprise-grade RastaLink platform ready for massive scale!**