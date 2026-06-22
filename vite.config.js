import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:'/skoolwebapp/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // All /api/* calls from React dev-server → Express on :3001
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
