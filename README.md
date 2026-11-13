# Dolce Vita Design

Fast, bilingual (French / English) static website for **Dolce Vita Design**, Marrakech. It replaces the old WordPress/WooCommerce site at dolcevitadesign.ma.

- **Astro 7** (static output, zero framework JS)
- **Tailwind CSS 4**
- **Lucide** icons (`@lucide/astro`, rendered to inline SVG at build time)
- Images optimised at build time to responsive WebP (`astro:assets` + sharp)
- About 1 KB of JavaScript per page: native `<dialog>`, `IntersectionObserver`, `localStorage`

## Commands

Node isn't required. Everything runs with [Bun](https://bun.sh).

| Command | What it does |
| --- | --- |
| `bun install` | Install dependencies |
| `bun run dev` | Dev server at `http://localhost:4321` |
| `bun run build` | Production build into `dist/` |
| `bun run preview` | Serve the built `dist/` locally |

If a command complains about Node, prefix it with `bun --bun`, e.g. `bun --bun astro build`.

## Deploy to Hostinger

1. `bun run build`
2. In hPanel → **File Manager** → `public_html/`, delete the old WordPress files (keep a backup first).
3. Upload the **contents** of `dist/`, including the hidden `.htaccess` file.

`.htaccess` (source: `public/.htaccess`) handles HTTPS, `www` → bare domain, long-term caching of hashed assets, compression, the 404 page, and **301 redirects from every old WordPress URL** (`/product/…`, `/product-category/…`, `/shop/`, old blog URLs, etc.), so existing Google rankings carry over.

## URLs

French is the default language at the root; English lives under `/en/`.

| Page | French | English |
| --- | --- | --- |
| Home | `/` | `/en/` |
| Shop | `/boutique/` | `/en/shop/` |
| Category | `/categorie/<slug>/` | `/en/category/<slug>/` |
| Product | `/produit/<slug>/` | `/en/product/<slug>/` |
| Journal | `/blog/` | `/en/blog/` |
| About | `/a-propos/` | `/en/about/` |
| Contact | `/contact/` | `/en/contact/` |

## Where to edit things

| What | File |
| --- | --- |
| Phone numbers, WhatsApp number, email, address, map link, Instagram, currency | `src/lib/site.ts` |
| All interface text (FR + EN) | `src/i18n/index.ts` |
| Products (name, price, images, categories, colours) | `src/data/products.json` |
| Category names in French/English, home page featured products | `src/lib/catalog.ts` |
| Journal titles and article text | `src/lib/blog.ts`, `src/data/posts.json` |
| Colours, fonts, motion curves | `src/styles/global.css` (`@theme`) |
| Images | `src/assets/{products,site,blog,categories}/` |

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
