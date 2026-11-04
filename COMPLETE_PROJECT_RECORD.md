# PlusSizeBeauty affiliate storefront

This repository contains a simple static affiliate storefront concept for PlusSizeBeauty. It is built as a static HTML/CSS/JS site and can be served with GitHub Pages or any static-hosting provider. It is not a full backend store or payment platform. It is intentionally an affiliate storefront meant to recommend products using clearly labeled affiliate links.

## Quick start

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Included files

- `index.html` — home page and category overview
- `about.html` — about page
- `disclosure.html` — affiliate disclosure page
- `styles.css` — styling
- `script.js` — product data and filtering logic
- `data/affiliate-products-template.csv` — product intake worksheet for future affiliate products
- `docs/AFFILIATE_LAUNCH_GUIDE.md` — simple guide to launch and review
- `docs/AFFILIATE_READINESS_AUDIT.md` — code audit summary

## Important notes

- This is a static affiliate storefront concept. It does not include payment processing or a checkout cart.
- The current sample affiliate links are placeholders like `https://example.com/...` and must be replaced with verified affiliate URLs before any public launch.
- Add a real affiliate disclosure on every page that contains outbound recommendations, not only on a hidden page.
- GitHub Pages or another static host can publish the site, but the repository alone cannot replace the actual retailer affiliate accounts, product inventory, legal review, or public publishing setup.

## Simple publishing checklist

1. Replace sample affiliate URLs with verified retailer links.
2. Review affiliate-program rules and disclosures.
3. Confirm the site uses approved image rights.
4. Publish to GitHub Pages or another static host.
5. Check the live URL and test each product link.

## Downloadable record

This file is the complete simple record for the project. It is intentionally written in plain language so you can save it as a record and use it during review.
