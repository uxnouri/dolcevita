import { PART_1 } from "./part-1";
import { PART_2 } from "./part-2";
import { PART_3 } from "./part-3";
import type { Article } from "./types";

export type { Article, Block } from "./types";

/** Every journal article, newest first. */
export const ARTICLES: Article[] = [...PART_1, ...PART_2, ...PART_3].sort((a, b) => b.date.localeCompare(a.date));

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
