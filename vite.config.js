import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths so it loads correctly on GitHub Pages and local builds
  server: {
    port: 3000,
    open: true
  }
});
