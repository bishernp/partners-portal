import React from 'react';
import site from '../../data/site.js';

export default function Loader() {
  return (
    <>
      {/* Page Transition */}
      <div className="mxd-page-transition"></div>

      {/* Loader */}
      <div className="mxd-loader">
        <div className="mxd-loader__top">
          <span>{site.brand.name}</span>
        </div>
        <div className="mxd-loader__images">
          <div className="bnp-wave-logo">
            <img src="/img/bnp-custom/bnp-white.svg" alt={site.brand.altName} />
          </div>
        </div>
        <div className="mxd-loader__bottom">
          <div className="mxd-loader__count">
            <span className="count__text">0</span>
            <span className="count__percent">%</span>
          </div>
          <span className="mxd-loader__caption">Loading</span>
        </div>
      </div>
    </>
  );
}
