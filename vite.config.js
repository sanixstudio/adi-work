import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import VitePWA from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// ...

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    VitePWA({
      manifest: {
        name: "Adi Portfolio",
        short_name: "Adi-portfolio",
        description: "Adnan Niaz portfolio with introduction and projects",
        start_url: "/public/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
      },
      workbox: {
        // Options for Workbox (optional)
      },
    }),
  ],
});
