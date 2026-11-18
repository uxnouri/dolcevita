import type { APIRoute } from "astro";
import { defaultOg, imageResponse } from "../lib/og";

/** Default 1200×630 share image (home and pages without their own). */
export const GET: APIRoute = async () => imageResponse(await defaultOg(), "image/jpeg");
