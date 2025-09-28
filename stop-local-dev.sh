#!/bin/bash
# ========================================
# STOP LOCAL DEVELOPMENT SERVERS
# ========================================

echo "🛑 Stopping RastaLink local development servers..."

# Stop backend using stored PID
if [ -f "backend.pid" ]; then
    BACKEND_PID=$(cat backend.pid)
    echo "🔧 Stopping backend (PID: $BACKEND_PID)..."
    kill $BACKEND_PID 2>/dev/null || true
    rm -f backend.pid
else
    echo "🔧 Stopping backend (searching for process)..."
    # Fallback to pkill if PID file doesn't exist
    pkill -f "spring-boot:run" 2>/dev/null || true
    pkill -f "rastalink" 2>/dev/null || true
fi

# Stop frontend on port 3000 (cross-platform approach)
echo "📱 Stopping frontend..."
if command -v lsof &> /dev/null; then
    # Unix/Linux/Mac approach
    lsof -ti:3000 | xargs kill -9 2>/dev/null || true
else
    # Windows approach (if running in Git Bash/WSL)
    netstat -ano | findstr :3000 | awk '{print $5}' | xargs taskkill //PID 2>/dev/null || true
fi

# Clean up log files
rm -f backend.log

echo "✅ Local development servers stopped!"
echo "   Run ./start-local-dev.sh to start again"