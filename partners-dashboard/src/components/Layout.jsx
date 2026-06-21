import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../lib/auth.jsx";
import { useTheme } from "../lib/theme.js";
import {
  IconOverview, IconSubmissions, IconAnalytics, IconSignOut, IconSun, IconMoon,
} from "./ui.jsx";

const NAV = [
  { to: "/", label: "Overview", end: true, Icon: IconOverview },
  { to: "/submissions", label: "Submissions", end: false, Icon: IconSubmissions },
  { to: "/analytics", label: "Analytics", end: false, Icon: IconAnalytics },
];

export default function Layout() {
  const { user, signOut } = useAuth();
  const { theme, toggle } = useTheme();

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand__mark">BISHER &amp; PARTNERS</span>
          <span className="brand__sub">B&amp;P House</span>
        </div>

        <nav className="nav">
          {NAV.map(({ to, label, end, Icon }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav__item${isActive ? " is-active" : ""}`}>
              <span className="nav__dot" aria-hidden="true" />
              <Icon />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__foot">
          {user && <div className="sidebar__user">{user}</div>}
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="icon-btn" onClick={toggle} title={theme === "dark" ? "Switch to light" : "Switch to dark"} aria-label="Toggle theme">
              {theme === "dark" ? <IconSun /> : <IconMoon />}
            </button>
            <button className="btn btn-line" onClick={signOut} style={{ flex: 1, justifyContent: "center" }}>
              <IconSignOut /> Sign out
            </button>
          </div>
        </div>
      </aside>

      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export function Topbar({ eyebrow, title, children }) {
  return (
    <header className="topbar">
      <div className="topbar__titles">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
      </div>
      {children && <div className="topbar__actions">{children}</div>}
    </header>
  );
}
