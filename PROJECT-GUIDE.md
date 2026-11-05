# PlusSizeBeauty Store — project guide

## Run it on your computer

This project is plain HTML, CSS, and JavaScript. You do not need to install packages or run a build command.

1. Download the repository as a ZIP and unzip it, or clone it.
2. Open a terminal in the project folder and run:

   ```bash
   python -m http.server 8000
   ```

3. Open <http://localhost:8000/>. Visit `app.html` for the storefront demo and `qr.html` for the QR page.

Use a local web server (not a `file://` URL) to test the app manifest and service worker.

## Publish using GitHub Pages

1. Open this repository's **Settings → Pages** page.
2. Set **Source** to **Deploy from a branch**.
3. Select `main` and `/(root)`, then select **Save**.
4. Wait for the deployment. Copy the URL GitHub shows on the Pages settings page and open it to verify the site.
5. Check the home page and each of `beauty.html`, `hair-care.html`, `skin-care.html`, `app.html`, and `qr.html`.

The site uses relative paths so it can be served from a GitHub Pages project URL. The QR destination is based on the URL of the published site; displaying the QR image uses an external QR service and therefore requires internet access.

## Before using it as a real shop

This is a presentation/demo site, not an ecommerce system. The app has sample items and a local-only bag; it does not take payments, submit orders, manage inventory, or send customer information to a business. Add and test a real ecommerce/checkout provider before advertising products for sale.

The showcase uses remotely hosted Unsplash images and Google Fonts. Those elements need internet access and may not appear in offline mode. The service worker covers the local page/app shell, not external content.
