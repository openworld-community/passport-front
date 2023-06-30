import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      src: resolve(__dirname, './src'),
      '@m': resolve(__dirname, './src/modules'),
      '@core': resolve(__dirname, './src/core'),
      '@ui': resolve(__dirname, './src/ui'),
    },
  },
  plugins: [react()],
  base: mode === 'development' ? '/' : '/passport-front/',
}));
