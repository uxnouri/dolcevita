## Project

Static trilingual (FR default at `/`, EN under `/en/`, AR right-to-left under `/ar/`) Astro + Tailwind 4 site for Dolce Vita Design. Deployed as plain files to Hostinger (`dist/` → `public_html/`). See README.md for where content lives.

- Run everything with Bun: `bun --bun astro dev|build|preview` (Node is not installed on this machine).
- Every page exists three times: thin route files in `src/pages/` (FR), `src/pages/en/` (EN) and `src/pages/ar/` (AR) render shared components from `src/components/pages/`.
- All UI strings go through `useT(lang)` in `src/i18n/index.ts`; URLs through `path(lang, route, slug)`.
- Keep client JS tiny and framework-free (`src/scripts/`). Animate only transform/opacity, use the easing tokens in `global.css`.
- When changing URLs, update the redirects in `public/.htaccess`.

## Documentation

Full documentation: https://docs.astro.build
- Use logical classes (ms-/me-/ps-/pe-/start-/end-), never left/right, and `flip-rtl` on directional icons, so Arabic mirrors.
