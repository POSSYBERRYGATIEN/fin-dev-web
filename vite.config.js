// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Répertoire de sortie
  },
  server: {
    port: 3000, // Port de développement local
    host: true, // Permet les connexions externes
  },
  resolve: {
    alias: {
      '@': '/src', // Alias pour faciliter les importations
    },
  },
});


