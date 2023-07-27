import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react({ jsxRuntime: 'automatic', fastRefresh: process.env.NODE_ENV !== 'test' }),
      svgr(),
      tsconfigPaths(),
      checker({
        typescript: true,
      }),
      eslint(),
    ],
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
    },
  });
};