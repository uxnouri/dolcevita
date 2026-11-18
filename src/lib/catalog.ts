import type { ImageMetadata } from "astro";
import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";
import type { Lang } from "../i18n";
import { normalizeSearch } from "./search";

/** One product in src/data/products.json. Optional data is `null`, never missing. */
export type Product = {
  id: number;
  slug: string;
  /** Product name in each language. */
  name: Record<Lang, string>;
  sku: string | null;
  /** Current price in dirhams; `null` shows "Prix sur demande" (price on request). */
  price: number | null;
  /** Previous price, shown struck through only when higher than `price`. */
  regularPrice: number | null;
  inStock: boolean;
  rating: number;
  reviews: number;
  /** Category slugs; empty = hidden from the site. */
  categories: string[];
  /** Colour keys (translated below). */
  colors: string[];
  /** For each colour, the index in `images` showing it. Empty when the photos aren't per colour. */
  colorImages: number[];
  styles: string[];
  /** File names in src/assets/products/; may be empty for a product not photographed yet. */
  images: string[];
};
export type Category = (typeof categoriesData)[number] & { label: Record<Lang, string> };

type Glob = Record<string, { default: ImageMetadata }>;
const productImgs: Glob = import.meta.glob("/src/assets/products/*", { eager: true });
const siteImgs: Glob = import.meta.glob("/src/assets/site/*", { eager: true });
const blogImgs: Glob = import.meta.glob("/src/assets/blog/*", { eager: true });

function pick(glob: Glob, folder: string, name: string) {
  const hit = glob[`/src/assets/${folder}/${name}`];
  if (!hit) throw new Error(`Missing image: ${folder}/${name}`);
  return hit.default;
}
export const productImage = (name: string) => pick(productImgs, "products", name);
export const siteImage = (name: string) => pick(siteImgs, "site", name);
export const blogImage = (name: string) => pick(blogImgs, "blog", name);

/** The client's product range, in the order they listed it. */
const LABELS: Record<string, Record<Lang, string>> = {
  lits: { fr: "Lits", en: "Beds", ar: "أسرّة" },
  "tables-de-chevet": { fr: "Tables de chevet", en: "Bedside tables", ar: "طاولات السرير" },
  "tables-basses": { fr: "Tables basses", en: "Coffee tables", ar: "طاولات القهوة" },
  canapes: { fr: "Canapés", en: "Sofas", ar: "كنبات" },
  rideaux: { fr: "Rideaux", en: "Curtains", ar: "ستائر" },
  poufs: { fr: "Poufs", en: "Poufs", ar: "بوفات" },
  "meubles-tv": { fr: "Meubles TV", en: "TV units", ar: "وحدات التلفاز" },
  commodes: { fr: "Commodes", en: "Chests of drawers", ar: "خزائن الأدراج" },
  miroirs: { fr: "Miroirs", en: "Mirrors", ar: "مرايا" },
  chaises: { fr: "Chaises", en: "Chairs", ar: "كراسي" },
  fauteuils: { fr: "Fauteuils", en: "Armchairs", ar: "كراسي بذراعين" },
  "tables-a-manger": { fr: "Tables à manger", en: "Dining tables", ar: "طاولات الطعام" },
};

const COLOR_FR: Record<string, string> = {
  Beige: "Beige", Black: "Noir", Blue: "Bleu", Brown: "Marron", Burgundy: "Bordeaux", Gray: "Gris", Green: "Vert",
  Mustard: "Moutarde", Navy: "Bleu marine", Red: "Rouge", Terracotta: "Terracotta", White: "Blanc", Cream: "Crème",
  "Dark wood": "Bois foncé", "Natural wood": "Bois naturel", "White & black": "Blanc et noir",
  "Beige & walnut": "Beige et noyer", "Navy & teak": "Marine et teck", "Cream & black": "Crème et noir",
  "Cream & walnut": "Crème et noyer", "Ivory bouclé": "Bouclé ivoire", "Beige velvet": "Velours beige",
};
const STYLE_FR: Record<string, string> = {
  Modern: "Moderne", Victorian: "Victorien", Classic: "Classique", Industrial: "Industriel",
  "Art Deco": "Art déco", "Mid-century": "Mid-century", Traditional: "Traditionnel",
};
const COLOR_AR: Record<string, string> = {
  Beige: "بيج", Black: "أسود", Blue: "أزرق", Brown: "بني", Burgundy: "عنابي", Gray: "رمادي", Green: "أخضر",
  Mustard: "خردلي", Navy: "كحلي", Red: "أحمر", Terracotta: "تيراكوتا", White: "أبيض", Cream: "كريمي",
  "Dark wood": "خشب داكن", "Natural wood": "خشب طبيعي", "White & black": "أبيض وأسود",
  "Beige & walnut": "بيج وجوز", "Navy & teak": "كحلي وساج", "Cream & black": "كريمي وأسود",
  "Cream & walnut": "كريمي وجوز", "Ivory bouclé": "بوكليه عاجي", "Beige velvet": "مخمل بيج",
};
const STYLE_AR: Record<string, string> = {
  Modern: "عصري", Victorian: "فيكتوري", Classic: "كلاسيكي", Industrial: "صناعي", "Art Deco": "آرت ديكو",
  "Mid-century": "منتصف القرن", Traditional: "تقليدي",
};
const COLORS: Partial<Record<Lang, Record<string, string>>> = { fr: COLOR_FR, ar: COLOR_AR };
const STYLES: Partial<Record<Lang, Record<string, string>>> = { fr: STYLE_FR, ar: STYLE_AR };
export const colorLabel = (c: string, lang: Lang) => COLORS[lang]?.[c] ?? c;
export const styleLabel = (s: string, lang: Lang) => STYLES[lang]?.[s] ?? s;

