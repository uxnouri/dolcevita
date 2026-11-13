import type { ImageMetadata } from "astro";
import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";
import type { Lang } from "../i18n";
import { normalizeSearch } from "./search";

/** One product in src/data/products.json. Optional data is `null`, never missing. */
export type Product = {
  id: number;
  slug: string;
  name: string;
  sku: string | null;
  /** Current price in dirhams. */
  price: number;
  /** Previous price, shown struck through only when higher than `price`. */
  regularPrice: number | null;
  inStock: boolean;
  rating: number;
  reviews: number;
  /** Category slugs; empty = hidden from the site. */
  categories: string[];
  colors: string[];
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
  Beige: "Beige", Black: "Noir", Blue: "Bleu", Brown: "Marron", "Burgundy Red": "Bordeaux", Gray: "Gris",
  Grey: "Gris", Green: "Vert", "Lavender Purple": "Lavande", Orange: "Orange", Pink: "Rose", Red: "Rouge",
  White: "Blanc", Yellow: "Jaune", Cream: "Crème", Navy: "Marine", Teal: "Bleu canard",
};
const STYLE_FR: Record<string, string> = {
  Modern: "Moderne", Victorian: "Victorien", Classic: "Classique", Industrial: "Industriel",
  "Art Deco": "Art déco", "Mid-century": "Mid-century", Traditional: "Traditionnel",
};
const COLOR_AR: Record<string, string> = {
  Beige: "بيج", Black: "أسود", Blue: "أزرق", Brown: "بني", "Burgundy Red": "عنابي", Gray: "رمادي", Grey: "رمادي",
  Green: "أخضر", "Lavender Purple": "بنفسجي فاتح", Orange: "برتقالي", Pink: "وردي", Red: "أحمر", White: "أبيض",
  Yellow: "أصفر", Cream: "كريمي", Navy: "كحلي", Teal: "أزرق مخضر",
};
const STYLE_AR: Record<string, string> = {
  Modern: "عصري", Victorian: "فيكتوري", Classic: "كلاسيكي", Industrial: "صناعي", "Art Deco": "آرت ديكو",
  "Mid-century": "منتصف القرن", Traditional: "تقليدي",
};
const COLORS: Partial<Record<Lang, Record<string, string>>> = { fr: COLOR_FR, ar: COLOR_AR };
const STYLES: Partial<Record<Lang, Record<string, string>>> = { fr: STYLE_FR, ar: STYLE_AR };
export const colorLabel = (c: string, lang: Lang) => COLORS[lang]?.[c] ?? c;
export const styleLabel = (s: string, lang: Lang) => STYLES[lang]?.[s] ?? s;

/** Only products filed in one of the client's categories are on the site (see scripts/client-categories.ts). */
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
export const productsIn = (slug: string) =>
  products.filter((p) => p.categories.includes(slug));
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

const bySlugs = (slugs: string[]) => slugs.map(getProduct).filter((p): p is Product => !!p);

export const latest = bySlugs([
  "valdez-3-seater-sofa", "calligaris-lazy-armchair", "creative-glass-coffee-table", "luxe-chair-white",
  "sofa-in-a-box-3-seater", "oval-wood-dining-table", "cottage-bedside-nightstand",
  "avyanna-occasional-chair", "leather-and-fabric-sofas",
]);

export const bestsellers = bySlugs([
  "sofa-with-rolled-armrest", "valdez-3-seater-sofa", "cammi-blue-leather-armchair",
  "rustic-wooden-coffee-table", "modern-faux-leather-sofa", "four-hands-gregory-dining-chair",
  "plush-round-floor-cushion", "living-room-accent-chair",
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
  return normalizeSearch([p.name, ...cats, ...colors, ...styles].join(" "));
}

export function primaryCategory(p: Product) {
  const slug = PRIMARY_ORDER.find((c) => p.categories.includes(c)) ?? p.categories[0];
  return getCategory(slug);
}

export const discount = (p: Product) =>
  p.regularPrice && p.regularPrice > p.price ? Math.round((1 - p.price / p.regularPrice) * 100) : 0;

/** Old price to strike through, only when it's genuinely higher than the current one. */
export const oldPrice = (p: Product) => (p.regularPrice && p.regularPrice > p.price ? p.regularPrice : null);
