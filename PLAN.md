# B&P House — Partners Platform Plan

The partners platform is being built **independently** from the main website,
under `partners/`. It currently serves the **partner onboarding journey** and is
designed to grow into a full **partner portal** (accounts, activities, deal
registration, etc.) later. Three parts:

```
partners/
├── partners-frontend/    React (Vite) — the public, token-gated onboarding journey
├── partners-dashboard/   React (Vite) — internal analytics dashboard (brand-matched)
└── partners-backend/     Django REST Framework + PostgreSQL — API + data
```

## Locked decisions
1. **Storage model:** option **codes** + a bilingual **Question/Option catalog** (EN/AR labels) + a **raw JSON snapshot** per submission. Choice answers are normalized into an `Answer` table for analytics; free text stored as typed.
2. **Dashboard** is a **separate app** that follows the exact design language of `partners-frontend`/the website (same tokens, fields, colours, text, animations).
3. **Auth:** JWT (SimpleJWT) for the dashboard/admin API.
4. **Scope now:** *visualize* the collected answers (no committee scoring capture yet).
5. **Questions stay hardcoded in the frontend.** The backend is NOT question-driven from a CMS. When questions change, we edit the frontend schema (`partners-frontend/src/data/partners.js`) and **re-sync** the backend catalog via an export → seed step. Best practices throughout so it scales (more questions, more data, a future portal).

## Tech (latest, installed)
- Backend: **Python 3.13**, **Django 6.0**, **DRF 3.17**, **psycopg 3**, **SimpleJWT**, `django-cors-headers`, `django-filter`, `drf-spectacular`, `django-environ`, `gunicorn`, `openpyxl`. Own venv at `partners-backend/venv`, pinned in `requirements.txt`.
- DB: **PostgreSQL 15**, database `bnp_partners` (local: user `mohbisher`, socket auth, no password).
- Frontend/Dashboard: React 18 + Vite (Node 18).

---

## Backend (`partners-backend/`)

Django project `config/`, apps: `catalog`, `partners`, `onboarding`, `dashboard`.

