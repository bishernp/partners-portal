import React from "react";
import { Topbar } from "../components/Layout.jsx";
import { api } from "../lib/api.js";
import { useResource } from "../lib/useApi.js";
import { BarList, Loading, ErrorState, EmptyState } from "../components/ui.jsx";

const SCREEN_TITLES = {
  details: "Details",
  standing: "Standing & experience",
  expertise: "Expertise & sectors",
  reach: "Reach & relationships",
  draws: "Motivation & availability",
  closing: "Closing",
};
const SCREEN_ORDER = ["details", "standing", "expertise", "reach", "draws", "closing"];

export default function Analytics() {
  const { data, loading, error, reload } = useResource(() => api.distributions(), []);
  const questions = data?.questions || [];

  // Group questions by screen, preserving the canonical screen order.
  const byScreen = {};
  for (const q of questions) (byScreen[q.screen] ||= []).push(q);
  const screens = Object.keys(byScreen).sort(
    (a, b) => (SCREEN_ORDER.indexOf(a) + 1 || 99) - (SCREEN_ORDER.indexOf(b) + 1 || 99)
  );

  return (
    <>
      <Topbar eyebrow="B&P House" title="Analytics" />
      <div className="page">
        {loading && <Loading />}
        {error && <ErrorState message={error} onRetry={reload} />}
        {data && questions.length === 0 && <EmptyState title="No data yet" hint="Distributions appear once submissions arrive." />}

        {screens.map((screen) => (
          <section key={screen} style={{ marginBottom: "3.2rem" }}>
            <h2 className="section-title" style={{ color: "var(--accent)", fontFamily: "var(--_font-accent)", fontSize: "1.3rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              {SCREEN_TITLES[screen] || screen}
            </h2>
            <div className="grid grid--2">
              {byScreen[screen].map((q) => (
                <div className="card" key={q.code}>
                  <h3 style={{ fontSize: "1.7rem", marginBottom: "0.6rem" }}>{q.label_en}</h3>
                  <p className="muted-note" style={{ marginBottom: "2rem" }}>
                    {q.total_responses} {q.total_responses === 1 ? "response" : "responses"}
                    {q.type === "multi" && " · multiple choice"}
                    {q.type === "ordered" && " · ranked"}
                  </p>
                  {q.options.length
                    ? <BarList items={q.options.map((o) => ({ code: o.code, label: o.label_en, count: o.count }))} />
                    : <p className="muted-note">No responses recorded.</p>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
