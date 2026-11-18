/**
 * Builds the catalogue from the client's product photos.
 * Usage: bun scripts/import-client-photos.ts "<folder with the photos>"
 *
 * - Converts each photo to WebP (max 1600px, quality 88, transparency kept) into src/assets/products/.
 * - Writes src/data/products.json. Prices are null ("Prix sur demande") until the client sends them;
 *   after this first import, edit products.json directly (this script would overwrite your edits).
 */
import sharp from "sharp";
import { mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const src = process.argv[2];
if (!src) throw new Error("Pass the folder that contains the client's photos");
const root = join(import.meta.dir, "..");
const out = join(root, "src/assets/products");

type Entry = {
  slug: string;
  name: { fr: string; en: string; ar: string };
  categories: string[];
  /** Source file names, in gallery order. */
  photos: string[];
  /** Colour keys (translated in src/lib/catalog.ts) and the photo index each one shows. */
  colors?: [string, number][];
};

const CATALOGUE: Entry[] = [
  // ---- Canapés
  {
    slug: "canape-banana",
    name: { fr: "Canapé Banana", en: "Banana sofa", ar: "كنبة بانانا" },
    categories: ["canapes"],
    photos: ["canapé bana beige.png", "canapé banana blanc.png", "canapé banana bleu.png", "canapé banana gris.png", "canapé banana marron.png"],
    colors: [["Beige", 0], ["White", 1], ["Blue", 2], ["Gray", 3], ["Brown", 4]],
  },
  {
    slug: "canape-angle-boucle-creme",
    name: { fr: "Canapé d’angle bouclé crème", en: "Cream bouclé corner sofa", ar: "كنبة زاوية بوكليه كريمية" },
    categories: ["canapes"],
    photos: ["Canapé d’angle bouclé crème sur base en bois.webp"],
  },
  {
    slug: "canape-angle-boucle-terracotta",
    name: { fr: "Canapé d’angle bouclé terracotta", en: "Terracotta bouclé corner sofa", ar: "كنبة زاوية بوكليه تيراكوتا" },
    categories: ["canapes"],
    photos: ["Canapé d’angle bouclé terracotta touffeté.webp"],
  },
  {
    slug: "canape-angle-coussins-colores",
    name: { fr: "Canapé d’angle crème à coussins colorés", en: "Cream corner sofa with coloured cushions", ar: "كنبة زاوية كريمية بوسائد ملونة" },
    categories: ["canapes"],
    photos: ["Canapé d’angle crème avec coussins colorés.webp"],
  },
  {
    slug: "canape-capitonne-vert-emeraude",
    name: { fr: "Canapé capitonné vert émeraude", en: "Emerald green tufted sofa", ar: "كنبة مبطنة خضراء زمردية" },
    categories: ["canapes"],
    photos: ["Canapé moelleux vert émeraude touffeté.webp", "WhatsApp Image 2026-11-16 at 20.21.49.jpeg"],
  },
  // ---- Fauteuils
  {
    slug: "fauteuil-bulle",
    name: { fr: "Fauteuil Bulle", en: "Bubble armchair", ar: "كرسي بابل" },
    categories: ["fauteuils"],
    photos: ["Fauteuil bulle bleu marine tricoté.webp", "Fauteuil bulle jaune moutarde texturé.webp", "Fauteuil bulle vert en maille texturée.webp", "Fauteuil lounge bulle en velours bordeaux.png"],
    colors: [["Navy", 0], ["Mustard", 1], ["Green", 2], ["Burgundy", 3]],
  },
  {
    slug: "fauteuil-lounge-boucle",
    name: { fr: "Fauteuil lounge bouclé", en: "Bouclé lounge chair", ar: "كرسي استرخاء بوكليه" },
    categories: ["fauteuils"],
    photos: ["Fauteuil bouclé sculptural sur bois sombre.png", "Fauteuil lounge crème et bois naturel.png"],
    colors: [["Dark wood", 0], ["Natural wood", 1]],
  },
  {
    slug: "fauteuil-sculptural-boucle-ivoire",
    name: { fr: "Fauteuil sculptural en bouclé ivoire", en: "Sculptural ivory bouclé armchair", ar: "كرسي منحوت بوكليه عاجي" },
    categories: ["fauteuils"],
    photos: ["Fauteuil bouclé ivoire sculptural.png"],
  },
  {
    slug: "fauteuil-scandinave",
    name: { fr: "Fauteuil scandinave", en: "Scandinavian armchair", ar: "كرسي إسكندنافي بذراعين" },
    categories: ["fauteuils"],
    photos: ["6bd5145c-8400-4cc8-af90-c1a5f08b4bd9.jpg", "WhatsApp Image 2026-11-16 at 17.53.45.jpeg", "Fauteuil scandinave bleu et bois.png"],
    colors: [["White & black", 0], ["Beige & walnut", 1], ["Navy & teak", 2]],
  },
  {
    slug: "chaise-accoudoirs-boucle",
    name: { fr: "Chaise à accoudoirs en bouclé", en: "Bouclé dining armchair", ar: "كرسي طعام بذراعين بوكليه" },
    categories: ["chaises", "fauteuils"],
    photos: ["Fauteuil crème au cadre noir sculptural.webp", "WhatsApp Image 2026-11-16 at 17.53.45 (4).jpeg", "Fauteuil bouclé crème et bois noir.png"],
    colors: [["Cream & black", 0], ["Cream & walnut", 1]],
  },
  // ---- Chaises
  {
    slug: "chaise-dossier-rond-boucle",
    name: { fr: "Chaise à dossier rond en bouclé crème", en: "Cream bouclé chair with round backrest", ar: "كرسي بوكليه كريمي بظهر دائري" },
    categories: ["chaises"],
    photos: ["Fauteuil moderne crème et bois foncé.png", "Fauteuil crème et bois sombre minimaliste.webp"],
  },
  // ---- Lits
  {
    slug: "lit-bulle-ivoire",
    name: { fr: "Lit Bulle ivoire", en: "Ivory bubble bed", ar: "سرير بابل عاجي" },
    categories: ["lits"],
    photos: ["Lit bulle ivoire avec coussins texturés.webp"],
  },
  {
    slug: "lit-tete-capitonnee-beige",
    name: { fr: "Lit à tête de lit capitonnée beige", en: "Beige bed with channel-tufted headboard", ar: "سرير بيج بلوح رأس مبطن" },
    categories: ["lits"],
    photos: ["Lit capitonné beige avec plateforme grise (1).webp"],
  },
  {
    slug: "lit-capitonne-gris",
    name: { fr: "Lit capitonné gris", en: "Grey channel-tufted bed", ar: "سرير رمادي مبطن" },
    categories: ["lits"],
    photos: ["WhatsApp Image 2026-11-16 at 20.22.43.jpeg"],
  },
  {
    slug: "lit-capitonne-beige-texture",
    name: { fr: "Lit capitonné beige texturé", en: "Textured beige tufted bed", ar: "سرير بيج مبطن بملمس ناعم" },
    categories: ["lits"],
    photos: ["Lit capitonné beige texturé sans matelas.webp"],
  },
  {
    slug: "lit-rembourre-creme",
    name: { fr: "Lit rembourré crème", en: "Cream upholstered bed", ar: "سرير منجد كريمي" },
    categories: ["lits"],
    photos: ["Lit rembourré crème à tête de lit capitonnée.webp"],
  },
  // ---- Miroirs
  {
    slug: "miroir-organique",
    name: { fr: "Miroir organique", en: "Organic mirror", ar: "مرآة بشكل عضوي" },
    categories: ["miroirs"],
    photos: ["Miroir organique en bouclé ivoire.webp", "Miroir organique en tissu beige velours.webp"],
    colors: [["Ivory bouclé", 0], ["Beige velvet", 1]],
  },
  // ---- Poufs
  {
    slug: "pouf-geometrique-noir-ivoire",
    name: { fr: "Pouf géométrique noir et ivoire", en: "Black and ivory geometric pouf", ar: "بوف هندسي أسود وعاجي" },
    categories: ["poufs"],
    photos: ["Pouf cylindrique géométrique noir et ivoire.webp"],
  },
  {
    slug: "pouf-geometrique",
    name: { fr: "Pouf géométrique", en: "Geometric pouf", ar: "بوف هندسي" },
    categories: ["poufs"],
    photos: ["Pouf géométrique rouge et crème.webp", "Pouf géométrique terracotta et crème.webp"],
    colors: [["Red", 0], ["Terracotta", 1]],
  },
  {
    slug: "pouf-boucle-trois-niveaux",
    name: { fr: "Pouf rond en bouclé à trois niveaux", en: "Three-tier round bouclé pouf", ar: "بوف دائري بوكليه بثلاث طبقات" },
    categories: ["poufs"],
    photos: ["Pouf rond en bouclé crème à trois niveaux.webp"],
  },
  {
    slug: "pouf-rond-beige",
    name: { fr: "Pouf rond en tissu beige", en: "Round beige fabric pouf", ar: "بوف دائري بقماش بيج" },
    categories: ["poufs"],
    photos: ["Pouf rond en tissu beige texturé.webp"],
  },
  // ---- Tables basses
  {
    slug: "table-basse-bloc-travertin",
    name: { fr: "Table basse bloc en travertin", en: "Travertine block coffee table", ar: "طاولة قهوة كتلة من الترافرتين" },
    categories: ["tables-basses"],
    photos: ["Bloc de travertin beige minimaliste.webp"],
  },
  {
    slug: "table-basse-pieds-canneles",
    name: { fr: "Table basse beige à pieds cannelés", en: "Beige coffee table with fluted legs", ar: "طاولة قهوة بيج بأرجل مضلعة" },
    categories: ["tables-basses"],
    photos: ["Table basse beige à pieds cannelés.webp"],
  },
  {
    slug: "table-basse-noyer-organique",
    name: { fr: "Table basse organique en noyer", en: "Organic walnut coffee table", ar: "طاولة قهوة عضوية من خشب الجوز" },
    categories: ["tables-basses"],
    photos: ["Table basse en noyer aux formes organiques.png"],
  },
  {
    slug: "table-basse-travertin-pieds-noirs",
    name: { fr: "Table basse travertin et piédestaux noirs", en: "Travertine coffee table with black pedestals", ar: "طاولة قهوة ترافرتين بقواعد سوداء" },
    categories: ["tables-basses"],
    photos: ["Table basse en travertin et piédestaux noirs.webp"],
  },
  {
    slug: "table-basse-beton",
    name: { fr: "Table basse géométrique en béton", en: "Geometric concrete coffee table", ar: "طاولة قهوة هندسية من الخرسانة" },
    categories: ["tables-basses"],
    photos: ["Table basse géométrique en béton gris pâle.webp"],
  },
  {
    slug: "table-basse-travertin-beige",
    name: { fr: "Table basse moderne en travertin beige", en: "Modern beige travertine coffee table", ar: "طاولة قهوة عصرية من الترافرتين البيج" },
    categories: ["tables-basses"],
    photos: ["Table basse moderne en travertin beige.webp"],
  },
  {
    slug: "table-basse-ovale-travertin-cannele",
    name: { fr: "Table basse ovale en travertin cannelé", en: "Oval fluted travertine coffee table", ar: "طاولة قهوة بيضاوية من الترافرتين المضلع" },
    categories: ["tables-basses"],
    photos: ["Table basse ovale en travertin cannelé.webp"],
  },
  {
    slug: "table-basse-ovale-travertin-creme",
    name: { fr: "Table basse ovale en travertin crème", en: "Oval cream travertine coffee table", ar: "طاولة قهوة بيضاوية من الترافرتين الكريمي" },
    categories: ["tables-basses"],
    photos: ["Table basse ovale en travertin crème.webp"],
  },
  {
    slug: "table-basse-bois-verre",
    name: { fr: "Table basse sculpturale en bois et verre", en: "Sculptural wood and glass coffee table", ar: "طاولة قهوة منحوتة من الخشب والزجاج" },
    categories: ["tables-basses"],
    photos: ["Table basse sculpturale en bois et verre.webp"],
  },
  {
    slug: "tables-gigognes-marbre-creme",
    name: { fr: "Tables gigognes en marbre crème", en: "Cream marble nesting tables", ar: "طاولات متداخلة من الرخام الكريمي" },
    categories: ["tables-basses", "tables-de-chevet"],
    photos: ["Tables gigognes en marbre crème facetté.webp"],
  },
  {
    slug: "tables-gigognes-noyer",
    name: { fr: "Tables gigognes en noyer foncé", en: "Dark walnut nesting tables", ar: "طاولات متداخلة من الجوز الداكن" },
    categories: ["tables-basses", "tables-de-chevet"],
    photos: ["Tables gigognes en noyer foncé.webp"],
  },
  {
    slug: "tables-gigognes-marbre-noir",
    name: { fr: "Tables gigognes en marbre noir", en: "Black marble nesting tables", ar: "طاولات متداخلة من الرخام الأسود" },
    categories: ["tables-basses", "tables-de-chevet"],
    photos: ["WhatsApp Image 2026-11-16 at 17.53.44 (4).jpeg"],
  },
];

/**
 * Turn the studio backdrop pure white, so photos blend seamlessly into the site's sand tiles
 * (cards use mix-blend-multiply: white disappears, anything greyer shows as a box).
 * Flood fill from the edges through light, neutral pixels only: the furniture is never touched
 * unless it is connected to the edge by backdrop-coloured pixels.
 */
function whitenBackdrop(px: Buffer, w: number, h: number, ch: number) {
  const at = (i: number) => i * ch;
  const light = (i: number, min: number) => {
    const o = at(i);
    const r = px[o], g = px[o + 1], b = px[o + 2];
    return Math.min(r, g, b) >= min && Math.max(r, g, b) - Math.min(r, g, b) <= 8;
  };
  // Backdrop brightness from the darkest corner; most photos are ~253, the Banana renders ~227.
  const corners = [0, w - 1, (h - 1) * w, h * w - 1].map((i) => Math.min(px[at(i)], px[at(i) + 1], px[at(i) + 2]));
  const min = Math.min(250, Math.min(...corners) - 3);
  const seen = new Uint8Array(w * h);
  const stack: number[] = [];
  for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
  while (stack.length) {
    const i = stack.pop()!;
    if (seen[i] || !light(i, min)) continue;
    seen[i] = 1;
    const o = at(i);
    px[o] = px[o + 1] = px[o + 2] = 255;
    const x = i % w, y = (i - x) / w;
    if (x > 0) stack.push(i - 1);
    if (x < w - 1) stack.push(i + 1);
    if (y > 0) stack.push(i - w);
    if (y < h - 1) stack.push(i + w);
  }
}

// Fail fast on typos before touching anything.
const available = new Set(await readdir(src));
const missing = CATALOGUE.flatMap((e) => e.photos).filter((p) => !available.has(p));
if (missing.length) throw new Error("Photos not found:\n" + missing.join("\n"));
const used = new Set(CATALOGUE.flatMap((e) => e.photos));
const unused = [...available].filter((f) => !used.has(f));

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

const products = [];
for (const [id, e] of CATALOGUE.entries()) {
  const images: string[] = [];
  for (const [n, photo] of e.photos.entries()) {
    const file = `${e.slug}-${n + 1}.webp`;
    const { data, info } = await sharp(join(src, photo))
      .rotate()
      .resize(1600, 1600, { fit: "inside", withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .raw()
      .toBuffer({ resolveWithObject: true });
    whitenBackdrop(data, info.width, info.height, info.channels);
    await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
      .webp({ quality: 88, effort: 6 })
      .toFile(join(out, file));
    images.push(file);
  }
  products.push({
    id: id + 1,
    slug: e.slug,
    name: e.name,
    sku: null,
    price: null,
    regularPrice: null,
    inStock: true,
    rating: 0,
    reviews: 0,
    categories: e.categories,
    colors: (e.colors ?? []).map(([c]) => c),
    colorImages: (e.colors ?? []).map(([, i]) => i),
    styles: [],
    images,
  });
}

await Bun.write(join(root, "src/data/products.json"), JSON.stringify(products, null, 2) + "\n");
console.log(`${products.length} products, ${products.reduce((n, p) => n + p.images.length, 0)} photos`);
console.log(`Not used (duplicates of photos above):\n  ${unused.join("\n  ")}`);
