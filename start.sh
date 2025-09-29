#!/bin/bash
# RastaLink Frontend Startup Script
# Configures Vite with proper host settings for Replit deployment

export VITE_HOST_CHECK=false
npx vite --host 0.0.0.0 --port 5000 --strictPort
