import type { ImageMetadata } from "astro";
import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";
import type { Lang } from "../i18n";

export type Product = (typeof productsData)[number];
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

const LABELS: Record<string, Record<Lang, string>> = {
  accessories: { fr: "Accessoires", en: "Accessories" },
  armchair: { fr: "Fauteuils", en: "Armchairs" },
  "balcony-and-garden": { fr: "Balcon & jardin", en: "Balcony & garden" },
  bathroom: { fr: "Salle de bain", en: "Bathroom" },
  bedroom: { fr: "Chambre", en: "Bedroom" },
  cabinets: { fr: "Rangements", en: "Cabinets" },
  chairs: { fr: "Chaises", en: "Chairs" },
  "childrens-room": { fr: "Chambre d’enfant", en: "Children’s room" },
  desks: { fr: "Bureaux", en: "Desks" },
  "dining-room": { fr: "Salle à manger", en: "Dining room" },
  double: { fr: "Canapés 2 places", en: "Two-seaters" },
  hall: { fr: "Entrée", en: "Hall" },
  handing: { fr: "Suspendus", en: "Hanging" },
  inspirations: { fr: "Inspirations", en: "Inspirations" },
  kitchen: { fr: "Cuisine", en: "Kitchen" },
  lighting: { fr: "Luminaires", en: "Lighting" },
  "living-room": { fr: "Salon", en: "Living room" },
  long: { fr: "Canapés longs", en: "Long sofas" },
  "meeting-tables": { fr: "Tables de réunion", en: "Meeting tables" },
  miscellaneous: { fr: "Divers", en: "Miscellaneous" },
  modern: { fr: "Modernes", en: "Modern" },
  office: { fr: "Espace de travail", en: "Office" },
  single: { fr: "Places simples", en: "Single seaters" },
  sofas: { fr: "Canapés", en: "Sofas" },
  stool: { fr: "Tabourets", en: "Stools" },
  tables: { fr: "Tables", en: "Tables" },
  wardrobes: { fr: "Armoires", en: "Wardrobes" },
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
export const colorLabel = (c: string, lang: Lang) => (lang === "fr" ? (COLOR_FR[c] ?? c) : c);
export const styleLabel = (s: string, lang: Lang) => (lang === "fr" ? (STYLE_FR[s] ?? s) : s);

export const products: Product[] = productsData;
export const categories: Category[] = categoriesData.map((c) => ({
  ...c,
  label: LABELS[c.slug] ?? { fr: c.name, en: c.name },
}));

/** Most descriptive category for a product: what it *is* (sofa, lamp…) before where it goes. */
const PRIMARY_ORDER = [
  "sofas", "chairs", "tables", "lighting", "desks", "wardrobes", "cabinets", "meeting-tables",
  "office", "living-room", "bedroom", "dining-room", "kitchen", "bathroom", "balcony-and-garden",
  "childrens-room", "hall", "accessories", "inspirations", "miscellaneous",
];

/** Top-level categories that actually contain products, in a browsing-friendly order. */
const rank = (slug: string) => {
  const i = PRIMARY_ORDER.indexOf(slug);
  return i === -1 ? PRIMARY_ORDER.length : i;
};
export const topCategories = categories
  .filter((c) => !c.parent && products.some((p) => p.categories.includes(c.slug)))
  .sort((a, b) => rank(a.slug) - rank(b.slug));

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const productsIn = (slug: string) =>
  products.filter((p) => p.categories.includes(slug));
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

const bySlugs = (slugs: string[]) => slugs.map(getProduct).filter((p): p is Product => !!p);

export const latest = bySlugs([
  "valdez-3-seater-sofa", "arlomore-table-lamp", "calligaris-lazy-armchair", "luxe-chair-white",
  "sofa-in-a-box-3-seater", "natural-linen-pillow", "bess-decorative-throw-pillow",
  "avyanna-occasional-chair", "leather-and-fabric-sofas",
]);

export const bestsellers = bySlugs([
  "sofa-with-rolled-armrest", "valdez-3-seater-sofa", "modern-tapered-fabric-light",
  "gentoo-rectangular-desk", "modern-faux-leather-sofa", "leather-and-fabric-sofas",
  "plush-round-floor-cushion", "living-room-accent-chair",
]);

/** Category shortcuts on the home page ("Our offer"), with their cut-out icons. */
export const offer = [
  { slug: "sofas", icon: "2025-01-cat-sofa.png" },
  { slug: "wardrobes", icon: "2025-01-cat-wardrobe.png" },
  { slug: "chairs", icon: "2025-01-cat-chair.png" },
  { slug: "desks", icon: "2025-01-cat-desk.png" },
  { slug: "tables", icon: "2025-01-cat-table.png" },
  { slug: "lighting", icon: "2025-01-cat-lighting.png" },
  { slug: "cabinets", icon: "2025-01-cat-cabinet.png" },
  { slug: "office", icon: "2025-01-cat-office.png" },
].map((o) => ({ ...o, category: getCategory(o.slug)! }));

export function related(product: Product, n = 4) {
  const main = primaryCategory(product)?.slug ?? product.categories[0];
  const pool = products.filter((p) => p.slug !== product.slug && p.categories.includes(main));
  const rest = products.filter((p) => p.slug !== product.slug && !pool.includes(p));
  return [...pool, ...rest].slice(0, n);
}


/** Text indexed by the shop search: name + categories and colours in both languages. */
export function searchText(p: Product) {
  const cats = p.categories.map(getCategory).flatMap((c) => (c ? [c.label.fr, c.label.en] : []));
  const colors = p.colors.flatMap((c) => [c, colorLabel(c, "fr")]);
  return [p.name, ...cats, ...colors, ...p.styles].join(" ").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export function primaryCategory(p: Product) {
  const slug = PRIMARY_ORDER.find((c) => p.categories.includes(c)) ?? p.categories[0];
  return getCategory(slug);
}

export const discount = (p: Product) =>
  p.regularPrice ? Math.round((1 - p.price / p.regularPrice) * 100) : 0;
