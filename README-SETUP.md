# 🚛 RastaLink - Complete Local Setup

## 📋 **Prerequisites**
- **Java 21** (JDK)
- **Maven 3.9+**
- **Node.js 18+**

## 🚀 **Super Easy Setup**

### **Option 1: One-Click Start (Recommended)**

**Windows:**
```bash
run-local.bat
```

**Mac/Linux:**
```bash
chmod +x run-local.sh
./run-local.sh
```

### **Option 2: Manual Setup**

**Step 1: Install Dependencies**
```bash
npm install
```

**Step 2: Start Java Backend**
```bash
cd rastalink-api
mvn spring-boot:run
# Runs on http://localhost:8080
```

**Step 3: Start React Frontend** (New Terminal)
```bash
npm run dev
# Runs on http://localhost:5000
```

## 🌐 **Access Your Application**

- **Website:** http://localhost:5000
- **Backend API:** http://localhost:8080
- **Health Check:** http://localhost:8080/api/health
- **API Status:** http://localhost:8080/api/status

## 🧪 **Test the Setup**

**Test API:**
```bash
curl http://localhost:8080/api/health
```

**Create User:**
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"password123"}'
```

## 💾 **Database**
- **HSQL In-Memory Database** (Perfect for testing)
- Auto-creates tables on startup
- No external database needed

## 📁 **Project Structure**
```
RastaLink/
├── client/                 # React Frontend
├── rastalink-api/         # Java Spring Boot Backend
├── run-local.sh           # Linux/Mac startup script
├── run-local.bat          # Windows startup script
└── package.json           # Node.js dependencies
```

## ⚙️ **What You Get**
✅ React Frontend with Trucking UI  
✅ Java Spring Boot Backend  
✅ HSQL Testing Database  
✅ REST API Endpoints  
✅ CORS Configured  
✅ Auto-reload Development  

Your **RastaLink Trucking Platform** is ready to run! 🚛💼