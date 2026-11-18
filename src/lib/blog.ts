import type { Lang } from "../i18n";
import { ARTICLES, getArticle } from "./articles";

/** A journal post as listed on cards (the full text lives in src/lib/articles/). */
export type Post = { slug: string; date: string; image: string | null; title: Record<Lang, string> };

export const posts: Post[] = ARTICLES.map((a) => ({ slug: a.slug, date: a.date, image: a.image, title: a.title }));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export { ARTICLES, getArticle };
