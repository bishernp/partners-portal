// ─────────────────────────────────────────────────────────────────────────────
// B&P House onboarding — the multi-step wizard.
//
// Eight linear screens (Welcome ... One last look) followed by a Confirmation
// state shown only after a successful submit. Built in the Bisher & Partners
// design language: the same inner-headline scaffold, underline fields, gold
// accent, light/dark theming and RTL behaviour as the rest of the site, with a
// scoped step transition layered on top.
//
// On submit the payload is built, kept in localStorage as a safety net, and
// POSTed to the onboarding API (VITE_API_BASE). A server validation error is
// mapped back onto the offending screen; a network error is surfaced for retry
// without losing any answers.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useMemo, useRef, useState } from "react";
import { L, useLocale } from "../../lib/LocaleContext.jsx";
import {
  SCREENS, TOTAL_STEPS, UI, getScreen, getConfirmationScreen,
  pick, optionLabel,
} from "../../data/partners.js";
import {
  usePartnersForm, validateScreen, isFormComplete, buildPayload, hasValue,
  loadStep, saveStep,
} from "../../lib/partnersForm.js";
import FieldRenderer, { AckGroup } from "./PartnersFields.jsx";
import { countryName } from "../../data/countries.js";
import { getInviteName, getStoredLang, setStoredLang } from "../../lib/personalization.js";
import { wizardStyles } from "./partnersWizard.styles.js";

const SUBMISSION_KEY_PREFIX = "bnp-house-onboarding:submission:";

