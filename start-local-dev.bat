@echo off
REM ========================================
REM WINDOWS LOCAL MACHINE DEVELOPMENT
REM ========================================
REM Use this script on Windows after git clone

echo Starting RastaLink Local Development (Windows)...
echo.
echo This will start:
echo   Frontend (React): http://localhost:3000
echo   Backend (Spring Boot): http://localhost:8080/api
echo   H2 Console: http://localhost:8080/api/h2-console
echo.

REM Check if Java is installed
java -version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Java is not installed or not in PATH
    echo Please install Java 21+ from https://adoptium.net/
    exit /b 1
)

REM Check if Maven is installed
mvn -version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Maven is not installed or not in PATH
    echo Please install Maven 3.8+ from https://maven.apache.org/install.html
    exit /b 1
)

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js 18+ from https://nodejs.org/
    exit /b 1
)

echo Prerequisites check passed!
echo.

REM Install frontend dependencies if needed
if not exist "rastalink-frontend\node_modules" (
    echo Installing frontend dependencies...
    cd rastalink-frontend
    npm install
    cd ..
)

echo Starting backend...
cd rastalink-backend\modules\identity
set SPRING_PROFILES_ACTIVE=local
start /b mvn spring-boot:run -Plocal -Dspring-boot.run.profiles=local > ..\..\..\backend.log 2>&1
cd ..\..\..

echo Waiting for backend to be healthy...
timeout /t 5 /nobreak >nul

:waitloop
curl -s http://127.0.0.1:8080/api/actuator/health | findstr "UP" >nul
if errorlevel 1 (
    timeout /t 2 /nobreak >nul
    goto waitloop
)

echo Backend is healthy!
echo.
echo Starting frontend...
echo Frontend will be available at: http://localhost:3000
echo Backend API available at: http://localhost:8080/api
echo H2 Database Console: http://localhost:8080/api/h2-console
echo.
echo To stop: Press Ctrl+C, then run: stop-local-dev.bat
echo.

cd rastalink-frontend
npm run local