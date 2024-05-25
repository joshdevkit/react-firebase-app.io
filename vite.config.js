

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
    base: https://joshdevkit.github.io/react-firebase-app.io/
    server: {
      port: 3000,
    },
    optimizeDeps: {
      include: ['react-helmet-async']
    }
  };
});
