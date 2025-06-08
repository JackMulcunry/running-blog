import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tempo } from "tempo-devtools/dist/vite";

export default defineConfig({
  base: "/running-blog/", // ✅ Required for GitHub Pages under a subdirectory
  plugins: [react(), tempo()],
  server: {
    // Optional: Allows Tempo devtools when running locally
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
});
