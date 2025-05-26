import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Écoute sur toutes les IPs
    port: 5173, // Port par défaut (changeable)
    open: true // Ouvre le navigateur automatiquement
  }
});