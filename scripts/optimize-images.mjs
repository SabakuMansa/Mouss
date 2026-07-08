import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..", "public", "images");

const PRESETS = {
  hero: { width: 1920, quality: 72 },
  opponents: { width: 240, quality: 82 },
  roster: { width: 640, quality: 78 },
  "roster-u18": { width: 640, quality: 78 },
  coachs: { width: 640, quality: 78 },
};

async function optimizeDir(dir, preset) {
  const files = await readdir(dir);
  for (const file of files) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const fullPath = path.join(dir, file);
    const before = (await stat(fullPath)).size;
    const buffer = await sharp(fullPath)
      .rotate()
      .resize({ width: preset.width, withoutEnlargement: true })
      .jpeg({ quality: preset.quality, mozjpeg: true })
      .toBuffer();
    await sharp(buffer).toFile(fullPath.replace(/\.(jpe?g|png)$/i, ".jpg"));
    if (!fullPath.endsWith(".jpg")) {
      await import("node:fs/promises").then((fs) => fs.unlink(fullPath));
    }
    const after = buffer.length;
    console.log(
      `${path.relative(ROOT, fullPath)}: ${(before / 1024).toFixed(0)}kb -> ${(after / 1024).toFixed(0)}kb`
    );
  }
}

for (const [dir, preset] of Object.entries(PRESETS)) {
  await optimizeDir(path.join(ROOT, dir), preset);
}
