# Plus-SizeBeautyStore

A static, responsive PlusSizeBeauty storefront and retailer directory for beauty, hair care, skin care, and plus-size fashion. Visitors browse selected retailer sites; purchases and checkout happen on the retailer's website.

## Run locally

There is no build step or dependency installation. Serve the repository root with Python:

```bash
python -m http.server 8000
```

Open <http://localhost:8000/>. The additional pages are `beauty.html`, `hair-care.html`, `skin-care.html`, `app.html`, and `qr.html`. Serving the files rather than opening them directly lets the browser use the service worker and install metadata on localhost.

## Publish with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose branch `main` and folder `/(root)`, then save.
4. Wait for the Pages deployment to complete; GitHub displays the published URL in Pages settings.
5. Visit that URL and test the home, category, store-directory, and QR pages.

The site uses relative paths for GitHub Pages project-site hosting. The QR page builds its destination from the page URL and requests the QR image from an external service, so generating/scanning the image requires internet access.

## Retailer buttons and affiliate links

The store directory currently links to the public homepages of Ulta Beauty (`https://www.ulta.com/`) and Lane Bryant (`https://www.lanebryant.com/`). These are ordinary retailer links, not confirmed affiliate-tracking URLs, and do not guarantee commissions. Replace each href in `app.html` with the exact destination URL issued by your affiliate program once approved; do not make up tracking parameters. Check that the link preserves the program's tracking and disclose affiliate relationships clearly.

Levanta is an affiliate platform, not a shopper-facing retailer destination. RWJ could not be identified unambiguously from the initials alone, so no RWJ link is included. Add a verified public store URL or an approved affiliate deep link before publishing a button for it.

The page discloses that PlusSizeBeauty may earn commissions from qualifying affiliate purchases. Retailers handle product details, pricing, availability, shipping, returns, and checkout.

## Project files

- `index.html` — homepage
- `beauty.html`, `hair-care.html`, `skin-care.html` — category showcase pages
- `styles.css`, `script.js` — shared design and language toggle
- `app.html`, `app.css`, `app.js` — retailer directory and app-shell registration
- `manifest.webmanifest`, `service-worker.js`, `icon.svg` — app metadata, offline shell, and icon
- `qr.html`, `qr.js` — QR page and destination/link behavior
- `PROJECT-GUIDE.md` — plain-language setup and publish checklist
