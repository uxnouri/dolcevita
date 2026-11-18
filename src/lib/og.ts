/**
 * Social share images (Open Graph / WhatsApp / Facebook / X / LinkedIn), generated at build time
 * from the client's own product photos. All are 1200×630 JPEGs, the size every network expects.
 *
 * No typeset text on purpose: the title and description travel in og:title / og:description, and
 * text rendered here would depend on the fonts of the machine running the build. The logo is a
 * vector file, so it renders the same everywhere.
 */
import sharp, { type Sharp } from "sharp";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import productsData from "../data/products.json";

import { OG_SIZE } from "./site";
export { OG_SIZE };

const ROOT = process.cwd();
const SAND = "#efebe3";
const BRAND_DARK = "#134a46";

const productFile = (file: string) => join(ROOT, "src/assets/products", file);

async function logo(file: "logo.svg" | "logo-light.svg", width: number) {
  const svg = await readFile(join(ROOT, "public/brand", file));
  return sharp(svg, { density: 400 }).resize({ width }).png().toBuffer();
}

/** A product photo fitted into a box. Its white studio backdrop disappears when multiplied onto sand. */
async function photo(file: string, width: number, height: number) {
  return sharp(productFile(file))
    .flatten({ background: "#ffffff" })
    .resize(width, height, { fit: "contain", background: "#ffffff" })
    .png()
    .toBuffer();
}

function canvas(background: string) {
  return sharp({ create: { width: OG_SIZE.width, height: OG_SIZE.height, channels: 3, background } });
}

const jpeg = (img: Sharp) => img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();

/** Product share image: the photo large on the site's sand colour, logo top-left. */
export async function productOg(file: string) {
  const [shot, mark] = await Promise.all([photo(file, 1100, 470), logo("logo.svg", 210)]);
  return jpeg(
    canvas(SAND).composite([
      { input: shot, left: 50, top: 130, blend: "multiply" },
      { input: mark, left: 56, top: 44 },
    ]),
  );
}

/** Category share image: up to three of its products side by side. */
export async function categoryOg(files: string[]) {
  const picks = files.slice(0, 3);
  const gap = 24;
  const boxW = Math.floor((1100 - gap * (picks.length - 1)) / picks.length);
  const boxH = 450;
  const [mark, ...shots] = await Promise.all([logo("logo.svg", 210), ...picks.map((f) => photo(f, boxW, boxH))]);
  return jpeg(
    canvas(SAND).composite([
      ...shots.map((input, i) => ({ input, left: 50 + i * (boxW + gap), top: 145, blend: "multiply" as const })),
      { input: mark, left: 56, top: 44 },
    ]),
  );
}

/** Default share image (home and every page without its own): brand panel + four client products. */
export async function defaultOg() {
  const find = (slug: string, i = 0) => productsData.find((p) => p.slug === slug)?.images[i];
  const picks = [
    find("canape-angle-boucle-terracotta"),
    find("fauteuil-bulle", 1),
    find("table-basse-rectangulaire-travertin"),
    find("cadre-miroir-double-arche"),
  ].filter((f): f is string => !!f);

  const panel = 470;
  const tileW = 345;
  const tileH = 285;
  const [mark, ...shots] = await Promise.all([logo("logo-light.svg", 360), ...picks.map((f) => photo(f, tileW, tileH))]);
  const markH = Math.round((360 * 296) / 1019);
  return jpeg(
    canvas(SAND).composite([
      { input: { create: { width: panel, height: OG_SIZE.height, channels: 3, background: BRAND_DARK } }, left: 0, top: 0 },
      { input: mark, left: Math.round((panel - 360) / 2), top: Math.round((OG_SIZE.height - markH) / 2) },
      ...shots.map((input, i) => ({
        input,
        left: panel + 20 + (i % 2) * (tileW + 10),
        top: 20 + Math.floor(i / 2) * (tileH + 20),
        blend: "multiply" as const,
      })),
    ]),
  );
}

/** Square app / schema.org logo from the favicon mark. */
export async function iconPng(size: number) {
  const svg = await readFile(join(ROOT, "public/favicon.svg"));
  return sharp(svg, { density: 600 }).resize(size, size).png().toBuffer();
}

export const imageResponse = (body: Buffer, type: "image/jpeg" | "image/png") =>
  new Response(new Uint8Array(body), { headers: { "Content-Type": type } });
