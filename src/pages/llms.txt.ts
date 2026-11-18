import type { APIRoute } from "astro";
import { llmsTxt, textResponse } from "../lib/llms";

/** https://llmstxt.org summary for AI assistants. */
export const GET: APIRoute = () => textResponse(llmsTxt());
