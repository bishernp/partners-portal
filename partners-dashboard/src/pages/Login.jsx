import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";
import { useTheme } from "../lib/theme.js";
import { IconSun, IconMoon, Spinner } from "../components/ui.jsx";

export default function Login() {
  const { signIn } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (busy) return;
    setError("");
    setBusy(true);
    try {
      await signIn(username.trim(), password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Sign in failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="login">
      <div style={{ position: "fixed", top: "2rem", right: "2rem" }}>
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
          {theme === "dark" ? <IconSun /> : <IconMoon />}
        </button>
      </div>

      <div className="login__card card card--pad-lg">
        <div className="login__brand">
          <div className="brand__mark">BISHER &amp; PARTNERS</div>
          <div className="brand__sub">B&amp;P House — Partner Dashboard</div>
        </div>

        <form onSubmit={onSubmit} noValidate>
          <div className="field">
            <label className="field__label" htmlFor="u">Username</label>
            <input id="u" className="input" autoComplete="username" value={username}
              onChange={(e) => setUsername(e.target.value)} autoFocus />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="p">Password</label>
            <input id="p" className="input" type="password" autoComplete="current-password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          {error && <p className="login__error" role="alert">{error}</p>}

          <button className="btn btn-accent" type="submit" disabled={busy} style={{ justifyContent: "center", height: "5.4rem" }}>
            {busy ? <Spinner /> : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
