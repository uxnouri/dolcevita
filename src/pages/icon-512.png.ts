import type { APIRoute } from "astro";
import { iconPng, imageResponse } from "../lib/og";

/** Square logo for schema.org and the web app manifest. */
export const GET: APIRoute = async () => imageResponse(await iconPng(512), "image/png");
