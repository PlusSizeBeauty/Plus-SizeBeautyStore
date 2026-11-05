# Plus-SizeBeautyStore

A static, responsive storefront concept for PlusSizeBeauty, featuring fashion, beauty, hair-care, and skin-care pages plus a browser-only shopping demo.

## Run locally

There is no build step or dependency installation. Serve the repository root with Python:

```bash
python -m http.server 8000
```

Open <http://localhost:8000/>. The additional pages are `beauty.html`, `hair-care.html`, `skin-care.html`, `app.html`, and `qr.html`. Serving the files (rather than opening them directly) lets the browser use the service worker and install metadata on localhost.

## Publish with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`, then save.
4. Wait for the Pages deployment to complete; GitHub displays the published URL in the Pages settings.
5. Visit that URL and check the home, category, app, and QR pages.

The repository is configured to use relative paths for GitHub Pages project-site hosting. The QR page builds its destination from the published page URL and requests a QR image from an external QR service, so generating/scanning the image requires internet access.

## What the demo does—and does not do

The app includes sample products, search, category filters, favorites, and a shopping bag stored in the visitor's browser. It does **not** have a real checkout, payment processing, inventory, order management, or a backend. Do not accept orders or payments through this demo.

The app page includes a web manifest and registers a service worker for a basic offline app shell. Category-page photography and the display fonts are loaded from external Unsplash and Google Fonts URLs, so those assets need internet access and are not part of the offline shell.

## Project files

- `index.html` — homepage
- `beauty.html`, `hair-care.html`, `skin-care.html` — category showcase pages
- `styles.css`, `script.js` — shared design and language toggle
- `app.html`, `app.css`, `app.js` — sample mobile-friendly storefront
- `manifest.webmanifest`, `service-worker.js`, `icon.svg` — app metadata, offline shell, and icon
- `qr.html`, `qr.js` — QR page and destination/link behavior
- `PROJECT-GUIDE.md` — plain-language setup and publish checklist
