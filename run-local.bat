@echo off
REM RastaLink Local Development Setup for Windows
REM This script starts both Java backend and React frontend

echo 🚛 Starting RastaLink Local Development Environment...

REM Check if Java is installed
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Java 21 is required but not installed
    echo Please install Java 21 and try again
    pause
    exit /b 1
)

REM Check if Maven is installed
mvn -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Maven is required but not installed
    echo Please install Maven and try again
    pause
    exit /b 1
)

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is required but not installed
    echo Please install Node.js 18+ and try again
    pause
    exit /b 1
)

echo 📦 Installing frontend dependencies...
call npm install

echo 🏗️ Starting Java Spring Boot Backend (Port 8080)...
cd rastalink-api
start /b mvn spring-boot:run
cd ..

echo ⚛️ Starting React Frontend (Port 5000)...
REM Wait a moment for backend to start
timeout /t 5 /nobreak >nul
start /b npm run dev

echo ✅ RastaLink is starting up!
echo.
echo 🌐 Frontend (React): http://localhost:5000
echo 🔧 Backend (Java): http://localhost:8080
echo 💊 Health Check: http://localhost:8080/api/health
echo 📊 API Status: http://localhost:8080/api/status
echo.
echo Press any key to stop both servers...
pause >nul

REM Cleanup (kill Java and Node processes)
taskkill /f /im java.exe >nul 2>&1
taskkill /f /im node.exe >nul 2>&1
echo ✅ Servers stopped