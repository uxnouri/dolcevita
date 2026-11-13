/**
 * One-off importer: turns the old WordPress/WooCommerce export into local data + assets.
 * Usage: bun scripts/import-wordpress.ts <dir-with-products.json,cats.json,posts.json>
 */
import { mkdir, writeFile, exists } from "node:fs/promises";
import { join } from "node:path";

const src = process.argv[2];
if (!src) throw new Error("Pass the crawl directory");
const root = join(import.meta.dir, "..");
const read = async (f: string) => JSON.parse(await Bun.file(join(src, f)).text());

const products = await read("products.json");
const cats = await read("cats.json");
const posts = await read("posts.json");

const decode = (s: string) =>
  s.replace(/&#8211;/g, "–").replace(/&#8217;/g, "’").replace(/&#8243;/g, "″").replace(/&amp;/g, "&").replace(/&#038;/g, "&");

const localName = (url: string) => {
  const m = url.match(/uploads\/(.+)$/);
  return (m ? m[1] : url.split("/").pop()!).replace(/\//g, "-").toLowerCase();
};

const queue: { url: string; dest: string }[] = [];
const asset = (url: string, folder: string) => {
  const name = localName(url);
  queue.push({ url, dest: join(root, "src/assets", folder, name) });
  return name;
};

const cents = (v: string, minor: number) => Math.round(Number(v)) / 10 ** minor;

/**
 * The old WooCommerce store priced everything in USD. The site sells in dirhams, so USD prices are
 * converted at this rate (mid-market, early November 2026) and rounded to the nearest 10 DH.
 */
const USD_TO_MAD = 9.82;
const toMAD = (value: number, currency: string) => {
  if (currency === "MAD") return value;
  if (currency !== "USD") throw new Error(`No conversion rate for ${currency}`);
  return Math.max(10, Math.round((value * USD_TO_MAD) / 10) * 10);
};

const outProducts = products.map((p: any) => {
  const minor = p.prices.currency_minor_unit;
  const currency = p.prices.currency_code;
  const price = toMAD(cents(p.prices.price_range?.min_amount ?? p.prices.price, minor), currency);
  const regular = toMAD(cents(p.prices.price_range?.max_amount ?? p.prices.regular_price, minor), currency);
  return {
    id: p.id,
    slug: p.slug,
    name: decode(p.name),
    sku: p.sku || null,
    price,
    regularPrice: regular > price ? regular : null,
    inStock: p.is_in_stock,
    rating: Number(p.average_rating) || 0,
    reviews: p.review_count,
    categories: p.categories.map((c: any) => c.slug),
    colors: p.attributes.find((a: any) => a.taxonomy === "pa_color")?.terms.map((t: any) => t.name) ?? [],
    styles: p.attributes.find((a: any) => a.taxonomy === "pa_style")?.terms.map((t: any) => t.name) ?? [],
    images: p.images.map((i: any) => asset(i.src, "products")),
  };
});

const outCats = cats.map((c: any) => ({
  id: c.id,
  slug: c.slug,
  name: decode(c.name),
  parent: cats.find((x: any) => x.id === c.parent)?.slug ?? null,
  count: c.count,
  image: c.image?.src ? asset(c.image.src, "categories") : null,
}));

const outPosts = posts
  .filter((p: any) => p.slug !== "hello-world")
  .map((p: any) => {
    const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    return { slug: p.slug, title: decode(p.title.rendered), date: p.date.slice(0, 10), image: img ? asset(img, "blog") : null };
  });

// Site-level imagery (hero slides, banners, category icons, about, logo)
const site = [
  "revslider/Home-12-Modern/slide1-demo121.jpg",
  "revslider/Home-12-Modern/slide2-demo121.jpg",
  "revslider/Home-12-Modern/slide3-demo121.jpg",
  "2025/04/modern-banner1.jpg",
  "2025/04/modern-banner2.jpg",
  "2025/04/modern-banner4.jpg",
  "2025/04/modern-banner5.jpg",
  "2025/04/about-us-1-modern.jpg",
  "2025/04/about-us-2-modern.jpg",
  "2025/04/rounded-img1.png",
  "2025/04/rounded-img2.png",
  "2025/03/blog-detail-1-rounded.jpg",
  "2025/03/blog-detail-2-rounded.jpg",
  "2025/03/blog-detail-3-rounded.jpg",
  ...["sofa", "wardrobe", "chair", "desk", "table", "lighting", "cabinet", "office"].map((c) => `2025/01/cat-${c}.png`),
];
for (const s of site) asset(`https://dolcevitadesign.ma/wp-content/uploads/${s}`, "site");
for (const s of ["2026/02/Group-550.svg", "2026/02/Group-551.svg", "2026/02/sd.svg"])
  queue.push({ url: `https://dolcevitadesign.ma/wp-content/uploads/${s}`, dest: join(root, "public/brand", localName(s)) });

await mkdir(join(root, "src/data"), { recursive: true });
await writeFile(join(root, "src/data/products.json"), JSON.stringify(outProducts, null, 2));
await writeFile(join(root, "src/data/categories.json"), JSON.stringify(outCats, null, 2));
await writeFile(join(root, "src/data/posts.json"), JSON.stringify(outPosts, null, 2));

// Download with limited concurrency, skipping files we already have.
const unique = [...new Map(queue.map((q) => [q.dest, q])).values()];
let done = 0, failed: string[] = [];
const worker = async () => {
  for (let job = unique.shift(); job; job = unique.shift()) {
    if (await exists(job.dest)) { done++; continue; }
    await mkdir(join(job.dest, ".."), { recursive: true });
    const res = await fetch(job.url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok || !/image|svg|octet/.test(res.headers.get("content-type") ?? "")) { failed.push(`${res.status} ${job.url}`); continue; }
    await Bun.write(job.dest, await res.arrayBuffer());
    done++;
  }
};
const total = unique.length;
await Promise.all(Array.from({ length: 8 }, worker));
console.log(`downloaded ${done}/${total}`);
if (failed.length) console.log("FAILED:\n" + failed.join("\n"));
