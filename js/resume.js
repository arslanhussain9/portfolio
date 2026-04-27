/* ============================================================
   RESUME.JS — PDF preview modal + download
   ============================================================ */

(function () {
  'use strict';

  const RESUME_PATH = 'assets/resume/arslan-hussain-resume.pdf';

  function openResumeModal() {
    const overlay = document.getElementById('resume-modal');
    if (!overlay) return;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Wire iframe if not yet loaded
    const iframe = overlay.querySelector('.modal__iframe');
    const placeholder = overlay.querySelector('.resume-placeholder');
    if (iframe && !iframe.src) {
      iframe.src = RESUME_PATH;
      iframe.onerror = () => {
        iframe.style.display = 'none';
        if (placeholder) placeholder.style.display = 'flex';
      };
    }
  }

  function closeResumeModal() {
    const overlay = document.getElementById('resume-modal');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function downloadResume() {
    const a = document.createElement('a');
    a.href = RESUME_PATH;
    a.download = 'Arslan-Hussain-Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Open triggers
    document.querySelectorAll('[data-resume-open]').forEach(btn => {
      btn.addEventListener('click', openResumeModal);
    });

    // Download triggers
    document.querySelectorAll('[data-resume-download]').forEach(btn => {
      btn.addEventListener('click', downloadResume);
    });

    // Close triggers
    document.querySelectorAll('[data-resume-close]').forEach(btn => {
      btn.addEventListener('click', closeResumeModal);
    });

    // Backdrop click closes
    const overlay = document.getElementById('resume-modal');
    if (overlay) {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) closeResumeModal();
      });
    }

    // ESC key closes
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeResumeModal();
    });
  });
})();
