import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    minify: 'terser',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: ['./@emotion/react', './@emotion/styled', './@emotion/use-insertion-effect-with-fallbacks'],
      output: {
        globals: {
          './@emotion/react': 'emotionReact',
          './@emotion/styled': 'emotionStyled',
          './@emotion/use-insertion-effect-with-fallbacks': 'emotionInsertionEffectFallbacks',
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        evaluate: false,
      },
    },
  },
  optimizeDeps: {
    exclude: ['@emotion/use-insertion-effect-with-fallbacks'],
  },
  plugins: [react(), tsconfigPaths()],
});
