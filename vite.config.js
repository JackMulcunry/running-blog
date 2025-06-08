import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tempo } from "tempo-devtools/dist/vite";

export default defineConfig({
  base: "/running-blog/",
  plugins: [react(), tempo()],
  define: {
    'import.meta.env.VITE_TEMPO': JSON.stringify(true), // <-- force it always true for now
  },
});
