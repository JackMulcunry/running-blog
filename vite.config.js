// vite.config.js
export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/running-blog/",
  plugins: [react(), tempo()],
  define: {
    'import.meta.env.VITE_TEMPO': JSON.stringify(true),
  },
}));
