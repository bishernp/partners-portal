import DOMPurify from 'dompurify';

export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'https://dashboard.bishernp.com';

// credentials: 'include' is required by the dashboard backend session middleware.
export async function apiFetch(path, init) {
  const res = await fetch(`${API_BASE}${path}`, { credentials: 'include', ...init });
  if (res.status === 404) {
    const err = new Error(`API 404: ${path}`);
    err.status = 404;
    throw err;
  }
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`);
  return res.json();
}

// Build an image URL from a bare filename returned by the API.
// type: 'articles' | 'services' | 'projects' | 'team'
export function imgUrl(filename, type = 'articles') {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  return `${API_BASE}/api/${type}/image/${filename}`;
}

// Pick the right value from a multi-language map { en, ar, ... } with EN fallback.
// Accepts plain strings/arrays (already extracted) and returns them unchanged.
export function pickLocale(field, locale = 'en', fallback = '') {
  if (field == null) return fallback;
  if (typeof field === 'string' || Array.isArray(field)) return field;
  if (typeof field === 'object') {
    return field[locale] ?? field.en ?? Object.values(field)[0] ?? fallback;
  }
  return fallback;
}

export function pickLocaleArray(field, locale = 'en') {
  const v = pickLocale(field, locale, []);
  return Array.isArray(v) ? v : (v ? [v] : []);
}

// Sanitize HTML before injecting into the DOM. Allow tags TinyMCE produces.
export function sanitizeHtml(html) {
  if (!html) return '';
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}

// ── HTML → blocks (so CMS HTML renders with the same styling as static blocks) ──
export function htmlToBlocks(html) {
  if (!html || typeof DOMParser === 'undefined') return [];
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const blocks = [];
  let firstParagraph = true;

  const elements = doc.body.querySelectorAll('p, h2, h3, h4, ul, ol, blockquote');

  for (const el of elements) {
    const tag = el.tagName.toLowerCase();
    const text = el.textContent.trim();

    if ((tag === 'p' || tag === 'ul' || tag === 'ol') && el.closest('blockquote')) continue;
    if ((tag === 'ul' || tag === 'ol') && el.parentElement?.closest('ul, ol')) continue;

    if (tag === 'p') {
      if (!text) continue;
      const isIntro = firstParagraph || el.classList.contains('mxd-article__excerpt');
      blocks.push({ type: isIntro ? 'intro' : 'p', text });
      firstParagraph = false;
    } else if (tag === 'h2' || tag === 'h3' || tag === 'h4') {
      if (text) blocks.push({ type: tag, text });
    } else if (tag === 'ul' || tag === 'ol') {
      const items = [...el.querySelectorAll(':scope > li')]
        .map(li => li.textContent.trim())
        .filter(Boolean);
      if (items.length) blocks.push({ type: tag, items });
    } else if (tag === 'blockquote') {
      const cite = el.querySelector('cite');
      const block = { type: 'blockquote', text };
      if (cite) block.cite = cite.textContent.trim();
      if (text) blocks.push(block);
    }
  }

  return blocks;
}

// ── Enabled languages ─────────────────────────────────────────────────────────

export async function getGlobalLanguages() {
  try {
    const json = await apiFetch('/api/global-languages/manage-global-language-settings');
    return json || { multiLanguageEnabled: true, enabledLanguages: [{ code: 'en', name: 'English', direction: 'ltr' }] };
  } catch {
    return { multiLanguageEnabled: true, enabledLanguages: [{ code: 'en', name: 'English', direction: 'ltr' }] };
  }
}

// ── Articles list (raw multi-lang — localized client-side) ────────────────────

export async function getArticles() {
  const json = await apiFetch('/api/articles/posts');
  return Array.isArray(json?.data?.articles) ? json.data.articles : [];
}

// Localize a raw article to a lightweight preview shape suitable for lists.
// Skips the expensive htmlToBlocks() pass — only title, excerpt, cover, tags, meta.
export function localizeArticlePreview(raw, locale = 'en') {
  if (!raw) return null;

  const titleObj = raw.articleTitle || {};
  const available = Object.keys(titleObj).filter(k => titleObj[k]);
  const isLocalized = available.includes(locale);
  const useLocale = isLocalized ? locale : 'en';

  const dateLocale = useLocale === 'ar' ? 'ar-SA' : 'en-US';
  const minLabel   = useLocale === 'ar' ? 'دقيقة قراءة' : 'min read';
  const title      = pickLocale(raw.articleTitle, useLocale);
  const date       = raw.publishedAt
    ? new Date(raw.publishedAt).toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return {
    slug:               raw.slug,
    title,
    excerpt:            pickLocale(raw.summary, useLocale),
    tags:               pickLocaleArray(raw.tags, useLocale),
    category:           pickLocale(raw.category, useLocale),
    date,
    publishedAt:        raw.publishedAt || null,
    readTime:           raw.readingTime ? `${raw.readingTime} ${minLabel}` : `5 ${minLabel}`,
    coverImg:           imgUrl(raw.imageCover, 'articles'),
    availableLanguages: available.length ? available : ['en'],
    isLocalized,
  };
}

// ── Article by slug (raw multi-lang document, switched client-side) ───────────

export async function getArticle(slug) {
  const json = await apiFetch(`/api/articles/posts/${encodeURIComponent(slug)}`);
  // Endpoint may wrap the article inside .data.article OR return it directly under .data
  const raw = json?.data?.article ?? json?.data ?? null;
  return raw;
}

// Localize a raw article for the requested locale (full content block processing).
// Returns { article, availableLanguages, isLocalized }.
export function localizeArticle(raw, locale = 'en') {
  if (!raw) return null;

  const titleObj = raw.articleTitle || {};
  const available = Object.keys(titleObj).filter(k => titleObj[k]);
  const isLocalized = available.includes(locale);
  const useLocale = isLocalized ? locale : 'en';

  const dateLocale = useLocale === 'ar' ? 'ar-SA' : 'en-US';
  const minLabel   = useLocale === 'ar' ? 'دقيقة قراءة' : 'min read';
  const title      = pickLocale(raw.articleTitle, useLocale);
  const date       = raw.publishedAt
    ? new Date(raw.publishedAt).toLocaleDateString(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return {
    article: {
      slug:            raw.slug,
      title,
      seoTitle:        pickLocale(raw.metaTitle, useLocale) || title,
      metaDescription: pickLocale(raw.metaDescription, useLocale),
      tags:            pickLocaleArray(raw.tags, useLocale),
      keywords:        pickLocaleArray(raw.keywords, useLocale),
      category:        pickLocale(raw.category, useLocale),
      date,
      publishedAt:     raw.publishedAt || null,
      readTime:        raw.readingTime ? `${raw.readingTime} ${minLabel}` : `5 ${minLabel}`,
      coverImg:        imgUrl(raw.imageCover, 'articles'),
      excerpt:         pickLocale(raw.summary, useLocale),
      content:         htmlToBlocks(sanitizeHtml(pickLocale(raw.articleContent, useLocale))),
      authorAvatar:    imgUrl(raw.authorAvatar, 'articles'),
      articleAuthor:   raw.articleAuthor || '',
    },
    availableLanguages: available.length ? available : ['en'],
    isLocalized,
  };
}

// ── FAQs (raw multi-lang — switch client-side) ────────────────────────────────

export async function getFaqs() {
  const json = await apiFetch('/api/faqs');
  return Array.isArray(json?.data) ? json.data : [];
}

// ── Terms (raw multi-lang HTML) ───────────────────────────────────────────────

export async function getTerms() {
  try {
    const json = await apiFetch('/api/terms');
    return json?.data || null;
  } catch (e) {
    if (e.status === 404) return null;
    throw e;
  }
}

// ── Privacy (raw multi-lang HTML) ─────────────────────────────────────────────

export async function getPrivacy() {
  try {
    const json = await apiFetch('/api/privacy');
    return json?.data || null;
  } catch (e) {
    if (e.status === 404) return null;
    throw e;
  }
}

// ── Contact (raw multi-lang) ──────────────────────────────────────────────────

export async function getContact() {
  const json = await apiFetch('/api/contact');
  return json?.data?.contact || null;
}

export function localizeContact(raw, locale = 'en') {
  if (!raw) return null;
  const primary = raw.addresses?.[0];
  return {
    email:   primary?.email || '',
    phone:   primary?.phoneNumber || '',
    address: pickLocale(primary?.address, locale),
    country: pickLocale(primary?.countryName, locale),
    mapsUrl: primary?.googleMapsLink || raw.mainGoogleMapsLink || '',
  };
}
