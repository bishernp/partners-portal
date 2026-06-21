// Auth context: thin wrapper over the token store in api.js. Authentication is
// validated lazily — the first protected request that 401s (after a failed
// refresh) throws AuthError, which the pages surface by calling signOut().
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { login as apiLogin, logout as apiLogout, tokens } from "./api.js";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => tokens.user);
  const [authed, setAuthed] = useState(() => Boolean(tokens.access));

  const signIn = useCallback(async (username, password) => {
    await apiLogin(username, password);
    setUser(username);
    setAuthed(true);
  }, []);

  const signOut = useCallback(() => {
    apiLogout();
    setUser("");
    setAuthed(false);
  }, []);

  const value = useMemo(() => ({ user, authed, signIn, signOut }), [user, authed, signIn, signOut]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
