import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tempo } from "tempo-devtools/dist/vite";

export default defineConfig({
  plugins: [react(), tempo()],
  base: "/running-blog/", // ✅ <-- Add this line
  server: {
    // @ts-ignore
    allowedHosts: process.env.TEMPO === "true" ? true : undefined,
  },
});
