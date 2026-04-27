/* ============================================================
   THEME.JS — Dark mode toggle scaffold (future hook)
   ============================================================ */

(function () {
  'use strict';

  const KEY = 'ah-theme';

  // Currently always dark — toggle button is hidden
  // Wire up when ready: add a button with id="theme-toggle"
  function initTheme() {
    const saved = localStorage.getItem(KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', saved);

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', `Switch to ${saved === 'dark' ? 'light' : 'dark'} mode`);
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next    = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem(KEY, next);
        btn.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initTheme);
})();
