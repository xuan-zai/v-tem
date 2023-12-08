import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.join(__dirname, 'components'),
      '@assets': path.join(__dirname, 'assets'),
      '@': path.join(__dirname, 'src'),
    },
  },
  server: {
    port: 9090,
    open: true,

    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
});
