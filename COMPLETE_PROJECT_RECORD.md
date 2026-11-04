# PlusSizeBeauty affiliate site — simple project record

## What the site is

A static website that introduces fashion, beauty, hair-care, and skin-care recommendations for plus-size women. It is intended to earn income through retailer affiliate links only. It does not sell items, take payments, store customer information, or manage shipping and returns.

## Files

- `index.html` — home page, categories, disclosure notice, and recommendation area.
- `about.html` — plain-language description of the site.
- `disclosure.html` — affiliate disclosure draft.
- `styles.css` — responsive visual design.
- `script.js` — category filtering and product card rendering.
- `data/affiliate-products.json` — public product list. Currently empty until real approved offers are provided.
- `data/affiliate-products-template.csv` — worksheet for collecting product and link information.
- `docs/AFFILIATE_LAUNCH_GUIDE.md` — setup and publishing steps.
- `docs/AFFILIATE_READINESS_AUDIT.md` — current review and blockers.

## How to view it

From the repo folder, run `python3 -m http.server 8000`, then open `http://localhost:8000/`.

## Affiliate partners and social media

Potential programs/platforms identified: Ulta Beauty, Sephora, Levanta, Kohl’s, Sally Beauty, and Lane Bryant. “RWJ” is unclear and has not been configured. Social channels named for future promotion are YouTube, Instagram, Facebook/Meta, and TikTok. The site does not yet have verified referral links or account/profile URLs for these channels.

An application page is not an affiliate referral link. Do not claim partnership or add product cards until the program has approved the publisher and supplied valid links. Do not publish sample products or placeholder offers.

## What still needs to happen before public launch

1. Owner applies to the actual affiliate programs and gets approved.
2. Owner supplies a verified product name, retailer, product page/deep link with affiliate tracking, accurate description, approved image or image rights, category, and link-check date for every item.
3. Clarify what “RWJ” means.
4. Review the disclosure and program terms for each network and the target audience/location.
5. Replace the example contact email with a monitored address.
6. Verify all menu destinations, affiliate links, mobile layout, and keyboard accessibility in a browser.
7. Enable GitHub Pages on the desired branch and verify the actual public URL/deployment.
8. Owner approves publication.

## Current readiness

The site source has a functioning category filter and safe empty state, but it contains **no real affiliate offers**. Affiliate links, program approval, user social profile links, and GitHub Pages deployment have not been independently verified. Therefore it is not ready to launch as a monetized affiliate storefront yet.
