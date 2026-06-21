import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Topbar } from "../components/Layout.jsx";
import { api, downloadSubmissionsCsv } from "../lib/api.js";
import { useResource } from "../lib/useApi.js";
import { Loading, ErrorState, EmptyState, StatusPill, LocalePill, IconDownload, IconSearch } from "../components/ui.jsx";
import { formatDateTime, SUBMISSION_STATUSES } from "../lib/format.js";
import COUNTRIES, { countryName } from "../lib/countries.js";

const PAGE_SIZE = 25;

export default function Submissions() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [status, setStatus] = useState("");
  const [locale, setLocale] = useState("");
  const [nationality, setNationality] = useState("");
  const [page, setPage] = useState(1);
  const [exporting, setExporting] = useState(false);

  // Debounce the free-text search.
  useEffect(() => {
    const id = setTimeout(() => setDebounced(search.trim()), 350);
    return () => clearTimeout(id);
  }, [search]);

  // Reset to page 1 whenever a filter changes.
  useEffect(() => { setPage(1); }, [debounced, status, locale, nationality]);

  const filterQuery = useMemo(() => {
    const p = new URLSearchParams();
    if (debounced) p.set("search", debounced);
    if (status) p.set("status", status);
    if (locale) p.set("locale", locale);
    if (nationality) p.set("partner__nationality", nationality);
    p.set("ordering", "-submitted_at");
    return p.toString();
  }, [debounced, status, locale, nationality]);

  const query = useMemo(() => {
    const p = new URLSearchParams(filterQuery);
    if (page > 1) p.set("page", String(page));
    return p.toString();
  }, [filterQuery, page]);

  const { data, loading, error, reload } = useResource(() => api.submissions(query), [query]);

  const results = data?.results || [];
  const count = data?.count || 0;
  const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));
  const from = count === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(count, page * PAGE_SIZE);

  async function onExport() {
    if (exporting) return;
    setExporting(true);
    try { await downloadSubmissionsCsv(filterQuery); }
    catch (e) { alert(e.message || "Export failed."); }
    finally { setExporting(false); }
  }

  return (
    <>
      <Topbar eyebrow="B&P House" title="Submissions">
        <button className="btn btn-line" onClick={onExport} disabled={exporting}>
          <IconDownload /> {exporting ? "Exporting…" : "Export CSV"}
        </button>
      </Topbar>

      <div className="page">
        <div className="filters">
          <div className="field" style={{ flex: "1 1 28rem" }}>
            <label className="field__label" htmlFor="s">Search</label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", insetInlineStart: "1.2rem", top: "50%", transform: "translateY(-50%)", color: "var(--t-muted)", pointerEvents: "none" }}><IconSearch /></span>
              <input id="s" className="input" style={{ width: "100%", paddingInlineStart: "3.8rem" }}
                placeholder="Name, email or reference" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="st">Status</label>
            <select id="st" className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">All</option>
              {SUBMISSION_STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="lo">Language</label>
            <select id="lo" className="select" value={locale} onChange={(e) => setLocale(e.target.value)}>
              <option value="">All</option>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="na">Nationality</label>
            <select id="na" className="select" value={nationality} onChange={(e) => setNationality(e.target.value)}>
              <option value="">All</option>
              {COUNTRIES.map((c) => <option key={c.code} value={c.code}>{c.en}</option>)}
            </select>
          </div>
        </div>

        {loading && <Loading />}
        {error && <ErrorState message={error} onRetry={reload} />}
        {data && results.length === 0 && <EmptyState title="No submissions match" hint="Try clearing the filters." />}

        {data && results.length > 0 && (
          <>
            <div className="table-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Nationality</th>
                    <th>Status</th>
                    <th>Lang</th>
                    <th>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r) => (
                    <tr key={r.id} onClick={() => navigate(`/submissions/${r.id}`)}>
                      <td className="cell-mono" style={{ color: "var(--accent)" }}>{r.reference}</td>
                      <td>{r.full_name}</td>
                      <td className="cell-muted">{r.email}</td>
                      <td>{countryName(r.nationality, "en")}</td>
                      <td><StatusPill status={r.status} /></td>
                      <td><LocalePill locale={r.locale} /></td>
                      <td className="cell-muted cell-mono">{formatDateTime(r.submitted_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pager">
              <span className="pager__info">{from}–{to} of {count}</span>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button className="btn btn-line" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Previous</button>
                <button className="btn btn-line" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