### Data model
**catalog** (the bilingual question/option catalog — mirrors the frontend schema):
- `FormVersion(version, is_active, created_at)` — snapshots which question set a submission used.
- `Question(form_version, code, type, screen, order, required, max_select, has_other, label_en, label_ar, help_en, help_ar)` — `unique(form_version, code)`.
- `Option(question, code, order, label_en, label_ar)` — `unique(question, code)`. (Nationality's 198 countries are seeded as options too.)

**partners** (the person — anchor for the future portal):
- `Partner(full_name, honorific, email, mobile, based_in, nationality, linkedin, locale, created_at, updated_at)` — the "Your details" screen. `email` indexed; later gains a `user` FK for portal accounts.

**onboarding**:
- `Invitation(token unique, email, full_name, invited_by, status, locale, expires_at, created_at, notes)` — invitation-only gate + nomination tracking.
- `Submission(reference unique, partner FK, invitation FK, form_version FK, status, locale, ack_intro, ack_consent, raw_payload JSON, submitted_at, updated_at)`. Status: `submitted → in_review → shortlisted/on_hold/declined`.
- `Answer(submission FK, question_code, option_code, text_value, rank, other_text)` — one row per selection. single/select/country → 1 row (option_code); multi → N rows; ordered → N rows with `rank`; text → text_value; "Other" → other_text. Indexed on `(question_code, option_code)` for analytics.

### API
Public (token-gated, throttled, CORS-locked):
- `GET  /api/onboarding/invitation/<token>/` — validate token, return prefill + locale.
- `POST /api/onboarding/submissions/` — accept payload; **server re-validates against the active catalog** (valid codes, required, max_select, email, "other" specify, acks); creates Partner + Submission + Answers; returns `{reference}`.

Auth:
- `POST /api/auth/token/` and `POST /api/auth/token/refresh/` (SimpleJWT).

Dashboard (JWT, staff-only):
- `GET /api/dashboard/submissions/` — list (filter: status, nationality, date; search; sort; paginate).
- `GET /api/dashboard/submissions/<id>/` — full answers resolved to EN **and** AR.
- `GET /api/dashboard/analytics/overview/` — KPIs + funnel + trend.
- `GET /api/dashboard/analytics/distributions/` — per-question option counts (EN/AR labelled).
- `GET /api/dashboard/submissions/export/?format=csv|xlsx`.

Docs: `drf-spectacular` at `/api/schema/` + `/api/docs/`.

### Catalog sync (frontend → backend)
- `scripts/export_catalog.mjs` imports `partners-frontend/src/data/partners.js` + `countries.js` and writes `catalog/seed/catalog.json`.
- `python manage.py seed_catalog` upserts FormVersion + Questions + Options from that JSON.
- Re-run both whenever the frontend questions change.

### Config / run
- `.env`: `SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS`, `DATABASE_URL` (default `postgres:///bnp_partners`), `CORS_ALLOWED_ORIGINS` (frontend + dashboard origins), `FRONTEND_ORIGIN`.
- `venv/bin/python manage.py migrate && seed_catalog && runserver` (dev on :8000).

---

## Dashboard (`partners-dashboard/`)
Separate Vite + React app, **brand-matched** (copies the same theme CSS, tokens, fonts, animation engine as `partners-frontend`). JWT login (token stored client-side, refresh handled). Pages:
1. **Login** — JWT.
2. **Overview** — KPIs (invited / started / submitted / completion rate), submissions-over-time trend, funnel.
3. **Submissions** — filter/search/sort table; export CSV/XLSX.
4. **Partner detail** — full profile, every answer in EN/AR, LinkedIn, raw timeline.
5. **Analytics** — distributions per question + cross-tabs (sector×seniority, reach×access, expertise×Vision-2030, availability×horizon), mapping to the reference doc's 7 evaluation criteria. Read-only visualization (no scoring capture yet).

## Frontend integration
`PartnersWizard.handleSubmit` will `POST` the payload to `VITE_API_BASE` (kept localStorage fallback for dev); optional token check on load. Small isolated change in `partners-frontend`.

## Phasing / status
- **Phase 1 — Backend core:** models, catalog seed, submission + validation, token validation, JWT, Django admin, CORS/throttle, OpenAPI. ✅ **DONE & verified** (migrations applied, catalog seeded = 27 q / 323 opts, superuser `admin`, submission persists Partner + Submission + normalized Answers; validation 400s; JWT + dashboard + CSV + docs all 200).
- **Phase 2 — Dashboard:** the React dashboard app + the pages above. ✅ **DONE & verified** in-browser (dark + light): Login (JWT), Overview, Submissions (filters/search/pager/export), Detail (bilingual "Show Arabic" toggle), Analytics (distributions).
- **Frontend wiring:** `partners-frontend` submit → `POST /api/onboarding/submissions/` (locale added, 400→screen mapping, localStorage fallback). ✅ **DONE & verified** end-to-end in-browser.
- **Phase 3 — Portal (later):** `Partner→User` accounts, partner portal, deal registration. Models already shaped for it. *(not started)*

### Demo data note
Two test submissions (`BNP-38A32413`, `BNP-D0BFE0A5`) were created during verification and remain in the DB so the dashboard renders with data. Clear them before go-live: `manage.py shell -c "from onboarding.models import Submission; Submission.objects.all().delete()"` (Partners cascade) or just truncate.

## Run reference
- Backend: launch config `partners-backend` (Django :8000) — `venv/bin/python manage.py runserver`.
- Frontend: `partners-frontend-dev` (:5176).
- Dashboard: `partners-dashboard-dev` (:5177).
- Website (unchanged): `bnp-dev` (:5173). The in-website `/partners` page remains intact.
