// ─────────────────────────────────────────────────────────────────────────────
// Entry personalization for the standalone partners app:
//   • the language the visitor chose (so they continue in it), and
//   • the first name carried in the invitation link (?invite=Chris), shown as a
//     personal greeting on the welcome screen.
// Both are read defensively and never throw.
// ─────────────────────────────────────────────────────────────────────────────

export const LOCALE_KEY = "bnp-house-onboarding:locale";
const NAME_KEY = "bnp-house-onboarding:invite-name";

// Accepted query parameters for the invitee's first name (first non-empty wins).
const INVITE_PARAMS = ["invite", "name"];

export function getStoredLang() {
  try {
    const v = window.localStorage.getItem(LOCALE_KEY);
    return v === "en" || v === "ar" ? v : "";
  } catch {
    return "";
  }
}

export function setStoredLang(locale) {
  try {
    if (locale === "en" || locale === "ar") {
      window.localStorage.setItem(LOCALE_KEY, locale);
    }
  } catch {
    /* storage unavailable — ignore */
  }
}

// Tidy a name from the URL: drop angle brackets and control characters, collapse
// whitespace, cap the length, and gently capitalise a lowercase first letter.
// Control chars are filtered by code point (>= 0x20, not DEL) to keep this
// source plain-ASCII while still preserving Arabic/accented letters.
function sanitizeName(value) {
  if (!value) return "";
  let s = String(value).replace(/[<>]/g, "");
  s = Array.from(s)
    .filter((ch) => { const c = ch.codePointAt(0); return c >= 0x20 && c !== 0x7f; })
    .join("");
  s = s.replace(/\s+/g, " ").trim();
  if (s.length > 40) s = s.slice(0, 40).trim();
  if (s && s[0] !== s[0].toUpperCase()) s = s[0].toUpperCase() + s.slice(1);
  return s;
}

// The invitee's first name: from the link if present (and remembered for the
// rest of the session), otherwise whatever we last stored.
export function getInviteName() {
  let raw = "";
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of INVITE_PARAMS) {
      const v = params.get(key);
      if (v && v.trim()) { raw = v; break; }
    }
  } catch {
    /* ignore */
  }

  const fromUrl = sanitizeName(raw);
  try {
    if (fromUrl) {
      window.localStorage.setItem(NAME_KEY, fromUrl);
      return fromUrl;
    }
    return sanitizeName(window.localStorage.getItem(NAME_KEY) || "");
  } catch {
    return fromUrl;
  }
}
