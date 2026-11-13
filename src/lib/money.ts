/**
 * Price formatting shared by the pages (build time) and the cart (browser).
 * Dirhams read as "5 880 DH" in French, "5,880 MAD" in English and "5.880 درهم" in Arabic,
 * as is usual in Morocco (Western digits in all three).
 */
type Lang = "fr" | "en" | "ar";
const LOCALE: Record<Lang, string> = { fr: "fr-FR", en: "en-US", ar: "ar-MA" };
const MAD_UNIT: Record<Lang, string> = { fr: "DH", en: "MAD", ar: "درهم" };

export function formatMoney(value: number, lang: Lang, currency: string) {
  const digits = value % 1 === 0 ? 0 : 2;
  if (currency === "MAD") {
    const n = new Intl.NumberFormat(LOCALE[lang], {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
      numberingSystem: "latn",
    }).format(value);
    // No-break space keeps the amount and its unit on one line.
    return `${n} ${MAD_UNIT[lang]}`;
  }
  return new Intl.NumberFormat(LOCALE[lang], { style: "currency", currency, maximumFractionDigits: digits }).format(value);
}
