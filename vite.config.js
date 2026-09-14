import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for assets on GitHub Pages subpaths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
