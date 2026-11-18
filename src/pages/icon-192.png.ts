import type { APIRoute } from "astro";
import { iconPng, imageResponse } from "../lib/og";

export const GET: APIRoute = async () => imageResponse(await iconPng(192), "image/png");
