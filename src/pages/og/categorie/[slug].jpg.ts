import type { APIRoute, GetStaticPaths } from "astro";
import { categories, productsIn } from "../../../lib/catalog";
import { categoryOg, imageResponse } from "../../../lib/og";

/** One 1200×630 share image per category that has products (empty ones use the default image). */
export const getStaticPaths = (() =>
  categories
    .map((c) => ({ c, files: productsIn(c.slug).flatMap((p) => p.images.slice(0, 1)) }))
    .filter(({ files }) => files.length)
    .map(({ c, files }) => ({ params: { slug: c.slug }, props: { files } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => imageResponse(await categoryOg(props.files as string[]), "image/jpeg");
