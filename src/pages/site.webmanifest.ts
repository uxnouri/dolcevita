import type { APIRoute } from "astro";
import { SITE } from "../lib/site";

/** Lets phones show the right name, colour and icon when the site is added to the home screen. */
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: SITE.name,
      short_name: "Dolce Vita",
      start_url: "/",
      display: "browser",
      background_color: "#f7f5f0",
      theme_color: "#f7f5f0",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    }),
    { headers: { "Content-Type": "application/manifest+json" } },
  );
