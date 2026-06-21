# partners-portal — Render deploy

One **Static Site** serves both front-ends from this repo:

```
partners.bishernp.com
├── /            → 302 → /portal/
├── /portal      ?invite=Name   → onboarding form  (partners-frontend/)
└── /dashboard                  → admin dashboard  (partners-dashboard/)
```

`render-build.sh` builds both apps and assembles one publish folder: the
onboarding app (and its shared template assets) at the root with its entry at
`/portal`, and the dashboard fully under `/dashboard`.

## Static Site — `bnp-partners-web`

| Setting | Value |
|---|---|
| Repository | `bishernp/partners-portal` |
| Root Directory | *(leave blank — repo root)* |
| Build Command | `bash render-build.sh` |
| Publish Directory | `dist` |

### Environment variable (BUILD-TIME)
| Key | Value |
|---|---|
| `VITE_API_BASE` | `https://bnp-partners-backend.onrender.com` |

> Vite bakes env vars at build time — after changing `VITE_API_BASE`, **Clear
> cache & deploy**. Add `NODE_VERSION=20` if Render's default Node is too old.

### Redirects / Rewrites (in this order)
| Source | Destination | Action |
|---|---|---|
| `/dashboard/*` | `/dashboard/index.html` | Rewrite |
| `/portal/*` | `/portal/index.html` | Rewrite |
| `/` | `/portal/` | Redirect |

Real files are served before rewrites, so assets are unaffected.

### Custom domain
Add **`partners.bishernp.com`** under Custom Domains, then create the `CNAME`
Render shows (`partners` → `bnp-partners-web.onrender.com`). TLS is automatic.
Make sure the backend's `CORS_ALLOWED_ORIGINS` is `https://partners.bishernp.com`.

## Public URLs
- Partner invite: `https://partners.bishernp.com/portal?invite=Chris`
- Dashboard: `https://partners.bishernp.com/dashboard`

## Local preview (production layout, one origin)
```
bash render-build.sh        # build both → dist/
node serve-combined.mjs     # http://localhost:5180  (/portal + /dashboard)
```
For day-to-day coding use the per-app dev servers instead (`cd partners-frontend && npm run dev` :5176, `cd partners-dashboard && npm run dev` :5177), each at `/`.
