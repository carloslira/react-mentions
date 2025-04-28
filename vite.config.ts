import path from 'node:path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import external from 'vite-plugin-external';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    dts({
      rollupTypes: true,
    }),
    external({
      externalizeDeps: ['react-dom', 'react-icons'],
    }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      name: 'react-mentions-input',
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: (format) => `index.${format}.js`,
    },
  },
});
