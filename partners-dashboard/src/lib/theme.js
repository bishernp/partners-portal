// Manual theme override (persisted). When unset, the CSS media query decides.
import { useCallback, useEffect, useState } from "react";

const KEY = "bnp-dash:theme";

function stored() {
  try { return localStorage.getItem(KEY) || ""; } catch { return ""; }
}

function systemPrefersDark() {
  try { return window.matchMedia("(prefers-color-scheme: dark)").matches; } catch { return true; }
}

export function initTheme() {
  const t = stored();
  if (t === "dark" || t === "light") {
    document.documentElement.setAttribute("data-theme", t);
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const t = stored();
    if (t) return t;
    return systemPrefersDark() ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
