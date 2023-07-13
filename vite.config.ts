import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

export default defineConfig(({ mode }) => {
  const envFiles = ".env";
  return {
    define: {
      "process.env": dotenv.config({ path: envFiles }).parsed,
    },
    plugins: [react()],
  };
});
