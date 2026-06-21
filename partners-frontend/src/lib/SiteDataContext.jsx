import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import site from '../data/site.js';
import {
  getArticles,
  getContact,
  getFaqs,
  getGlobalLanguages,
  getTerms,
  getPrivacy,
  localizeArticlePreview,
  localizeContact,
  pickLocale,
  sanitizeHtml,
} from './api.js';
import { useLocale } from './LocaleContext.jsx';

const SiteDataContext = createContext(null);

const DEFAULT_LANGUAGES = [
  { code: 'en', name: 'English',  direction: 'ltr' },
  { code: 'ar', name: 'العربية', direction: 'rtl' },
];

function mergeContact(localized) {
  if (!localized) return site.contact;
  const phone = localized.phone || site.contact.phone;
  return {
    ...site.contact,
    email:       localized.email   || site.contact.email,
    phone,
    phoneRaw:    phone ? phone.replace(/[^\d+]/g, '') : site.contact.phoneRaw,
    addressLine: localized.address || site.contact.addressLine,
    addressHtml: localized.address || site.contact.addressHtml,
    mapsUrl:     localized.mapsUrl || site.contact.mapsUrl,
  };
}

export function SiteDataProvider({ children }) {
  const { locale } = useLocale();

  // ── Articles ─────────────────────────────────────────────────────────────
  const [rawArticles,    setRawArticles]    = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [articlesError,   setArticlesError]   = useState(false);

  // ── FAQs ──────────────────────────────────────────────────────────────────
  const [rawFaqs,    setRawFaqs]    = useState(null);
  const [faqsLoading, setFaqsLoading] = useState(true);
  const [faqsError,   setFaqsError]   = useState(false);

  // ── Terms: undefined=loading, null=no content, string=HTML ───────────────
  const [rawTerms,   setRawTerms]   = useState(undefined);
  const [termsError, setTermsError] = useState(false);

  // ── Privacy: same pattern as Terms ───────────────────────────────────────
  const [rawPrivacy,   setRawPrivacy]   = useState(undefined);
  const [privacyError, setPrivacyError] = useState(false);

  // ── Contact ───────────────────────────────────────────────────────────────
  const [rawContact, setRawContact] = useState(null);

  // ── Enabled languages ─────────────────────────────────────────────────────
  const [enabledLanguages, setEnabledLanguages] = useState(DEFAULT_LANGUAGES);

  // Fetch all raw multi-lang data once on mount — locale switches re-localize
  // from the cached payloads via useMemo below (no extra network round-trips).
  useEffect(() => {
    let cancelled = false;

    getArticles()
      .then(data => {
        if (cancelled) return;
        setRawArticles(data);
        setArticlesLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setArticlesError(true);
        setArticlesLoading(false);
      });

    getFaqs()
      .then(data => {
        if (cancelled) return;
        setRawFaqs(data);
        setFaqsLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setFaqsError(true);
        setFaqsLoading(false);
      });

    getTerms()
      .then(data => { if (!cancelled) setRawTerms(data); })
      .catch(() => {
        if (!cancelled) {
          setRawTerms(null);
          setTermsError(true);
        }
      });

    getPrivacy()
      .then(data => { if (!cancelled) setRawPrivacy(data); })
      .catch(() => {
        if (!cancelled) {
          setRawPrivacy(null);
          setPrivacyError(true);
        }
      });

    getContact()
      .then(d => { if (!cancelled) setRawContact(d); })
      .catch(() => {});

    getGlobalLanguages()
      .then(d => {
        if (!cancelled && d?.enabledLanguages?.length) setEnabledLanguages(d.enabledLanguages);
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, []);

  // ── Derived values (locale-switched client-side, no re-fetch) ────────────

  const articles = useMemo(() =>
    rawArticles.map(raw => localizeArticlePreview(raw, locale)).filter(Boolean),
  [rawArticles, locale]);

  const contact = useMemo(
    () => mergeContact(localizeContact(rawContact, locale)),
    [rawContact, locale]
  );

  const faqs = useMemo(() => {
    if (!rawFaqs) return null;
    return rawFaqs
      .map(f => ({
        q: pickLocale(f.question, locale),
        a: sanitizeHtml(pickLocale(f.answer, locale)),
      }))
      .filter(f => f.q && f.a);
  }, [rawFaqs, locale]);

  // Terms: undefined → loading, empty-string → no content, string → HTML
  const termsHtml = useMemo(() => {
    if (rawTerms === undefined) return undefined;
    return sanitizeHtml(pickLocale(rawTerms?.termsOfUse, locale));
  }, [rawTerms, locale]);

  // Privacy: same pattern
  const privacyHtml = useMemo(() => {
    if (rawPrivacy === undefined) return undefined;
    return sanitizeHtml(pickLocale(rawPrivacy?.privacyPolicy, locale));
  }, [rawPrivacy, locale]);

  const value = useMemo(() => ({
    articles,  articlesLoading,  articlesError,
    contact,
    faqs,      faqsLoading,      faqsError,
    termsHtml, termsError,
    privacyHtml, privacyError,
    enabledLanguages,
  }), [
    articles, articlesLoading, articlesError,
    contact,
    faqs, faqsLoading, faqsError,
    termsHtml, termsError,
    privacyHtml, privacyError,
    enabledLanguages,
  ]);

  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) {
    return {
      articles: [], articlesLoading: false, articlesError: false,
      contact: site.contact,
      faqs: null, faqsLoading: false, faqsError: false,
      termsHtml: undefined, termsError: false,
      privacyHtml: undefined, privacyError: false,
      enabledLanguages: DEFAULT_LANGUAGES,
    };
  }
  return ctx;
}

// ── Per-resource hooks ────────────────────────────────────────────────────────

export function useArticles() {
  const { articles } = useSiteData();
  const { locale } = useLocale();
  return articles.filter(a =>
    !Array.isArray(a.availableLanguages) || a.availableLanguages.includes(locale)
  );
}
export function useAllArticles()       { return useSiteData().articles; }
export function useArticlesLoading()   { return useSiteData().articlesLoading; }
export function useArticlesError()     { return useSiteData().articlesError; }

export function useContact()           { return useSiteData().contact; }

export function useFaqs()              { return useSiteData().faqs; }
export function useFaqsLoading()       { return useSiteData().faqsLoading; }
export function useFaqsError()         { return useSiteData().faqsError; }

export function useTermsHtml()         { return useSiteData().termsHtml; }
export function useTermsError()        { return useSiteData().termsError; }

export function usePrivacyHtml()       { return useSiteData().privacyHtml; }
export function usePrivacyError()      { return useSiteData().privacyError; }

export function useEnabledLanguages()  { return useSiteData().enabledLanguages; }
