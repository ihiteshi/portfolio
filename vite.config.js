import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain (hiteshchoudhary.com.au) serves from root, so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Split heavy/stable libs into their own cacheable chunks.
        manualChunks: {
          react: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react'],
        },
      },
    },
  },
});
