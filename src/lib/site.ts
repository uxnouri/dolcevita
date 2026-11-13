/** Business details — edit here, used everywhere (header, footer, contact, schema.org). */
export const SITE = {
  name: "Dolce Vita Design",
  url: "https://dolcevitadesign.ma",
  email: "hi@dolcevitadesign.ma",
  phones: ["+212 66 127 2617", "+212 61 176 3241"],
  /** Number used for WhatsApp orders (digits only, international format). */
  whatsapp: "212661272617",
  address: {
    street: "124 Al Massar, Route de Safi",
    city: "Marrakech",
    country: "MA",
  },
  mapUrl: "https://maps.app.goo.gl/CqYkEvacsGxypDj98",
  /** Add your Instagram profile URL to show the icon in the footer. */
  instagram: "",
  /** Prices in the catalogue are stored in this currency. */
  currency: "USD",
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
