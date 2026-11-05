# PlusSizeBeauty Store — project guide

## Run it on your computer

This project uses plain HTML, CSS, and JavaScript. You do not need to install packages or run a build command.

1. Download the repository as a ZIP and unzip it, or clone it.
2. Open a terminal in the project folder and run:

   ```bash
   python -m http.server 8000
   ```

3. Open <http://localhost:8000/>. Visit `app.html` for the store and social directory and `qr.html` for the QR page.

Use a local web server (not a `file://` URL) to test the app manifest and service worker.

## Publish using GitHub Pages

1. Open this repository's **Settings → Pages** page.
2. Set **Source** to **Deploy from a branch**.
3. Select `main` and `/(root)`, then select **Save**.
4. Wait for the deployment. Copy the URL GitHub shows on the Pages settings page and open it to verify the site.
5. Check the home page and `beauty.html`, `hair-care.html`, `skin-care.html`, `app.html`, and `qr.html`.

## Store and social links

`app.html` links to the public Ulta Beauty and Lane Bryant store homepages. RWJ Store currently uses a web search link because its official store URL has not been provided or verified. The Facebook, Instagram, YouTube, and TikTok buttons search for PlusSizeBeauty on the platforms; replace them with official profile links when you have those URLs.

The store directory discloses that the site may earn commissions from qualifying purchases. The current public retailer links are not confirmed affiliate-tracking links. Retailers handle all product information, pricing, purchases, checkout, shipping, and returns.
