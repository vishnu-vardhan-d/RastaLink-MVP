#!/usr/bin/env node
const { spawn } = require('child_process');

// Start Vite with port 5000
const child = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('❌ Failed:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});