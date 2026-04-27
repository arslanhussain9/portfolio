/* ============================================================
   ANIMATIONS.JS — IntersectionObserver scroll reveals
   ============================================================ */

(function () {
  'use strict';

  const REVEAL_THRESHOLD = 0.12;
  const REVEAL_MARGIN    = '0px 0px -60px 0px';

  function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: REVEAL_THRESHOLD,
      rootMargin: REVEAL_MARGIN
    });

    els.forEach(el => observer.observe(el));
  }

  // Stagger children of a parent with data-stagger
  function initStagger() {
    const parents = document.querySelectorAll('[data-stagger]');
    parents.forEach(parent => {
      const children = parent.children;
      Array.from(children).forEach((child, i) => {
        if (!child.hasAttribute('data-reveal')) {
          child.setAttribute('data-reveal', '');
        }
        child.setAttribute('data-delay', String(Math.min(i * 100, 800)));
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initStagger();
    initReveal();
  });

  window.initReveal = initReveal;
  window.initStagger = initStagger;
})();
