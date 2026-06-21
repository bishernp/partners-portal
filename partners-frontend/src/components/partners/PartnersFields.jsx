// ─────────────────────────────────────────────────────────────────────────────
// B&P House onboarding — field components.
//
// Rendered in the Bisher & Partners design language (underline inputs, gold
// accent, theme-aware, RTL-safe). Scoped styling lives in PartnersWizard's
// <style> block under the `bnp-pf-` prefix.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useMemo, useRef, useState } from "react";
import { pick } from "../../data/partners.js";
import COUNTRIES, { countryName } from "../../data/countries.js";

// Resolve a field's label, honouring a conditional (alt) label.
function fieldLabel(field, answers, locale) {
  if (field.altWhen && field.altLabel && answers[field.altWhen.key] === field.altWhen.value) {
    return pick(field.altLabel, locale);
  }
  return pick(field.label, locale);
}

function FieldShell({ label, required, helper, ui, htmlFor, children }) {
  return (
    <div className="bnp-pf-field">
      <label className="bnp-pf-label" htmlFor={htmlFor}>
        <span>{label}</span>
        {required ? (
          <span className="bnp-pf-req" aria-hidden="true">*</span>
        ) : (
          <span className="bnp-pf-optional">{ui.optional}</span>
        )}
      </label>
      {children}
      {helper && <span className="bnp-pf-helper">{helper}</span>}
    </div>
  );
}

// ── Text inputs (text / email / tel / url) ───────────────────────────────────

function TextInput({ field, answers, value, onChange, locale, ui }) {
  const id = `pf-${field.key}`;
  const ltr = field.type === "email" || field.type === "tel" || field.type === "url";
  const htmlType = field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.type === "url" ? "url" : "text";
  const inputMode = field.type === "email" ? "email" : field.type === "tel" ? "tel" : field.type === "url" ? "url" : undefined;
  return (
    <FieldShell label={fieldLabel(field, answers, locale)} required={field.required} helper={field.helper ? pick(field.helper, locale) : null} ui={ui} htmlFor={id}>
      <input
        id={id}
        type={htmlType}
        value={value || ""}
        onChange={(e) => onChange(field.key, e.target.value)}
        autoComplete={field.autoComplete || "off"}
        inputMode={inputMode}
        placeholder={field.type === "url" ? "https://" : undefined}
        dir={ltr ? "ltr" : undefined}
        style={ltr ? { textAlign: "start" } : undefined}
      />
    </FieldShell>
  );
}

function TextArea({ field, answers, value, onChange, locale, ui }) {
  const id = `pf-${field.key}`;
  return (
    <FieldShell label={fieldLabel(field, answers, locale)} required={field.required} helper={field.helper ? pick(field.helper, locale) : null} ui={ui} htmlFor={id}>
      <textarea id={id} rows={3} value={value || ""} onChange={(e) => onChange(field.key, e.target.value)} />
    </FieldShell>
  );
}

// ── Native select (honorific) ────────────────────────────────────────────────

function SelectField({ field, value, onChange, locale, ui }) {
  const id = `pf-${field.key}`;
  return (
    <FieldShell label={pick(field.label, locale)} required={field.required} helper={field.helper ? pick(field.helper, locale) : null} ui={ui} htmlFor={id}>
      <div className="bnp-pf-select">
        <select id={id} value={value || ""} onChange={(e) => onChange(field.key, e.target.value)}>
          <option value="" disabled>{ui.selectPlaceholder}</option>
          {field.options.map((o) => (
            <option key={o.value} value={o.value}>{pick(o, locale)}</option>
          ))}
        </select>
      </div>
    </FieldShell>
  );
}

// ── Searchable country combobox ───────────────────────────────────────────────

