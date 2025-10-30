import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import analyzer from 'vite-bundle-analyzer'
// https://vite.dev/config/
export default defineConfig({

  plugins: [
    react(),
    analyzer({
      openAnalyzer: true,
      analyzerMode: 'static'
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/app/test/setup.ts',
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

})
