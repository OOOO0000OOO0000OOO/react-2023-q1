/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    setupFiles: ['src/vitest.setup.ts'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      all: true,
      include: ['src/**/*.tsx'],
    },
  },
});
