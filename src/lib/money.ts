/**
 * Price formatting shared by the pages (build time) and the cart (browser).
 * Dirhams read as "5 880 DH" in French and "5,880 MAD" in English, as is usual in Morocco.
 */
export function formatMoney(value: number, lang: "fr" | "en", currency: string) {
  const locale = lang === "fr" ? "fr-FR" : "en-US";
  const digits = value % 1 === 0 ? 0 : 2;
  if (currency === "MAD") {
    const n = new Intl.NumberFormat(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
    // fr-FR groups with a narrow no-break space; keep the unit on the same line too.
    return `${n} ${lang === "fr" ? "DH" : "MAD"}`;
  }
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: digits }).format(value);
}
