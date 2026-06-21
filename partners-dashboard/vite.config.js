import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Internal dashboard. In production it is served under "/dashboard" on the same
// domain as the onboarding app, so the build base is "/dashboard/"; dev stays at
// the root. It talks to the onboarding API over CORS (VITE_API_BASE).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/dashboard/" : "/",
  server: {
    port: 5177,
    strictPort: true,
  },
  preview: {
    port: 5177,
    strictPort: true,
  },
}));
