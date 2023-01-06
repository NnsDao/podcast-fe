import react from '@vitejs/plugin-react';
import { readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const isProdCanister = mode === 'prod';
  const env = loadEnv(isProdCanister ? 'prod' : 'developement', path.resolve('env'), '');
  console.log('command,mode', command, mode);
  // rewrite prod canister_ids
  const canisterJsonPath = path.resolve('canister_ids.json');
  const canisterJson = JSON.parse(readFileSync(canisterJsonPath).toString());
  canisterJson.assets.ic = env.__APP__canister_id;
  writeFileSync(canisterJsonPath, JSON.stringify(canisterJson));

  return {
    publicDir: 'src/public',
    envDir: 'env',
    envPrefix: ['VITE_', '__APP__'],
    plugins: [
      react(),
      // visualizer({
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true,
      // })
    ],
    resolve: {
      alias: {
        // Here we tell Vite the "fake" modules that we want to define
        '@': path.resolve(__dirname, './src'),
        '@common': path.resolve(__dirname, './src/common'),
      },
    },
    build: {
      outDir: 'dist',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProdCanister,
          drop_debugger: isProdCanister,
        },
      },
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
        },
      },
    },

    server: {
      port: 3000,
      fs: {
        strict: false,
      },
      // proxy: {
      //   '/api/v2': {
      //     target: 'https://ic0.app',
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^api\//, '/api/v2/canister'),
      //   },
      // },
    },
    define: {
      // dfx rely on this
      'process.env': {},
    },
  };
});
