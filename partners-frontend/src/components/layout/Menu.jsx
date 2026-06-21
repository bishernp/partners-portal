import React from 'react';
import site from '../../data/site.js';
import { getArms } from '../../data/arms.js';
import { useContact } from '../../lib/SiteDataContext.jsx';
import { L, useLocale } from '../../lib/LocaleContext.jsx';

export default function Menu() {
  const contact = useContact();
  const { t, locale } = useLocale();
  const arms = getArms(locale);
  const numbers = t('common.menuNumbers');
  const tagline = t('common.menuTagline');
  // For Arabic, override the contact data with localized address while keeping the API-fed phone/email values.
  const localizedAddressLine = locale === 'ar' ? t('common.address.line') : contact.addressLine;
  const localizedAddressHtml = locale === 'ar' ? t('common.address.html') : contact.addressHtml;

  return (
    <nav className="mxd-menu">
      <div className="mxd-menu__backdrop"></div>

      <div className="mxd-menu__overlay">
        <div className="mxd-menu__content" data-lenis-prevent="">

          {/* Menu Logo */}
          <div className="mxd-menu__logo">
            <L to="/" className="menu-logo">
              {/* The overlay background inverts vs. the site theme
                  (var(--base-opp)). Render both logo variants and let CSS
                  pick the one that contrasts with the overlay's background:
                  site dark → overlay light → black logo;
                  site light → overlay dark → white logo. */}
              <img className="menu-logo__image bnp-logo-dark"  src={site.brand.logoBlack} alt={t('brand.altName')} />
              <img className="menu-logo__image bnp-logo-light" src={site.brand.logoWhite} alt={t('brand.altName')} />
              <div className="menu-logo__text">
                <span>{t('brand.shortA')}</span>
                <span>{t('brand.shortB')}</span>
              </div>
            </L>
          </div>

          {/* Menu Media */}
          <div className="mxd-menu__media">
            <div className="menu-media__wrapper">
              {/* Background video is only meaningful on tablet+ where the menu
                  has space to show it. On mobile, the source is gated by
                  `media` so the browser skips the network request entirely. */}
              <video preload="metadata" autoPlay muted loop playsInline>
                <source type="video/mp4" media="(min-width: 768px)" src="/video/bg.mp4" />
              </video>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="mxd-menu__navigation">
            <div className="mxd-menu__inner">
              <div className="mxd-menu__shadow shadow-top"></div>
              <div className="mxd-menu__caption">
                <p dangerouslySetInnerHTML={{ __html: tagline }}></p>
              </div>

              {/* Left side */}
              <div className="mxd-menu__left">
                <div className="main-menu">
                  <div className="main-menu__content">
                    <ul id="main-menu" className="main-menu__accordion">
                      <li className="main-menu__item">
                        <div className="main-menu__divider divider-top"></div>
                        <div className="main-menu__toggle">
                          <L className="main-menu__link" to="/">
                            <span className="main-menu__number">{numbers[0]}</span>
                            <span className="main-menu__caption">{t('common.home')}</span>
                          </L>
                        </div>
                        <div className="main-menu__divider divider-bottom"></div>
                      </li>
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <L className="main-menu__link" to="/about-us">
                            <span className="main-menu__number">{numbers[1]}</span>
                            <span className="main-menu__caption">{t('common.company')}</span>
                          </L>
                        </div>
                        <div className="main-menu__divider divider-bottom"></div>
                      </li>
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <L className="main-menu__link" to="/solutions">
                            <span className="main-menu__number">{numbers[2]}</span>
                            <span className="main-menu__caption">{t('common.practices')}</span>
                          </L>
                          <div className="main-menu__arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                              <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                            </svg>
                          </div>
                        </div>
                        <ul className="submenu">
                          <li className="submenu__item">
                            <L to="/solutions">{t('common.allPractices')}</L>
                          </li>
                          {arms.map((a) => (
                            <li key={a.slug} className="submenu__item">
                              <L to={`/${a.slug}`}>{a.name}</L>
                            </li>
                          ))}
                        </ul>
                        <div className="main-menu__divider divider-bottom"></div>
                      </li>
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <L className="main-menu__link" to="/blog">
                            <span className="main-menu__number">{numbers[3]}</span>
                            <span className="main-menu__caption">{t('common.blog')}</span>
                          </L>
                        </div>
                        <div className="main-menu__divider divider-bottom"></div>
                      </li>
                      <li className="main-menu__item">
                        <div className="main-menu__toggle">
                          <L className="main-menu__link" to="/contact">
                            <span className="main-menu__number">{numbers[4]}</span>
                            <span className="main-menu__caption">{t('common.contact')}</span>
                          </L>
                        </div>
                        <div className="main-menu__divider divider-bottom"></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="mxd-menu__right">
                <div className="menu-contact">
                  <div className="menu-contact__item">
                    <ul className="menu-contact__list">
                      <li>
                        <a className="tag tag-m" href={`mailto:${contact.email}?subject=Inquiry%20from%20Website`}>
                          <span>{contact.email}</span>
                        </a>
                      </li>
                      <li>
                        <a className="tag tag-m" href={`tel:${contact.phoneRaw}`}>
                          <span>{contact.phone}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-contact__item">
                    <ul className="menu-contact__list">
                      <li>
                        <a className="tag tag-m" href={contact.mapsUrl} target="_blank" rel="noreferrer">
                          <span dangerouslySetInnerHTML={{ __html: localizedAddressHtml }}></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-contact__item">
                    <ul className="menu-contact__list">
                      {site.socials.map((s, si) => (
                        <li key={s.label}>
                          <a className="tag tag-m" href={s.url} target="_blank" rel="noreferrer">
                            <span className="mxd-scramble">{(t('common.socials')[si]) || s.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom data */}
              <div className="mxd-menu__shadow"></div>
              <div className="mxd-menu__data">
                <div className="menu-data__left">
                  <p className="menu-data__text">
                    {t('common.madeWithBy')}{' '}
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                      <path d="M2.6,6.4v2.6H0V3.9h2.6v2.6ZM15.4,3.9v5.1h2.6V3.9h-2.6ZM12.9,11.6h2.6v-2.6h-2.6v2.6ZM2.6,9v2.6h2.6v-2.6h-2.6ZM10.3,14.1h2.6v-2.6h-2.6v2.6ZM5.1,11.6v2.6h2.6v-2.6h-2.6ZM7.7,3.9V1.3H2.6v2.6h5.1ZM15.4,3.9V1.3h-5.1v2.6h5.1ZM10.3,6.4v-2.6h-2.6v2.6h2.6ZM7.7,16.7h2.6v-2.6h-2.6v2.6Z" />
                    </svg>{' '}
                    <a href={site.brand.url} target="_blank" rel="noreferrer">
                      <span className="mxd-scramble">{t('brand.credit')}</span>
                    </a>
                  </p>
                </div>
                <div className="menu-data__right">
                  <p className="menu-data__text">{t('common.copyright')} {t('brand.name')}</p>
                  <p className="menu-data__text">©{site.brand.copyrightYear}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
