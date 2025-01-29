import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Nico-Alarcon.github.io/', // Replace 'portfolio' with your repository name
  server: {
    port: 5173,
    host: true
  }
});