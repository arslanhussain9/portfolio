/* ============================================================
   CONTACT.JS — Form validation + EmailJS submission
   ============================================================ */

(function () {
  'use strict';

  // ── EmailJS config (loaded from js/env.js) ──
  const EMAILJS_SERVICE_ID  = window.ENV?.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = window.ENV?.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY  = window.ENV?.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const RULES = {
    name:    { minLen: 2,  message: 'Name must be at least 2 characters.' },
    email:   { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address.' },
    message: { minLen: 20, message: 'Message must be at least 20 characters.' }
  };

  function showError(input, msg) {
    input.classList.add('error');
    const errEl = input.parentElement.querySelector('.form-error');
    if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
  }

  function clearError(input) {
    input.classList.remove('error');
    const errEl = input.parentElement.querySelector('.form-error');
    if (errEl) errEl.classList.remove('visible');
  }

  function validateField(input) {
    const id    = input.id;
    const val   = input.value.trim();
    const rule  = RULES[id];
    if (!rule) return true;

    if (!val) { showError(input, 'This field is required.'); return false; }
    if (rule.minLen && val.length < rule.minLen) { showError(input, rule.message); return false; }
    if (rule.pattern && !rule.pattern.test(val)) { showError(input, rule.message); return false; }

    clearError(input);
    return true;
  }

  function showSuccess() {
    const form    = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    if (form)    form.classList.add('hidden');
    if (success) success.classList.add('visible');
  }

  function setLoading(btn, loading) {
    btn.disabled = loading;
    btn.classList.toggle('loading', loading);
    btn.querySelector('.btn-text').textContent = loading ? 'Sending…' : 'Send Message';
  }

  async function submitForm(form) {
    const btn = form.querySelector('.form-submit');
    setLoading(btn, true);

    const params = {
      from_name: form.name.value.trim(),
      from_email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      // If EmailJS is loaded, use it; otherwise simulate success
      if (window.emailjs) {
        await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY);
      } else {
        // Fallback: simulate a 1.5s network request for demo
        await new Promise(res => setTimeout(res, 1500));
      }
      showSuccess();
    } catch (err) {
      console.error('Email send error:', err);
      alert('Something went wrong. Please email me directly at arslan.hussain790@gmail.com');
    } finally {
      setLoading(btn, false);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Real-time validation on blur
    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('blur',  () => validateField(input));
      input.addEventListener('input', () => { if (input.classList.contains('error')) validateField(input); });
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const inputs  = Array.from(form.querySelectorAll('input, textarea'));
      const isValid = inputs.every(input => validateField(input));
      if (isValid) submitForm(form);
    });

    // "Send another" button
    const resetBtn = document.getElementById('contact-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        form.classList.remove('hidden');
        document.getElementById('contact-success')?.classList.remove('visible');
      });
    }
  });
})();
