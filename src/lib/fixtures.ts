/**
 * Worst-case product data for the dev-only stress page (/dev/worst/). Every value is something the
 * client could realistically enter: long French furniture names, big prices, no photo yet.
 */
import type { Product } from "./catalog";

const base = {
  sku: null,
  rating: 0,
  reviews: 0,
  colors: [] as string[],
  styles: [] as string[],
};

export const WORST: Product[] = [
  {
    ...base,
    id: 9001,
    slug: "canape-angle-convertible-velours",
    name: "Canapé d’angle convertible 5 places en velours côtelé avec méridienne réversible et coffre de rangement",
    price: 189990,
    regularPrice: 249990,
    inStock: false,
    categories: ["canapes"],
    images: ["2024-12-064.png"],
    colors: ["Beige", "Brown", "Burgundy Red", "Green", "Lavender Purple", "Orange", "Teal"],
    styles: ["Modern", "Mid-century", "Art Deco", "Traditional"],
  },
  { ...base, id: 9002, slug: "lit", name: "Lit", price: 50, regularPrice: null, inStock: true, categories: ["lits"], images: [] },
  {
    ...base,
    id: 9003,
    slug: "table-chevet-tiroir",
    name: "Table de chevet suspendue en noyer massif",
    price: 1499.5,
    regularPrice: 1500,
    inStock: true,
    categories: ["tables-de-chevet", "commodes"],
    images: ["2024-12-050.png"],
  },
  {
    ...base,
    id: 9004,
    slug: "fauteuil-bergere",
    name: "Fauteuil bergère capitonné XXL “Riad” – édition limitée",
    price: 12990,
    regularPrice: 12990,
    inStock: true,
    categories: ["fauteuils"],
    images: ["2025-04-077.png"],
  },
];