function CountryField({ field, value, onChange, locale, ui }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef(null);
  const searchRef = useRef(null);

  const items = useMemo(() => {
    const arr = COUNTRIES.map((c) => ({ code: c.code, name: locale === "ar" ? c.ar : c.en }))
      .sort((a, b) => a.name.localeCompare(b.name, locale === "ar" ? "ar" : "en"));
    const q = query.trim().toLowerCase();
    if (!q) return arr;
    return arr.filter((c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase() === q);
  }, [query, locale]);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDown);
    const t = setTimeout(() => searchRef.current && searchRef.current.focus(), 30);
    return () => { document.removeEventListener("mousedown", onDown); clearTimeout(t); };
  }, [open]);

  const selectedName = value ? countryName(value, locale) : "";

  function choose(code) {
    onChange(field.key, code);
    setOpen(false);
    setQuery("");
  }

  return (
    <FieldShell label={pick(field.label, locale)} required={field.required} helper={field.helper ? pick(field.helper, locale) : null} ui={ui}>
      <div className="bnp-pf-combo" ref={rootRef}>
        <button
          type="button"
          className={`bnp-pf-combo__trigger${selectedName ? " has-value" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>{selectedName || ui.selectPlaceholder}</span>
        </button>
        {open && (
          <div className="bnp-pf-combo__panel">
            <input
              ref={searchRef}
              className="bnp-pf-combo__search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ui.searchPlaceholder}
            />
            <div className="bnp-pf-combo__list" role="listbox">
              {items.length === 0 && <div className="bnp-pf-combo__empty">{ui.noResults}</div>}
              {items.map((c) => (
                <button
                  type="button"
                  key={c.code}
                  role="option"
                  aria-selected={c.code === value}
                  className={`bnp-pf-combo__option${c.code === value ? " is-selected" : ""}`}
                  onClick={() => choose(c.code)}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </FieldShell>
  );
}

// ── Choice markers ────────────────────────────────────────────────────────────

const CheckGlyph = () => (
  <svg viewBox="0 0 16 16" className="bnp-pf-opt__check" aria-hidden="true">
    <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function OptionRow({ selected, onClick, role, label, marker, disabled }) {
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      aria-disabled={disabled || undefined}
      className={`bnp-pf-opt${selected ? " is-selected" : ""}${disabled ? " is-disabled" : ""}`}
      onClick={disabled ? undefined : onClick}
    >
      <span className={`bnp-pf-opt__marker bnp-pf-opt__marker--${marker.kind}`}>
        {marker.kind === "check" && selected && <CheckGlyph />}
        {marker.kind === "order" && selected && <span className="bnp-pf-opt__num">{marker.order}</span>}
        {marker.kind === "radio" && <span className="bnp-pf-opt__dot" />}
      </span>
      <span className="bnp-pf-opt__label">{label}</span>
    </button>
  );
}

function SingleChoice({ field, value, onChange, locale, ui }) {
  return (
    <FieldShell label={pick(field.label, locale)} required={field.required} helper={field.helper ? pick(field.helper, locale) : null} ui={ui}>
      <div className="bnp-pf-options" role="radiogroup" aria-label={pick(field.label, locale)}>
        {field.options.map((opt) => (
          <OptionRow
            key={opt.value}
            role="radio"
            selected={value === opt.value}
            onClick={() => onChange(field.key, opt.value)}
            label={pick(opt, locale)}
            marker={{ kind: "radio" }}
          />
        ))}
      </div>
    </FieldShell>
  );
}

function MultiChoice({ field, answers, onToggle, onValue, locale, ui }) {
  const selected = Array.isArray(answers[field.key]) ? answers[field.key] : [];
  const atMax = field.max ? selected.length >= field.max : false;
  const showOther = field.hasOther && selected.includes("other");
  const counter = field.max ? `${selected.length} / ${field.max}` : null;
  return (
    <FieldShell label={pick(field.label, locale)} required={field.required} helper={field.helper ? pick(field.helper, locale) : null} ui={ui}>
      <div className="bnp-pf-options" role="group" aria-label={pick(field.label, locale)}>
        {field.options.map((opt) => {
          const isSel = selected.includes(opt.value);
          return (
            <OptionRow
              key={opt.value}
              role="checkbox"
              selected={isSel}
              disabled={!isSel && atMax}
              onClick={() => onToggle(field.key, opt.value, field.max)}
              label={pick(opt, locale)}
              marker={{ kind: "check" }}
            />
          );
        })}
      </div>
      {counter && <span className="bnp-pf-counter">{counter}</span>}
      {showOther && (
        <input
          className="bnp-pf-other"
          type="text"
          value={answers[`${field.key}_other`] || ""}
          onChange={(e) => onValue(`${field.key}_other`, e.target.value)}
          placeholder={ui.otherPlaceholder}
        />
      )}
    </FieldShell>
  );
}

function OrderedChoice({ field, answers, onToggle, locale, ui }) {
  const selected = Array.isArray(answers[field.key]) ? answers[field.key] : [];
  return (
    <FieldShell label={pick(field.label, locale)} required={field.required} helper={field.helper ? pick(field.helper, locale) : null} ui={ui}>
      <div className="bnp-pf-options" role="group" aria-label={pick(field.label, locale)}>
        {field.options.map((opt) => {
          const order = selected.indexOf(opt.value);
          const isSel = order !== -1;
          return (
            <OptionRow
              key={opt.value}
              role="checkbox"
              selected={isSel}
              onClick={() => onToggle(field.key, opt.value)}
              label={pick(opt, locale)}
              marker={{ kind: "order", order: order + 1 }}
            />
          );
        })}
      </div>
    </FieldShell>
  );
}

// ── Router ───────────────────────────────────────────────────────────────────

export default function FieldRenderer({ field, form, locale, ui }) {
  const { answers, setValue, toggleMulti, toggleOrdered } = form;
  switch (field.type) {
    case "text":
    case "email":
    case "tel":
    case "url":
      return <TextInput field={field} answers={answers} value={answers[field.key]} onChange={setValue} locale={locale} ui={ui} />;
    case "textarea":
      return <TextArea field={field} answers={answers} value={answers[field.key]} onChange={setValue} locale={locale} ui={ui} />;
    case "select":
      return <SelectField field={field} value={answers[field.key]} onChange={setValue} locale={locale} ui={ui} />;
    case "country":
      return <CountryField field={field} value={answers[field.key]} onChange={setValue} locale={locale} ui={ui} />;
    case "single":
      return <SingleChoice field={field} value={answers[field.key]} onChange={setValue} locale={locale} ui={ui} />;
    case "multi":
      return <MultiChoice field={field} answers={answers} onToggle={toggleMulti} onValue={setValue} locale={locale} ui={ui} />;
    case "ordered":
      return <OrderedChoice field={field} answers={answers} onToggle={toggleOrdered} locale={locale} ui={ui} />;
    default:
      return null;
  }
}

// Acknowledgment checkbox group. ----------------------------------------------

export function AckGroup({ ack, answers, onChange, locale }) {
  return (
    <div className="bnp-pf-ack">
      <p className="bnp-pf-ack__title">{pick(ack.subheading, locale)}</p>
      <p className="bnp-pf-ack__intro">{pick(ack.intro, locale)}</p>
      <div className="bnp-pf-ack__list">
        {ack.items.map((item) => {
          const checked = answers[item.key] === true;
          return (
            <label key={item.key} className={`bnp-pf-ack__item${checked ? " is-checked" : ""}`}>
              <input type="checkbox" checked={checked} onChange={(e) => onChange(item.key, e.target.checked)} />
              <span className="bnp-pf-ack__box" aria-hidden="true"><CheckGlyph /></span>
              <span className="bnp-pf-ack__text">{pick(item, locale)}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
