/* ═══════════════════════════════════════════════════════════
   INFINITE SOUL AWAKENING — components.js
   Injects shared header & footer, wires all interactive
   behaviour. Loaded as <script src="js/components.js">
   at the bottom of <body> on every page.
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. DETERMINE ACTIVE PAGE ───────────────────────────── */
  // Works on GitHub Pages whether root or /repo-name/ base
  const path     = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';

  // Map filenames → nav link hrefs
  const PAGE_MAP = {
    'index.html' : 'index.html',
    ''           : 'index.html',   // root /
    'about.html' : 'about.html',
    'services.html': 'services.html',
    'booking.html' : 'booking.html',
    'policy.html'  : 'policy.html',
  };
  const activePage = PAGE_MAP[filename] || filename;

  /* ── 2. HEADER HTML ─────────────────────────────────────── */
  const HEADER_HTML = `
<!-- Mobile nav overlay -->
<div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Navigation">
  <button class="mobile-close" id="mobileClose" aria-label="Close menu">&times;</button>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="booking.html">Booking</a>
  <a href="#contact">Contact</a>
  <a href="booking.html" class="btn btn-filled" style="font-size:.74rem;padding:13px 28px;">Book a Reading</a>
</div>

<!-- Site header -->
<header id="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="logo">Infinite Soul<span>Awakening</span></a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="booking.html">Booking</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="booking.html" class="btn btn-filled" style="font-size:.72rem;padding:11px 26px;">Book a Reading</a>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

  /* ── 3. FOOTER HTML ─────────────────────────────────────── */
  const FOOTER_HTML = `
<footer id="site-footer">
  <div id="contact" style="position:absolute;top:-80px;"></div>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">Infinite Soul<span>Awakening</span></a>
        <p>Spiritual guidance for those seeking real answers — not illusions. Every session is a sacred, personalised experience.</p>
        <div class="footer-socials" aria-label="Social media links">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Pinterest">&#9419;</a>
          <a href="https://www.instagram.com/infinitesoulawakening" aria-label="Instagram" target="_blank" rel="noopener noreferrer">&#9398;</a>
          <a href="#" aria-label="YouTube">&#9654;</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="booking.html">Book a Reading</a></li>
          <li><a href="#">Blog</a></li>
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
          <li><a href="policy.html#s6">Confidentiality Policy</a></li>
          <li><a href="policy.html#s4">Refund Policy</a></li>
          <li><a href="policy.html#s9">Jurisdiction</a></li>
          <li><a href="mailto:infinitesoulawakening@gmail.com">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Infinite Soul Awakening. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="policy.html">Terms &amp; Conditions</a>
        <a href="policy.html#s6">Privacy Policy</a>
        <a href="policy.html#s4">Refund Policy</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ── 4. INJECT INTO DOM ─────────────────────────────────── */
  // Inject header before <body>'s first child
  document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);

  // Inject footer before </body>
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* ── 5. SET ACTIVE NAV LINK ─────────────────────────────── */
  document.querySelectorAll('.site-nav a, #mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === activePage || (activePage === 'index.html' && href === 'index.html')) {
      // Don't mark the CTA "Book a Reading" button as active
      if (!link.classList.contains('btn')) {
        link.classList.add('active');
      }
    }
  });

  /* ── 6. HEADER SCROLL SHADOW ────────────────────────────── */
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── 7. MOBILE NAV ──────────────────────────────────────── */
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
  // Close when any nav link is clicked (incl. CTA)
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  // Close on Escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  /* ── 8. FADE-UP SCROLL OBSERVER ─────────────────────────── */
  // Runs after a short tick so page-specific elements are painted
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  });

})();
