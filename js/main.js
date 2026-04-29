/* ============================================================
   MAIN.JS — Navbar, smooth nav, active link tracking
   ============================================================ */

(function () {
  'use strict';

  // ── Navbar scroll state ──
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile hamburger menu ──
  function initMobileMenu() {
    const burger   = document.getElementById('nav-hamburger');
    const menu     = document.getElementById('nav-mobile-menu');
    const mobileLinks = document.querySelectorAll('.nav__mobile-link');
    if (!burger || !menu) return;

    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        burger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Active nav link on scroll ──
  function initActiveLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
  }

  // ── Smooth scroll for anchor links ──
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')) || 68;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  // ── Lazy load images fallback ──
  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) return; // native support
    const imgs = document.querySelectorAll('img[loading="lazy"]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    imgs.forEach(img => observer.observe(img));
  }

  // ── Marquee logic ──
  function initMarquee() {
    const marquee = document.querySelector('.certs__marquee');
    if (!marquee) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let isHovered = false;
    let animationId;
    const speed = 1.5; // Faster auto-scroll speed

    marquee.addEventListener('mousedown', (e) => {
      isDown = true;
      marquee.classList.add('active');
      startX = e.pageX - marquee.offsetLeft;
    });

    marquee.addEventListener('mouseleave', () => {
      isDown = false;
      isHovered = false;
      marquee.classList.remove('active');
    });

    marquee.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    marquee.addEventListener('mouseup', () => {
      isDown = false;
      marquee.classList.remove('active');
    });

    marquee.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - marquee.offsetLeft;
      const walk = (x - startX) * 2;
      marquee.scrollLeft -= walk;
      startX = x;
    });

    function autoScroll() {
      if (!isDown && !isHovered) {
        marquee.scrollLeft += speed;
      }
      
      // Infinite loop bounds check for both auto-scroll and manual drag
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft -= marquee.scrollWidth / 2;
      } else if (marquee.scrollLeft <= 0) {
        marquee.scrollLeft += marquee.scrollWidth / 2;
      }
      
      animationId = requestAnimationFrame(autoScroll);
    }
    autoScroll();
  }

  // ── Hero 3D Code Window ──
  function init3DCodeWindow() {
    const hero = document.getElementById('hero');
    const codeWindow = document.getElementById('code-window');
    if (!hero || !codeWindow) return;

    hero.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 1024) return; // Disabled on mobile and tablet
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      codeWindow.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    hero.addEventListener('mouseleave', () => {
      codeWindow.style.transform = `rotateX(15deg) rotateY(-15deg)`;
    });
  }

  // ── Typewriter Effect ──
  function initTypewriter() {
    const el = document.getElementById('hero-typewriter');
    if (!el) return;

    const words = ['Architect.', 'Engineer.', 'Developer.', 'Designer.', 'Creator.'];
    let wordIndex = 0;
    let charIndex = el.textContent.length;
    let isDeleting = true;
    let typingSpeed = 1000; // Initial pause before deleting first word

    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 120;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before new word
      }

      setTimeout(type, typingSpeed);
    }

    setTimeout(type, typingSpeed);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initActiveLinks();
    initSmoothScroll();
    initLazyImages();
    initMarquee();
    init3DCodeWindow();
    initTypewriter();
  });
})();
