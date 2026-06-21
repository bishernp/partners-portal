import React from 'react';

export default function MenuHamburger() {
  return (
    <div className="mxd-menu__contain loading-fade">
      <div className="mxd-menu__toggle">
        <a href="#0" className="mxd-menu__hamburger" aria-label="Menu">
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </a>
      </div>
    </div>
  );
}
