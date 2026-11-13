/**
 * One-off: re-file the imported WooCommerce demo products into the client's 12 categories
 * (meeting notes: Lits, Tables de chevet, Tables basses, Canapés, Rideaux, Poufs, Meubles TV,
 * Commodes, Miroirs, Chaises, Fauteuils, Tables à manger).
 * Products that fit none of them get `categories: []` and are hidden from the site
 * (they stay in products.json so they can be re-filed later).
 */
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const file = join(root, "src/data/products.json");
const products = JSON.parse(await Bun.file(file).text());

const BY_NAME: Record<string, string[]> = {
  // Canapés
  "Leather and Fabric Sofas": ["canapes"], "Valdez 3 Seater Sofa": ["canapes"], "Sofa In A Box 3 Seater": ["canapes"],
  "The Sherborne Lynton Sofa": ["canapes"], "Viola Sofa 3 Seater": ["canapes"], "Vintage Cognac Leather Sofa": ["canapes"],
  "Tony Spark Contemporary Sofa": ["canapes"], "Deep Modular Sofa": ["canapes"], "Sofa with Rolled Armrest": ["canapes"],
  "Modern Faux Leather Sofa": ["canapes"], "Leather Sofa with Tufted Back": ["canapes"], "Living Room Lounge Tan": ["canapes"],
  "Mid Century Leather Sofa": ["canapes"], "Armless Twin Size Floor Sofa": ["canapes"], "Comfy Cloud Luxe Couch": ["canapes"],
  "Velvet Sofa Couch 2-Seater": ["canapes"], "Top-Grain Leather Sofa": ["canapes"], "CushionCloud Luxe Sofa": ["canapes"],
  // Fauteuils
  "Avyanna Occasional Chair": ["fauteuils"], "Calligaris Lazy Armchair": ["fauteuils"], "Luxe Chair white": ["fauteuils"],
  "Cozy Leather Swivel Chair": ["fauteuils"], "Danish Leather Lounge Chair": ["fauteuils"], "Cammi Blue Leather Armchair": ["fauteuils"],
  "Omax Decor Zola Lounge Chair": ["fauteuils"], "Modern Fabric Arm Chair": ["fauteuils"], "Living Room Accent Chair": ["fauteuils"],
  "Modern Armchair with Lumbar": ["fauteuils"], "Ergonomic Wicker Papasan Chair": ["fauteuils"], "Round Foldable Saucer Chair": ["fauteuils"],
  // Chaises
  "Four Hands Gregory Dining Chair": ["chaises"], "Eames Style DAW Chair Plastic": ["chaises"], "Leather Kitchen Side Chairs": ["chaises"],
  "Modern Cozy Vanity Chair": ["chaises"], "Executive Desk Chair": ["chaises"], "A Versatile Desk Chair": ["chaises"],
  "Ergonomic Office Chair": ["chaises"], "Classic PU Office Chair": ["chaises"],
  // Tables à manger
  "Solid Wooden Dining Table": ["tables-a-manger"], "Oval Wood Dining Table": ["tables-a-manger"], "Small Round Dining Table": ["tables-a-manger"],
  "Square Folding Card Table": ["tables-a-manger"], "Indoor and Outdoor Table": ["tables-a-manger"],
  // Tables basses
  "Floor Folding Coffee Table": ["tables-basses"], "Modern Design Coffee Table": ["tables-basses"], "Rustic wooden coffee table": ["tables-basses"],
  "Creative Glass Coffee Table": ["tables-basses"], "Small Sofa Couch Table": ["tables-basses"], "Luxe Accent Side Table": ["tables-basses"],
  "Outdoor Round End Table": ["tables-basses"], "Rectangular End Table": ["tables-basses"],
  // Tables de chevet / Commodes
  "Kyoto Bedside Drawer Table": ["tables-de-chevet", "commodes"], "Cottage Bedside Nightstand": ["tables-de-chevet"],
  "Mobican Sapporo 2-Drawer": ["commodes", "tables-de-chevet"],
  // Meubles TV
  "Combo Living Room Furniture": ["meubles-tv", "tables-basses"],
  // Poufs
  "Plush Round Floor Cushion": ["poufs"],
};

let filed = 0;
const hidden: string[] = [];
for (const p of products) {
  p.categories = BY_NAME[p.name] ?? [];
  if (p.categories.length) filed++;
  else hidden.push(p.slug);
}
await Bun.write(file, JSON.stringify(products, null, 2));

const CATEGORIES = [
  "lits", "tables-de-chevet", "tables-basses", "canapes", "rideaux", "poufs",
  "meubles-tv", "commodes", "miroirs", "chaises", "fauteuils", "tables-a-manger",
];
await Bun.write(
  join(root, "src/data/categories.json"),
  JSON.stringify(
    CATEGORIES.map((slug, i) => ({
      id: i + 1,
      slug,
      count: products.filter((p: any) => p.categories.includes(slug)).length,
    })),
    null,
    2,
  ),
);
await Bun.write(join(root, "src/data/hidden-products.json"), JSON.stringify(hidden, null, 2));
console.log(`filed ${filed}, hidden ${hidden.length}`);
for (const c of CATEGORIES) console.log(c.padEnd(18), products.filter((p: any) => p.categories.includes(c)).length);
