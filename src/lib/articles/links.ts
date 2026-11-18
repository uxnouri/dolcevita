import type { RouteKey } from "../../i18n";
import { getCategory, getProduct } from "../catalog";
import { PART_1 } from "./part-1";
import { PART_2 } from "./part-2";
import { PART_3 } from "./part-3";

const articleSlugs = new Set([...PART_1, ...PART_2, ...PART_3].map((a) => a.slug));
const PAGES: Record<string, RouteKey> = { shop: "shop", services: "services", contact: "contact", about: "about", home: "home" };

/** "category:canapes" → { route: "category", slug: "canapes" }; undefined when the target doesn't exist. */
export function resolveLink(target: string): { route: RouteKey; slug?: string } | undefined {
  const [kind, slug] = target.split(":");
  if (!slug) return PAGES[kind] ? { route: PAGES[kind] } : undefined;
  if (kind === "category" && getCategory(slug)) return { route: "category", slug };
  if (kind === "product" && getProduct(slug)) return { route: "product", slug };
  if (kind === "blog" && articleSlugs.has(slug)) return { route: "blog", slug };
  return undefined;
}

/** The text without link markup, for meta tags, schema.org and llms.txt. */
export const plainText = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
