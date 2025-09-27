#!/bin/bash
echo "🚀 Starting RastaLink Backend - Production Mode"
echo "Environment: Production"
echo "Database: PostgreSQL (Production)"
echo "Port: 8080"
echo ""

cd modules/identity
mvn spring-boot:run -Pprod