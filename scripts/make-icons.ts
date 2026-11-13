/** Generates the social share image and the Apple touch icon. Run: bun scripts/make-icons.ts */
import sharp from "sharp";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const pub = (f: string) => join(root, "public", f);

await sharp(join(root, "src/assets/site/revslider-home-12-modern-slide1-demo121.jpg"))
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .composite([{ input: await sharp(pub("brand/logo-light.svg")).resize({ width: 360 }).png().toBuffer(), left: 64, top: 64 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(pub("og.jpg"));

await sharp(pub("favicon.svg"), { density: 600 }).resize(180, 180).flatten({ background: "#1b635e" }).png().toFile(pub("apple-touch-icon.png"));
console.log("ok");
