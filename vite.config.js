// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Ensure Vite uses the root folder (where index.html is)
  base: '/vite-weather-website/', // Replace with your GitHub repo name
  build: {
    outDir: 'dist', // Output directory for production build
  },
});
