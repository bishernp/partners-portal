// Scoped styling for the B&P House onboarding wizard. Kept theme-aware (light /
// dark via the site's CSS custom properties), RTL-safe (logical properties),
// and reduced-motion friendly. Mirrors the contact form's field look and the
// site's gold accent. Prefix: `bnp-pf-`.

export const wizardStyles = `
.bnp-pf-shell { --pf-danger: #d9534f; }

/* ── Step transition + staggered reveal ─────────────────────────────────── */
.bnp-pf-step { animation: bnp-pf-step-in 0.5s var(--_animbezier, cubic-bezier(0.23,0.65,0.74,1.09)) both; }
@keyframes bnp-pf-step-in {
  from { transform: translateX(var(--pf-enter-x, 0)); }
  to   { transform: translateX(0); }
}
.bnp-pf-reveal { animation: bnp-pf-rise 0.45s var(--_animbezier, cubic-bezier(0.23,0.65,0.74,1.09)) both; animation-delay: calc(var(--pf-i, 0) * 0.06s); }
@keyframes bnp-pf-rise {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: none; }
}

/* ── Editorial column (heading + intro + program note) ──────────────────── */
.bnp-pf-editorial { display: flex; flex-direction: column; gap: 2.4rem; }
.bnp-pf-editorial .inner-headline__title { margin: 0; }
.bnp-pf-intro { margin: 0; color: var(--t-bright); max-width: 46ch; }
/* Program note — a refined editorial aside, not a boxed callout. A slim gold
   hairline (softening toward its tail) leads airy, considered prose. */
.bnp-pf-note {
  position: relative;
  margin: 0;
  padding-inline-start: 2.6rem;
  max-width: 54ch;
}
.bnp-pf-note::before {
  content: "";
  position: absolute;
  inset-inline-start: 0;
  top: 0.4rem;
  bottom: 0.4rem;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent) 0%, var(--accent) 62%, rgba(214, 179, 127, 0.18) 100%);
}
.bnp-pf-note p {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.78;
  color: var(--t-medium);
}

/* ── Progress ───────────────────────────────────────────────────────────── */
.bnp-pf-progress { display: flex; flex-direction: column; gap: 1rem; }
.bnp-pf-progress__label {
  font: 500 1.3rem/1 var(--_font-accent, "JetBrains Mono", monospace);
  letter-spacing: 0.08em;
  color: var(--t-muted-extra, var(--t-medium));
  color: var(--t-medium);
  text-transform: uppercase;
}
.bnp-pf-progress__bar {
  position: relative;
  display: block;
  height: 2px;
  width: 100%;
  max-width: 32rem;
  background: var(--st-muted);
  border-radius: 2px;
  overflow: hidden;
}
.bnp-pf-progress__fill {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.5s var(--_animbezier, cubic-bezier(0.23,0.65,0.74,1.09));
}
/* Clickable segmented stepper — jump to any step, no filling required. */
.bnp-pf-progress__steps { display: flex; gap: 0.5rem; width: 100%; max-width: 32rem; }
.bnp-pf-progress__seg {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  height: 1.6rem;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
}
.bnp-pf-progress__seg::before {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 2px;
  background: var(--st-muted);
  transition: background 0.3s var(--_animbezier, ease), height 0.3s ease, opacity 0.3s ease;
}
.bnp-pf-progress__seg.is-done::before { background: var(--accent); }
.bnp-pf-progress__seg.is-current::before { background: var(--accent); height: 4px; }
.bnp-pf-progress__seg.is-todo:hover::before { background: var(--st-medium); }
.bnp-pf-progress__seg:hover::before { opacity: 0.85; }
.bnp-pf-progress__seg:focus-visible { outline: none; }
.bnp-pf-progress__seg:focus-visible::before { outline: 2px solid var(--accent); outline-offset: 3px; }
.bnp-pf-progress__hint {
  margin: 0.4rem 0 0;
  max-width: 32rem;
  font-size: 1.25rem;
  line-height: 1.5;
  color: var(--t-medium);
}

/* ── Panel (the interactive column) ─────────────────────────────────────── */
.bnp-pf-panel { display: block; }
.bnp-pf-form { display: flex; flex-direction: column; gap: 2.6rem; }
@media only screen and (min-width: 1200px) {
  .bnp-pf-panel { padding-inline-start: 4.4rem; border-inline-start: 1px solid var(--st-muted); }
}
@media only screen and (max-width: 1199px) {
  .bnp-pf-panel { margin-top: 4rem; padding-top: 4rem; border-top: 1px solid var(--st-muted); }
}

/* ── Field shell ────────────────────────────────────────────────────────── */
.bnp-pf-field { display: flex; flex-direction: column; gap: 0.8rem; }
.bnp-pf-label {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font: 500 1.4rem/1.45 var(--_font-default, "Manrope", sans-serif);
  color: var(--t-bright);
}
.bnp-pf-label--sub { margin-top: 1.6rem; }
.bnp-pf-req { color: var(--accent); font-size: 1.4rem; }
.bnp-pf-optional {
  margin-inline-start: auto;
  font-size: 1.15rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--t-medium);
  opacity: 0.7;
}
.bnp-pf-helper { font-size: 1.3rem; line-height: 1.55; color: var(--t-medium); }
.bnp-pf-detail { margin-top: 0.4rem; }
.bnp-pf-counter { align-self: flex-end; margin-top: 0.6rem; font: 500 1.2rem/1 var(--_font-accent, "JetBrains Mono", monospace); color: var(--t-medium); }
.bnp-pf-other { margin-top: 1rem; }

/* error state on the underline inputs */
.bnp-pf-form .has-error input,
.bnp-pf-form .has-error textarea { border-bottom-color: var(--pf-danger); }
.has-error .bnp-pf-opt,
.has-error .bnp-pf-toggle,
.has-error .bnp-pf-combo__trigger { border-color: var(--pf-danger); }

/* ── Native select (honorific) ──────────────────────────────────────────── */
.bnp-pf-select { position: relative; }
.bnp-pf-select select {
  display: block;
  width: 100%;
  margin: 0;
  height: 5.8rem;
  padding: 1.2rem 2.6rem 1.2rem 0.2rem;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--st-medium);
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%238a8d96' stroke-width='1.6' d='M1 1.5 6 6.5 11 1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.2rem center;
  background-size: 1.2rem;
  font: 400 1.7rem/1 var(--_font-default, "Manrope", sans-serif);
  color: var(--t-bright);
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.bnp-pf-select select:focus { border-bottom-color: var(--st-bright); }
.bnp-pf-select select option { color: #111; background: #fff; }
.locale-ar .bnp-pf-select select { padding: 1.2rem 0.2rem 1.2rem 2.6rem; background-position: left 0.2rem center; }

/* ── Searchable combobox (country) ──────────────────────────────────────── */
.bnp-pf-combo { position: relative; }
.bnp-pf-combo__trigger {
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  padding: 1.2rem 2.6rem 1.2rem 0.2rem;
  text-align: start;
  border: none;
  border-bottom: 1px solid var(--st-medium);
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%238a8d96' stroke-width='1.6' d='M1 1.5 6 6.5 11 1.5'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.2rem center;
  background-size: 1.2rem;
  font: 400 1.7rem/1 var(--_font-default, "Manrope", sans-serif);
  color: var(--t-muted);
  cursor: pointer;
}
.bnp-pf-combo__trigger.has-value { color: var(--t-bright); }
.locale-ar .bnp-pf-combo__trigger { padding: 1.2rem 0.2rem 1.2rem 2.6rem; background-position: left 0.2rem center; }
/* In-flow (not an overlay), so it can never be trapped behind later fields
   or clipped by an ancestor's overflow. It expands and pushes content down. */
.bnp-pf-combo__panel {
  position: relative;
  margin-top: 0.8rem;
  background: rgba(var(--base-tint-rgb), 0.7);
  border: 1px solid var(--st-medium);
  border-radius: 1rem;
  overflow: hidden;
}
.bnp-pf-combo__search {
  display: block;
  width: 100%;
  height: 4.6rem !important;
  line-height: 4.6rem !important;
  padding: 0 1.6rem !important;
  border: none !important;
  border-bottom: 1px solid var(--st-muted) !important;
  background: transparent;
  font: 400 1.5rem var(--_font-default, "Manrope", sans-serif) !important;
  color: var(--t-bright);
}
.bnp-pf-combo__list { max-height: 28rem; overflow-y: auto; padding: 0.6rem; }
.bnp-pf-combo__option {
  display: block;
  width: 100%;
  text-align: start;
  padding: 1rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  background: transparent;
  font: 500 1.5rem/1.35 var(--_font-default, "Manrope", sans-serif);
  color: var(--t-bright);
  cursor: pointer;
}
.bnp-pf-combo__option:hover { background: rgba(214, 179, 127, 0.10); }
.bnp-pf-combo__option.is-selected { color: var(--accent); }
.bnp-pf-combo__empty { padding: 1.4rem 1.2rem; font-size: 1.4rem; color: var(--t-medium); }

/* ── Selectable options (single / multi / ordered) ──────────────────────── */
.bnp-pf-options { display: flex; flex-direction: column; gap: 0.8rem; margin-top: 0.4rem; }
.bnp-pf-opt {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  text-align: start;
  padding: 1.25rem 1.6rem;
  border: 1px solid var(--st-medium);
  border-radius: 0.8rem;
  background: transparent;
  color: var(--t-bright);
  cursor: pointer;
  transition: border-color var(--_animspeed-medium, 0.3s) ease,
              background-color var(--_animspeed-medium, 0.3s) ease;
}
.bnp-pf-opt:hover { border-color: var(--st-bright); }
.bnp-pf-opt.is-selected { border-color: var(--accent); background: rgba(214, 179, 127, 0.08); }
.bnp-pf-opt.is-disabled { opacity: 0.4; cursor: not-allowed; }
.bnp-pf-opt__label { font: 500 1.5rem/1.45 var(--_font-default, "Manrope", sans-serif); }

.bnp-pf-opt__marker {
  position: relative;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--st-medium);
  transition: border-color var(--_animspeed-medium, 0.3s) ease, background-color var(--_animspeed-medium, 0.3s) ease;
}
.bnp-pf-opt__marker--radio { border-radius: 50%; }
.bnp-pf-opt__marker--check,
.bnp-pf-opt__marker--order { border-radius: 0.5rem; }
.bnp-pf-opt.is-selected .bnp-pf-opt__marker { border-color: var(--accent); }
.bnp-pf-opt.is-selected .bnp-pf-opt__marker--check,
.bnp-pf-opt.is-selected .bnp-pf-opt__marker--order { background: var(--accent); }
.bnp-pf-opt__dot {
  width: 0.9rem; height: 0.9rem; border-radius: 50%;
  background: var(--accent); transform: scale(0);
  transition: transform var(--_animspeed-medium, 0.3s) var(--_animbezier, cubic-bezier(0.23,0.65,0.74,1.09));
}
.bnp-pf-opt.is-selected .bnp-pf-opt__dot { transform: scale(1); }
.bnp-pf-opt__check { width: 1.4rem; height: 1.4rem; stroke: #1a1206; }
.bnp-pf-opt__num { font: 600 1.2rem/1 var(--_font-accent, "JetBrains Mono", monospace); color: #1a1206; }

/* ── Yes / No toggle ────────────────────────────────────────────────────── */
.bnp-pf-yesno { display: flex; gap: 1rem; margin-top: 0.4rem; }
.bnp-pf-toggle {
  flex: 1 1 0;
  padding: 1.25rem 1.6rem;
  border: 1px solid var(--st-medium);
  border-radius: 0.8rem;
  background: transparent;
  color: var(--t-bright);
  font: 500 1.5rem/1 var(--_font-default, "Manrope", sans-serif);
  cursor: pointer;
  transition: border-color var(--_animspeed-medium, 0.3s) ease, background-color var(--_animspeed-medium, 0.3s) ease;
}
.bnp-pf-toggle:hover { border-color: var(--st-bright); }
.bnp-pf-toggle.is-selected { border-color: var(--accent); background: rgba(214, 179, 127, 0.08); }

/* ── Acknowledgments ────────────────────────────────────────────────────── */
.bnp-pf-ack { display: flex; flex-direction: column; gap: 1.4rem; padding-top: 0.8rem; }
.bnp-pf-ack__title { margin: 0; font: 700 2rem/1.2 var(--_font-default, "Manrope", sans-serif); color: var(--t-bright); }
.bnp-pf-ack__intro { margin: 0; font-size: 1.45rem; line-height: 1.6; color: var(--t-medium); }
.bnp-pf-ack__list { display: flex; flex-direction: column; gap: 1rem; }
.bnp-pf-ack__item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.25rem 1.6rem;
  border: 1px solid var(--st-medium);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: border-color var(--_animspeed-medium, 0.3s) ease, background-color var(--_animspeed-medium, 0.3s) ease;
}
.bnp-pf-ack__item:hover { border-color: var(--st-bright); }
.bnp-pf-ack__item.is-checked { border-color: var(--accent); background: rgba(214, 179, 127, 0.06); }
.bnp-pf-ack__item input { position: absolute; opacity: 0; width: 0; height: 0; }
.bnp-pf-ack__box {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem; height: 2rem;
  margin-top: 0.2rem;
  border: 1px solid var(--st-medium);
  border-radius: 0.5rem;
  transition: border-color var(--_animspeed-medium, 0.3s) ease, background-color var(--_animspeed-medium, 0.3s) ease;
}
.bnp-pf-ack__box .bnp-pf-opt__check { width: 1.4rem; height: 1.4rem; stroke: #1a1206; opacity: 0; }
.bnp-pf-ack__item.is-checked .bnp-pf-ack__box { border-color: var(--accent); background: var(--accent); }
.bnp-pf-ack__item.is-checked .bnp-pf-ack__box .bnp-pf-opt__check { opacity: 1; }
.bnp-pf-ack__text { font-size: 1.4rem; line-height: 1.6; color: var(--t-medium); }
.bnp-pf-ack__item.is-checked .bnp-pf-ack__text { color: var(--t-bright); }

/* ── Navigation ─────────────────────────────────────────────────────────── */
.bnp-pf-nav { display: flex; align-items: center; gap: 1.6rem; flex-wrap: wrap; }
.bnp-pf-nav .bnp-pf-primary { margin-inline-start: auto; }
.bnp-pf-nav--single { justify-content: flex-start; }
.bnp-pf-nav--single .bnp-pf-primary { margin-inline-start: 0; }
.bnp-pf-saved { margin: 0; font-size: 1.25rem; color: var(--t-medium); opacity: 0.85; }
.bnp-pf-error-msg { margin: 0; font-size: 1.4rem; color: var(--pf-danger); }

/* ── Welcome (introduction to the House) ────────────────────────────────── */
.bnp-pf-welcome { max-width: 86rem; margin-inline: auto; padding-block: 0.5rem; }
/* Personal salutation from the invitation link (?invite=Chris). */
.bnp-pf-welcome__greeting {
  margin: 0 0 1.4rem;
  font: 600 clamp(1.7rem, 1.3rem + 0.9vw, 2.2rem)/1.25 var(--_font-default, "Manrope", sans-serif);
  letter-spacing: 0.01em;
  color: var(--accent);
}
.bnp-pf-welcome__title {
  margin: 0;
  font: 600 clamp(4.2rem, 6vw, 7.4rem)/1.05 var(--_font-default, "Manrope", sans-serif);
  letter-spacing: -0.04em;
  color: var(--t-bright);
}
.bnp-pf-welcome__rule { display: block; width: 4.8rem; height: 2px; margin-top: 2.4rem; background: var(--accent); }
.bnp-pf-welcome__lead {
  margin: 3.2rem 0 0;
  max-width: 64ch;
  font-size: clamp(1.8rem, 1.4rem + 0.7vw, 2.05rem);
  line-height: 1.7;
  color: var(--t-bright);
}
.bnp-pf-welcome__p {
  margin: 2rem 0 0;
  max-width: 64ch;
  font-size: 1.6rem;
  line-height: 1.85;
  color: var(--t-medium);
}
/* The invitation line — set apart as the page's focal moment. */
.bnp-pf-welcome__invitation {
  position: relative;
  margin: 4.6rem 0;
  padding-top: 3rem;
  max-width: 34ch;
  font: 500 clamp(2.2rem, 1.4rem + 1.6vw, 3rem)/1.32 var(--_font-default, "Manrope", sans-serif);
  letter-spacing: -0.01em;
  color: var(--t-bright);
}
.bnp-pf-welcome__invitation::before {
  content: "";
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  width: 3.6rem;
  height: 2px;
  background: var(--accent);
}
.bnp-pf-welcome__cta { display: flex; flex-direction: column; align-items: flex-start; gap: 1.4rem; margin-top: 4.4rem; }
.bnp-pf-welcome__reassure { margin: 0; font-size: 1.3rem; line-height: 1.5; color: var(--t-medium); }
@media only screen and (max-width: 767px) {
  .bnp-pf-welcome__invitation { margin: 3.6rem 0; }
}

/* ── Language choice (the opening screen) ───────────────────────────────── */
.bnp-pf-lang { max-width: 72rem; margin-inline: auto; padding-block: 1rem 2rem; text-align: center; }
.bnp-pf-lang__title {
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  font: 600 clamp(3.4rem, 4.5vw, 5.4rem)/1.08 var(--_font-default, "Manrope", sans-serif);
  letter-spacing: -0.03em;
  color: var(--t-bright);
}
.bnp-pf-lang__title-ar {
  font-family: var(--ff-arabic, "IBM Plex Sans Arabic", sans-serif);
  font-size: 0.6em;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--t-medium);
}
.bnp-pf-lang .bnp-pf-welcome__rule { margin-inline: auto; margin-top: 2.8rem; }
.bnp-pf-lang__options { display: flex; gap: 1.6rem; justify-content: center; margin-top: 4.8rem; }
.bnp-pf-lang__opt {
  flex: 1 1 0;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 3rem 2rem;
  background: var(--base-tint);
  border: 1px solid var(--st-muted);
  border-radius: 1.4rem;
  cursor: pointer;
  transition: border-color 0.25s var(--_animbezier, ease), background 0.25s ease, transform 0.25s ease;
}
.bnp-pf-lang__opt:hover,
.bnp-pf-lang__opt:focus-visible {
  border-color: var(--accent);
  background: rgba(214, 179, 127, 0.06);
  transform: translateY(-3px);
  outline: none;
}
.bnp-pf-lang__lang { font: 600 2.6rem/1 var(--_font-default, "Manrope", sans-serif); color: var(--t-bright); }
.bnp-pf-lang__opt[lang="ar"] .bnp-pf-lang__lang { font-family: var(--ff-arabic, "IBM Plex Sans Arabic", sans-serif); }
.bnp-pf-lang__hint { font-size: 1.35rem; color: var(--t-medium); }
.bnp-pf-lang__opt[lang="ar"] .bnp-pf-lang__hint { font-family: var(--ff-arabic, "IBM Plex Sans Arabic", sans-serif); }
@media only screen and (max-width: 600px) {
  .bnp-pf-lang__options { flex-direction: column; align-items: stretch; }
  .bnp-pf-lang__opt { max-width: none; }
}

/* ── Review summary ─────────────────────────────────────────────────────── */
.bnp-pf-review { display: flex; flex-direction: column; gap: 2.4rem; }
.bnp-pf-review__group { display: flex; flex-direction: column; gap: 1.2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--st-muted); }
.bnp-pf-review__grouptitle {
  display: flex; align-items: baseline; justify-content: space-between; gap: 1rem;
}
.bnp-pf-review__grouptitle > span { font: 700 1.7rem/1.2 var(--_font-default, "Manrope", sans-serif); color: var(--t-bright); }
.bnp-pf-review__edit {
  border: none; background: none; cursor: pointer;
  font: 500 1.3rem/1 var(--_font-default, "Manrope", sans-serif);
  color: var(--accent); text-decoration: underline; text-underline-offset: 0.3em;
}
.bnp-pf-review__row { display: flex; flex-direction: column; gap: 0.3rem; }
.bnp-pf-review__q { font-size: 1.3rem; color: var(--t-medium); }
.bnp-pf-review__a { font-size: 1.5rem; line-height: 1.5; color: var(--t-bright); }

/* ── Confirmation ───────────────────────────────────────────────────────── */
.bnp-pf-confirm {
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: 1.6rem; max-width: 64rem; margin: 0 auto; padding: 3rem 0 2rem;
}
.bnp-pf-confirm__mark { display: inline-flex; align-items: center; justify-content: center; width: 8.4rem; height: 8.4rem; }
.bnp-pf-confirm__disc {
  display: inline-flex; align-items: center; justify-content: center;
  width: 7.2rem; height: 7.2rem; border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #ecd1a1 0%, var(--accent) 58%, #c79e63 100%);
  box-shadow: 0 0 0 1px rgba(214,179,127,0.4), 0 14px 44px rgba(214,179,127,0.3);
  transform: scale(0);
  animation: bnp-pf-pop 0.75s var(--_animbezier, cubic-bezier(0.23,0.65,0.74,1.09)) 0.05s both;
}
@keyframes bnp-pf-pop { 0% { transform: scale(0); } 55% { transform: scale(1.12); } 75% { transform: scale(0.94); } 100% { transform: scale(1); } }
.bnp-pf-confirm__check { width: 3.4rem; height: 3.4rem; }
.bnp-pf-confirm__path {
  stroke: #2a1c08; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round;
  stroke-dasharray: 44; stroke-dashoffset: 44;
  animation: bnp-pf-draw 0.45s var(--_animbezier, cubic-bezier(0.23,0.65,0.74,1.09)) 0.6s forwards;
}
@keyframes bnp-pf-draw { to { stroke-dashoffset: 0; } }
.bnp-pf-confirm__title { margin: 0; }
.bnp-pf-confirm__body { margin: 0; color: var(--t-medium); max-width: 56ch; }
.bnp-pf-confirm__body span { color: var(--t-bright); }
.bnp-pf-confirm__home { margin-top: 0.8rem; }
.bnp-pf-confirm__home .link-underline {
  color: var(--t-medium); text-decoration: underline; text-underline-offset: 0.4em; text-decoration-thickness: 1px;
  transition: color var(--_animspeed-medium, 0.3s) ease;
}
.bnp-pf-confirm__home .link-underline:hover { color: var(--accent); }
.bnp-pf-debug { width: 100%; margin-top: 1.2rem; text-align: start; }
.bnp-pf-debug pre {
  margin-top: 1.2rem; padding: 1.6rem; max-height: 40rem; overflow: auto;
  border: 1px solid var(--st-muted); border-radius: 1rem;
  background: rgba(var(--base-tint-rgb), 0.8);
  font: 400 1.2rem/1.5 var(--_font-accent, "JetBrains Mono", monospace); color: var(--t-medium);
}

/* ── Reduced motion ─────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .bnp-pf-step, .bnp-pf-reveal { animation: none; opacity: 1; transform: none; }
  .bnp-pf-confirm__disc { animation: none; transform: scale(1); }
  .bnp-pf-confirm__path { animation: none; stroke-dashoffset: 0; }
  .bnp-pf-progress__fill { transition: none; }
}
`;
