# Affiliate site: launch guide in plain language

## Short answer

The website files can live in this GitHub repository and GitHub Pages can host a static affiliate site. The code does not need a store database or checkout: people click a recommendation and buy on the retailer’s site. The retailer handles the purchase.

This repo is **not ready to earn affiliate income yet**. It has no valid affiliate product links, and the affiliate programs have not been confirmed as approved for this publisher. The site should show an honest “recommendations being prepared” message until real offers are added.

## 1. Apply to the affiliate programs

Use `docs/AFFILIATE_PARTNERS_AND_MEDIA.md` as the list. Apply on each official program page. Approval is not automatic. Each program will decide whether to accept the site and may have its own rules for websites, YouTube, Instagram, Facebook, TikTok, paid ads, and link-in-bio pages.

The listed names mean:

- Ulta Beauty: apply using its official affiliate instructions.
- Sephora: apply using its official affiliate instructions.
- Levanta: a network/platform; check which brands/campaigns are available after joining.
- Kohl’s: confirm the current official program/network before applying.
- Sally Beauty: apply using its official affiliate instructions.
- Lane Bryant: confirm the official current application route before applying.
- RWJ: unclear. Identify the exact company/program before using it.

A signup link is not a referral link. Only the approved affiliate account can provide tracked product URLs.

## 2. Prepare real recommendation information

For each product you want to show, collect:

1. Product name and category.
2. Retailer and affiliate program.
3. The exact affiliate link from your approved account.
4. Accurate product description (do not make up ingredients, results, or claims).
5. An image you are allowed to use, with useful alt text.
6. Optional price only if allowed and kept current; safest simple default is no price.
7. Date you checked the product and link.

Fill in `data/affiliate-products-template.csv` as a worksheet. Then add approved products to the `products` array in `script.js`. The current array is empty on purpose. The website will not show fake sample listings.

Example structure (replace every value with verified information; this is documentation only, not a real listing):

```js
{
  name: "REAL PRODUCT NAME",
  category: "fashion", // fashion, beauty, hair-care, or skin-care
  categoryLabel: "Dresses",
  retailer: "REAL RETAILER",
  description: "Verified factual description.",
  affiliateUrl: "https://REAL-APPROVED-AFFILIATE-URL",
  image: "https://APPROVED-IMAGE-URL",
  imageAlt: "Accurate description of the product image"
}
```

Never put affiliate login credentials or private tracking tokens in the repository. Do not scrape retailer sites unless their program permits it.

## 3. Check how the site works on your computer

Install Python if needed, download/clone the repository, open a terminal in the project folder, and run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/` in your browser. Click the menu, category filters, About, and disclosure links. With no approved products entered, the empty message is expected. Check on a phone-sized screen too.

## 4. Set up GitHub Pages

1. Commit the reviewed website files to the branch you intend to publish. The simplest setup is publishing `main` after merging reviewed work from the feature branch.
2. On GitHub, open the repository → **Settings** → **Pages**.
3. Under the build/deployment source, choose **Deploy from a branch** if available; select `main` and the `/ (root)` folder, then save. If GitHub recommends/configures a GitHub Actions workflow instead, use the Pages workflow and grant it the needed repository permissions.
4. Wait for the Pages deployment/check to finish successfully. Do not assume it is live just because files exist in GitHub.
5. Copy the exact URL GitHub shows in **Settings → Pages**. For a project site it often looks like `https://OWNER.github.io/REPOSITORY/`, but use the value GitHub displays.
6. Open that URL in a private/incognito browser. Test every internal link, image, layout, and outbound link. Confirm HTTPS.
7. Optional custom domain: only use a domain you own/control. Configure DNS as GitHub instructs, then verify HTTPS.

## 5. Add social media links and promotion

The requested channels are YouTube, Instagram, Facebook, TikTok, and Meta. Meta is the company/platform for Facebook and Instagram. No actual handles/URLs have been supplied, so none are linked in the site yet.

When accounts exist, provide the real public profile URLs. Check each affiliate program allows the planned channel and promotional method before posting links. Add a visible disclosure in videos/posts and near site recommendations as required by the program and applicable rules. For paid/boosted posts, confirm paid promotion is permitted first.

## 6. Check and update links regularly

Before adding a product, open the affiliate link and confirm that it reaches the correct product and variant. Use the affiliate program’s allowed process to verify tracking. Affiliate links can expire or products can be discontinued, so check them regularly and update/remove broken recommendations. A normal browser link check cannot prove the affiliate network will credit a sale; only the network’s reporting or approved test method can confirm that.

## 7. Final publish checklist

Only call the site ready after all are true:

- [ ] Affiliate accounts have approved the publisher/site and planned social channels.
- [ ] Every public recommendation has accurate product information and a verified affiliate URL.
- [ ] Images are approved for use.
- [ ] No fictional products, prices, retailers, or placeholder links are displayed.
- [ ] The affiliate disclosure is visible near links and the full disclosure page is linked.
- [ ] Contact placeholder has been replaced with a monitored contact method or removed.
- [ ] Navigation, filters, keyboard access, mobile view, and page links were tested in a browser.
- [ ] GitHub Pages deployment succeeds and the exact live URL is checked.
- [ ] Owner has reviewed and approved the public site.

Until the affiliate accounts and product links are supplied, GitHub Pages can host the site but it cannot produce affiliate commissions. The current empty recommendation area is honest and safe, not a failure.
