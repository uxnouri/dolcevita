// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dolcevitadesign.ma",
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "auto", // one shared, cacheable CSS file across all pages
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: { prefixDefaultLocale: false },
  },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  image: {
    responsiveStyles: true,
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
