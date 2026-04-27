import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({

  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://ai-recipe-generator-4y56.onrender.com" || "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
