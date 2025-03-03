import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from '/Nico-Alarcon.github.io/' to '/'
  server: {
    port: 5173,
    host: true
  }
});