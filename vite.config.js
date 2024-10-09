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
      },
    },
  },
  build: {
    outDir: 'build',
  },
});
