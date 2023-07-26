import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const envFiles = ".env";
  return {
    define: {
      "process.env": dotenv.config({ path: envFiles }).parsed,
    },
    plugins: [
      react(),
      VitePWA({
        // add this to cache all the imports
        workbox: {
          globPatterns: ["**/*"],
        },
        // add this to cache all the
        // static assets in the public folder
        includeAssets: ["**/*"],
        manifest: {
          theme_color: "#E9D0AB",
          background_color: "#E9D0AB",
          display: "standalone",
          scope: "/",
          start_url: "/quizz",
          name: "Quizz App",
          short_name: "Quizz App",
        },
      }),
    ],
    base: "/quizz",
    server: {
      port: 3000,
    },
    host: true,
  };
});
