import type { APIRoute, GetStaticPaths } from "astro";
import { products } from "../../../lib/catalog";
import { imageResponse, productOg } from "../../../lib/og";

/** One 1200×630 share image per product, shared by its FR / EN / AR pages. */
export const getStaticPaths = (() =>
  products.filter((p) => p.images.length).map((p) => ({ params: { slug: p.slug }, props: { file: p.images[0] } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => imageResponse(await productOg(props.file as string), "image/jpeg");
