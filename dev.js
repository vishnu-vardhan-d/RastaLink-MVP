#!/usr/bin/env node

// Simple script to start the RastaLink frontend application
// This works around the limitation of not being able to modify root package.json

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting RastaLink Frontend Application...');

// Change to frontend directory and run dev script
const child = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend'),
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('Failed to start application:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});