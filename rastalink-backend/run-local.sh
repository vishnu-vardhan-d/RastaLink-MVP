#!/bin/bash
echo "🚀 Starting RastaLink Backend - Local Development Mode"
echo "Environment: Local Development"
echo "Database: H2 In-Memory"
echo "Port: 8080"
echo ""

cd modules/identity
mvn spring-boot:run -Plocal