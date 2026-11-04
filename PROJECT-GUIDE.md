# PlusSizeBeauty Store

A simple, mobile-friendly storefront project with a plain-language setup guide. Everything in this repo is static and can be downloaded as a ZIP from GitHub for personal records.

## Included files

- `index.html` — home page
- `beauty.html` — beauty category page
- `hair-care.html` — hair care category page
- `skin-care.html` — skincare category page
- `styles.css` — shared site styling
- `script.js` — language toggle and translation behavior
- `app.html` — mobile storefront app interface
- `app.css` — mobile app styling
- `app.js` — demo shopping app logic with favorites and bag
- `manifest.webmanifest` — install metadata
- `service-worker.js` — offline caching shell for installable behavior
- `qr.html` — QR display page
- `qr.js` — QR-style generator logic
- `README.md` — project overview

## How to use locally

1. Download this repository as a ZIP from GitHub.
2. Unzip the folder and open `index.html` in a browser.
3. Open `app.html` to use the mobile store interface.
4. Open `qr.html` to view the QR-style code.
5. To test the offline/install behavior, serve the repo through a local web server instead of opening files directly.

## Local web server example

If you have Python installed, run this in the project folder:

```bash
python -m http.server 8000
```

Then open:

- http://localhost:8000/index.html
- http://localhost:8000/app.html
- http://localhost:8000/qr.html

## GitHub Pages publish

This repository does not currently have GitHub Pages enabled. To publish it:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select the `main` branch and the root folder.
5. Save the settings.
6. After deployment, update the destination URL in `qr.js` to your published HTTPS site and commit it.

## Store app behavior

- Search products by name or category.
- Filter by category.
- Save favorites in browser storage.
- Add items to a bag and view the total.
- Use the app on mobile screens.

## Download and archive

Use the GitHub **Download ZIP** button to keep a copy of the repository on your device. That ZIP is the project record for the files in this repo.
