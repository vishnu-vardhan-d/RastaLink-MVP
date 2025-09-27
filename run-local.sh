#!/bin/bash
# RastaLink Local Development Setup
# This script starts both Java backend and React frontend

echo "🚛 Starting RastaLink Local Development Environment..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo -e "${RED}❌ Java 21 is required but not installed${NC}"
    echo "Please install Java 21 and try again"
    exit 1
fi

# Check if Maven is installed
if ! command -v mvn &> /dev/null; then
    echo -e "${RED}❌ Maven is required but not installed${NC}"
    echo "Please install Maven and try again"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is required but not installed${NC}"
    echo "Please install Node.js 18+ and try again"
    exit 1
fi

echo -e "${BLUE}📦 Installing frontend dependencies...${NC}"
npm install

echo -e "${BLUE}🏗️ Starting Java Spring Boot Backend (Port 8080)...${NC}"
cd rastalink-api
mvn spring-boot:run &
BACKEND_PID=$!
cd ..

echo -e "${BLUE}⚛️ Starting React Frontend (Port 5000)...${NC}"
# Wait a moment for backend to start
sleep 5
npm run dev &
FRONTEND_PID=$!

echo -e "${GREEN}✅ RastaLink is starting up!${NC}"
echo ""
echo -e "${GREEN}🌐 Frontend (React):${NC} http://localhost:5000"
echo -e "${GREEN}🔧 Backend (Java):${NC} http://localhost:8080"
echo -e "${GREEN}💊 Health Check:${NC} http://localhost:8080/api/health"
echo -e "${GREEN}📊 API Status:${NC} http://localhost:8080/api/status"
echo ""
echo -e "${BLUE}Press Ctrl+C to stop both servers${NC}"

# Function to cleanup on exit
cleanup() {
    echo -e "\n${BLUE}🛑 Stopping servers...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo -e "${GREEN}✅ Servers stopped${NC}"
    exit 0
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for user to stop
wait