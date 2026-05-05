# Infinite Soul Awakening — Website

A 5-page spiritual guidance website built with HTML5, CSS3, and Vanilla JS.  
Designed for deployment on **GitHub Pages**.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About |
| `services.html` | Services |
| `booking.html` | Booking (with form) |
| `policy.html` | Terms & Conditions |

## File Structure

```
infinite-soul-awakening/
├── index.html
├── about.html
├── services.html
├── booking.html
├── policy.html
├── .nojekyll
├── README.md
├── css/
│   └── global.css        ← Shared variables, header, footer, utilities
├── js/
│   └── components.js     ← Injects header/footer, active nav, scroll, fade-up
└── images/               ← Drop your own images here (currently using Unsplash CDN)
```

## Shared Architecture

- **`css/global.css`** — All shared styles: CSS variables, reset, buttons,
  header, mobile nav, footer, page-hero, fade-up animation, responsive breakpoints.
- **`js/components.js`** — Injects `<header>` and `<footer>` into every page at runtime,
  auto-sets the active nav link by filename, wires the hamburger menu, scroll shadow,
  and IntersectionObserver for fade-up animations.

## GitHub Pages Deployment

1. Push the entire folder to a GitHub repository.
2. Go to **Settings → Pages → Branch → main / root**.
3. Site will be live at `https://yourusername.github.io/repo-name/`

> The `.nojekyll` file tells GitHub Pages not to process files with Jekyll,
> ensuring `/css/` and `/js/` folders are served correctly.

## Booking Form Setup

In `booking.html`, replace:
```js
const SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL';
```
with your deployed **Google Apps Script Web App URL**.

Full setup instructions are in a comment block at the bottom of `booking.html`.

## Customisation

- **Colours / fonts** → edit `:root` variables in `css/global.css`
- **Logo / brand name** → edit the `HEADER_HTML` string in `js/components.js`
- **Footer links / social URLs** → edit the `FOOTER_HTML` string in `js/components.js`
- **Copyright year** → auto-generated from `new Date().getFullYear()`

---
© 2026 Infinite Soul Awakening Wellness
