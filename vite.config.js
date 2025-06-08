import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tempo } from "tempo-devtools/dist/vite";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/running-blog/" : "/", // ✅ correct base per env
  plugins: [react(), tempo()],
}));
