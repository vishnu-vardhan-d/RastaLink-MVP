#!/bin/bash
echo "🚀 Starting RastaLink Backend - Development Mode"
echo "Environment: Development"
echo "Database: PostgreSQL"
echo "Port: 8080"
echo ""

cd modules/identity
mvn spring-boot:run -Pdev