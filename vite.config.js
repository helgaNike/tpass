import { resolve } from 'path';
import { defineConfig } from 'vite';

const pages = {
  index: resolve(__dirname, 'index.html'),
  faq: resolve(__dirname, 'faq.html'),
};

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? './' : '/tpass/',
  build: {
    rollupOptions: {
      input: pages
    }
  }
}));
