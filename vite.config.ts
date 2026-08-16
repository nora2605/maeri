import { defineConfig } from 'vite';
import solid from '@solidjs/vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    solid({ start: true }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
  },
});
