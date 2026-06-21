import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';
import { SiteDataProvider } from './lib/SiteDataContext.jsx';
import { LocaleProvider, ROUTER_BASE } from './lib/LocaleContext.jsx';
import PartnersPage from './pages/PartnersPage.jsx';

// Re-initialize the GSAP/Lenis animation engine on each client-side route
// change (mirrors the main website's AnimationSync), and strip Arabic-
// incompatible animation classes before paint.
function AnimationSync() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (typeof window.neutralizeArabicAnimations === 'function') {
      window.neutralizeArabicAnimations();
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const raf = requestAnimationFrame(() => {
      if (typeof window.mxdPageInit === 'function') window.mxdPageInit();
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return null;
}

// Standalone partners platform. The partner journey lives at the root for both
// locales: `/` (English) and `/ar` (Arabic). Everything else redirects to root.
export default function App() {
  return (
    <BrowserRouter basename={ROUTER_BASE || '/'}>
      <LocaleProvider>
        <SiteDataProvider>
          <AnimationSync />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PartnersPage />} />
            </Route>
            <Route path="/ar" element={<Layout />}>
              <Route index element={<PartnersPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </SiteDataProvider>
      </LocaleProvider>
    </BrowserRouter>
  );
}
