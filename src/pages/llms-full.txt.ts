import type { APIRoute } from "astro";
import { llmsFullTxt, textResponse } from "../lib/llms";

/** Full catalogue with every description in French, English and Arabic. */
export const GET: APIRoute = () => textResponse(llmsFullTxt());
