#!/bin/bash
# ========================================
# LOCAL MACHINE DEVELOPMENT STARTUP
# ========================================
# Use this script after git clone to start local development
# Frontend: http://localhost:3000
# Backend: http://localhost:8080/api

echo "🚀 Starting RastaLink Local Development..."
echo ""
echo "This will start:"
echo "  📱 Frontend (React): http://localhost:3000"
echo "  🔧 Backend (Spring Boot): http://localhost:8080/api"
echo "  🗄️  H2 Console: http://localhost:8080/api/h2-console"
echo ""

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "❌ Java is not installed. Please install Java 21+ and Maven 3.8+"
    echo "   - Java: https://adoptium.net/"
    echo "   - Maven: https://maven.apache.org/install.html"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    echo "   - Node.js: https://nodejs.org/"
    exit 1
fi

# Check if Maven is installed
if ! command -v mvn &> /dev/null; then
    echo "❌ Maven is not installed. Please install Maven 3.8+"
    echo "   - Maven: https://maven.apache.org/install.html"
    exit 1
fi

echo "✅ Prerequisites check passed!"
echo ""

# Install frontend dependencies if needed
if [ ! -d "rastalink-frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd rastalink-frontend && npm install && cd ..
fi

echo "🔄 Starting both frontend and backend..."

# Start backend in background
echo "🏃‍♂️ Starting backend (Spring Boot)..."
cd rastalink-backend
nohup ./run-local.sh > ../backend.log 2>&1 &
BACKEND_PID=$!
echo $BACKEND_PID > ../backend.pid
cd ..

# Wait for backend to be healthy (with timeout)
echo "⏳ Waiting for backend to be healthy..."
TIMEOUT=180  # 3 minutes timeout
COUNTER=0
while [ $COUNTER -lt $TIMEOUT ]; do
    if curl -s http://127.0.0.1:8080/api/actuator/health | grep -q "UP"; then
        echo "✅ Backend is healthy!"
        break
    fi
    
    if [ $COUNTER -eq 0 ]; then
        echo "   This may take a few minutes on first run (Maven dependencies)..."
    fi
    
    if [ $((COUNTER % 30)) -eq 0 ] && [ $COUNTER -gt 0 ]; then
        echo "   Still waiting... ($COUNTER seconds elapsed)"
    fi
    
    sleep 2
    COUNTER=$((COUNTER + 2))
done

if [ $COUNTER -ge $TIMEOUT ]; then
    echo "❌ Backend failed to start within $TIMEOUT seconds"
    echo "Check backend.log for errors:"
    tail -20 backend.log
    exit 1
fi

# Start frontend
echo "🏃‍♀️ Starting frontend (React)..."
cd rastalink-frontend
echo "🌐 Frontend will be available at: http://localhost:3000"
echo "🔧 Backend API available at: http://localhost:8080/api"
echo "🗄️  H2 Database Console: http://localhost:8080/api/h2-console"
echo ""
echo "To stop: Press Ctrl+C, then run: ./stop-local-dev.sh"
echo ""

# This will run in foreground so user can see logs and use Ctrl+C
npm run local