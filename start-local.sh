#!/bin/bash
# =======================================================
# RastaLink Local Development Startup Script
# =======================================================
# This script starts both backend and frontend for local development

set -e

echo "🚀 Starting RastaLink Platform (Local Development)"
echo "=============================================="

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "❌ Java is not installed. Please install Java 21+"
    exit 1
fi

# Check if Maven is installed
if ! command -v mvn &> /dev/null; then
    echo "❌ Maven is not installed. Please install Maven 3.8+"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+"
    exit 1
fi

echo "✅ All prerequisites met"
echo ""

# Start Identity Service
echo "🔧 Starting Identity Service..."
cd backend/services/identity
nohup mvn spring-boot:run -Dspring-boot.run.profiles=local > ../../../identity.log 2>&1 &
IDENTITY_PID=$!
echo $IDENTITY_PID > ../../../identity.pid
cd ../../..

# Wait for Identity Service to be healthy
echo "⏳ Waiting for Identity Service to start..."
for i in {1..60}; do
    if curl -s http://127.0.0.1:8081/api/v1/identity/actuator/health > /dev/null 2>&1; then
        echo "✅ Identity Service is healthy!"
        break
    fi
    if [ $i -eq 60 ]; then
        echo "❌ Identity Service failed to start within 60 seconds"
        echo "Check identity.log for errors:"
        tail -20 identity.log
        exit 1
    fi
    sleep 1
done

# Start Frontend
echo "🌐 Starting Frontend..."
cd frontend
echo "Frontend will be available at: http://localhost:3000"
echo "Backend API available at: http://127.0.0.1:8081/api/v1"
echo ""
echo "To stop: Press Ctrl+C, then run: ./stop-local.sh"
echo ""

# Run frontend in foreground so user can see logs and use Ctrl+C
npm run dev