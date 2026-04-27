/* ============================================================
   PROJECTS.JS — Render cards + case study routing
   ============================================================ */

(function () {
  'use strict';

  // ── Render project grid cards ──
  function renderProjectCards(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid || typeof PROJECTS === 'undefined') return;

    const filtered = filter === 'all' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.categories && p.categories.includes(filter));

    grid.innerHTML = filtered.map((p, i) => `
      <article class="project-card" data-reveal data-project-id="${p.id}">
        <span class="project-card__num" aria-hidden="true">${p.number}</span>

        <div class="project-card__thumb">
          ${p.thumbnail
            ? `<img src="${p.thumbnail}" alt="${p.title} screenshot" loading="lazy" onerror="this.parentElement.innerHTML=thumbPlaceholder('${p.id}')">`
            : thumbPlaceholder(p.id)
          }
        </div>

        <div class="project-card__meta">
          <h3 class="project-card__title">${p.title}</h3>
          <span class="project-card__timeline">${p.timeline}</span>
        </div>

        <p class="project-card__desc">${p.tagline}</p>

        <div class="project-card__impact">
          ${p.results.map(r => `<span class="impact-item">${r.metric} ${r.label}</span>`).join('')}
        </div>

        <div class="project-card__stack badge-group">
          ${p.stack.map(t => `<span class="badge">${t}</span>`).join('')}
        </div>

        <div class="project-card__links">
          ${p.live   ? `<a href="${p.live}"   target="_blank" rel="noopener" class="btn btn-primary btn-sm" aria-label="Live demo for ${p.title}">Live Demo</a>` : ''}
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" aria-label="GitHub repo for ${p.title}">GitHub</a>` : ''}
        </div>
      </article>
    `).join('');

    // Re-initialize reveals for new cards
    if (window.initReveal) window.initReveal();

    // Open gallery on thumb click
    grid.querySelectorAll('.project-card__thumb').forEach((thumb, i) => {
      thumb.style.cursor = 'zoom-in';
      thumb.addEventListener('click', e => {
        e.stopPropagation();
        const p = filtered[i];
        if (p.gallery && p.gallery.length && window.openLightbox) {
          window.openLightbox(p.gallery, 0);
        }
      });
    });
  }

  // ── Filter logic ──
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Render filtered projects
        const filter = btn.dataset.filter;
        renderProjectCards(filter);
      });
    });
  }

  function thumbPlaceholder(id) {
    const icons = { 'product-rater': '🧪', 'scholarship-finder': '🎓', 'recipe-extractor': '🍳', 'watch-verse': '⌚' };
    return `<div class="project-card__thumb-placeholder">
      <span class="project-card__thumb-icon">${icons[id] || '💻'}</span>
      <span>Preview coming soon</span>
    </div>`;
  }

  // ── Render featured project ──
  function renderFeatured() {
    if (typeof PROJECTS === 'undefined') return;
    const featured = PROJECTS.find(p => p.featured);
    if (!featured) return;

    // Pipeline steps
    const pipelineEl = document.getElementById('featured-pipeline-steps');
    if (pipelineEl && featured.pipeline.length) {
      pipelineEl.innerHTML = featured.pipeline.map((s, i) => `
        ${i > 0 ? '<div class="pipeline-arrow"></div>' : ''}
        <div class="pipeline-step">
          <span class="pipeline-step__icon">${s.icon}</span>
          <span class="pipeline-step__num">${s.step}</span>
          <span>${s.label}</span>
        </div>
      `).join('');
    }

    // Metrics
    const metricsEl = document.getElementById('featured-metrics');
    if (metricsEl) {
      metricsEl.innerHTML = featured.results.map(r => `
        <div class="featured__metric">
          <span class="featured__metric-value">${r.metric}</span>
          <span class="featured__metric-label">${r.label}</span>
        </div>
      `).join('');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProjectCards();
    renderFeatured();
    initFilters();
  });
})();
