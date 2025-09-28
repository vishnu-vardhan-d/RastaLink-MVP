import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Root vite config that serves the frontend directory
export default defineConfig({
  plugins: [react()],
  root: './frontend',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './frontend/src'),
      '@app': path.resolve(__dirname, './frontend/src/app'),
      '@pages': path.resolve(__dirname, './frontend/src/pages'),
      '@widgets': path.resolve(__dirname, './frontend/src/widgets'),
      '@features': path.resolve(__dirname, './frontend/src/features'),
      '@entities': path.resolve(__dirname, './frontend/src/entities'),
      '@shared': path.resolve(__dirname, './frontend/src/shared')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})