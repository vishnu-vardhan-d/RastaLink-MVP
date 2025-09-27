#!/bin/bash
# ========================================
# PRODUCTION DEPLOYMENT STARTUP SCRIPT
# ========================================
# This script is exclusively for production deployment
# Never use this for local development

echo "=========================================="
echo "🏭 RastaLink Frontend - PRODUCTION"
echo "=========================================="
echo "📂 Environment: Production Only"
echo "🔧 API: Production Server"
echo "🌐 Frontend: Production Build"
echo "💾 Database: PostgreSQL Production"
echo "🔍 Debug: Disabled"
echo "🛡️  Security: Enabled"
echo "=========================================="
echo ""

# Verify we're NOT in local development
if [ "$NODE_ENV" = "local" ]; then
    echo "❌ ERROR: Cannot run production script in local environment!"
    echo "Use local development scripts instead."
    exit 1
fi

# Set production environment explicitly
export NODE_ENV=production

# Build for production
echo "🔨 Building production assets..."
npm run production:build

# Start production server
echo "🚀 Starting production server..."
npm run production:start