// ─────────────────────────────────────────────────────────────────────────────
// API client for the onboarding backend.
// Holds the JWT pair in localStorage, attaches the access token to every
// request, and transparently refreshes once on a 401 before giving up.
// ─────────────────────────────────────────────────────────────────────────────

const API_BASE = (import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000").replace(/\/$/, "");

const ACCESS_KEY = "bnp-dash:access";
const REFRESH_KEY = "bnp-dash:refresh";
const USER_KEY = "bnp-dash:user";

export const tokens = {
  get access() { try { return localStorage.getItem(ACCESS_KEY) || ""; } catch { return ""; } },
  get refresh() { try { return localStorage.getItem(REFRESH_KEY) || ""; } catch { return ""; } },
  get user() { try { return localStorage.getItem(USER_KEY) || ""; } catch { return ""; } },
  set({ access, refresh, user }) {
    try {
      if (access != null) localStorage.setItem(ACCESS_KEY, access);
      if (refresh != null) localStorage.setItem(REFRESH_KEY, refresh);
      if (user != null) localStorage.setItem(USER_KEY, user);
    } catch { /* ignore */ }
  },
  clear() {
    try {
      localStorage.removeItem(ACCESS_KEY);
      localStorage.removeItem(REFRESH_KEY);
      localStorage.removeItem(USER_KEY);
    } catch { /* ignore */ }
  },
};

// Raised when authentication is impossible/expired. The app routes to /login.
export class AuthError extends Error {}

let refreshPromise = null;

async function doRefresh() {
  const refresh = tokens.refresh;
  if (!refresh) throw new AuthError("No refresh token");
  // De-duplicate concurrent refreshes.
  if (!refreshPromise) {
    refreshPromise = fetch(`${API_BASE}/api/auth/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    })
      .then(async (res) => {
        if (!res.ok) throw new AuthError("Refresh failed");
        const data = await res.json();
        tokens.set({ access: data.access });
        return data.access;
      })
      .finally(() => { refreshPromise = null; });
  }
  return refreshPromise;
}

async function request(path, { method = "GET", body, headers = {}, retry = true } = {}) {
  const access = tokens.access;
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(access ? { Authorization: `Bearer ${access}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401 && retry) {
    try {
      await doRefresh();
    } catch {
      tokens.clear();
      throw new AuthError("Session expired");
    }
    return request(path, { method, body, headers, retry: false });
  }

  if (res.status === 401 || res.status === 403) {
    throw new AuthError("Not authorised");
  }

  if (!res.ok) {
    let detail = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      detail = data.detail || JSON.stringify(data);
    } catch { /* ignore */ }
    throw new Error(detail);
  }

  if (res.status === 204) return null;
  return res.json();
}

export async function login(username, password) {
  const res = await fetch(`${API_BASE}/api/auth/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    if (res.status === 401) throw new Error("Incorrect username or password.");
    throw new Error(`Sign in failed (${res.status}).`);
  }
  const data = await res.json();
  tokens.set({ access: data.access, refresh: data.refresh, user: username });
  return data;
}

export function logout() { tokens.clear(); }

export const api = {
  overview: () => request("/api/dashboard/analytics/overview/"),
  distributions: () => request("/api/dashboard/analytics/distributions/"),
  submissions: (query = "") => request(`/api/dashboard/submissions/${query ? `?${query}` : ""}`),
  submission: (id) => request(`/api/dashboard/submissions/${id}/`),
};

// CSV export: authenticated blob download honouring the current filters.
export async function downloadSubmissionsCsv(query = "") {
  const access = tokens.access;
  const res = await fetch(`${API_BASE}/api/dashboard/submissions/export/${query ? `?${query}` : ""}`, {
    headers: access ? { Authorization: `Bearer ${access}` } : {},
  });
  if (!res.ok) throw new Error(`Export failed (${res.status}).`);
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "bnp-house-submissions.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export { API_BASE };
