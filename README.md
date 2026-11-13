# Dolce Vita Design

Fast, trilingual (French / English / Arabic) static website for **Dolce Vita Design**, Marrakech. It replaces the old WordPress/WooCommerce site at dolcevitadesign.ma.

- **Astro 7** (static output, zero framework JS)
- **Tailwind CSS 4**
- **Lucide** icons (`@lucide/astro`, rendered to inline SVG at build time)
- Images optimised at build time to responsive WebP (`astro:assets` + sharp)
- Arabic is fully right-to-left, set in Cairo (loaded only when Arabic text is on the page)
- About 1 KB of JavaScript per page: native `<dialog>`, `IntersectionObserver`, `localStorage`

## Commands

Node isn't required. Everything runs with [Bun](https://bun.sh).

| Command | What it does |
| --- | --- |
| `bun install` | Install dependencies |
| `bun run dev` | Dev server at `http://localhost:4321` |
| `bun run build` | Production build into `dist/` |
| `bun run preview` | Serve the built `dist/` locally |
| `bun run check` | Type-check the site |

If a command complains about Node, prefix it with `bun --bun`, e.g. `bun --bun astro build`.

## Deploy to Hostinger

1. `bun run build`
2. In hPanel → **File Manager** → `public_html/`, delete the old WordPress files (keep a backup first).
3. Upload the **contents** of `dist/`, including the hidden `.htaccess` file.

`.htaccess` (source: `public/.htaccess`) handles HTTPS, `www` → bare domain, long-term caching of hashed assets, compression, the 404 page, and **301 redirects from every old WordPress URL** (`/product/…`, `/product-category/…`, `/shop/`, old blog URLs, etc.), so existing Google rankings carry over.

## URLs

French is the default language at the root; English lives under `/en/` and Arabic under `/ar/`. The language menu in the header (and in the mobile menu) always links to the same page in the other languages.

| Page | French | English | Arabic |
| --- | --- | --- | --- |
| Home | `/` | `/en/` | `/ar/` |
| Shop | `/boutique/` | `/en/shop/` | `/ar/shop/` |
| Category | `/categorie/<slug>/` | `/en/category/<slug>/` | `/ar/category/<slug>/` |
| Product | `/produit/<slug>/` | `/en/product/<slug>/` | `/ar/product/<slug>/` |
| Journal | `/blog/` | `/en/blog/` | `/ar/blog/` |
| Services | `/services/` | `/en/services/` | `/ar/services/` |
| About | `/a-propos/` | `/en/about/` | `/ar/about/` |
| Contact | `/contact/` | `/en/contact/` | `/ar/contact/` |

When styling, use logical Tailwind classes (`ms-`/`me-`, `ps-`/`pe-`, `start-`/`end-`) instead of left/right ones so Arabic mirrors correctly, and add `class="flip-rtl"` to directional icons (arrows, chevrons).

## Where to edit things

| What | File |
| --- | --- |
| Phone numbers, WhatsApp number, email, address, map link, Instagram, currency | `src/lib/site.ts` |
| All interface text (FR + EN + AR) | `src/i18n/index.ts` |
| Products (name, price, images, categories, colours) | `src/data/products.json` |
| Category, colour and style names per language, home page featured products | `src/lib/catalog.ts` |
| Search synonyms (French/Arabic words → English product names) | `src/lib/search.ts` |
| Journal titles and article text | `src/lib/blog.ts`, `src/data/posts.json` |
| Colours, fonts, motion curves | `src/styles/global.css` (`@theme`) |
| Images | `src/assets/{products,site,blog,categories}/` |

## Catalogue and services

The shop is organised in the client's 12 categories, in this order: Lits, Tables de chevet, Tables basses, Canapés, Rideaux, Poufs, Meubles TV, Commodes, Miroirs, Chaises, Fauteuils, Tables à manger (names in all three languages and icons: `src/lib/catalog.ts`, `src/components/CategoryIcon.astro`).

- A product appears on the site only if its `categories` in `src/data/products.json` contains at least one of those slugs (`lits`, `tables-de-chevet`, `tables-basses`, `canapes`, `rideaux`, `poufs`, `meubles-tv`, `commodes`, `miroirs`, `chaises`, `fauteuils`, `tables-a-manger`). The old demo lamps, desks, wardrobes and cushions have `categories: []`, so they're hidden but kept; give one a category to bring it back.
- A category with no products yet (currently Lits, Rideaux, Miroirs) shows a "made to order" panel with a WhatsApp button instead of an empty grid.
- The turnkey service page (Conception 3D, Aménagement, Ameublement & décoration d'intérieur) is written in `src/lib/services.ts`.

## Prices

Prices are in **Moroccan dirhams**, stored as plain numbers in `src/data/products.json` (`price` and, when on sale, `regularPrice`), and shown as "5 880 DH" in French, "5,880 MAD" in English and "5.880 درهم" in Arabic (`src/lib/money.ts`). The old WooCommerce store priced in USD; those were converted once at 9.82 MAD/USD and rounded to the nearest 10 DH, so set real prices directly in the JSON.

## Orders

There's no payment backend. The cart is stored in the visitor's browser, and **"Finaliser sur WhatsApp"** opens WhatsApp with the full order (items, quantities, total) addressed to the number in `src/lib/site.ts`. Each product page also has a direct "Commander sur WhatsApp" button.

## Re-importing from WordPress

`scripts/import-wordpress.ts` rebuilds `src/data/*.json` and downloads images from a WooCommerce Store API export:

```bash
curl -s "https://dolcevitadesign.ma/wp-json/wc/store/v1/products?per_page=100" -o crawl/products.json
curl -s "https://dolcevitadesign.ma/wp-json/wc/store/v1/products/categories?per_page=100" -o crawl/cats.json
curl -s "https://dolcevitadesign.ma/wp-json/wp/v2/posts?per_page=100&_embed=wp:featuredmedia" -o crawl/posts.json
bun scripts/import-wordpress.ts crawl
```

Do this **before** switching the domain over, while WordPress is still online.

`scripts/make-icons.ts` regenerates `public/og.jpg` (social share image) and `public/apple-touch-icon.png`.
