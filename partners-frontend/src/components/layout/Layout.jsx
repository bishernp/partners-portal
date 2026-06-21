import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Loader from './Loader.jsx';
import MenuHamburger from './MenuHamburger.jsx';
import Menu from './Menu.jsx';
import Header from './Header.jsx';
import FooterMain from './FooterMain.jsx';
import FooterCompact from './FooterCompact.jsx';
import Cursor from './Cursor.jsx';
import { useLocale } from '../../lib/LocaleContext.jsx';

// Pages that use the compact footer (service detail pages + some inner pages).
// Match against the pathname *without* the optional /ar prefix.
const COMPACT_FOOTER_BARE_PATHS = [
  '/digital',
  '/grc',
  '/pmo',
  '/capital',
  '/horizon',
  '/blog',
  '/blog/article',
];

function isCompactFooter(pathname, stripLocalePrefix) {
  const bare = stripLocalePrefix(pathname);
  return COMPACT_FOOTER_BARE_PATHS.includes(bare) || bare.startsWith('/blog/');
}

function useParallaxImages(pathname) {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    const animations = [];
    let onWindowLoad = null;
    let onImgLoad = null;
    const watchedImgs = [];
    const TRIGGER_SELECTORS =
      '.mxd-blog-item, .mxd-niche-cards__item, .mxd-cpb-list__item, .post-featured__thumb, .mxd-article__thumb, .mxd-divider, .mxd-images-grid__item, .mxd-next-prj__media';

    const setup = () => {
      const main = document.querySelector('main');
      if (!main) return;
      const targets = main.querySelectorAll('.parallax-img, .parallax-img-small');
      if (!targets.length) return;

      targets.forEach((el) => {
        const intensity = el.dataset.parallaxIntensity === 'low' ? 3 : 6;
        gsap.set(el, { scale: 1.2, transformOrigin: 'center center', willChange: 'transform' });
        const trigger = el.closest(TRIGGER_SELECTORS) || el.closest('.mxd-section') || el.parentElement;
        const anim = gsap.fromTo(
          el,
          { yPercent: -intensity },
          {
            yPercent: intensity,
            ease: 'none',
            scrollTrigger: {
              trigger,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          }
        );
        animations.push(anim);
      });
      ScrollTrigger.refresh();

      // On a slow phone the parallax setup runs (350 ms after mount) before
      // the card images have decoded. ScrollTrigger then measures each
      // trigger element with the image still at zero height, baking in
      // wrong start/end positions. The visible symptom is that the
      // parallax-scaled image ends up shifted relative to the gradient
      // overlay once the images finish loading. Re-refresh once per
      // late-loading image and once on window 'load' so the trigger
      // positions catch up to the final layout. invalidateOnRefresh: true
      // (above) ensures the recomputed yPercent is rebuilt against the
      // post-load box, not the half-built one.
      onImgLoad = () => ScrollTrigger.refresh();
      targets.forEach((el) => {
        if (el.tagName === 'IMG' && !el.complete) {
          el.addEventListener('load', onImgLoad, { once: true });
          el.addEventListener('error', onImgLoad, { once: true });
          watchedImgs.push(el);
        }
      });
      if (document.readyState !== 'complete') {
        onWindowLoad = () => ScrollTrigger.refresh();
        window.addEventListener('load', onWindowLoad, { once: true });
      }
    };

    const t = setTimeout(setup, 350);

    return () => {
      clearTimeout(t);
      if (onWindowLoad) window.removeEventListener('load', onWindowLoad);
      watchedImgs.forEach((img) => {
        img.removeEventListener('load', onImgLoad);
        img.removeEventListener('error', onImgLoad);
      });
      animations.forEach((a) => {
        if (a.scrollTrigger) a.scrollTrigger.kill();
        a.kill();
      });
      const main = document.querySelector('main');
      if (main) {
        const targets = main.querySelectorAll('.parallax-img, .parallax-img-small');
        targets.forEach((el) => {
          gsap.set(el, { clearProps: 'transform,willChange' });
        });
      }
    };
  }, [pathname]);
}

