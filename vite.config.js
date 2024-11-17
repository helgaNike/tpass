import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/tpass/',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                faq: resolve(__dirname, "faq.html"),
                privacy: resolve(__dirname, "privacy-policy.html"),
                terms: resolve(__dirname, "terms-of-service.html"),
            }
        }
    }

});
