/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import analyzer from 'vite-bundle-analyzer';
import svgr from 'vite-plugin-svgr';
// https://vite.dev/config/
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// import { playwright } from '@vitest/browser-playwright';
// const dirname =
//   typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [
        react(),
        analyzer({
            openAnalyzer: true,
            analyzerMode: 'static',
        }),
        svgr(),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/app/test/setup.ts',
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/*.stories.{ts,tsx}',
            '**/.{storybook,git,idea}/**',
        ],
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