export default function Layout() {
  const location = useLocation();
  const { locale, dir, t, stripLocalePrefix } = useLocale();
  const useCompactFooter = isCompactFooter(location.pathname, stripLocalePrefix);
  useParallaxImages(location.pathname);

  const barePath = stripLocalePrefix(location.pathname);
  const baseUrl = 'https://bishernp.com';
  const enUrl = `${baseUrl}${barePath === '/' ? '' : barePath}`;
  const arUrl = `${baseUrl}/ar${barePath === '/' ? '' : barePath}`;
  const currentUrl = locale === 'ar' ? arUrl : enUrl;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": t('brand.name'),
    "alternateName": "B&P",
    "url": "https://bishernp.com",
    "logo": "https://bishernp.com/img/bnp-custom/bnp-black.svg",
    "image": "https://bishernp.com/img/og-image.jpg",
    "description": locale === 'ar'
      ? "بشر وشركاؤه شركة سعودية المنشأ تُقدِّم خدمات التحول الرقمي وتطوير البرمجيات والذكاء الاصطناعي والحوسبة السحابية والبيانات والحوكمة والامتثال والابتكار المؤسسي وبناء المشاريع للمؤسسات في أنحاء المملكة."
      : "Bisher & Partners is a Saudi-native firm delivering Digital Transformation, software development, AI, cloud, data, Governance & Compliance, Institutional Innovation, and Venture Building for institutions across the Kingdom.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": locale === 'ar' ? "طريق صلاح الدين الأيوبي، الملز" : "Salah Addin Alayubi Road, Almalaz",
      "addressLocality": locale === 'ar' ? "الرياض" : "Riyadh",
      "addressRegion": locale === 'ar' ? "منطقة الرياض" : "Riyadh Region",
      "addressCountry": "SA"
    },
    "telephone": "+966590816125",
    "email": "contact@bishernp.com",
    "sameAs": [
      "https://www.linkedin.com/company/bishernp",
      "https://x.com/bishernp",
      "https://www.youtube.com/@bishernp",
      "https://www.threads.net/@bishernp",
      "https://www.instagram.com/bishernp"
    ],
    "areaServed": ["SA", "AE", "KW", "QA", "BH", "OM"],
    "knowsAbout": locale === 'ar'
      ? [
          "التحول الرقمي",
          "تطوير البرمجيات",
          "تطوير البرمجيات المخصصة",
          "برمجيات المؤسسات",
          "الذكاء الاصطناعي",
          "التعلم الآلي",
          "تحليلات البيانات",
          "هندسة البيانات",
          "التحول السحابي",
          "تحديث الأنظمة",
          "تكامل الأنظمة",
          "الاستراتيجية الرقمية",
          "الحوكمة والامتثال",
          "الامتثال التنظيمي",
          "إدارة المخاطر",
          "تصميم السياسات",
          "جاهزية التدقيق",
          "فعالية المجالس",
          "الابتكار المؤسسي",
          "تصميم النماذج التشغيلية",
          "بناء القدرات المؤسسية",
          "بناء المشاريع",
          "استوديو هورايزون",
          "رؤية 2030",
          "المملكة العربية السعودية"
        ]
      : [
          "Digital Transformation",
          "Software Development",
          "Custom Software Development",
          "Enterprise Software",
          "Artificial Intelligence",
          "AI Strategy",
          "Machine Learning",
          "Data Analytics",
          "Data Engineering",
          "Cloud Transformation",
          "Systems Modernization",
          "Systems Integration",
          "Digital Strategy",
          "Governance & Compliance",
          "Regulatory Compliance",
          "Risk Management",
          "Policy Design",
          "Audit Readiness",
          "Board Effectiveness",
          "Institutional Innovation",
          "Operating Model Design",
          "Institutional Capability Building",
          "Venture Building",
          "Horizon Venture Studio",
          "Vision 2030",
          "Saudi Arabia"
        ],
    "inLanguage": locale === 'ar' ? "ar-SA" : "en"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": t('brand.name'),
    "url": "https://bishernp.com",
    "inLanguage": locale === 'ar' ? "ar-SA" : "en"
  };

  return (
    <>
      <Helmet>
        <html lang={locale} dir={dir} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="ar-SA" href={arUrl} />
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
        <link rel="canonical" href={currentUrl} />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <Loader />
      <MenuHamburger />
      <Menu />
      <Header />
      <Outlet />
      {useCompactFooter ? <FooterCompact /> : <FooterMain />}
      <Cursor />
    </>
  );
}
