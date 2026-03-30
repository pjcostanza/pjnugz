# PjNugz — GitHub Pages site

Minimal, earthy Bootstrap storefront + blog for cannabis-adjacent accessories (no cannabis sold). Includes a required 21+ age gate and a contact form with required **name**, **phone**, and **how did you hear about us** fields.

## What's inside

- `index.html` — Home
- `shop.html` — Storefront with placeholder products + payment links
- `blog.html` — Blog index
- `blog/` — Example posts
- `contact.html` — Contact form (client-side validation; plug in a form provider endpoint)
- `assets/css/styles.css` — Theme (earthy palette)
- `assets/js/main.js` — Age gate + shop modal wiring + validation
- `CNAME` — Custom domain placeholder (replace with your domain)

## Edit these first

1. **Custom domain**
   - Replace the contents of `CNAME` with your domain (one line, no `https://`).

2. **Payment links**
   - In `assets/js/main.js` find `payLinks` and replace `#` with your real URLs.

3. **Contact form endpoint**
   - In `contact.html` replace `action="#"` with your Formspree / Getform endpoint.

## Deploy (GitHub Pages)

- Push this folder contents to your repository root.
- In GitHub: **Settings → Pages**
  - Source: `main` (or your chosen branch)
  - Folder: `/ (root)`

