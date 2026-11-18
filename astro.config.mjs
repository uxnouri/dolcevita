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
    // Encoder settings for every image Astro generates (sharp). Tuned for photos of furniture:
    // visually indistinguishable from the originals at a fraction of the weight.
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        avif: { quality: 55, effort: 4 },
        webp: { quality: 75, effort: 5, smartSubsample: true },
        jpeg: { quality: 72, mozjpeg: true },
      },
    },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
