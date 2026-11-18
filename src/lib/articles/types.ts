import type { Lang } from "../../i18n";

/**
 * Inline links inside `text` use a small syntax so every language gets its own URL:
 *   [libellé](category:canapes)   [libellé](product:canape-banana)   [libellé](blog:amenager-riad-marrakech)
 *   [libellé](shop)  [libellé](services)  [libellé](contact)  [libellé](about)
 * Allowed in "lead", "p", list item text and FAQ answers.
 */
export type Block =
  | { type: "lead"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  /** Bullet list: [bold start, rest of the sentence]. */
  | { type: "list"; items: [string, string][] }
  /** 2 to 4 real product slugs from src/data/products.json, shown as product cards. */
  | { type: "products"; slugs: string[] }
  /** Questions and answers, also published as schema.org FAQPage. */
  | { type: "faq"; items: [string, string][] }
  /** The standard call to action (WhatsApp + showroom). Put it once, at the end. */
  | { type: "cta" };

export type Article = {
  /** French, lowercase, hyphens: the same slug serves /blog/…, /en/blog/… and /ar/blog/… */
  slug: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  /** Cover photo file name in src/assets/blog/. */
  image: string;
  title: Record<Lang, string>;
  /** Meta description / search snippet: 130–160 characters. */
  description: Record<Lang, string>;
  body: Record<Lang, Block[]>;
};
