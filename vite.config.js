import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vite-test/', // Replace 'my-vite-app' with your repository name
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        aboutUs: './about-us.html',
      },
    },
  },
});