/** Products filed in at least one category are on the site (data: src/data/products.json). */
export const products: Product[] = (productsData as Product[]).filter((p) => p.categories.length > 0);
export const categories: Category[] = categoriesData.map((c) => ({ ...c, label: LABELS[c.slug] }));

/** All categories in the client's order, including made-to-order ones with no products online yet. */
export const topCategories = categories;

/** Most descriptive category when a product is in several (a drawer nightstand is a bedside table first). */
const PRIMARY_ORDER = [
  "canapes", "fauteuils", "chaises", "tables-a-manger", "meubles-tv", "tables-basses", "tables-de-chevet",
  "commodes", "poufs", "lits", "miroirs", "rideaux",
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
/** The product's name in the page language (falls back to French). */
export const productName = (p: Product, lang: Lang) => p.name[lang] || p.name.fr;

export const productsIn = (slug: string) =>
  products.filter((p) => p.categories.includes(slug));
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

const bySlugs = (slugs: string[]) => slugs.map(getProduct).filter((p): p is Product => !!p);

export const latest = bySlugs([
  "canape-banana", "fauteuil-bulle", "lit-bulle-ivoire", "miroir-organique", "table-basse-ovale-travertin-cannele",
  "pouf-boucle-trois-niveaux", "canape-angle-boucle-terracotta", "fauteuil-lounge-boucle", "tables-gigognes-marbre-noir",
]);

/** Home page "Nos coups de cœur": a hand-picked selection (no sales data yet, so no "bestseller" claims). */
export const favourites = bySlugs([
  "canape-capitonne-vert-emeraude", "fauteuil-scandinave", "table-basse-travertin-minimaliste", "lit-capitonne-gris",
  "pouf-geometrique", "chaise-accoudoirs-boucle", "table-basse-bois-verre", "canape-angle-boucle-creme",
]);

export function related(product: Product, n = 4) {
  const main = primaryCategory(product)?.slug ?? product.categories[0];
  const pool = products.filter((p) => p.slug !== product.slug && p.categories.includes(main));
  const rest = products.filter((p) => p.slug !== product.slug && !pool.includes(p));
  return [...pool, ...rest].slice(0, n);
}


/** Text indexed by the shop search: name + categories, colours and styles in every language. */
export function searchText(p: Product) {
  const cats = p.categories.map(getCategory).flatMap((c) => (c ? Object.values(c.label) : []));
  const colors = p.colors.flatMap((c) => [c, colorLabel(c, "fr"), colorLabel(c, "ar")]);
  const styles = p.styles.flatMap((st) => [st, styleLabel(st, "fr"), styleLabel(st, "ar")]);
  return normalizeSearch([...Object.values(p.name), ...cats, ...colors, ...styles].join(" "));
}

export function primaryCategory(p: Product) {
  const slug = PRIMARY_ORDER.find((c) => p.categories.includes(c)) ?? p.categories[0];
  return getCategory(slug);
}

/** Old price to strike through, only when there is a price and the old one is genuinely higher. */
export const oldPrice = (p: Product) =>
  p.price !== null && p.regularPrice && p.regularPrice > p.price ? p.regularPrice : null;

export const discount = (p: Product) => {
  const old = oldPrice(p);
  return old && p.price !== null ? Math.round((1 - p.price / old) * 100) : 0;
};

/** Colour variants a shopper can pick (each colour has its own photo). */
export const variants = (p: Product) =>
  p.colorImages.length === p.colors.length && p.colors.length > 1
    ? p.colors.map((color, i) => ({ color, image: p.colorImages[i] }))
    : [];
