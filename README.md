# Plus-SizeBeautyStore

A static, responsive PlusSizeBeauty retailer directory for beauty, hair care, skin care, plus-size fashion, and social links. Visitors browse selected retailer sites; purchases and checkout happen on the retailer's website.

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

## Store and social links

The app directory links to Ulta Beauty (`https://www.ulta.com/`) and Lane Bryant (`https://www.lanebryant.com/`). These are public store homepages, not confirmed affiliate-tracking links. Replace them with approved affiliate deep links if you later obtain them.

RWJ Store is shown by name and currently has a web search link, not a verified official store URL. Facebook, Instagram, YouTube, and TikTok buttons search for PlusSizeBeauty on those platforms; they are not confirmed social-profile links. Replace each search URL with the correct official destination when the store and brand accounts are known. Do not invent account URLs or affiliate tracking parameters.

The page discloses that PlusSizeBeauty may earn commissions from qualifying affiliate purchases. Retailers handle product information, pricing, availability, checkout, shipping, and returns.

## Project files

- `index.html` — homepage
- `beauty.html`, `hair-care.html`, `skin-care.html` — category showcase pages
- `styles.css`, `script.js` — shared design and language toggle
- `app.html`, `app.css`, `app.js` — retailer/social directory and app-shell registration
- `manifest.webmanifest`, `service-worker.js`, `icon.svg` — app metadata, offline shell, and icon
- `qr.html`, `qr.js` — QR page and destination/link behavior
- `PROJECT-GUIDE.md` — plain-language setup and publish checklist
