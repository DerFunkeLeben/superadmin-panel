import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const url = 'https://dev.management.oncallcrm.ru/';

export default defineConfig({
  base: './',
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/material/Tooltip'],
  },
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  server: {
    open: true,
    port: 5050,
    proxy: {
      '/api': {
        changeOrigin: true,
        secure: true,
        target: url,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.error('proxy error', err);
          });
          proxy.on('proxyReq', (_, req) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
  build: {
    outDir: 'build',
  },
});
