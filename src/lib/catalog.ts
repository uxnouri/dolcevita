import type { ImageMetadata } from "astro";
import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";
import type { Lang } from "../i18n";
import { normalizeSearch } from "./search";

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
  accessories: { fr: "Accessoires", en: "Accessories", ar: "إكسسوارات" },
  armchair: { fr: "Fauteuils", en: "Armchairs", ar: "كراسي بذراعين" },
  "balcony-and-garden": { fr: "Balcon & jardin", en: "Balcony & garden", ar: "الشرفة والحديقة" },
  bathroom: { fr: "Salle de bain", en: "Bathroom", ar: "الحمّام" },
  bedroom: { fr: "Chambre", en: "Bedroom", ar: "غرفة النوم" },
  cabinets: { fr: "Rangements", en: "Cabinets", ar: "خزائن" },
  chairs: { fr: "Chaises", en: "Chairs", ar: "كراسي" },
  "childrens-room": { fr: "Chambre d’enfant", en: "Children’s room", ar: "غرفة الأطفال" },
  desks: { fr: "Bureaux", en: "Desks", ar: "مكاتب" },
  "dining-room": { fr: "Salle à manger", en: "Dining room", ar: "غرفة الطعام" },
  double: { fr: "Canapés 2 places", en: "Two-seaters", ar: "كنبات بمقعدين" },
  hall: { fr: "Entrée", en: "Hall", ar: "المدخل" },
  handing: { fr: "Suspendus", en: "Hanging", ar: "معلّقات" },
  inspirations: { fr: "Inspirations", en: "Inspirations", ar: "إلهام" },
  kitchen: { fr: "Cuisine", en: "Kitchen", ar: "المطبخ" },
  lighting: { fr: "Luminaires", en: "Lighting", ar: "إنارة" },
  "living-room": { fr: "Salon", en: "Living room", ar: "الصالون" },
  long: { fr: "Canapés longs", en: "Long sofas", ar: "كنبات طويلة" },
  "meeting-tables": { fr: "Tables de réunion", en: "Meeting tables", ar: "طاولات اجتماعات" },
  miscellaneous: { fr: "Divers", en: "Miscellaneous", ar: "متفرقات" },
  modern: { fr: "Modernes", en: "Modern", ar: "عصرية" },
  office: { fr: "Espace de travail", en: "Office", ar: "مساحة العمل" },
  single: { fr: "Places simples", en: "Single seaters", ar: "مقاعد فردية" },
  sofas: { fr: "Canapés", en: "Sofas", ar: "كنبات" },
  stool: { fr: "Tabourets", en: "Stools", ar: "مقاعد صغيرة" },
  tables: { fr: "Tables", en: "Tables", ar: "طاولات" },
  wardrobes: { fr: "Armoires", en: "Wardrobes", ar: "دواليب" },
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

export const products: Product[] = productsData;
export const categories: Category[] = categoriesData.map((c) => ({
  ...c,
  label: LABELS[c.slug] ?? { fr: c.name, en: c.name, ar: c.name },
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
  p.regularPrice ? Math.round((1 - p.price / p.regularPrice) * 100) : 0;
