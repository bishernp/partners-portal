// Theme (persisted). Defaults to LIGHT when the user hasn't chosen; a saved choice wins.
import { useCallback, useEffect, useState } from "react";

const KEY = "bnp-dash:theme";

function stored() {
  try { return localStorage.getItem(KEY) || ""; } catch { return ""; }
}

export function initTheme() {
  const t = stored();
  // Default to light unless the visitor explicitly saved dark (prevents a dark flash on first paint).
  document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const t = stored();
    return t === "dark" || t === "light" ? t : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
