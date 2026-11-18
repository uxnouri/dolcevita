/**
 * llms.txt and llms-full.txt (https://llmstxt.org): a plain Markdown summary of the business and
 * catalogue for AI assistants (ChatGPT, Claude, Perplexity, Gemini…). Built from the same data as
 * the pages, so it never goes out of date.
 */
import { path, useT } from "../i18n";
import { categories, colorLabel, productName, productsIn } from "./catalog";
import { DESCRIPTIONS } from "./descriptions";
import { SERVICES } from "./services";
import { SITE } from "./site";
import { ARTICLES } from "./articles";

const abs = (p: string) => new URL(p, SITE.url).href;
const link = (...args: Parameters<typeof path>) => abs(path(...args));
const firstSentence = (s: string) => s.split(/(?<=\.)\s/)[0];
const phones = SITE.phones.join(" / ");

function header() {
  const en = useT("en");
  return [
    `# ${SITE.name}`,
    "",
    `> Furniture store and interior design studio in Marrakech, Morocco. Made-to-measure sofas, beds, armchairs, chairs, coffee tables, mirrors and poufs, and a turnkey service: 3D design, space planning, furnishing and interior decoration. Slogan: “Donnez vie à votre imaginaire” (${en("hero.title").replace(/\.$/, "")}).`,
    "",
    "## Key facts",
    "",
    `- Showroom: ${SITE.address.street}, ${SITE.address.city} ${SITE.address.postalCode}, Morocco ([Google Maps](${SITE.googleProfile}))`,
    `- Opening hours: ${en("contact.hours")}`,
    `- Phone: ${phones}`,
    `- WhatsApp: https://wa.me/${SITE.whatsapp}`,
    `- Email: ${SITE.email}`,
    `- Instagram: ${SITE.instagram}`,
    `- Facebook: ${SITE.facebook}`,
    `- TikTok: ${SITE.tiktok}`,
    "- Prices: on request (quotes by WhatsApp, phone or in the showroom). Currency: Moroccan dirham (MAD).",
    "- Ordering: customers add pieces to a cart on the site and send it as a WhatsApp message; no online payment.",
    "- Pieces can be customised on request. The turnkey service includes delivery and installation.",
    "- Website languages: French (default, at /), English (/en/) and Arabic (/ar/).",
  ];
}

function pages() {
  const row = (label: string, route: Parameters<typeof path>[1]) =>
    `- ${label}: [FR](${link("fr", route)}) · [EN](${link("en", route)}) · [AR](${link("ar", route)})`;
  return [
    "## Main pages",
    "",
    row("Home", "home"),
    row("Shop (all products)", "shop"),
    row("Turnkey services", "services"),
    row("About", "about"),
    row("Contact", "contact"),
  ];
}

function services() {
  const en = SERVICES.en;
  return [
    "## Services",
    "",
    `${en.lead} Details: ${link("en", "services")}`,
    "",
    ...en.services.map((s) => `- **${s.title}**: ${s.text}`),
    "",
    `How it works: ${en.process.map((p, i) => `${i + 1}. ${p.title}`).join(", ")}.`,
  ];
}

function catalogue(full: boolean) {
  const lines = ["## Product categories", ""];
  for (const c of categories) {
    const n = productsIn(c.slug).length;
    lines.push(
      `- [${c.label.fr} / ${c.label.en}](${link("fr", "category", c.slug)}): ${n ? `${n} products` : "made to order only (ask for a quote)"}`,
    );
  }
  lines.push("", "## Products", "");
  for (const c of categories) {
    const list = productsIn(c.slug);
    if (!list.length) continue;
    lines.push(`### ${c.label.fr} / ${c.label.en}`, "");
    for (const p of list) {
      const d = DESCRIPTIONS[p.slug];
      const colours = p.colors.length ? ` Colours: ${p.colors.map((x) => colorLabel(x, "en")).join(", ")}.` : "";
      if (!full) {
        lines.push(`- [${productName(p, "en")}](${link("en", "product", p.slug)}) (FR: ${productName(p, "fr")}): ${d ? firstSentence(d.en) : ""}${colours}`);
        continue;
      }
      lines.push(
        `#### ${productName(p, "fr")}`,
        "",
        `- FR: ${link("fr", "product", p.slug)}`,
        `- EN: ${link("en", "product", p.slug)} (${productName(p, "en")})`,
        `- AR: ${link("ar", "product", p.slug)} (${productName(p, "ar")})`,
        `- Price: ${p.price === null ? "on request" : `${p.price} MAD`}${colours}`,
        "",
        ...(d ? [d.fr, "", d.en, "", d.ar, ""] : []),
      );
    }
    lines.push("");
  }
  return lines;
}

function journal() {
  return [
    "## Journal (interior design advice for Marrakech and Morocco)",
    "",
    ...ARTICLES.map(
      (a) => `- [${a.title.en}](${link("en", "blog", a.slug)}) (FR: [${a.title.fr}](${link("fr", "blog", a.slug)})): ${a.description.en}`,
    ),
    "",
  ];
}

export function llmsTxt() {
  return [
    ...header(),
    "",
    ...pages(),
    "",
    ...services(),
    "",
    ...catalogue(false),
    ...journal(),
    "## Optional",
    "",
    `- [Full catalogue](${abs("/llms-full.txt")}): every product with its description in French, English and Arabic.`,
    `- [Sitemap](${abs("/sitemap-index.xml")})`,
    "",
  ].join("\n");
}

export function llmsFullTxt() {
  return [...header(), "", ...pages(), "", ...services(), "", ...catalogue(true), ...journal()].join("\n");
}

export const textResponse = (body: string) =>
  new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });

