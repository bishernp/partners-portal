import React from 'react';
import site from '../../data/site.js';
import { useContact } from '../../lib/SiteDataContext.jsx';
import { L, useLocale } from '../../lib/LocaleContext.jsx';

export default function FooterCompact() {
  const contact = useContact();
  const { t, locale } = useLocale();
  const localizedAddressLine = locale === 'ar' ? t('common.address.line') : contact.addressLine;
  return (
    <footer id="mxd-footer" className="mxd-footer blur-section">
      <div className="mxd-container grid-l-container">

        {/* Footer Block - Navigation v1 */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks mxd-grid-item">
            <div className="footer-blocks__nav-v01">
              <ul className="footer-nav-v01">
                <li className="footer-nav-v01__item">
                  <L className="anim-uni-slide-down" to="/"><span className="mxd-scramble mxd-slide-down">{t('common.home')}</span></L>
                </li>
                <li className="footer-nav-v01__item">
                  <L className="anim-uni-slide-down" to="/about-us"><span className="mxd-scramble mxd-slide-down">{t('common.company')}</span></L>
                </li>
                <li className="footer-nav-v01__item">
                  <L className="anim-uni-slide-down" to="/solutions"><span className="mxd-scramble mxd-slide-down">{t('common.practices')}</span></L>
                </li>
                <li className="footer-nav-v01__item">
                  <L className="anim-uni-slide-down" to="/blog"><span className="mxd-scramble mxd-slide-down">{t('common.blog')}</span></L>
                </li>
                <li className="footer-nav-v01__item">
                  <L className="anim-uni-slide-down" to="/contact"><span className="mxd-scramble mxd-slide-down">{t('common.contact')}</span></L>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Block - Info Columns */}
        <div className="mxd-block">
          <div className="mxd-grid-item mb-5">
            <L className="bnp-footer-logo__link" to="/">
              <img className="bnp-footer-logo__icon bnp-logo-dark"  src={site.brand.logoBlack} alt={t('brand.altName')} />
              <img className="bnp-footer-logo__icon bnp-logo-light" src={site.brand.logoWhite} alt={t('brand.altName')} />
            </L>
          </div>
          <div className="mxd-footer__footer-blocks">
            <div className="footer-blocks__column mxd-grid-item justify-start">
              <div className="footer-blocks__data justify-start">
                <p className="footer-data">
                  <a className="anim-uni-slide-down" href={`mailto:${contact.email}?subject=Inquiry%20from%20Website`}>
                    <span>{contact.email}</span>
                  </a>
                </p>
                <p className="footer-data">
                  <a className="anim-uni-slide-down" href={`tel:${contact.phoneRaw}`}>
                    <span>{contact.phone}</span>
                  </a>
                </p>
                <p className="footer-data anim-uni-slide-down">
                  <span>{localizedAddressLine}</span>
                </p>
              </div>
            </div>
            <div className="footer-blocks__column mxd-grid-item justify-end">
              <div className="footer-blocks__data justify-end">
                <p className="footer-data anim-uni-slide-down">
                  <span className="mxd-slide-down">©{site.brand.copyrightYear}</span>
                </p>
                <p className="footer-data anim-uni-slide-down">
                  <span className="mxd-slide-down">{t('common.copyright')} {t('brand.name')}. {t('common.copyrightAll')}</span>
                </p>
                <p className="footer-data anim-uni-slide-down">
                  <span className="mxd-slide-down">
                    {t('common.builtBy')}&nbsp;
                    <a href={site.brand.url} target="_blank" rel="noreferrer">
                      <span className="mxd-scramble">{t('brand.name')}</span>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Block - Links */}
        <div className="mxd-block">
          <div className="mxd-footer__footer-blocks bottom-blocks">
            <div className="footer-blocks__column mxd-grid-item justify-start">
              <div className="footer-blocks__socials">
                <ul className="mxd-socials-line anim-uni-fade-in">
                  {site.socials.map((s, i) => (
                    <li key={s.label}>
                      <a className="mxd-socials-line__link" href={s.url} target="_blank" rel="noreferrer">
                        <span className="mxd-scramble">{(t('common.socials')[i]) || s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-blocks__column mxd-grid-item justify-end">
              <div className="footer-blocks__controls anim-uni-fade-in">
                <a id="to-top" className="btn btn-line-icon btn-line-default slide-up" href="#">
                  <span className="btn-caption mxd-scramble">{t('common.backToTop')}</span>
                  <i>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                      <path d="M0,7.2h3.6v3.6H0V7.2z M10.8,3.6V0H7.2v3.6H3.6v3.6h3.6V18h3.6V7.2h3.6V3.6H10.8z M14.4,7.2v3.6H18V7.2H14.4z" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
