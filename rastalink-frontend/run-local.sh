#!/bin/bash
# ========================================
# LOCAL DEVELOPMENT STARTUP SCRIPT
# ========================================
# This script is exclusively for local development
# Never use this for production deployment

echo "=========================================="
echo "🏠 RastaLink Frontend - LOCAL MACHINE DEV"
echo "=========================================="
echo "📂 Environment: Local Machine Development"
echo "🔧 API: Spring Boot (localhost:8080/api)"
echo "🌐 Frontend: React Dev (localhost:3000)"
echo "💾 Database: H2 In-Memory"
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
export NODE_ENV=development

# Start local development server
echo "🚀 Starting local development server..."
npm run local