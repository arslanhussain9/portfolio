/* ============================================================
   LIGHTBOX.JS — Project image gallery slider
   ============================================================ */

(function () {
  'use strict';

  let currentImages = [];
  let currentIndex  = 0;

  function openLightbox(images, startIndex = 0) {
    currentImages = images;
    currentIndex  = startIndex;

    const overlay = document.getElementById('lightbox-overlay');
    if (!overlay) return;

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    renderSlide();
    renderDots();
  }

  function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function goTo(index) {
    currentIndex = (index + currentImages.length) % currentImages.length;
    renderSlide();
    updateDots();
  }

  function renderSlide() {
    const img     = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const counter = document.getElementById('lightbox-counter');
    const cur     = currentImages[currentIndex];

    if (img) {
      img.classList.add('transitioning');
      img.onload = () => img.classList.remove('transitioning');
      img.src = cur.src || cur;
    }
    if (caption) caption.textContent = cur.label || '';
    if (counter) counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  }

  function renderDots() {
    const dotsWrap = document.getElementById('lightbox-dots');
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    currentImages.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'lightbox__dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Image ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = document.querySelectorAll('.lightbox__dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('lightbox-overlay');
    if (!overlay) return;

    // Close
    overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);

    // Arrows
    document.getElementById('lightbox-prev')?.addEventListener('click', () => goTo(currentIndex - 1));
    document.getElementById('lightbox-next')?.addEventListener('click', () => goTo(currentIndex + 1));

    // Keyboard
    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
      if (e.key === 'ArrowRight') goTo(currentIndex + 1);
      if (e.key === 'Escape')     closeLightbox();
    });

    // Touch/swipe
    let touchStartX = 0;
    overlay.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    overlay.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? currentIndex + 1 : currentIndex - 1);
    });
  });

  // Expose globally so projects.js can call openLightbox
  window.openLightbox = openLightbox;
})();
