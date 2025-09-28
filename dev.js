#!/usr/bin/env node

// RastaLink Frontend Development Server
// Production-ready enterprise application launcher

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting RastaLink Enterprise Platform...');
console.log('📱 Frontend: React TypeScript + Vite');
console.log('🏢 Backend: Spring Boot (run separately)');
console.log('');

// Start frontend development server
const child = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('❌ Failed to start frontend:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  console.log('🛑 Frontend server stopped');
  process.exit(code);
});