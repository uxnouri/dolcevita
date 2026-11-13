## Project

Static bilingual (FR default at `/`, EN under `/en/`) Astro + Tailwind 4 site for Dolce Vita Design. Deployed as plain files to Hostinger (`dist/` → `public_html/`). See README.md for where content lives.

- Run everything with Bun: `bun --bun astro dev|build|preview` (Node is not installed on this machine).
- Every page exists twice: thin route files in `src/pages/` (FR) and `src/pages/en/` (EN) render shared components from `src/components/pages/`.
- All UI strings go through `useT(lang)` in `src/i18n/index.ts`; URLs through `path(lang, route, slug)`.
- Keep client JS tiny and framework-free (`src/scripts/`). Animate only transform/opacity, use the easing tokens in `global.css`.
- When changing URLs, update the redirects in `public/.htaccess`.

## Documentation

Full documentation: https://docs.astro.build
