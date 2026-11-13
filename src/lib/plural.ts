/**
 * "N products" with correct plurals in every language, used at build time and in the browser.
 * French counts 0 and 1 as singular; Arabic has six forms (zero, one, two, few, many, other).
 */
type Lang = "fr" | "en" | "ar";
const LOCALE: Record<Lang, string> = { fr: "fr-FR", en: "en-US", ar: "ar" };

const PRODUCTS: Record<Lang, Partial<Record<Intl.LDMLPluralRule, string>> & { other: string }> = {
  fr: { one: "{n} produit", other: "{n} produits" },
  en: { one: "{n} product", other: "{n} products" },
  ar: { zero: "لا توجد منتجات", one: "منتج واحد", two: "منتجان", few: "{n} منتجات", many: "{n} منتجًا", other: "{n} منتج" },
};

export function productCount(n: number, lang: Lang) {
  const rule = new Intl.PluralRules(LOCALE[lang]).select(n);
  const forms = PRODUCTS[lang];
  return (forms[rule] ?? forms.other).replace("{n}", String(n));
}
