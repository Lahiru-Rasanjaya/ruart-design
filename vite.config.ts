import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the built site work on any static host or sub-folder
// (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel, ...).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
