// Small presentation helpers shared across pages.

const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit", month: "short", year: "numeric",
});
const DATETIME_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
});

export function formatDate(iso) {
  if (!iso) return "—";
  try { return DATE_FMT.format(new Date(iso)); } catch { return iso; }
}

export function formatDateTime(iso) {
  if (!iso) return "—";
  try { return DATETIME_FMT.format(new Date(iso)); } catch { return iso; }
}

// Status → pill modifier class. Mirrors Submission.Status on the backend.
export function statusClass(status) {
  switch (status) {
    case "submitted": return "pill--submitted";
    case "in_review":
    case "on_hold": return "pill--review";
    case "shortlisted":
    case "accepted": return "pill--accepted";
    case "declined": return "pill--declined";
    default: return "";
  }
}

// The Submission.Status set, for filter dropdowns.
export const SUBMISSION_STATUSES = [
  { value: "submitted", label: "Submitted" },
  { value: "in_review", label: "In review" },
  { value: "shortlisted", label: "Shortlisted" },
  { value: "on_hold", label: "On hold" },
  { value: "declined", label: "Declined" },
];

export function prettyStatus(status) {
  if (!status) return "—";
  return String(status).replace(/_/g, " ");
}

export function localeLabel(locale) {
  return locale === "ar" ? "Arabic" : "English";
}
