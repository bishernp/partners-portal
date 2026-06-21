import React from 'react';
import { useLocale } from '../../lib/LocaleContext.jsx';

/**
 * Pill-style language toggle. Shows the OTHER language as the call to action,
 * so the user reads the action ("switch to ...") rather than the current state.
 */
export default function LanguageSwitcher() {
  const { locale, switchLocale, t } = useLocale();
  const target = locale === 'ar' ? 'en' : 'ar';
  const label = target === 'ar' ? t('common.languageAR') : t('common.languageEN');
  const ariaLabel = target === 'ar' ? t('common.switchToArabic') : t('common.switchToEnglish');

  return (
    <button
      type="button"
      className="mxd-language-switcher"
      onClick={() => switchLocale(target)}
      aria-label={ariaLabel}
      title={ariaLabel}
      lang={target}
    >
      <span className="mxd-language-switcher__label">{label}</span>
    </button>
  );
}
