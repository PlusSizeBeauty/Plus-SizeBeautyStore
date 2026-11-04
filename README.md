# PlusSizeBeauty Store

A small, mobile-friendly fashion and beauty storefront. The site is plain HTML, CSS, and JavaScript—there is no build step, paid service, or account required to run it locally.

## Start here

1. Open the public repository: https://github.com/PlusSizeBeauty/Plus-SizeBeautyStore
2. Choose **Code → Download ZIP** to save a complete copy of the repository to your device. GitHub creates the ZIP directly from the files in this repo.
3. Unzip it, then open `index.html` in a browser. The main pages are Home/Fashion, Beauty, Hair Care, Skin Care, and the interactive Store app at `app.html`.
4. On a phone, open the deployed site URL in the browser and use **Add to Home Screen** (iPhone) or **Install app** (Android/Chrome) when available. The included manifest and service worker provide the install/offline pieces; a secure HTTPS origin is required for service workers.

## What is included

- `index.html`, `beauty.html`, `hair-care.html`, and `skin-care.html`: the existing editorial/category pages.
- `app.html`, `app.css`, and `app.js`: a mobile-friendly demo storefront with search, category filters, favorites, and a shopping bag saved in that browser. It is a front-end demonstration; it does not take payments or place real orders.
- `manifest.webmanifest` and `service-worker.js`: install metadata and offline caching for the local site files.
- `qr.html` and `qr.js`: a locally generated, scannable QR code. It currently opens this public GitHub repository, because GitHub Pages is not enabled for this repository yet. After publishing the site, update the destination in `qr.js` to the live HTTPS website address to make the code open the actual store.
- `PROJECT-GUIDE.md`: a plain-language project record and start-to-finish guide that can be downloaded from GitHub using **Raw → Save**.

## Publish the website on GitHub Pages

The repository currently has GitHub Pages disabled. To publish it:

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`, then save.
4. Wait for GitHub Pages to finish deploying. The Pages settings will show the live address.
5. Open that HTTPS address on a phone and test each page, the app, and installation. The service worker only works on HTTPS (or localhost).
6. To make the QR open the published website, change `QR_DESTINATION` in `qr.js` to the Pages address and commit the change. Scan `qr.html` with a phone camera to check it.

I cannot enable Pages from the repository file-editing tools used here; that setting must be turned on in GitHub Settings by a repository administrator. Until then, the QR intentionally leads to the public repository, not a live hosted site.

## Verify the app

- Open `app.html`, search for a product, filter by category, favorite an item, and add/remove items in the bag.
- Refresh the page to confirm the bag and favorites remain saved in local browser storage.
- Open `qr.html`; the QR is drawn by code in `qr.js` without an external QR service. Download the SVG or scan it with a phone camera.
- For install/offline testing, publish on HTTPS (or run a local web server); opening files via `file://` does not allow service-worker installation.

## Image note

The existing editorial pages still reference images hosted by Unsplash, so those particular photographs are not stored in this repository and need an internet connection. The new app, QR generator, guide, and offline app shell are included in the repository. No paid image or QR service is required by the new app/QR feature.

## Project records

Download the complete repository at **Code → Download ZIP**. Download just the written record by opening [`PROJECT-GUIDE.md`](PROJECT-GUIDE.md) and choosing **Raw**, then save the page. All implementation and documentation changes are committed in this repository.
