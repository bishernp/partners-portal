import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Topbar } from "../components/Layout.jsx";
import { api } from "../lib/api.js";
import { useResource } from "../lib/useApi.js";
import { Loading, ErrorState, StatusPill, LocalePill, IconBack, IconExternal } from "../components/ui.jsx";
import { formatDateTime } from "../lib/format.js";

const SCREEN_TITLES = {
  details: "Your details",
  standing: "Standing & experience",
  expertise: "Expertise & sectors",
  reach: "Reach & relationships",
  draws: "Motivation & availability",
  closing: "Closing remarks",
};

export default function SubmissionDetail() {
  const { id } = useParams();
  const { data, loading, error, reload } = useResource(() => api.submission(id), [id]);
  const [showAr, setShowAr] = useState(false);

  return (
    <>
      <Topbar eyebrow="B&P House" title={data ? data.reference : "Submission"}>
        {data && (
          <label className="btn btn-line" style={{ cursor: "pointer", gap: "0.8rem" }}>
            <input type="checkbox" checked={showAr} onChange={(e) => setShowAr(e.target.checked)} style={{ accentColor: "var(--accent)" }} />
            Show Arabic
          </label>
        )}
      </Topbar>

      <div className="page">
        <Link to="/submissions" className="toolbar-back"><IconBack /> All submissions</Link>
        {loading && <Loading />}
        {error && <ErrorState message={error} onRetry={reload} />}
        {data && <DetailBody data={data} showAr={showAr} />}
      </div>
    </>
  );
}

function DetailBody({ data, showAr }) {
  const p = data.partner || {};
  const honorific = p.honorific ? p.honorific.en : "";
  const name = [honorific, p.full_name].filter(Boolean).join(" ");

  // Group answers by screen, in order, skipping the details screen (shown in the
  // header) and any empty (unanswered/optional) entries.
  const groups = [];
  const index = {};
  for (const a of data.answers || []) {
    if (a.screen === "details") continue;
    if (!a.values || a.values.length === 0) continue;
    if (!(a.screen in index)) { index[a.screen] = groups.length; groups.push({ screen: a.screen, items: [] }); }
    groups[index[a.screen]].items.push(a);
  }

  return (
    <>
      <div className="card card--pad-lg" style={{ marginBottom: "2.4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flexWrap: "wrap", marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "2.8rem" }}>{name || "—"}</h2>
          <StatusPill status={data.status} />
          <LocalePill locale={data.locale} />
        </div>

        <div className="detail__head">
          <Kv k="Email" v={p.email ? <a href={`mailto:${p.email}`}>{p.email}</a> : "—"} />
          <Kv k="Mobile" v={p.mobile || "—"} />
          <Kv k="Based in" v={p.based_in || "—"} />
          <Kv k="Nationality" v={p.nationality ? p.nationality.en : "—"} />
          <Kv k="LinkedIn" v={p.linkedin
            ? <a href={p.linkedin} target="_blank" rel="noopener noreferrer">Profile <IconExternal /></a>
            : "—"} />
          <Kv k="Submitted" v={formatDateTime(data.submitted_at)} />
        </div>

        <div style={{ display: "flex", gap: "2.4rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
          <Ack ok={data.acknowledgments?.ack_intro} label="Understands this is an introduction" />
          <Ack ok={data.acknowledgments?.ack_consent} label="Consents to data being held" />
        </div>
      </div>

      {groups.map((g) => (
        <div className="card" key={g.screen} style={{ marginBottom: "1.6rem" }}>
          <div className="ans-screen__title">{SCREEN_TITLES[g.screen] || g.screen}</div>
          {g.items.map((a) => (
            <div className="ans" key={a.code}>
              <div className="ans__q">
                {a.label_en}
                {showAr && a.label_ar && <span className="ar">{a.label_ar}</span>}
              </div>
              <div className="ans__a"><AnswerValue answer={a} showAr={showAr} /></div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

function AnswerValue({ answer, showAr }) {
  const { type, values } = answer;

  if (type === "text" || type === "email" || type === "tel" || type === "url") {
    return <span style={{ whiteSpace: "pre-wrap" }}>{values[0]?.text || "—"}</span>;
  }

  if (type === "ordered") {
    return (
      <ol>
        {values.map((v, i) => (
          <li key={v.code || i}>{v.en}{showAr && v.ar && <span className="ar"> — {v.ar}</span>}</li>
        ))}
      </ol>
    );
  }

  if (type === "multi") {
    return (
      <div>
        {values.map((v, i) => {
          const isOther = v.code === "other" && v.other;
          return (
            <span className="ans__chip" key={v.code || i}>
              {isOther ? v.other : v.en}
              {showAr && !isOther && v.ar && <span className="ar"> · {v.ar}</span>}
            </span>
          );
        })}
      </div>
    );
  }

  // single / select / country
  const v = values[0] || {};
  return (
    <span>
      {v.code === "other" && v.other ? v.other : v.en}
      {showAr && v.ar && v.code !== "other" && <span className="ar">{v.ar}</span>}
    </span>
  );
}

function Kv({ k, v }) {
  return <div className="kv"><span className="kv__k">{k}</span><span className="kv__v">{v}</span></div>;
}

function Ack({ ok, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "1.4rem", color: ok ? "var(--ok)" : "var(--t-muted)" }}>
      <span aria-hidden="true" style={{ fontSize: "1.6rem" }}>{ok ? "✓" : "○"}</span> {label}
    </div>
  );
}
