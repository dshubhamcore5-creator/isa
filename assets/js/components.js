/* ═══════════════════════════════════════════════════════════════════
   INFINITE SOUL AWAKENING WELLNESS — components.js  v4.0
   Header + footer injection. No fetch(). GitHub Pages safe.
   Legal compliance update: 2026
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── CONFIG ───────────────────────────────────────────────────── */
  const CONFIG = {
    instaHandle:  '@infinite.soulawakening',
    instaHandle2: '@infinitesoulawakening',
    instaURL:     'https://www.instagram.com/infinite.soulawakening',
    instaURL2:    'https://www.instagram.com/infinitesoulawakening',
    whatsappNum:  '+918451856536',
    whatsappMsg:  encodeURIComponent('Hi! I would like to book a session with Infinite Soul Awakening Wellness.'),
    email:        'help@infinitesoulawakeningwellness.com',
    email1:       'enquiries@infinitesoulawakening.com',
    year:         new Date().getFullYear(),
    gstin:        '27DJKPS9433R1ZZ',
  };
  CONFIG.whatsappURL = `https://wa.me/${CONFIG.whatsappNum}?text=${CONFIG.whatsappMsg}`;

  /* ── ACTIVE PAGE ─────────────────────────────────────────────── */
  const filename = window.location.pathname.split('/').pop() || 'index.html';
  const PAGE_MAP = {
    'index.html': 'index.html', '': 'index.html',
    'about.html': 'about.html', 'services.html': 'services.html',
    'booking.html': 'booking.html', 'policy.html': 'policy.html',
  };
  const activePage = PAGE_MAP[filename] || filename;

  /* ── HEADER HTML ─────────────────────────────────────────────── */
  const HEADER_HTML = `
<div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Site navigation">
  <button class="mobile-close" id="mobileClose" aria-label="Close menu">&times;</button>
  <a href="index.html" class="logo logo-img-wrap" style="margin-bottom:12px;">
    <img src="assets/images/logo.png" alt="Infinite Soul Awakening Wellness" class="logo-img" width="65" height="65" style="filter:none;"/>
    <span class="logo-text-wrap"><span class="logo-text-main">Infinite Soul</span><span class="logo-text-sub">Awakening Wellness</span></span>
  </a>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <a href="policy.html">Policies</a>
  <a href="booking.html">Reserve Your Session</a>
  <a href="${CONFIG.instaURL}" target="_blank" rel="noopener noreferrer">${CONFIG.instaHandle}</a>
  <a href="booking.html" class="btn btn-filled">Reserve Your Session</a>
</div>

<header id="site-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="logo logo-img-wrap" aria-label="Infinite Soul Awakening Wellness — Home">
        <img src="assets/images/logo.png" alt="Infinite Soul Awakening Wellness" class="logo-img" width="65" height="65"/>
        <span class="logo-text-wrap"><span class="logo-text-main">Infinite Soul</span><span class="logo-text-sub">Awakening Wellness</span></span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="policy.html">Policies</a>
        <a href="${CONFIG.instaURL}" class="nav-insta" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${CONFIG.instaHandle}</a>
      </nav>
      <a href="booking.html" class="btn btn-filled header-cta">Reserve Your Session</a>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

  /* ── FOOTER HTML ─────────────────────────────────────────────── */
  const FOOTER_HTML = `
