@echo off
REM ========================================
REM STOP WINDOWS LOCAL DEVELOPMENT
REM ========================================

echo Stopping RastaLink local development servers...

REM Stop Java processes (Spring Boot)
echo Stopping backend (Spring Boot)...
taskkill /f /im java.exe 2>nul || echo No Java processes found

REM Stop Node processes on port 3000
echo Stopping frontend (React)...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /f /pid %%a 2>nul

REM Clean up log files
del backend.log 2>nul

echo Local development servers stopped!
echo Run start-local-dev.bat to start again