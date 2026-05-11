/* ═══════════════════════════════════════════════════════════════════
   INFINITE SOUL AWAKENING — components.js  v2.0
   Injects header + footer HTML, wires all shared interactions.
   No fetch(). No server deps. GitHub Pages safe.
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. ACTIVE PAGE DETECTION ────────────────────────────────── */
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  const PAGE_MAP = {
    'index.html':    'index.html',
    '':              'index.html',
    'about.html':    'about.html',
    'services.html': 'services.html',
    'booking.html':  'booking.html',
    'policy.html':   'policy.html',
  };
  const activePage = PAGE_MAP[filename] || filename;

  /* ── 2. CURATED IMAGE SET ────────────────────────────────────── */
  // All Unsplash photos verified warm-tone, spiritual aesthetic.
  // Centralised here so image swaps only need one edit.
  const IMG = {
    // Hero & portraits
    hero_split:   'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=.5&fp-y=.25',
    about_hero:   'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1800&q=82&auto=format&fit=crop&crop=focalpoint&fp-y=.35',
    services_hero:'https://images.unsplash.com/photo-1601999109332-542b18dbec72?w=1800&q=82&auto=format&fit=crop',
    booking_hero: 'https://images.unsplash.com/photo-1519821172141-b5d8d7e0fa1b?w=1800&q=82&auto=format&fit=crop',
    policy_hero:  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1800&q=82&auto=format&fit=crop',

    // About section
    about_main:   'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=900&q=84&auto=format&fit=crop',
    about_inset:  'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=500&q=80&auto=format&fit=crop',
    about_why:    'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=900&q=82&auto=format&fit=crop',
    about_accent: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80&auto=format&fit=crop',

    // Services
    svc_tarot:    'https://images.unsplash.com/photo-1601999109332-542b18dbec72?w=900&q=84&auto=format&fit=crop',
    svc_astro:    'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=82&auto=format&fit=crop',
    svc_energy:   'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=82&auto=format&fit=crop',
    svc_ritual:   'https://images.unsplash.com/photo-1508326099804-190c33bd8274?w=900&q=82&auto=format&fit=crop',

    // Booking sidebar
    booking_side: 'https://images.unsplash.com/photo-1519821172141-b5d8d7e0fa1b?w=700&q=80&auto=format&fit=crop',

    // Luxury strip / interlude
    luxury_strip: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=1800&q=80&auto=format&fit=crop',

    // Process steps
    proc_1: 'https://images.unsplash.com/photo-1601999109332-542b18dbec72?w=700&q=78&auto=format&fit=crop',
    proc_2: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=78&auto=format&fit=crop',
    proc_3: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=700&q=78&auto=format&fit=crop',

    // Instagram grid — 6 unique aesthetics
    insta_1: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=400&q=75&auto=format&fit=crop',
    insta_2: 'https://images.unsplash.com/photo-1601999109332-542b18dbec72?w=400&q=75&auto=format&fit=crop',
    insta_3: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=400&q=75&auto=format&fit=crop',
    insta_4: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=75&auto=format&fit=crop',
    insta_5: 'https://images.unsplash.com/photo-1508326099804-190c33bd8274?w=400&q=75&auto=format&fit=crop',
    insta_6: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=75&auto=format&fit=crop',

    // CTA backgrounds
    cta_home:     'https://images.unsplash.com/photo-1508326099804-190c33bd8274?w=1800&q=80&auto=format&fit=crop',
    cta_about:    'https://images.unsplash.com/photo-1519821172141-b5d8d7e0fa1b?w=1800&q=80&auto=format&fit=crop',
    cta_services: 'https://images.unsplash.com/photo-1601999109332-542b18dbec72?w=1800&q=80&auto=format&fit=crop',

    // Testimonial avatars (randomuser — clean portraits)
    avatar_1: 'https://randomuser.me/api/portraits/women/44.jpg',
    avatar_2: 'https://randomuser.me/api/portraits/women/65.jpg',
    avatar_3: 'https://randomuser.me/api/portraits/women/12.jpg',
  };

  /* ── 3. HEADER HTML ──────────────────────────────────────────── */
  const HEADER_HTML = `
<div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Site navigation">
  <button class="mobile-close" id="mobileClose" aria-label="Close menu">&times;</button>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="booking.html">Booking</a>
  <a href="#contact">Contact</a>
  <a href="booking.html" class="btn btn-filled">Book a Reading</a>
</div>

<header id="site-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="logo" aria-label="Infinite Soul Awakening — Home">
        Infinite Soul<span>Awakening</span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="booking.html">Booking</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="booking.html" class="btn btn-filled header-cta">Book a Reading</a>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

  /* ── 4. FOOTER HTML ──────────────────────────────────────────── */
  const year = new Date().getFullYear();
  const FOOTER_HTML = `
<footer id="site-footer" role="contentinfo">
  <div id="contact" aria-hidden="true" style="position:absolute;top:-90px;pointer-events:none;"></div>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">Infinite Soul<span>Awakening</span></a>
        <p>Spiritual guidance for those seeking real answers — not illusions. Every session is a sacred, personalised experience.</p>
        <div class="footer-socials" aria-label="Social media">
          <a href="https://www.instagram.com/infinitesoulawakening" target="_blank" rel="noopener noreferrer" aria-label="Instagram">&#x2665;</a>
          <a href="#" aria-label="Pinterest">&#9419;</a>
          <a href="#" aria-label="YouTube">&#9654;</a>
          <a href="mailto:infinitesoulawakening@gmail.com" aria-label="Email">&#9993;</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="booking.html">Book a Reading</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html#tarot">Tarot Readings</a></li>
          <li><a href="services.html#astrology">Soul Path Astrology</a></li>
          <li><a href="services.html#energy">Energy Healing</a></li>
          <li><a href="services.html#ritual">Sacred Ritual Work</a></li>
          <li><a href="booking.html">Book a Session</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="policy.html">Terms &amp; Conditions</a></li>
          <li><a href="policy.html#s6">Confidentiality</a></li>
          <li><a href="policy.html#s4">Refund Policy</a></li>
          <li><a href="policy.html#s9">Jurisdiction</a></li>
          <li><a href="mailto:infinitesoulawakening@gmail.com">Email Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${year} Infinite Soul Awakening Wellness. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="policy.html">Terms &amp; Conditions</a>
        <a href="policy.html#s6">Privacy</a>
        <a href="policy.html#s4">Refunds</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ── 5. INJECT HEADER + FOOTER ───────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* ── 6. SET ACTIVE NAV LINK ──────────────────────────────────── */
  document.querySelectorAll('.site-nav a, #mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!link.classList.contains('btn') && href === activePage) {
      link.classList.add('active');
    }
  });

  /* ── 7. HEADER SCROLL SHADOW ─────────────────────────────────── */
  const siteHeader = document.getElementById('site-header');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        siteHeader.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ── 8. MOBILE NAV ───────────────────────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobileClose');

  function openNav() {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', openNav);
  mobileClose.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  /* ── 9. FADE-UP INTERSECTION OBSERVER ───────────────────────── */
  requestAnimationFrame(() => {
    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything immediately
      document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  });

  /* ── 10. EXPOSE IMG MAP GLOBALLY ─────────────────────────────── */
  // Pages can reference window.ISA_IMG for consistent image URLs
  window.ISA_IMG = IMG;

})();
