#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Build BOTH partner front-ends into ONE publish directory for a single Render
# Static Site:
#
#   /portal      → partner onboarding app   (Vite base "/", router basename /portal)
#   /dashboard   → internal admin dashboard  (Vite base "/dashboard/")
#
# The onboarding app keeps Vite base "/" because it reuses the marketing site's
# template assets via root-absolute paths (/css, /js, /img, /video, /fonts).
# Those assets + the app bundle therefore live at the SITE ROOT, and only the
# onboarding index.html is placed under /portal. The dashboard is fully
# self-contained under /dashboard.
# ─────────────────────────────────────────────────────────────────────────────
set -o errexit
set -o pipefail
cd "$(dirname "$0")"

echo "→ Building partner onboarding app (/portal)…"
( cd partners-frontend && npm ci && npm run build )

echo "→ Building dashboard (/dashboard)…"
( cd partners-dashboard && npm ci && npm run build )

echo "→ Assembling publish directory (dist/)…"
rm -rf dist
mkdir -p dist

# Onboarding app: bundle + shared template assets at the root; index.html → /portal
cp -R partners-frontend/dist/. dist/
mkdir -p dist/portal
mv dist/index.html dist/portal/index.html

# Dashboard: self-contained under /dashboard
mkdir -p dist/dashboard
cp -R partners-dashboard/dist/. dist/dashboard/

echo "✓ Build complete → partners/dist"
echo "  /portal/index.html     $( [ -f dist/portal/index.html ] && echo OK || echo MISSING )"
echo "  /dashboard/index.html  $( [ -f dist/dashboard/index.html ] && echo OK || echo MISSING )"
