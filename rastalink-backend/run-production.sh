#!/bin/bash
# ========================================
# PRODUCTION DEPLOYMENT STARTUP SCRIPT
# ========================================
# This script is exclusively for production deployment
# Never use this for local development

echo "=========================================="
echo "🏭 RastaLink Backend - PRODUCTION"
echo "=========================================="
echo "📂 Environment: Production Only"
echo "💾 Database: PostgreSQL Production"
echo "🌐 Port: 8080/api"
echo "🔍 Debug: Minimal Logging"
echo "🛡️  Security: SSL Required"
echo "📊 Monitoring: /management/*"
echo "❤️  Health: http://localhost:8080/api/health"
echo "=========================================="
echo ""

# Verify we're NOT in local development
if [ "$SPRING_PROFILES_ACTIVE" = "local" ]; then
    echo "❌ ERROR: Cannot run production script with local profile!"
    echo "Use local development scripts instead."
    exit 1
fi

# Set production profile explicitly
export SPRING_PROFILES_ACTIVE=production

# Verify required production environment variables
echo "🔍 Checking production environment variables..."
if [ -z "$DB_PASSWORD" ]; then
    echo "❌ ERROR: DB_PASSWORD environment variable is required for production!"
    exit 1
fi

if [ -z "$DATABASE_URL" ]; then
    echo "⚠️  WARNING: DATABASE_URL not set, using default production database URL"
fi

# Change to identity module directory
echo "📁 Navigating to identity module..."
cd modules/identity

# Start production server
echo "🚀 Starting production server..."
mvn spring-boot:run -Pproduction