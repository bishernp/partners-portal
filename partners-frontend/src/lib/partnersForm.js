// ─────────────────────────────────────────────────────────────────────────────
// B&P House onboarding — form state, persistence, validation, payload.
//
// Front end only. Answers persist to localStorage keyed by the invitation token
// (?token=...), so a partner can leave and resume. On submit we build a clean
// payload; wiring it to an endpoint is left for later.
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SCREENS, allFields } from "../data/partners.js";

const STORAGE_PREFIX = "bnp-house-onboarding:";

export function getInvitationToken() {
  try {
    return new URLSearchParams(window.location.search).get("token") || "";
  } catch {
    return "";
  }
}

function storageKey(token) {
  return STORAGE_PREFIX + (token || "anonymous");
}

function loadAnswers(token) {
  try {
    const raw = window.localStorage.getItem(storageKey(token));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveAnswers(token, answers) {
  try {
    window.localStorage.setItem(storageKey(token), JSON.stringify(answers));
  } catch { /* storage unavailable — ignore */ }
}

// Resume where they left off (clamped to the visible 1..TOTAL range).
const STEP_PREFIX = "bnp-house-onboarding:step:";

export function loadStep(token) {
  try {
    const n = parseInt(window.localStorage.getItem(STEP_PREFIX + (token || "anonymous")), 10);
    if (Number.isFinite(n) && n >= 1 && n <= 8) return n;
  } catch { /* ignore */ }
  return 1;
}

export function saveStep(token, step) {
  try {
    if (step >= 1 && step <= 8) {
      window.localStorage.setItem(STEP_PREFIX + (token || "anonymous"), String(step));
    }
  } catch { /* ignore */ }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Q13-style exclusion is no longer used, but the helper stays harmless.
export function visibleOptions(field, answers) {
  if (field.excludesFrom) {
    const excluded = answers[field.excludesFrom];
    return (field.options || []).filter((o) => o.value !== excluded);
  }
  return field.options || [];
}

// Whether a field is currently answered.
export function hasValue(field, answers) {
  const v = answers[field.key];
  if (field.type === "multi" || field.type === "ordered") return Array.isArray(v) && v.length > 0;
  if (field.type === "yesno") return v === true || v === false;
  return v != null && String(v).trim() !== "";
}

// Validate a single field. Returns an error id or null.
function fieldError(field, answers) {
  if (field.required && !hasValue(field, answers)) return "missing";
  if (field.type === "email" && hasValue(field, answers) && !EMAIL_RE.test(String(answers[field.key]).trim())) {
    return "email";
  }
  // "Other (please specify)" must be filled in when selected.
  if (field.type === "multi" && field.hasOther) {
    const v = answers[field.key];
    if (Array.isArray(v) && v.includes("other")) {
      const detail = answers[`${field.key}_other`];
      if (!detail || !String(detail).trim()) return "otherMissing";
    }
  }
  return null;
}

export function validateScreen(screen, answers) {
  const errors = {};
  if (Array.isArray(screen.fields)) {
    for (const field of screen.fields) {
      const err = fieldError(field, answers);
      if (err) errors[field.key] = err;
    }
  }
  if (screen.ack) {
    for (const item of screen.ack.items) {
      if (answers[item.key] !== true) errors[item.key] = "missing";
    }
  }
  return errors;
}

export function isFormComplete(answers) {
  for (const screen of SCREENS) {
    if (Object.keys(validateScreen(screen, answers)).length > 0) return false;
  }
  return true;
}

// ── Payload ──────────────────────────────────────────────────────────────────

export function buildPayload(answers, token, locale) {
  const text = (k) => (answers[k] != null ? String(answers[k]).trim() : "");
  const arr = (k) => (Array.isArray(answers[k]) ? answers[k] : []);
  const bool = (k) => answers[k] === true;
  const otherOf = (k) => (arr(k).includes("other") ? text(`${k}_other`) : "");

  return {
    invitation_token: token || "",
    locale: locale === "ar" ? "ar" : "en",
    status: "submitted",
    submitted_at: new Date().toISOString(),

    // Your details
    full_name: text("full_name"),
    honorific: answers.honorific || "",
    email: text("email"),
    mobile: text("mobile"),
    based_in: text("based_in"),
    nationality: answers.nationality || "",
    linkedin: text("linkedin"),

    // Your standing
    years_experience: answers.years_experience || "",
    current_status: arr("current_status"),
    seniority_reached: answers.seniority_reached || "",
    title: text("title"),
    work_status: answers.work_status || "",
    institution: text("institution"),
    qualification: answers.qualification || "",

    // Your expertise
    expertise_areas: arr("expertise_areas"),
    expertise_areas_other: otherOf("expertise_areas"),
    sectors: arr("sectors"),
    sectors_other: otherOf("sectors"),
    contribution: arr("contribution"),
    vision_themes: arr("vision_themes"),
    vision_themes_other: otherOf("vision_themes"),

    // Your reach
    institutions: arr("institutions"),
    relationship_nature: arr("relationship_nature"),
    reach_geographies: arr("reach_geographies"),
    access_readiness: answers.access_readiness || "",

    // What draws you
    appeals: arr("appeals"), // ordered
    availability: answers.availability || "",
    horizon: answers.horizon || "",
    readiness: answers.readiness || "",

    // Closing
    closing_remarks: text("closing_remarks"),

    ack_intro: bool("ack_intro"),
    ack_consent: bool("ack_consent"),
  };
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function usePartnersForm() {
  const tokenRef = useRef(getInvitationToken());
  const [answers, setAnswers] = useState(() => loadAnswers(tokenRef.current));

  useEffect(() => {
    saveAnswers(tokenRef.current, answers);
  }, [answers]);

  const setValue = useCallback((key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Toggle a value within a multi-select, honouring an optional max.
  const toggleMulti = useCallback((key, value, max) => {
    setAnswers((prev) => {
      const current = Array.isArray(prev[key]) ? prev[key] : [];
      if (current.includes(value)) {
        const next = { ...prev, [key]: current.filter((v) => v !== value) };
        if (value === "other") delete next[`${key}_other`]; // clear stale "other" text
        return next;
      }
      if (max && current.length >= max) return prev; // never exceed the cap
      return { ...prev, [key]: [...current, value] };
    });
  }, []);

  // Toggle within an ordered multi-select; selection order is the ranking.
  const toggleOrdered = useCallback((key, value) => {
    setAnswers((prev) => {
      const current = Array.isArray(prev[key]) ? prev[key] : [];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) };
      }
      return { ...prev, [key]: [...current, value] };
    });
  }, []);

  const resetForm = useCallback(() => {
    setAnswers({});
    saveAnswers(tokenRef.current, {});
  }, []);

  const fields = useMemo(() => allFields(), []);

  return {
    token: tokenRef.current,
    answers,
    fields,
    setValue,
    toggleMulti,
    toggleOrdered,
    resetForm,
  };
}
