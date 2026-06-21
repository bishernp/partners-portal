import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import translations from './translations.js';
import { setStoredLang } from './personalization.js';

const LocaleContext = createContext(null);

export const SUPPORTED_LOCALES = ['en', 'ar'];
export const DEFAULT_LOCALE = 'en';

// In this standalone partners app the only real route is the partner journey
// itself (served at "/" and "/ar"). Every other link in the copied chrome
// (nav, menu, footer, breadcrumb, logo) points to the main website.
const MAIN_SITE_ORIGIN = 'https://bishernp.com';

// In production the journey is hosted under "/portal" (the dashboard lives under
// "/dashboard" on the same domain). Assets keep Vite base "/" so the copied
// template files resolve from the site root; only the router is prefixed.
export const ROUTER_BASE = import.meta.env.PROD ? '/portal' : '';

function detectLocaleFromPath(pathname) {
  if (pathname === '/ar' || pathname.startsWith('/ar/')) return 'ar';
  return 'en';
}

function stripLocalePrefix(pathname) {
  if (pathname === '/ar') return '/';
  if (pathname.startsWith('/ar/')) return pathname.slice(3) || '/';
  return pathname;
}

function withLocalePrefix(path, locale) {
  if (locale === 'ar') {
    if (path === '/' || path === '') return '/ar';
    if (path.startsWith('/ar')) return path;
    return `/ar${path.startsWith('/') ? path : '/' + path}`;
  }
  if (path.startsWith('/ar/')) return path.slice(3) || '/';
  if (path === '/ar') return '/';
  return path;
}

function lookupKey(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LocaleProvider({ children }) {
  const location = useLocation();
  const locale = detectLocaleFromPath(location.pathname);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', locale);
    html.setAttribute('dir', dir);
    if (locale === 'ar') {
      html.classList.add('locale-ar');
      document.body.classList.add('locale-ar');
    } else {
      html.classList.remove('locale-ar');
      document.body.classList.remove('locale-ar');
    }
  }, [locale, dir]);

  const value = useMemo(() => {
    const t = (key, fallback) => {
      const localeStrings = translations[locale] || translations[DEFAULT_LOCALE];
      const found = lookupKey(localeStrings, key);
      if (found !== undefined) return found;
      const englishFallback = lookupKey(translations[DEFAULT_LOCALE], key);
      return englishFallback !== undefined ? englishFallback : fallback !== undefined ? fallback : key;
    };

    const localizedPath = (path) => withLocalePrefix(path, locale);

    const switchLocale = (target) => {
      if (!SUPPORTED_LOCALES.includes(target) || target === locale) return;
      // Remember the choice so the visitor continues in it (gate + nav switcher
      // share this), and persist it BEFORE the reload so the entry reconcile
      // never bounces a deliberate switch.
      setStoredLang(target);
      const bare = stripLocalePrefix(location.pathname);
      const next = withLocalePrefix(bare, target);
      // Full page reload so every component, GSAP animation, font, and DOM
      // tree re-mounts cleanly in the new locale instead of partially
      // re-rendering in place. ROUTER_BASE prefixes the production "/portal" mount.
      window.location.assign(ROUTER_BASE + next + location.search + location.hash);
    };

    return {
      locale,
      dir,
      isRTL: dir === 'rtl',
      t,
      localizedPath,
      switchLocale,
      stripLocalePrefix,
    };
  }, [locale, dir, location.pathname, location.search, location.hash]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    return {
      locale: DEFAULT_LOCALE,
      dir: 'ltr',
      isRTL: false,
      t: (key, fallback) => {
        const found = lookupKey(translations[DEFAULT_LOCALE], key);
        return found !== undefined ? found : fallback !== undefined ? fallback : key;
      },
      localizedPath: (path) => path,
      switchLocale: () => {},
      stripLocalePrefix,
    };
  }
  return ctx;
}

export function useT() {
  return useLocale().t;
}

// Locale-aware link. In the standalone app, internal "/..." paths resolve to
// the main website (with the right /ar prefix); other links pass through.
export function L({ to, children, ...rest }) {
  const { localizedPath } = useLocale();
  if (typeof to === 'string' && to.startsWith('/')) {
    return <a href={MAIN_SITE_ORIGIN + localizedPath(to)} {...rest}>{children}</a>;
  }
  return <a href={to} {...rest}>{children}</a>;
}

export default LocaleContext;
