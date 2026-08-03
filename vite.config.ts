import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        services: "servizi/index.html",
        automazioneExcelProcessi: "servizi/automazione-excel-processi/index.html",
        dashboardReport: "servizi/dashboard-report/index.html",
        softwareInterniPmi: "servizi/software-interni-pmi/index.html",
        integrazioneDatabaseApi: "servizi/integrazione-database-api/index.html",
        webAppFreelance: "servizi/web-app-freelance/index.html",
      },
    },
  },
});
