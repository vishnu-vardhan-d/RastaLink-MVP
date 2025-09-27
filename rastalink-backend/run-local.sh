#!/bin/bash
# ========================================
# LOCAL DEVELOPMENT STARTUP SCRIPT
# ========================================
# This script is exclusively for local development
# Never use this for production deployment

echo "=========================================="
echo "🏠 RastaLink Backend - LOCAL DEVELOPMENT"
echo "=========================================="
echo "📂 Environment: Local Development Only"
echo "💾 Database: H2 In-Memory"
echo "🌐 Port: 8080/api"
echo "🔍 Debug: Full Logging Enabled"
echo "🛠️  DevTools: Enabled"
echo "🗄️  H2 Console: http://localhost:8080/api/h2-console"
echo "❤️  Health: http://localhost:8080/api/actuator/health"
echo "=========================================="
echo ""

# Verify we're not accidentally running in production
if [ "$SPRING_PROFILES_ACTIVE" = "production" ]; then
    echo "❌ ERROR: Cannot run local script with production profile!"
    echo "Use production deployment scripts instead."
    exit 1
fi

# Set local profile explicitly
export SPRING_PROFILES_ACTIVE=local

# Change to identity module directory
echo "📁 Navigating to identity module..."
cd modules/identity

# Start local development server
echo "🚀 Starting local development server..."
mvn spring-boot:run -Plocal