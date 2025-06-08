import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tempo } from 'tempo-devtools/dist/vite';

export default defineConfig({
  base: "/running-blog/", // ✅ Required for GitHub Pages
  plugins: [react(), tempo()],
});
