// Serve the assembled `dist/` on a single origin, mirroring the production
// Render Static Site (files-first, then path rewrites). Use it to preview the
// real /portal + /dashboard layout locally:
//
//   bash render-build.sh          # build both apps into ./dist
//   node serve-combined.mjs       # → http://localhost:5180
//
//   http://localhost:5180/portal      → onboarding form
//   http://localhost:5180/dashboard   → admin dashboard
//   http://localhost:5180/            → redirects to /portal/
//
// (The built apps call the API at VITE_API_BASE from .env — keep the backend
//  running on :8000. There is no hot-reload here; rebuild to see changes.)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, "dist");
const PORT = Number(process.argv[2] || 5180);

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".svg": "image/svg+xml", ".json": "application/json", ".webp": "image/webp",
  ".mp4": "video/mp4", ".ico": "image/x-icon", ".woff2": "font/woff2",
  ".woff": "font/woff", ".ttf": "font/ttf", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webmanifest": "application/manifest+json",
};

function send(res, file) {
  res.writeHead(200, { "Content-Type": MIME[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);

  if (urlPath === "/") { res.writeHead(302, { Location: "/portal/" }); return res.end(); }

  const candidate = path.join(ROOT, urlPath);
  if (candidate.startsWith(ROOT) && fs.existsSync(candidate)) {
    const stat = fs.statSync(candidate);
    if (stat.isFile()) return send(res, candidate);
    if (stat.isDirectory() && fs.existsSync(path.join(candidate, "index.html"))) {
      return send(res, path.join(candidate, "index.html"));
    }
  }
  // SPA fallbacks (match the Render rewrite rules)
  if (urlPath === "/dashboard" || urlPath.startsWith("/dashboard/")) return send(res, path.join(ROOT, "dashboard/index.html"));
  if (urlPath === "/portal" || urlPath.startsWith("/portal/")) return send(res, path.join(ROOT, "portal/index.html"));

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
});

if (!fs.existsSync(ROOT)) {
  console.error(`No build found at ${ROOT}. Run:  bash render-build.sh`);
  process.exit(1);
}
server.listen(PORT, () => {
  console.log(`B&P House preview → http://localhost:${PORT}`);
  console.log(`  onboarding  http://localhost:${PORT}/portal`);
  console.log(`  dashboard   http://localhost:${PORT}/dashboard`);
});
