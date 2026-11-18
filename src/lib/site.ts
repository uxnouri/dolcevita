/** Business details — edit here, used everywhere (header, footer, contact, schema.org). */
export const SITE = {
  name: "Dolce Vita Design",
  url: "https://dolcevitadesign.ma",
  email: "contact@dvd.ma",
  phones: ["+212 66 127 2617", "+212 61 176 3241"],
  /** Number used for WhatsApp orders (digits only, international format). */
  whatsapp: "212661272617",
  /** Keep identical to the Google Business Profile (name, address, phone must match for local SEO). */
  address: {
    street: "124 Al Massar, Route de Safi",
    city: "Marrakech",
    postalCode: "40000",
    region: "Marrakech-Safi",
    country: "MA",
  },
  /** Showroom position, from the Google Maps listing. */
  geo: { latitude: 31.677446, longitude: -8.0406718 },
  /** Opening hours, as listed on Google (closed on Sunday). Days use schema.org names. */
  hours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
  mapUrl: "https://maps.app.goo.gl/CqYkEvacsGxypDj98",
  /** Google Business Profile ("cid" link: stable, unlike share.google links). */
  googleProfile: "https://www.google.com/maps?cid=2664017035853344518",
  /** Same listing, as the feature id the embedded map needs (from the Google Maps URL). */
  mapsFeatureId: "0xdafedd8d0def6b7:0x24f87d6129a0af06",
  /** Shown in the footer and on the contact page, and listed in the schema.org data (sameAs). */
  instagram: "https://www.instagram.com/dolcevitadesign.ma/",
  /** Same for Facebook. The page's permanent address (share links like facebook.com/share/… can expire). */
  facebook: "https://www.facebook.com/profile.php?id=61594561155613",
  tiktok: "https://www.tiktok.com/@dolcevitadesign_",
  /** Prices in the catalogue are stored in this currency. */
  currency: "MAD",
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

/** "@dolcevitadesign.ma" from an Instagram or TikTok profile URL. */
export const handle = (url: string) => "@" + new URL(url).pathname.split("/").filter(Boolean)[0].replace(/^@/, "");

/** Stable schema.org ids, so product, service and article data can point to the business. */
export const SITE_IDS = { store: `${SITE.url}/#store`, website: `${SITE.url}/#website` } as const;

/** Every social share image is this size (generated in src/lib/og.ts). */
export const OG_SIZE = { width: 1200, height: 630 } as const;