// Onboarding API. Set VITE_API_BASE at build time for production; falls back to
// the local Django dev server.
const API_BASE = (import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000").replace(/\/$/, "");

// Map a server error key (a question code, an "<code>_other", or an ack key)
// back to the screen that owns it, so we can return the partner to it.
function screenForErrorKey(key) {
  const base = key.endsWith("_other") ? key.slice(0, -"_other".length) : key;
  return SCREENS.find((s) => {
    if (Array.isArray(s.fields) && s.fields.some((f) => f.key === base)) return true;
    if (s.ack && s.ack.items.some((it) => it.key === base)) return true;
    return false;
  });
}

const PlusIcon = () => (
  <i className="btn-icon">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
      <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
    </svg>
  </i>
);

export default function PartnersWizard() {
  const { locale, isRTL, switchLocale } = useLocale();
  const ui = UI[locale] || UI.en;
  const form = usePartnersForm();
  const { answers } = form;

  const [step, setStep] = useState(() => loadStep(form.token)); // 1..8, then 9 = confirmation
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [reference, setReference] = useState("");
  // The language choice is the very first screen; once made (and remembered) the
  // journey begins at the welcome.
  const [langChosen, setLangChosen] = useState(() => Boolean(getStoredLang()));
  const langReconciled = useRef(false);
  const navDirRef = useRef("fwd");
  const topRef = useRef(null);

  // Returning visitor who chose a language before but opened the other locale's
  // link: continue them in their language (full reload, ?invite preserved).
  useEffect(() => {
    if (langReconciled.current) return;
    langReconciled.current = true;
    const stored = getStoredLang();
    if (stored && stored !== locale) switchLocale(stored);
  }, [locale, switchLocale]);

  const debug = useMemo(() => {
    try { return new URLSearchParams(window.location.search).get("debug") === "1"; }
    catch { return false; }
  }, []);
  // First name from the invitation link (?invite=Chris), for the welcome greeting.
  const inviteName = useMemo(() => getInviteName(), []);
  const [payload, setPayload] = useState(null);

  const screen = submitted ? getConfirmationScreen() : getScreen(step);

  // Bring the wizard back into view after a step change (long steps scroll).
  function scrollToTop() {
    if (topRef.current) {
      const y = topRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  }

  function goTo(nextStep, dir, nextErrors) {
    navDirRef.current = dir;
    setErrors(nextErrors || {});
    setSubmitError("");
    setStep(nextStep);
    saveStep(form.token, nextStep);
    requestAnimationFrame(scrollToTop);
  }

  function handleBack() {
    if (step > 1) goTo(step - 1, "back");
  }

  // Free forward navigation: a partner may browse the whole form before filling
  // anything. Nothing is required to advance; completeness is checked only at
  // the final submit, which returns them to the first screen that needs work.
  function handleContinue() {
    goTo(step + 1, "fwd");
  }

  // Jump straight to any step from the progress stepper (no validation).
  function handleJump(targetStep) {
    if (targetStep === step) return;
    goTo(targetStep, targetStep < step ? "back" : "fwd");
  }

  function handleEdit(targetStep) {
    goTo(targetStep, "back");
  }

  // First-screen language choice. Same locale as the route → reveal the welcome
  // in place; the other locale → switch (persists + reloads, ?invite preserved).
  function chooseLang(target) {
    if (target === locale) {
      setStoredLang(target);
      navDirRef.current = "fwd";
      setLangChosen(true);
      requestAnimationFrame(scrollToTop);
    } else {
      switchLocale(target);
    }
  }

  async function handleSubmit() {
    if (submitting) return;
    // Final gate: every required field + every acknowledgment across the form.
    if (!isFormComplete(answers)) {
      const firstBad = SCREENS.find(
        (s) => s.kind !== "confirmation" && Object.keys(validateScreen(s, answers)).length > 0
      );
      if (firstBad) {
        goTo(firstBad.step, "back", validateScreen(firstBad, answers));
      }
      return;
    }
    const built = buildPayload(answers, form.token, locale);
    // Safety net: keep a local copy so nothing is lost if the request fails.
    try {
      window.localStorage.setItem(SUBMISSION_KEY_PREFIX + (form.token || "anonymous"), JSON.stringify(built));
    } catch { /* storage unavailable — ignore */ }
    window.__bnpLastSubmission = built;
    setPayload(built);

    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/onboarding/submissions/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(built),
      });

      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data && data.reference) setReference(data.reference);
        setSubmitted(true);
        requestAnimationFrame(scrollToTop);
        return;
      }

      if (res.status === 400) {
        // Field-level validation from the server: return to the first screen
        // that owns a rejected key and surface the messages inline.
        const data = await res.json().catch(() => ({}));
        const keys = data && typeof data === "object" ? Object.keys(data) : [];
        const target = keys.map(screenForErrorKey).find(Boolean);
        if (target) {
          goTo(target.step, "back", validateScreen(target, answers));
        }
        setSubmitError(ui.submitErrorReview);
        return;
      }

      throw new Error(`Unexpected status ${res.status}`);
    } catch {
      // Network or server error: keep them on this screen, answers intact,
      // and let the primary button retry.
      setSubmitError(ui.submitErrorNetwork);
    } finally {
      setSubmitting(false);
    }
  }

  function downloadJson() {
    try {
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bnp-house-submission.json";
      a.click();
      URL.revokeObjectURL(url);
    } catch { /* ignore */ }
  }

  const enterX = (() => {
    const ahead = isRTL ? -30 : 30;
    return `${navDirRef.current === "back" ? -ahead : ahead}px`;
  })();

  // The Welcome is an introduction, not a counted step. The numbered screens
  // (About you ... One last look) read as 1..7 of 7.
  const countedTotal = TOTAL_STEPS - 1;
  const countedNum = screen.step - 1;
  const stepLabel = ui.stepOf.replace("{x}", String(countedNum)).replace("{n}", String(countedTotal));
  const blockingMissing = Object.keys(errors).length > 0;

  // ── Editorial column (heading + intro + program note + progress) ──────────
  function Editorial({ withProgress = true }) {
    return (
      <div className="bnp-pf-editorial">
        {withProgress && (
          <div className="bnp-pf-reveal bnp-pf-progress" style={{ "--pf-i": 0 }}>
            <span className="bnp-pf-progress__label">{stepLabel}</span>
            <div className="bnp-pf-progress__steps" role="group" aria-label={ui.stepsNav}>
              {Array.from({ length: countedTotal }, (_, i) => {
                const targetStep = i + 2; // counted step (i+1) maps to actual step (i+2)
                const pos = i + 1;
                const state = pos < countedNum ? "done" : pos === countedNum ? "current" : "todo";
                return (
                  <button
                    key={targetStep}
                    type="button"
                    className={`bnp-pf-progress__seg is-${state}`}
                    onClick={() => handleJump(targetStep)}
                    aria-current={state === "current" ? "step" : undefined}
                    aria-label={ui.goToStep.replace("{x}", String(pos)).replace("{n}", String(countedTotal))}
                  />
                );
              })}
            </div>
            <p className="bnp-pf-progress__hint">{ui.stepperHint}</p>
          </div>
        )}
        <div className="bnp-pf-reveal inner-headline__title" style={{ "--pf-i": 1 }}>
          <h1 className="medium">{pick(screen.heading, locale)}</h1>
        </div>
        {screen.intro && (
          <p className="bnp-pf-reveal bnp-pf-intro t-large" style={{ "--pf-i": 2 }}>
            {pick(screen.intro, locale)}
          </p>
        )}
        {screen.note && (
          <div className="bnp-pf-reveal bnp-pf-note" style={{ "--pf-i": 3 }}>
            <p>{pick(screen.note, locale)}</p>
          </div>
        )}
      </div>
    );
  }

  // ── Navigation row ────────────────────────────────────────────────────────
  function Nav({ primaryLabel, onPrimary, showBack, pending = false }) {
    return (
      <>
        {blockingMissing && (
          <p className="bnp-pf-error-msg" role="alert">{ui.missingField}</p>
        )}
        {submitError && (
          <p className="bnp-pf-error-msg" role="alert">{submitError}</p>
        )}
        <div className="bnp-pf-nav">
          {showBack && (
            <button type="button" className="btn btn-line btn-line-default bnp-pf-back" onClick={handleBack} disabled={pending}>
              <span className="btn-caption mxd-scramble">{ui.back}</span>
            </button>
          )}
          <button
            type="button"
            className="btn btn-default-icon btn-default-accent slide-right bnp-pf-primary"
            onClick={onPrimary}
            disabled={pending}
            aria-busy={pending || undefined}
          >
            <span className="btn-caption mxd-scramble">{pending ? ui.sending : primaryLabel}</span>
            <PlusIcon />
          </button>
        </div>
        <p className="bnp-pf-saved">{ui.savedNote}</p>
      </>
    );
  }

  // ── Step bodies ───────────────────────────────────────────────────────────
  // The opening screen: a calm, bilingual language choice. Rendered in-flow (not
  // an overlay), so the site loader reveals it as the first page; choosing leads
  // to the welcome.
  function LanguageBody() {
    return (
      <div className="row g-0">
        <div className="col-12 mxd-grid-item">
          <div className="bnp-pf-lang">
            <div className="bnp-pf-reveal" style={{ "--pf-i": 0 }}>
              <h1 className="bnp-pf-lang__title">
                <span lang="en">Choose your language</span>
                <span className="bnp-pf-lang__title-ar" lang="ar" dir="rtl">اختر لغتك</span>
              </h1>
              <span className="bnp-pf-welcome__rule" aria-hidden="true" />
            </div>
            <div className="bnp-pf-lang__options bnp-pf-reveal" style={{ "--pf-i": 1 }}>
              <button type="button" className="bnp-pf-lang__opt" onClick={() => chooseLang("en")}>
                <span className="bnp-pf-lang__lang" lang="en">English</span>
                <span className="bnp-pf-lang__hint" lang="en">Continue in English</span>
              </button>
              <button type="button" className="bnp-pf-lang__opt" onClick={() => chooseLang("ar")} lang="ar" dir="rtl">
                <span className="bnp-pf-lang__lang">العربية</span>
                <span className="bnp-pf-lang__hint">المتابعة بالعربية</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function WelcomeBody() {
    const b = screen.blocks;
    return (
      <div className="row g-0">
        <div className="col-12 mxd-grid-item">
          <div className="bnp-pf-welcome">
            <div className="bnp-pf-reveal" style={{ "--pf-i": 0 }}>
              {inviteName && (
                <p className="bnp-pf-welcome__greeting">{ui.welcomeGreeting.replace("{name}", inviteName)}</p>
              )}
              <h1 className="bnp-pf-welcome__title">{pick(screen.heading, locale)}</h1>
              <span className="bnp-pf-welcome__rule" aria-hidden="true" />
            </div>
            <p className="bnp-pf-welcome__lead bnp-pf-reveal" style={{ "--pf-i": 1 }}>{pick(b.lead, locale)}</p>
            <p className="bnp-pf-welcome__p bnp-pf-reveal" style={{ "--pf-i": 2 }}>{pick(b.house, locale)}</p>
            <p className="bnp-pf-welcome__invitation bnp-pf-reveal" style={{ "--pf-i": 3 }}>{pick(b.invitation, locale)}</p>
            <p className="bnp-pf-welcome__p bnp-pf-reveal" style={{ "--pf-i": 4 }}>{pick(b.role, locale)}</p>
            <p className="bnp-pf-welcome__p bnp-pf-reveal" style={{ "--pf-i": 5 }}>{pick(b.appeal, locale)}</p>
            <p className="bnp-pf-welcome__p bnp-pf-reveal" style={{ "--pf-i": 6 }}>{pick(b.trust, locale)}</p>
            <p className="bnp-pf-welcome__p bnp-pf-reveal" style={{ "--pf-i": 7 }}>{pick(b.close, locale)}</p>
            <div className="bnp-pf-welcome__cta bnp-pf-reveal" style={{ "--pf-i": 8 }}>
              <button type="button" className="btn btn-default-icon btn-default-accent slide-right bnp-pf-primary" onClick={handleContinue}>
                <span className="btn-caption mxd-scramble">{ui.begin}</span>
                <PlusIcon />
              </button>
              <p className="bnp-pf-welcome__reassure">{pick(screen.reassurance, locale)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function FieldsBody() {
    return (
      <div className="row g-0">
        <div className="col-12 col-xl-6 mxd-grid-item">
          {Editorial({})}
        </div>
        <div className="col-12 col-xl-6 mxd-grid-item">
          <div className="bnp-pf-panel">
            <form className="form bnp-pf-form" onSubmit={(e) => { e.preventDefault(); handleContinue(); }} noValidate>
              {screen.fields.map((field, i) => (
                <div
                  key={field.key}
                  className={`bnp-pf-reveal${errors[field.key] ? " has-error" : ""}`}
                  style={{ "--pf-i": i }}
                >
                  <FieldRenderer field={field} form={form} locale={locale} ui={ui} />
                </div>
              ))}

              {screen.ack && (
                <div
                  className={`bnp-pf-reveal${screen.ack.items.some((it) => errors[it.key]) ? " has-error" : ""}`}
                  style={{ "--pf-i": screen.fields.length }}
                >
                  <AckGroup ack={screen.ack} answers={answers} onChange={form.setValue} locale={locale} />
                </div>
              )}

              <div className="bnp-pf-reveal" style={{ "--pf-i": screen.fields.length + 1 }}>
                {Nav({ primaryLabel: ui.continue, onPrimary: handleContinue, showBack: true })}
              </div>
              <button type="submit" hidden aria-hidden="true" tabIndex={-1} />
            </form>
          </div>
        </div>
      </div>
    );
  }

  function ReviewBody() {
    return (
      <div className="row g-0">
        <div className="col-12 col-xl-6 mxd-grid-item">
          {Editorial({})}
        </div>
        <div className="col-12 col-xl-6 mxd-grid-item">
          <div className="bnp-pf-panel">
            <div className="bnp-pf-reveal" style={{ "--pf-i": 0 }}>
              <ReviewSummary answers={answers} locale={locale} ui={ui} onEdit={handleEdit} />
            </div>
            <form className="form bnp-pf-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} noValidate>
              {screen.fields.map((field, i) => (
                <div key={field.key} className="bnp-pf-reveal" style={{ "--pf-i": i + 1 }}>
                  <FieldRenderer field={field} form={form} locale={locale} ui={ui} />
                </div>
              ))}
              <div className="bnp-pf-reveal" style={{ "--pf-i": screen.fields.length + 1 }}>
                {Nav({ primaryLabel: pick(screen.submitLabel, locale), onPrimary: handleSubmit, showBack: true, pending: submitting })}
              </div>
              <button type="submit" hidden aria-hidden="true" tabIndex={-1} />
            </form>
          </div>
        </div>
      </div>
    );
  }

  function ConfirmationBody() {
    return (
      <div className="row g-0">
        <div className="col-12 mxd-grid-item">
          <div className="bnp-pf-confirm">
            <div className="bnp-pf-confirm__mark" aria-hidden="true">
              <span className="bnp-pf-confirm__disc">
                <svg className="bnp-pf-confirm__check" viewBox="0 0 52 52" role="img" aria-label={pick(screen.heading, locale)}>
                  <path className="bnp-pf-confirm__path" fill="none" d="M14 27 L22 35 L38 17" />
                </svg>
              </span>
            </div>
            <h1 className="medium bnp-pf-confirm__title">{pick(screen.heading, locale)}</h1>
            <p className="t-large bnp-pf-confirm__body">{pick(screen.body, locale)}</p>
            {debug && payload && (
              <div className="bnp-pf-debug">
                <button type="button" className="btn btn-line btn-line-default" onClick={downloadJson}>
                  <span className="btn-caption">Download JSON</span>
                </button>
                <pre>{JSON.stringify(payload, null, 2)}</pre>
              </div>
            )}
            <div className="bnp-pf-confirm__home">
              <L className="link-underline" to="/">{locale === "ar" ? "العودة للرئيسية" : "Back to home"}</L>
            </div>
          </div>
        </div>
      </div>
    );
  }

  let body = null;
  let stepKey = `step-${step}`;
  if (submitted) { body = ConfirmationBody(); stepKey = "confirmation"; }
  else if (!langChosen) { body = LanguageBody(); stepKey = "language"; }
  else if (screen.kind === "welcome") body = WelcomeBody();
  else if (screen.kind === "review") body = ReviewBody();
  else body = FieldsBody();

  return (
    <div className="inner-headline__content has-medium-title bnp-pf-shell" ref={topRef}>
      <style>{wizardStyles}</style>
      <div className="container-fluid p-0">
        <div
          className="bnp-pf-step"
          key={stepKey}
          style={{ "--pf-enter-x": enterX }}
        >
          {body}
        </div>
      </div>
    </div>
  );
}

// ── Review summary ────────────────────────────────────────────────────────────

function reviewLabel(field, answers, locale) {
  if (field.altWhen && field.altLabel && answers[field.altWhen.key] === field.altWhen.value) {
    return pick(field.altLabel, locale);
  }
  return pick(field.label, locale);
}

function formatAnswer(field, answers, locale) {
  const v = answers[field.key];
  if (field.type === "single" || field.type === "select") return optionLabel(field.options, v, locale);
  if (field.type === "country") return countryName(v, locale);
  if (field.type === "multi") {
    const sep = locale === "ar" ? "، " : ", ";
    return (Array.isArray(v) ? v : [])
      .map((val) => {
        if (val === "other" && field.hasOther) {
          const detail = answers[`${field.key}_other`];
          return detail ? String(detail).trim() : optionLabel(field.options, val, locale);
        }
        return optionLabel(field.options, val, locale);
      })
      .join(sep);
  }
  if (field.type === "ordered") {
    return (Array.isArray(v) ? v : [])
      .map((val, i) => `${i + 1}. ${optionLabel(field.options, val, locale)}`)
      .join(locale === "ar" ? "  •  " : "  •  ");
  }
  return v != null ? String(v) : "";
}

function ReviewSummary({ answers, locale, ui, onEdit }) {
  const groups = SCREENS.filter((s) => s.kind === "fields");
  return (
    <div className="bnp-pf-review">
      {groups.map((s) => {
        const answered = s.fields.filter((f) => hasValue(f, answers));
        if (answered.length === 0) return null;
        return (
          <div key={s.id} className="bnp-pf-review__group">
            <div className="bnp-pf-review__grouptitle">
              <span>{pick(s.heading, locale)}</span>
              <button type="button" className="bnp-pf-review__edit" onClick={() => onEdit(s.step)}>
                {ui.edit}
              </button>
            </div>
            {answered.map((f) => (
              <div key={f.key} className="bnp-pf-review__row">
                <span className="bnp-pf-review__q">{reviewLabel(f, answers, locale)}</span>
                <span className="bnp-pf-review__a">{formatAnswer(f, answers, locale)}</span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
