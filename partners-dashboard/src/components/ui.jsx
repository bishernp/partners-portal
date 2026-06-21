// Small presentational building blocks + inline icons (no icon font dependency).
import React from "react";
import { statusClass, prettyStatus } from "../lib/format.js";

export function Spinner() { return <span className="spinner" aria-label="Loading" />; }

export function Loading({ label = "Loading" }) {
  return <div className="state"><Spinner /><div style={{ marginTop: "1.6rem" }}>{label}…</div></div>;
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="state">
      <div className="state__big">Something went wrong</div>
      <div>{message}</div>
      {onRetry && <div style={{ marginTop: "2rem" }}><button className="btn btn-line" onClick={onRetry}>Try again</button></div>}
    </div>
  );
}

export function EmptyState({ title = "Nothing here yet", hint }) {
  return <div className="state"><div className="state__big">{title}</div>{hint && <div>{hint}</div>}</div>;
}

export function StatCard({ label, value, hint, accent = false }) {
  return (
    <div className="card stat">
      <div className="stat__label">{label}</div>
      <div className={`stat__value${accent ? " stat__value--accent" : ""}`}>{value}</div>
      {hint && <div className="stat__hint">{hint}</div>}
    </div>
  );
}

export function StatusPill({ status }) {
  return <span className={`pill ${statusClass(status)}`}>{prettyStatus(status)}</span>;
}

export function LocalePill({ locale }) {
  return <span className={`pill ${locale === "ar" ? "pill--ar" : ""}`}>{locale === "ar" ? "AR" : "EN"}</span>;
}

// Horizontal bar list for a set of {label, count}. Bars are relative to `max`.
export function BarList({ items, max }) {
  const top = max || Math.max(1, ...items.map((i) => i.count || 0));
  return (
    <div className="barlist">
      {items.map((it, i) => {
        const count = it.count || 0;
        const pct = Math.round((count / top) * 100);
        return (
          <div className={`bar${count === 0 ? " bar--empty" : ""}`} key={it.code || i}>
            <span className="bar__label">{it.label}</span>
            <span className="bar__count">{count}</span>
            <span className="bar__track"><span className="bar__fill" style={{ width: `${count === 0 ? 0 : Math.max(4, pct)}%` }} /></span>
          </div>
        );
      })}
    </div>
  );
}

/* ── Icons ─────────────────────────────────────────────────────────────── */
const ico = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

export const IconOverview = () => (<svg {...ico}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>);
export const IconSubmissions = () => (<svg {...ico}><path d="M4 5h16M4 12h16M4 19h10" /></svg>);
export const IconAnalytics = () => (<svg {...ico}><path d="M4 20V10M10 20V4M16 20v-6M22 20H2" /></svg>);
export const IconSignOut = () => (<svg {...ico}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></svg>);
export const IconSun = () => (<svg {...ico}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
export const IconMoon = () => (<svg {...ico}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>);
export const IconDownload = () => (<svg {...ico}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>);
export const IconSearch = () => (<svg {...ico}><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>);
export const IconBack = () => (<svg {...ico}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>);
export const IconExternal = () => (<svg {...ico} width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>);
