import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..", "out");
const PORT = process.env.PORT || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

async function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const candidates =
    clean === "/" || clean === ""
      ? ["index.html"]
      : [clean.replace(/^\//, ""), `${clean.replace(/^\//, "")}.html`, `${clean.replace(/^\//, "")}/index.html`];

  for (const candidate of candidates) {
    const full = path.join(ROOT, candidate);
    if (!full.startsWith(ROOT)) continue;
    try {
      const s = await stat(full);
      if (s.isFile()) return full;
    } catch {}
  }
  return null;
}

http
  .createServer(async (req, res) => {
    const file = await resolveFile(req.url ?? "/");
    if (!file) {
      const notFound = path.join(ROOT, "404.html");
      try {
        const body = await readFile(notFound);
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
      return;
    }
    const ext = path.extname(file);
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(body);
  })
  .listen(PORT, () => {
    console.log(`Static export served at http://localhost:${PORT}`);
  });
