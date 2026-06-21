import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./lib/auth.jsx";
import { initTheme } from "./lib/theme.js";
import "./styles/theme.css";

// Apply any persisted theme before first paint to avoid a flash.
initTheme();

// In production the app is mounted under "/dashboard" (Vite base); React Router
// uses the same prefix. In dev BASE_URL is "/".
const ROUTER_BASENAME = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
