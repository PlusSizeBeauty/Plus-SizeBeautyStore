# PlusSizeBeauty Store — project guide

## Run it on your computer

This project uses plain HTML, CSS, and JavaScript. You do not need to install packages or run a build command.

1. Download the repository as a ZIP and unzip it, or clone it.
2. Open a terminal in the project folder and run:

   ```bash
   python -m http.server 8000
   ```

3. Open <http://localhost:8000/>. Visit `app.html` for the store directory and `qr.html` for the QR page.

Use a local web server (not a `file://` URL) to test the app manifest and service worker.

## Publish using GitHub Pages

1. Open this repository's **Settings → Pages** page.
2. Set **Source** to **Deploy from a branch**.
3. Select `main` and `/(root)`, then select **Save**.
4. Wait for the deployment. Copy the URL GitHub shows on the Pages settings page and open it to verify the site.
5. Check the home page and `beauty.html`, `hair-care.html`, `skin-care.html`, `app.html`, and `qr.html`.

The site uses relative paths so it can be served from a GitHub Pages project URL. The QR image comes from an external service and requires an internet connection.

## Retailer buttons and affiliate links

`app.html` currently has buttons to the public Ulta Beauty and Lane Bryant homepages. Those public links are not confirmed affiliate-tracking URLs and may not earn commissions. After joining and being approved by an affiliate program, replace each button's `href` with the exact retailer deep link provided by that program. Test the final link and retain a clear disclosure near the links.

Levanta is an affiliate platform rather than a shopper-facing store link. “RWJ” is ambiguous, so it has no button until its exact retailer name and URL are confirmed. Do not invent a retailer URL or affiliate tracking code.

The current directory discloses that the site may earn commissions from qualifying purchases. The retailer handles all product information, pricing, availability, checkout, shipping, and returns.
