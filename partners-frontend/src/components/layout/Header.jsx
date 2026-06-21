import React from 'react';
import site from '../../data/site.js';
import { getArms } from '../../data/arms.js';
import { L, useLocale } from '../../lib/LocaleContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Header() {
  const { t, locale } = useLocale();
  const arms = getArms(locale);

  return (
    <header id="header" className="mxd-header">
      {/* Logo */}
      <div className="mxd-header__logo loading-fade">
        <L className="mxd-logo" to="/">
          <img className="mxd-logo__image bnp-logo-dark"  src={site.brand.logoBlack} alt={t('brand.altName')} />
          <img className="mxd-logo__image bnp-logo-light" src={site.brand.logoWhite} alt={t('brand.altName')} />
          <div className="mxd-logo__text">
            <span className="mxd-scramble">{t('brand.shortA')}</span>
            <span className="mxd-scramble">{t('brand.shortB')}</span>
          </div>
        </L>
      </div>

      {/* Desktop Navigation */}
      <nav className="bnp-desktop-nav loading-fade">
        <L className="bnp-desktop-nav__link" to="/"><span className="mxd-scramble">{t('common.home')}</span></L>
        <L className="bnp-desktop-nav__link" to="/about-us"><span className="mxd-scramble">{t('common.company')}</span></L>
        <div className="bnp-desktop-nav__dropdown">
          <L className="bnp-desktop-nav__link bnp-desktop-nav__link--trigger" to="/solutions">
            <span className="mxd-scramble">{t('common.practices')}</span>
            <svg className="bnp-desktop-nav__chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="currentColor">
              <path d="M0 0h2v2H0zm2 2h2v2H2zm2 2h2v2H4zm2-2h2v2H6zm2-2h2v2H8z"/>
            </svg>
          </L>
          <div className="bnp-desktop-nav__dropdown-menu">
            {arms.map((a) => (
              <L key={a.slug} className="bnp-desktop-nav__dropdown-item" to={`/${a.slug}`}>
                <span>{a.name}</span>
              </L>
            ))}
          </div>
        </div>
        <L className="bnp-desktop-nav__link" to="/blog"><span className="mxd-scramble">{t('common.blog')}</span></L>
        <L className="bnp-desktop-nav__link" to="/contact"><span className="mxd-scramble">{t('common.contact')}</span></L>
      </nav>

      {/* Header Controls */}
      <div className="mxd-header__controls loading-fade">
        <LanguageSwitcher />
        <button
          id="color-switcher"
          className="btn mxd-color-switcher"
          type="button"
          role="switch"
          aria-label={t('common.lightDarkMode')}
          aria-checked="true"
        ></button>
      </div>
    </header>
  );
}
