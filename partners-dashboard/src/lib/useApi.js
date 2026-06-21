import { useCallback, useEffect, useState } from "react";
import { AuthError } from "./api.js";
import { useAuth } from "./auth.jsx";

// Run an async fetcher, tracking loading/error. An AuthError signs the user out
// (which bounces them to /login via the route guard).
export function useResource(fetcher, deps = []) {
  const { signOut } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nonce, setNonce] = useState(0);

  const reload = useCallback(() => setNonce((n) => n + 1), []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    fetcher()
      .then((d) => { if (!cancelled) setData(d); })
      .catch((err) => {
        if (cancelled) return;
        if (err instanceof AuthError) { signOut(); return; }
        setError(err.message || "Request failed.");
      })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, nonce]);

  return { data, loading, error, reload };
}
