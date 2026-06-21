import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlurEffect from '../components/BlurEffect.jsx';
import site from '../data/site.js';
import { L, useLocale } from '../lib/LocaleContext.jsx';
import { META, UI } from '../data/partners.js';
import PartnersWizard from '../components/partners/PartnersWizard.jsx';

// B&P House partner onboarding. A private, invitation-only journey (reached
// with a ?token in the URL), so it is kept out of the search index. The page
// reuses the contact page's inner-headline scaffold and the site's blur
// background, theme, and RTL behaviour; the multi-step experience lives in
// <PartnersWizard />.
export default function PartnersPage() {
  const { t, locale } = useLocale();
  const meta = META[locale] || META.en;
  const ui = UI[locale] || UI.en;
  const url = locale === 'ar' ? 'https://bishernp.com/ar/partners' : 'https://bishernp.com/partners';

  return (
    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* Invitation-only flow — keep it out of the index. */}
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : 'en_US'} />
        <meta property="og:image" content={site.brand.ogImage} />
      </Helmet>

      <BlurEffect />

      {/* Section - Inner Headline (mirrors the contact page) */}
      <div className="mxd-section blur-section padding-bottom-default">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block loading-wrap">
            <div className="inner-headline">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="inner-headline__breadcrumbs loading-fade">
                      <div className="breadcrumbs__nav">
                        <span><L to="/"><span className="mxd-scramble">{t('common.breadcrumbHome')}</span></L></span>
                        <span className="current-item">{ui.breadcrumb}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <PartnersWizard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
