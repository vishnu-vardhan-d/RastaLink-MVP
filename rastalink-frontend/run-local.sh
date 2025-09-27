#!/bin/bash
# ========================================
# LOCAL DEVELOPMENT STARTUP SCRIPT
# ========================================
# This script is exclusively for local development
# Never use this for production deployment

echo "=========================================="
echo "🏠 RastaLink Frontend - LOCAL DEVELOPMENT"
echo "=========================================="
echo "📂 Environment: Local Development Only"
echo "🔧 API: Mock Server (localhost:5000)"
echo "🌐 Frontend: Dev Server (localhost:5173)"
echo "💾 Database: Mock/In-Memory"
echo "🔍 Debug: Enabled"
echo "=========================================="
echo ""

# Verify we're in local development
if [ "$NODE_ENV" = "production" ]; then
    echo "❌ ERROR: Cannot run local script in production environment!"
    echo "Use production deployment scripts instead."
    exit 1
fi

# Set local environment explicitly
export NODE_ENV=local

# Start local development server
echo "🚀 Starting local development server..."
npm run local