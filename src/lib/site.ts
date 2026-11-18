/** Business details — edit here, used everywhere (header, footer, contact, schema.org). */
export const SITE = {
  name: "Dolce Vita Design",
  url: "https://dolcevitadesign.ma",
  email: "contact@dvd.ma",
  phones: ["+212 66 127 2617", "+212 61 176 3241"],
  /** Number used for WhatsApp orders (digits only, international format). */
  whatsapp: "212661272617",
  address: {
    street: "124 Al Massar, Route de Safi",
    city: "Marrakech",
    country: "MA",
  },
  mapUrl: "https://maps.app.goo.gl/CqYkEvacsGxypDj98",
  /** Shown in the footer and on the contact page, and listed in the schema.org data (sameAs). */
  instagram: "https://www.instagram.com/dolcevitadesign.ma/",
  /** Prices in the catalogue are stored in this currency. */
  currency: "MAD",
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

/** "@dolcevitadesign.ma" from the profile URL. */
export const instagramHandle = (url: string) => "@" + new URL(url).pathname.split("/").filter(Boolean)[0];
