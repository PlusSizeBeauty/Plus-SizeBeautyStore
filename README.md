# Plus-SizeBeautyStore

Online Store for Beauty Products for Plus-Size Women from head to toe.

## Quick start

1. Download this repo as a ZIP file from GitHub.
2. Unzip it to your device.
3. Open `index.html` in a browser.
4. Open `app.html` for the mobile storefront demo.
5. Open `qr.html` to view the in-repo QR-style page.

## Repository files

- `index.html` — main homepage
- `beauty.html` — beauty page
- `hair-care.html` — hair care page
- `skin-care.html` — skin care page
- `styles.css` — base styling
- `script.js` — translations and behavior
- `app.html` — store app UI
- `app.css` — mobile app styling
- `app.js` — storefront logic
- `manifest.webmanifest` — install metadata
- `service-worker.js` — offline shell
- `qr.html` and `qr.js` — QR display code
- `PROJECT-GUIDE.md` — basic project guide

## Offline and install support

The project includes a web manifest and a service worker for a basic install/offline shell. For it to work correctly, the site should be served over HTTPS or localhost through a local web server.

## Repo note

The design pages still reference external Unsplash images. The app itself uses self-contained colors and emoji to stay within the repository without needing outside image files. The QR page also uses a repo-local, generated pattern.
