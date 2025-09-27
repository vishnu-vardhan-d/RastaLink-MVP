# RastaLink - Local Deployment Guide

## 🚀 Complete Local Setup Instructions

After cloning the repository, follow these steps to get both frontend and backend running locally.

## Prerequisites

### Required Software
- **Node.js 18+** (Frontend)
- **Java 21** (Backend) 
- **Maven 3.6+** (Backend)
- **Git** (Version control)

### Check Prerequisites
```bash
node --version    # Should be 18+
npm --version     # Should be 8+
java --version    # Should be 21
mvn --version     # Should be 3.6+
```

## 📁 Project Structure
```
rastalink-platform/
├── rastalink-frontend/     # React + TypeScript frontend
├── rastalink-backend/      # Spring Boot backend
└── LOCAL-DEPLOYMENT.md     # This file
```

## 🖥️ Frontend Setup

### 1. Install Frontend Dependencies
```bash
cd rastalink-frontend
npm install
```

### 2. Start Frontend Development Server
```bash
# Option 1: Frontend only (recommended)
npm run dev
# Frontend will run on http://localhost:5173

# Option 2: Frontend + API server (if you need mock APIs)
# Terminal 1:
npm run dev:api     # API server on http://localhost:5000

# Terminal 2: 
npm run dev         # Frontend on http://localhost:5173
```

### 3. Verify Frontend
- Open http://localhost:5173
- You should see the RastaLink dashboard with industrial blueprint design
- Check browser console for any errors

## ⚙️ Backend Setup

### 1. Install Backend Dependencies
```bash
cd rastalink-backend
mvn clean install
```

### 2. Start Backend Application
```bash
# Option 1: Run from identity module directory (recommended)
cd modules/identity
mvn spring-boot:run

# Option 2: Run from backend root using Maven module parameter
mvn -pl modules/identity spring-boot:run

# Option 3: Using Docker (if you prefer containers)
docker-compose up
```

### 3. Verify Backend
- Backend API will run on http://localhost:8080
- Check health endpoint: http://localhost:8080/actuator/health
- Note: Swagger UI availability depends on module configuration

## 🔗 Running Both Frontend & Backend

### Recommended Development Setup

#### Option A: Frontend with Real Backend
1. **Terminal 1** (Backend):
   ```bash
   cd rastalink-backend/modules/identity
   mvn spring-boot:run
   ```

2. **Terminal 2** (Frontend):
   ```bash
   cd rastalink-frontend
   # Set API URL to real backend
   echo "VITE_API_URL=http://localhost:8080" > .env.local
   npm run dev
   ```

#### Option B: Frontend with Mock API (No Backend Required)
1. **Terminal 1** (Mock API):
   ```bash
   cd rastalink-frontend  
   npm run dev:api
   ```

2. **Terminal 2** (Frontend):
   ```bash
   cd rastalink-frontend
   # Set API URL to mock server
   echo "VITE_API_URL=http://localhost:5000" > .env.local
   npm run dev
   ```

3. **Access Points**:
   - Frontend: http://localhost:5173
   - Real Backend API: http://localhost:8080 (Option A)
   - Mock API: http://localhost:5000 (Option B)
   - Health Check: http://localhost:8080/actuator/health (Option A)

## 🛠️ Development Scripts

### Frontend Scripts
```bash
npm run dev              # Start Vite dev server
npm run dev:api          # Start Express API server  
npm run build           # Build for production
npm run preview         # Preview production build
npm run check           # TypeScript type checking
```

### Backend Scripts
```bash
# From rastalink-backend/ root:
mvn clean install              # Install all dependencies
mvn -pl modules/identity spring-boot:run  # Start Spring Boot app

# From rastalink-backend/modules/identity/:
mvn spring-boot:run            # Start Spring Boot app
mvn test                       # Run tests
mvn clean package             # Build JAR file
```

## 🐛 Troubleshooting

### Frontend Issues

**Port 5173 already in use:**
```bash
npm run dev -- --port 5174
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
npm run check
```

### Backend Issues

**Port 8080 already in use:**
```bash
# Edit modules/identity/src/main/resources/application.yml
server:
  port: 8081
```

**Maven dependencies failing:**
```bash
mvn clean install -U
```

**Java version mismatch:**
```bash
# Ensure Java 21 is active
java --version
export JAVA_HOME=/path/to/java21
```

## 🌐 Production Deployment

### Frontend Production Build
```bash
cd rastalink-frontend
npm run build
# Files will be in dist/ directory
```

### Backend Production Build  
```bash
cd rastalink-backend
mvn clean package
# JAR file will be in target/ directory
```

## 📊 Available Endpoints

### Frontend Routes
- `/` - Dashboard
- `/trucks` - Truck Management
- `/loads` - Load Management  
- `/analytics` - Analytics Dashboard

### Backend API Endpoints
- `GET /actuator/health` - Spring Boot health check
- Note: Additional endpoints depend on the specific module configuration

## 🔐 Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:8080
VITE_APP_NAME=RastaLink
```

### Backend (application-local.yml)
```yaml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:h2:mem:testdb
  jpa:
    hibernate:
      ddl-auto: create-drop
```

## ✅ Success Indicators

### Frontend Running Successfully:
- ✅ Vite dev server starts on port 5173
- ✅ Browser shows RastaLink dashboard  
- ✅ No console errors
- ✅ Blueprint design theme loads correctly

### Backend Running Successfully:
- ✅ Spring Boot starts on port 8080
- ✅ Health endpoint returns {"status":"UP"}
- ✅ No errors in application logs
- ✅ Database connections successful

## 🎯 Quick Start Commands

**For a complete setup from scratch:**
```bash
# Clone repository
git clone <your-repo-url>
cd <repo-directory>

# Setup and start backend
cd rastalink-backend
mvn clean install
cd modules/identity
mvn spring-boot:run

# In another terminal - setup frontend (from repo root)
cd rastalink-frontend
npm install
echo "VITE_API_URL=http://localhost:8080" > .env.local
npm run dev
```

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed correctly
3. Check that ports 5173 and 8080 are available
4. Review application logs for specific error messages

---

🚛 **RastaLink - Connecting India's Trucking Network**