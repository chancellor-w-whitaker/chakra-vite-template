import { reactClickToComponent } from "vite-plugin-react-click-to-component";
import progress from "vite-plugin-progress";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://www.npmjs.com/package/vite-plugin-ngrok

// https://www.npmjs.com/package/vite-plugin-global-const

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), progress(), reactClickToComponent()],
  build: { outDir: "docs" },
  base: "",
});
