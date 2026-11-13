/**
 * Shop search helpers, shared by the build (indexing) and the browser (querying).
 * Kept free of imports so it adds almost nothing to the page's JavaScript.
 */

/** Lower case, no accents or Arabic vowel marks/tatweel, unified Arabic letter forms. */
export const normalizeSearch = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\p{Diacritic}ً-ٰٟـ]/gu, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();

/**
 * Product names are in English. Common French and Arabic words map to English ones so searches
 * in any language find them. Keys must already be normalised (no accents, plain alef, ه for ة).
 */
export const SYNONYMS: Record<string, string[]> = {
  // French
  lampe: ["lamp", "light"], luminaire: ["lamp", "light"], lumiere: ["light", "lamp"], lampadaire: ["floor", "lamp"],
  canape: ["sofa", "couch"], fauteuil: ["armchair", "chair"], chaise: ["chair"], siege: ["chair", "seat"],
  coussin: ["cushion", "pillow"], oreiller: ["pillow"], bureau: ["desk", "office"], armoire: ["wardrobe", "armoire"],
  tabouret: ["stool"], lit: ["bed"], miroir: ["mirror"], etagere: ["shelf"], commode: ["drawer", "dresser"],
  tiroir: ["drawer"], placard: ["cabinet", "cupboard"], cuir: ["leather"], bois: ["wood"], velours: ["velvet"],
  rond: ["round"], ronde: ["round"], blanc: ["white"], blanche: ["white"], noir: ["black"], basse: ["coffee"],
  chevet: ["nightstand", "bedside"], jardin: ["garden", "outdoor"], exterieur: ["outdoor"], tissu: ["fabric"],
  // Arabic
  مصباح: ["lamp", "light"], مصابيح: ["lamp", "light"], اناره: ["lamp", "light"], ضوء: ["light", "lamp"],
  كنبه: ["sofa", "couch"], كنبات: ["sofa", "couch"], اريكه: ["sofa", "couch"], صوفا: ["sofa"],
  كرسي: ["chair"], كراسي: ["chair"], فوتاي: ["armchair"], وساده: ["cushion", "pillow"], مخده: ["pillow", "cushion"],
  مكتب: ["desk", "office"], خزانه: ["wardrobe", "cabinet", "armoire"], دولاب: ["wardrobe", "armoire"],
  طاوله: ["table"], طاولات: ["table"], سرير: ["bed"], مراه: ["mirror"], رف: ["shelf"], درج: ["drawer"],
  جلد: ["leather"], خشب: ["wood"], خشبي: ["wood"], مخمل: ["velvet"], قماش: ["fabric"], دائري: ["round"],
  ابيض: ["white"], اسود: ["black"], قهوه: ["coffee"], حديقه: ["garden", "outdoor"], خارجي: ["outdoor"],
  مقعد: ["seat", "chair", "stool"],
};

/** Does the indexed text match every word of the query (directly or through a synonym)? */
export function matches(text: string, query: string) {
  const terms = normalizeSearch(query).split(/\s+/).filter(Boolean);
  return terms.every((term) => {
    const alts = SYNONYMS[term] ?? SYNONYMS[term.replace(/s$/, "")] ?? SYNONYMS[term.replace(/^ال/, "")] ?? [];
    return [term, ...alts].some((w) => text.includes(w));
  });
}