<footer id="site-footer" role="contentinfo">
  <div id="contact" aria-hidden="true" style="position:absolute;top:-90px;pointer-events:none;"></div>
  <div class="container">
    <div class="footer-grid">

      <div class="footer-brand">
        <a href="index.html" class="logo logo-img-wrap footer-logo-wrap" aria-label="Infinite Soul Awakening Wellness — Home">
          <img src="assets/images/logo.png" alt="Infinite Soul Awakening Wellness" class="logo-img footer-logo-img" width="65" height="65"/>
          <span class="logo-text-wrap footer-logo-text"><span class="logo-text-main">Infinite Soul</span><span class="logo-text-sub">Awakening Wellness</span></span>
        </a>
        <p>Personalised guidance and wellness-focused experiences designed to support mindfulness, self-reflection, personal clarity, and intentional living.</p>
        <div class="footer-contact">
          <a href="${CONFIG.whatsappURL}" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.5 2C6.253 2 2 6.253 2 11.5c0 1.82.487 3.53 1.338 5.004L2 22l5.61-1.323A9.454 9.454 0 0 0 11.5 21C16.747 21 21 16.747 21 11.5S16.747 2 11.5 2z" stroke-width="0" fill="currentColor" opacity=".15"/><path d="M11.5 2C6.253 2 2 6.253 2 11.5c0 1.82.487 3.53 1.338 5.004L2 22l5.61-1.323A9.454 9.454 0 0 0 11.5 21C16.747 21 21 16.747 21 11.5S16.747 2 11.5 2z"/></svg>
            WhatsApp Us
          </a>
          <a href="mailto:${CONFIG.email}">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ${CONFIG.email}
          </a>
          <a href="mailto:${CONFIG.email1}">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            ${CONFIG.email1}
          </a>
          <a href="${CONFIG.instaURL}" target="_blank" rel="noopener noreferrer" class="footer-insta-handle">
            <svg viewBox="0 0 24 24" style="width:14px;stroke:currentColor;fill:none;stroke-width:1.5;flex-shrink:0"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
            ${CONFIG.instaHandle}
          </a>
          <a href="${CONFIG.instaURL2}" target="_blank" rel="noopener noreferrer" class="footer-insta-handle">
            <svg viewBox="0 0 24 24" style="width:14px;stroke:currentColor;fill:none;stroke-width:1.5;flex-shrink:0"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
            ${CONFIG.instaHandle2}
          </a>
        </div>
        <div class="footer-socials" aria-label="Social media">
          <a href="${CONFIG.whatsappURL}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="15" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M11.5 2C6.253 2 2 6.253 2 11.5c0 1.82.487 3.53 1.338 5.004L2 22l5.61-1.323A9.454 9.454 0 0 0 11.5 21C16.747 21 21 16.747 21 11.5S16.747 2 11.5 2z"/></svg>
          </a>
          <a href="${CONFIG.instaURL}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">&#9398;</a>
          <a href="mailto:${CONFIG.email}" aria-label="Email">&#9993;</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="booking.html">Reserve a Session</a></li>
          <li><a href="policy.html">Policies</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html#tarot">Intuitive Guidance</a></li>
          <li><a href="services.html#astrology">Energy Wellness</a></li>
          <li><a href="services.html#ritual">Sacred Wellness Practices</a></li>
          <li><a href="services.html#crystals">Crystal Wellness Products</a></li>
          <li><a href="booking.html">Reserve a Session</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="policy.html#privacy">Privacy Policy</a></li>
          <li><a href="policy.html#booking-policy">Booking Policy</a></li>
          <li><a href="policy.html#cancellation">Cancellation Policy</a></li>
          <li><a href="policy.html#refunds">Refund Policy</a></li>
          <li><a href="policy.html#disclaimer">Disclaimer</a></li>
          <li><a href="policy.html">Terms &amp; Conditions</a></li>
        </ul>
      </div>

    </div>
  </div>

  <div class="footer-disclaimer">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:32px;align-items:start;flex-wrap:wrap;" class="footer-disclaimer-grid">
        <div>
          <p style="font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:10px;font-weight:500;">Disclaimer</p>
          <p>All services are intended for personal wellness, mindfulness, self-reflection, and spiritual exploration purposes only. No guaranteed outcomes or specific results are promised. Services are not intended to diagnose, treat, cure, or replace medical, psychological, legal, or financial advice or treatment. Individual experiences may vary.</p>
        </div>
        <div>
          <p style="font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:10px;font-weight:500;">Privacy &amp; Data Protection</p>
          <p>Information voluntarily shared during booking and communication is handled respectfully and privately in accordance with applicable privacy practices and the Digital Personal Data Protection (DPDP) Act, 2023.</p>
        </div>
        <div>
          <p style="font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:10px;font-weight:500;">Session Availability</p>
          <p>All services are offered exclusively through online communication methods such as chat, voice notes, written guidance, or scheduled audio calls. In-person sessions and video call sessions are not provided.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="footer-bottom">
      <span>&copy; ${CONFIG.year} Infinite Soul Awakening Wellness. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="policy.html">Terms &amp; Conditions</a>
        <a href="policy.html#privacy">Privacy</a>
        <a href="policy.html#refunds">Refunds</a>
      </div>
    </div>
    <div style="text-align:center;padding:14px 0 8px;font-size:.72rem;color:rgba(255,255,255,.3);border-top:1px solid rgba(255,255,255,.06);margin-top:8px;display:flex;align-items:center;justify-content:center;gap:28px;flex-wrap:wrap;">
      <span>Palghar, Maharashtra, India</span>
      <span>Registration Number: ${CONFIG.gstin}</span>
      <span>Trade Name: Infinite Soul Awakening Wellness</span>
    </div>
  </div>
</footer>`;

  /* ── INJECT ──────────────────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', HEADER_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  /* ── ACTIVE NAV ──────────────────────────────────────────────── */
  document.querySelectorAll('.site-nav a, #mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (!link.classList.contains('btn') && !link.classList.contains('nav-insta') &&
        !link.href.includes('instagram.com') && !link.href.includes('wa.me') &&
        href === activePage) {
      link.classList.add('active');
    }
  });

  /* ── SCROLL SHADOW ───────────────────────────────────────────── */
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

  /* ── MOBILE NAV ──────────────────────────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileNav   = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobileClose');
  const openNav  = () => { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; hamburger.setAttribute('aria-expanded','true'); };
  const closeNav = () => { mobileNav.classList.remove('open'); document.body.style.overflow = ''; hamburger.setAttribute('aria-expanded','false'); };
  hamburger.addEventListener('click', openNav);
  mobileClose.addEventListener('click', closeNav);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

  /* ── FADE-UP OBSERVER ────────────────────────────────────────── */
  requestAnimationFrame(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
  });

  /* ── EXPOSE CONFIG GLOBALLY ──────────────────────────────────── */
  window.ISA = CONFIG;

})();
