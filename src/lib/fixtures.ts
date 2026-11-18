/**
 * Worst-case product data for the dev-only stress page (/dev/worst/). Every value is something the
 * client could realistically enter: long French furniture names, big prices, no photo yet, no price.
 */
import type { Product } from "./catalog";

const base = { sku: null, rating: 0, reviews: 0, styles: [] as string[], colors: [] as string[], colorImages: [] as number[] };
const same = (s: string) => ({ fr: s, en: s, ar: s });

export const WORST: Product[] = [
  {
    ...base,
    id: 9001,
    slug: "canape-angle-convertible-velours",
    name: same("Canapé d’angle convertible 5 places en velours côtelé avec méridienne réversible et coffre de rangement"),
    price: 189990,
    regularPrice: 249990,
    inStock: false,
    categories: ["canapes"],
    images: ["canape-banana-1.webp", "canape-banana-2.webp", "canape-banana-3.webp", "canape-banana-4.webp", "canape-banana-5.webp"],
    colors: ["Beige", "White", "Blue", "Gray", "Brown"],
    colorImages: [0, 1, 2, 3, 4],
  },
  { ...base, id: 9002, slug: "lit", name: same("Lit"), price: 50, regularPrice: null, inStock: true, categories: ["lits"], images: [] },
  {
    ...base,
    id: 9003,
    slug: "table-chevet-tiroir",
    name: same("Table de chevet suspendue en noyer massif"),
    price: 1499.5,
    regularPrice: 1500,
    inStock: true,
    categories: ["tables-de-chevet", "commodes"],
    images: ["tables-gigognes-rondes-noyer-1.webp"],
  },
  {
    ...base,
    id: 9004,
    slug: "fauteuil-bergere",
    name: same("Fauteuil bergère capitonné XXL “Riad” – édition limitée"),
    price: null,
    regularPrice: 12990,
    inStock: true,
    categories: ["fauteuils"],
    images: ["fauteuil-bulle-2.webp"],
  },
];
