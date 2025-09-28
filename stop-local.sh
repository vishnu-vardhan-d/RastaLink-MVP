#!/bin/bash
# =======================================================
# Stop RastaLink Local Development
# =======================================================

echo "🛑 Stopping RastaLink Platform..."

# Stop Identity Service
if [ -f "identity.pid" ]; then
    IDENTITY_PID=$(cat identity.pid)
    echo "🔧 Stopping Identity Service (PID: $IDENTITY_PID)..."
    kill $IDENTITY_PID 2>/dev/null || true
    rm -f identity.pid
else
    echo "🔧 Stopping Identity Service..."
    pkill -f "identity" 2>/dev/null || true
fi

# Stop frontend processes
echo "🌐 Stopping Frontend..."
pkill -f "vite" 2>/dev/null || true

# Clean up log files
rm -f identity.log

echo "✅ Platform stopped successfully!"