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

The products are the client's own (33 products, 49 photos, November 2026). Each one in `src/data/products.json` has:

| Field | Meaning |
| --- | --- |
| `name` | `{ "fr", "en", "ar" }` |
| `price` | Dirhams, or `null` to show "Prix sur demande" (and "Sur devis" as the cart total) |
| `regularPrice` | Old price, struck through only when higher than `price` |
| `categories` | Category slugs (`lits`, `tables-de-chevet`, `tables-basses`, `canapes`, `rideaux`, `poufs`, `meubles-tv`, `commodes`, `miroirs`, `chaises`, `fauteuils`, `tables-a-manger`); empty = hidden |
| `images` | Files in `src/assets/products/`, gallery order |
| `colors` + `colorImages` | Colour variants: each colour (English key, translated in `src/lib/catalog.ts`) and the index of its photo. Shoppers pick a colour chip; it switches the photo and goes into the cart and WhatsApp message |

- A category with no products yet (currently Rideaux, Meubles TV, Commodes, Tables à manger) shows a "made to order" panel with a WhatsApp button instead of an empty grid.
- The home page "Nouveautés" and "Nos coups de cœur" selections are lists of slugs in `src/lib/catalog.ts`.
- The turnkey service page (Conception 3D, Aménagement, Ameublement & décoration d'intérieur) is written in `src/lib/services.ts`.

### Adding photos

`scripts/import-client-photos.ts` converted the client's photo folder: it maps each photo to a product (the catalogue is defined at the top of the script), resizes to 1600 px WebP and turns the studio backdrop pure white so photos blend into the sand-coloured cards. Running it again **regenerates `products.json` and overwrites edits** (such as prices). For a new product after that, add the photo to `src/assets/products/` (white background works best) and a new entry to `products.json` by hand.

## Prices

Prices are in **Moroccan dirhams**, shown as "5 880 DH" in French, "5,880 MAD" in English and "5.880 درهم" in Arabic (`src/lib/money.ts`). The client hasn't sent prices yet, so every product is `null` ("Prix sur demande"). Set real numbers in `products.json`; the price sort options appear in the shop as soon as one product has a price.

## Orders

There's no payment backend. The cart is stored in the visitor's browser, and **"Finaliser sur WhatsApp"** opens WhatsApp with the full order (items, quantities, total) addressed to the number in `src/lib/site.ts`. Each product page also has a direct "Commander sur WhatsApp" button.

`scripts/make-icons.ts` regenerates `public/og.jpg` (social share image) and `public/apple-touch-icon.png`.
