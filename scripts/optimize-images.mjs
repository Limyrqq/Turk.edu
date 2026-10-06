import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
const source = path.resolve("public/raw");
const destination = path.resolve("public/images");
await mkdir(source, { recursive: true });
await mkdir(destination, { recursive: true });
for (const file of await readdir(source)) {
  if (!/\.(png|jpe?g|webp|tiff)$/i.test(file)) continue;
  const name = path.parse(file).name;
  await sharp(path.join(source, file))
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(destination, `${name}.webp`));
  await sharp(path.join(source, file))
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .avif({ quality: 48 })
    .toFile(path.join(destination, `${name}.avif`));
  console.log(`Optimized ${file}`);
}
