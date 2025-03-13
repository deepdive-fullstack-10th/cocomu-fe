import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/yorkie': {
        target: 'https://api.yorkie.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/yorkie/, ''),
      },
    },
  },
  define: {
    global: 'window',
  },
  build: {
    minify: 'terser',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: ['./@emotion/react', './@emotion/styled', './@emotion/use-insertion-effect-with-fallbacks', 'yorkie'],
      output: {
        globals: {
          './@emotion/react': 'emotionReact',
          './@emotion/styled': 'emotionStyled',
          './@emotion/use-insertion-effect-with-fallbacks': 'emotionInsertionEffectFallbacks',
          yorkie: 'Yorkie',
        },
      },
    },
    terserOptions: {
      compress: {
        evaluate: false,
      },
    },
  },
  optimizeDeps: {
    exclude: ['@emotion/use-insertion-effect-with-fallbacks', 'yorkie'],
  },
  plugins: [react(), tsconfigPaths()],
});
