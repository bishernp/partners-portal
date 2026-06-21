/**
 * loader-patch.js
 *
 * app.js waits for imagesLoaded(body).on("done") before dismissing the
 * full-screen loader.  "done" only fires when every image in the body loads
 * successfully — if any placeholder (dummyimage.com, etc.) fails or is slow,
 * "done" never fires and the page stays hidden forever.
 *
 * This patch intercepts window.imagesLoaded and redirects "done" listeners
 * to "always", so the loader dismisses regardless of whether images succeed
 * or error out.  "always" fires when all images are finished — loaded OR
 * broken — keeping the 1.2-second minimum delay intact.
 *
 * Must run AFTER libs.min.js and BEFORE app.js.
 */
(function () {
  'use strict';

  if (typeof window.imagesLoaded !== 'function') return;

  var _orig = window.imagesLoaded;

  window.imagesLoaded = function (elem, options, callback) {
    var instance = _orig(elem, options, callback);

    // Patch the instance's .on() so callers asking for 'done'
    // actually subscribe to 'always'.
    var _on = instance.on.bind(instance);
    instance.on = function (event, handler) {
      return _on(event === 'done' ? 'always' : event, handler);
    };

    return instance;
  };
})();
