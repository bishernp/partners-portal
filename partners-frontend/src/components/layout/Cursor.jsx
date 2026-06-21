import React, { useEffect, useState } from 'react';

// Custom cursor only makes sense on devices that have a real pointer (mouse,
// trackpad). Touch screens and pen-only devices skip the render entirely so
// they don't pay the DOM/JS cost or risk visual glitches when the cursor JS
// tries to follow a non-existent pointer.
export default function Cursor() {
  const [hasHover, setHasHover] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return true;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    const handler = (e) => setHasHover(e.matches);
    if (mql.addEventListener) mql.addEventListener('change', handler);
    else if (mql.addListener) mql.addListener(handler);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', handler);
      else if (mql.removeListener) mql.removeListener(handler);
    };
  }, []);

  if (!hasHover) return null;

  return (
    <div id="mxd-cursor" className="mxd-cursor">
      <div id="mxd-cursor__dot" className="mxd-cursor__dot"></div>
      <p id="mxd-cursor__text" className="mxd-cursor__text"></p>
      <div id="mxd-cursor__image" className="mxd-cursor__image"></div>
    </div>
  );
}
