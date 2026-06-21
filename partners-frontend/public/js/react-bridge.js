/**
 * react-bridge.js
 *
 * Exposes window.mxdPageInit() so React can re-trigger GSAP/Lenis animations
 * on every client-side route change without a full page reload.
 *
 * app.js initializes everything on DOMContentLoaded (first load).
 * After a React navigation, AnimationSync calls window.mxdPageInit() inside
 * a requestAnimationFrame so the new DOM is fully painted before animations run.
 *
 * The bridge delegates to whatever functions app.js already defines on window,
 * so we stay decoupled from the internals of the animation library.
 *
 * For Arabic (lang="ar"), it ALSO exposes window.neutralizeArabicAnimations()
 * so React can call the strip synchronously from useLayoutEffect — and starts
 * a MutationObserver that re-strips dangerous classes if anything (React
 * re-render, Helmet, GSAP, etc.) puts them back. Together those guarantee
 * mxdTypeAnimations() (which runs once on document.fonts.ready) never finds
 * a per-character split target on Arabic content.
 */
(function () {
  'use strict';

  // Strip animation classes that are unsafe for Arabic.
  //
  //  - mxd-scramble: shuffles Latin-alphabet glyphs; meaningless and visually
  //    broken on Arabic text.
  //  - reveal-type: per-character SplitType reveal; Arabic letters connect
  //    cursively, so per-char splitting visibly disconnects them.
  //  - anim-uni-chars: same per-character GSAP SplitText issue.
  //  - mxd-split-lines: per-line SplitText which wraps each "line" in a div,
  //    pushing inner spans (the Em/gray two-tone text) onto a new line in
  //    Arabic where the bidi algorithm and longer line lengths cause it to
  //    visually break the paragraph.
  //
  // For Arabic we drop these classes so the elements simply fade in cleanly.
  var DANGEROUS_CLASSES = ['mxd-scramble', 'reveal-type', 'anim-uni-chars', 'mxd-split-lines', 'mxd-split-lines-reverse', 'loading-split', 'loading-chars'];
  // mxd-scramble is removed without replacement; the rest get swapped to a
  // safe element-level fade so the section still animates in.
  var REPLACE_WITH_FADE = ['reveal-type', 'anim-uni-chars', 'mxd-split-lines', 'mxd-split-lines-reverse', 'loading-split', 'loading-chars'];

  function isArabic() {
    return document.documentElement.getAttribute('lang') === 'ar';
  }

  function stripElement(el) {
    var changed = false;
    for (var k = 0; k < DANGEROUS_CLASSES.length; k++) {
      var cls = DANGEROUS_CLASSES[k];
      if (el.classList.contains(cls)) {
        el.classList.remove(cls);
        changed = true;
        if (REPLACE_WITH_FADE.indexOf(cls) !== -1 && !el.classList.contains('anim-uni-fade-in')) {
          el.classList.add('anim-uni-fade-in');
        }
      }
    }
    return changed;
  }

  function neutralizeArabicAnimations() {
    if (!isArabic()) return;
    for (var i = 0; i < DANGEROUS_CLASSES.length; i++) {
      var els = document.querySelectorAll('.' + DANGEROUS_CLASSES[i]);
      for (var j = 0; j < els.length; j++) {
        stripElement(els[j]);
      }
    }
  }

  // Expose so React's useLayoutEffect can call the strip synchronously
  // before the browser paints, beating any async animation init.
  window.neutralizeArabicAnimations = neutralizeArabicAnimations;

  // MutationObserver: re-strips dangerous classes whenever React (or any other
  // code) inserts/changes nodes that carry them. This is the belt-and-braces
  // guarantee against the race between React's commit and the one-shot
  // mxdTypeAnimations() that fires inside document.fonts.ready.
  var observer = null;
  function startArabicObserver() {
    if (observer || !isArabic() || typeof MutationObserver === 'undefined') return;
    observer = new MutationObserver(function (mutations) {
      if (!isArabic()) return;
      for (var m = 0; m < mutations.length; m++) {
        var mut = mutations[m];
        if (mut.type === 'attributes' && mut.target && mut.target.nodeType === 1) {
          stripElement(mut.target);
        } else if (mut.type === 'childList') {
          for (var n = 0; n < mut.addedNodes.length; n++) {
            var node = mut.addedNodes[n];
            if (node.nodeType !== 1) continue;
            stripElement(node);
            // Walk subtree — React typically inserts whole trees at once.
            for (var s = 0; s < DANGEROUS_CLASSES.length; s++) {
              var inner = node.querySelectorAll ? node.querySelectorAll('.' + DANGEROUS_CLASSES[s]) : [];
              for (var t = 0; t < inner.length; t++) {
                stripElement(inner[t]);
              }
            }
          }
        }
      }
    });
    observer.observe(document.body || document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  // Backward-compat alias kept so older transitions still call the right hook
  function neutralizeScrambleForArabic() {
    neutralizeArabicAnimations();
  }

  window.mxdPageInit = function () {
    try {
      // Strip Arabic-incompatible animation classes before any init runs.
      neutralizeArabicAnimations();

      // Re-initialize scroll-triggered animations if the library exposes a hook
      if (typeof window.mxdInitAnimations === 'function') {
        window.mxdInitAnimations();
      }

      // Refresh ScrollTrigger positions (GSAP plugin)
      if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') {
        window.ScrollTrigger.refresh();
      }

      // Re-scan for scramble text elements (no-ops on Arabic since classes stripped)
      if (typeof window.mxdInitScramble === 'function') {
        window.mxdInitScramble();
      }

      // Re-initialize loader / transition sequence for inner pages
      if (typeof window.mxdInitLoader === 'function') {
        window.mxdInitLoader();
      }

      // Re-initialize Lenis smooth scroll if it was torn down
      if (typeof window.mxdInitLenis === 'function') {
        window.mxdInitLenis();
      }

      // Generic fallback: if app.js exposes a global page-init function directly
      if (typeof window.initPage === 'function') {
        window.initPage();
      }
    } catch (err) {
      // Silently ignore — animation failures should never break navigation
      if (window.location.hostname === 'localhost') {
        console.warn('[react-bridge] mxdPageInit error:', err);
      }
    }
  };

  // Run once on initial load too (covers the very first paint, before any SPA
  // navigation triggers mxdPageInit) AND start the MutationObserver so any
  // later React render that re-applies dangerous classes gets stripped before
  // the one-shot mxdTypeAnimations() (fired inside document.fonts.ready) sees
  // them. Without the observer, a fast font-cache hit can race past React's
  // mount and apply per-character SplitText to Arabic text.
  function bootArabicNeutralizer() {
    neutralizeArabicAnimations();
    startArabicObserver();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootArabicNeutralizer);
  } else {
    bootArabicNeutralizer();
  }
})();
