/* ============================================================
   SKILLS.JS — Animated progress bars on scroll
   ============================================================ */

(function () {
  'use strict';

  function animateBars() {
    const bars = document.querySelectorAll('.skill-bar__fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const pct = bar.dataset.pct || '0';
          // Small delay so CSS transition plays nicely
          requestAnimationFrame(() => {
            bar.style.width = pct + '%';
          });
          bar.classList.add('animated');
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
  }

  document.addEventListener('DOMContentLoaded', animateBars);
})();
