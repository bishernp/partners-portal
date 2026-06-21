import React from 'react';
import site from '../../data/site.js';
import { useContact } from '../../lib/SiteDataContext.jsx';
import { L, useLocale } from '../../lib/LocaleContext.jsx';

export default function FooterMain() {
  const contact = useContact();
  const { t } = useLocale();
  return (
    <footer id="mxd-footer" className="mxd-footer blur-section">
      <div className="mxd-container grid-l-container">

        {/* Footer Block - Navigation v2 */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item">
                <nav className="mxd-footer__nav02">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="mxd-grid-item mb-5">
                        <L className="bnp-footer-logo__link" to="/">
                          <img className="bnp-footer-logo__icon bnp-logo-dark"  src={site.brand.logoBlack} alt={t('brand.altName')} />
                          <img className="bnp-footer-logo__icon bnp-logo-light" src={site.brand.logoWhite} alt={t('brand.altName')} />
                        </L>
                      </div>
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down"><span>{t('common.footerDiscover')}</span></p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li><L className="anim-uni-slide-down" to="/"><span>{t('common.home')}</span></L></li>
                              <li><L className="anim-uni-slide-down" to="/about-us"><span>{t('common.company')}</span></L></li>
                              <li><L className="anim-uni-slide-down" to="/solutions"><span>{t('common.practices')}</span></L></li>
                              <li><L className="anim-uni-slide-down" to="/blog"><span>{t('common.blog')}</span></L></li>
                              <li><L className="anim-uni-slide-down" to="/contact"><span>{t('common.contact')}</span></L></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down"><span>{t('common.footerContact')}</span></p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li>
                                <a className="anim-uni-slide-down" href={`mailto:${contact.email}?subject=Inquiry%20from%20Website`}>
                                  <span>{contact.email}</span>
                                </a>
                              </li>
                              <li>
                                <a className="anim-uni-slide-down" href={`tel:${contact.phoneRaw}`}>
                                  <span>{contact.phone}</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down"><span>{t('common.footerInfo')}</span></p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li>
                                <L className="anim-uni-slide-down" to="/faq"><span>{t('common.faq')}</span></L>
                              </li>
                              <li>
                                <L className="anim-uni-slide-down" to="/privacy-policy"><span>{t('common.privacyPolicy')}</span></L>
                              </li>
                              <li>
                                <L className="anim-uni-slide-down" to="/terms-of-use"><span>{t('common.termsOfUse')}</span></L>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__socials-list">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 mxd-footer-nav02__item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down"><span>{t('common.footerFollow')}</span></p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            {site.socials.map((s, i) => (
                              <a key={s.label} className="socials-list__item slide-right-up" href={s.url} target="_blank" rel="noreferrer">
                                <div className="socials-list__divider divider-top anim-uni-clip-in"></div>
                                <div className="socials-list__info">
                                  <div className="socials-list__number anim-uni-slide-down">
                                    <span>[{String(i + 1).padStart(2, '0')}]</span>
                                  </div>
                                  <div className="socials-list__name anim-uni-slide-down">
                                    <span>{(t('common.socials')[i]) || s.label}</span>
                                  </div>
                                </div>
                                <div className="socials-list__arrow anim-uni-slide-down">
                                  <i>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                      <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="socials-list__divider divider-bottom anim-uni-clip-in"></div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Block - Controls */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item"></div>
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__controls-middle">
                  <div className="anim-uni-slide-down">
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
        </div>

        {/* Footer Block - Data */}
        <div className="mxd-block">
          <div className="mxd-footer__data">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                  <div className="mxd-footer__data-item anim-uni-fade-in">
                    <p className="footer-data">
                      <span>{t('common.copyright')} {t('brand.name')}. {t('common.copyrightAll')} ©{site.brand.copyrightYear}</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                  <div className="mxd-footer__data-item mxd-footer__recaptcha anim-uni-fade-in">
                    <p className="footer-data">
                      <span>{t('common.recaptchaNotice')}, <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">{t('common.recaptchaPolicy')}</a>{' '}{t('common.and')}{' '}<a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">{t('common.recaptchaTerms')}</a>{' '}{t('common.recaptchaApply')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
