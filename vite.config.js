// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet d'accéder depuis d'autres appareils sur le réseau
    port: 3000, // Port que tu utilises
    strictPort: true, // Ne changera pas de port si 3000 est occupé
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000, // Utiliser le même port pour WebSocket
    },
  },
});

