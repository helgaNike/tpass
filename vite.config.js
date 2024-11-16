import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/tpass/',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                faq: resolve(__dirname, "faq.html"),
            }
        }
    }

});
