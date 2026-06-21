import React from "react";
import { Topbar } from "../components/Layout.jsx";
import { api } from "../lib/api.js";
import { useResource } from "../lib/useApi.js";
import { BarList, StatCard, Loading, ErrorState } from "../components/ui.jsx";
import { formatDate, prettyStatus } from "../lib/format.js";

export default function Overview() {
  const { data, loading, error, reload } = useResource(() => api.overview(), []);

  return (
    <>
      <Topbar eyebrow="B&P House" title="Overview" />
      <div className="page">
        {loading && <Loading />}
        {error && <ErrorState message={error} onRetry={reload} />}
        {data && <OverviewBody data={data} />}
      </div>
    </>
  );
}

function OverviewBody({ data }) {
  const { totals = {}, by_status = {}, funnel = {}, trend = [] } = data;

  const statusItems = Object.entries(by_status).map(([code, count]) => ({
    code, label: prettyStatus(code), count,
  }));

  const funnelItems = [
    { code: "invited", label: "Invited", count: funnel.invited || 0 },
    { code: "opened", label: "Opened", count: funnel.opened || 0 },
    { code: "submitted", label: "Submitted", count: funnel.submitted || 0 },
  ];

  const trendItems = trend.map((t) => ({ code: t.date, label: formatDate(t.date), count: t.count }));

  return (
    <>
      <div className="grid grid--stats" style={{ marginBottom: "1.6rem" }}>
        <StatCard label="Submissions" value={totals.submissions ?? 0} accent hint="Completed introductions" />
        <StatCard label="Partners" value={totals.partners ?? 0} hint="Unique profiles" />
        <StatCard label="Invitations" value={totals.invitations ?? 0} hint="Tokens issued" />
      </div>

      <div className="grid grid--2">
        <div className="card">
          <h2 className="section-title">By status</h2>
          {statusItems.length ? <BarList items={statusItems} /> : <p className="muted-note">No submissions yet.</p>}
        </div>

        <div className="card">
          <h2 className="section-title">Invitation funnel</h2>
          <BarList items={funnelItems} max={Math.max(1, funnel.invited || 0, funnel.submitted || 0)} />
          <p className="muted-note" style={{ marginTop: "1.6rem" }}>
            Open submissions (no invitation token) are counted under Submissions but not the funnel.
          </p>
        </div>
      </div>

      <div className="card" style={{ marginTop: "1.6rem" }}>
        <h2 className="section-title">Recent activity</h2>
        {trendItems.length ? <BarList items={trendItems} /> : <p className="muted-note">No activity recorded.</p>}
      </div>
    </>
  );
}
