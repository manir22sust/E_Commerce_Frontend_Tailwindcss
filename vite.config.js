import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/products": {
        target: "https://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
