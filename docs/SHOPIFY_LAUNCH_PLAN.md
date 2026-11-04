# Shopify store: start-to-finish checklist

This is the practical setup and launch guide for PlusSizeBeauty. It is written for the reported Shopify state, but Shopify Admin must be checked as you go because settings may have changed. The repository is a static design concept; Shopify is the actual store, catalog, admin, cart, checkout, and order system.

> **Important:** You can prepare the store without inventing anything. You cannot responsibly sell until real product information, business details, payment/shipping/tax choices, and policies are supplied and checked. Keep the storefront password on until the final launch steps.

## What the store report says is already in place

- Four department collections: Fashion, Beauty, Hair Care, Skin Care.
- Fifteen category collections: Dresses, Tops, Jeans, Activewear; Face Makeup, Eye Makeup, Lip Makeup, Makeup Tools; Conditioner, Shampoo, Hair Treatments; Cleansers, Moisturizers, Serums, Skin Treatments.
- All collections were reported empty (0 products).
- Horizon theme is live; password protection is on.
- Store display name was reported as “My Store.”
- About Us is missing. Main menu was Home, Catalog, Contact; footer menu Search, Your Privacy Choices.
- Products are 0. Spanish/French, payments, shipping, taxes, policies, and business contact settings were not confirmed.

**Treat these as a prior report, not a live check. Verify them in Admin. Do not recreate existing collections.**

## Before you start: gather the owner-only information

Have these items ready. Do not paste passwords, payment credentials, or secret keys into chat or this repository.

### Product information (one row/product in `data/products-template.csv`)

- Accurate product title and description; vendor/brand; product type.
- Real price and store currency; SKU and barcode if used.
- Actual inventory quantity and whether inventory is tracked.
- Product photos you own or are licensed to use, plus useful alt text.
- Correct collection(s) and tags.
- Real variants only: apparel sizes/colors; cosmetic shades or other actual options; variant-specific price/SKU/stock if they differ.
- Product ingredients, warnings, sizing, materials, claims, certifications, and shipping weight only when verified and applicable.

The CSV in this repo is an **intake worksheet**, not Shopify’s import format. Use Shopify’s current product CSV template for import; field names and variant rows must match that template. For a small catalog, entering products manually is usually easiest.

### Store and launch decisions

- Legal business name, business address, customer support email and phone.
- Payment provider setup, completed privately in Shopify.
- Countries/regions to sell and ship to; shipping origin, carriers/rates, fulfillment method, delivery promises.
- Tax registrations and decisions appropriate to your business and jurisdictions.
- Return/refund, privacy, terms, and shipping policy wording reviewed for your business and location.
- Domain you own/control (optional; Shopify’s `myshopify.com` domain can be used to preview).
- Human reviewers for Spanish and French if those languages will be offered.
- Final approval to publish the theme and remove storefront password protection.

Shopify settings and legal/tax requirements vary by location and account. Use qualified local advice where needed; do not copy another store’s legal text or guess rates/rules.

## Phase 1 — Verify the current store and protect it

1. Sign in to Shopify Admin for the correct store.
2. Open **Products > Collections**. Confirm that the 19 expected collections exist. Check their titles and collection type/conditions; do not create duplicates.
3. Open **Products** and confirm the current product count. If products have appeared, review them rather than importing duplicates.
4. Open **Online Store > Themes**. Confirm Horizon is still live. Leave the password protection enabled.
5. Open **Content > Menus** (in some Admin layouts this may appear under **Online Store > Navigation**). Record the current Main menu and Footer menu before editing.
6. Check **Settings > Store details** for the display name and store contact details. Do not change legal details as a side effect.

**Done when:** the current collection, product, menu, theme, store-name, and password states are noted. If state differs from the report, use Admin’s current saved state and update this checklist.

## Phase 2 — Set the store display name and About page

### Change the display name

1. In Admin, open **Settings > Store details**.
2. Find the store name/display name field, enter **PlusSizeBeauty**, and save.
3. Reopen or refresh the setting and verify the saved value.
4. Do not replace the legal business name or legal address unless the owner has provided verified details and intends to change them.

### Create About Us

1. Open **Online Store > Pages** (some layouts expose pages under **Content > Pages**).
2. Select **Add page**.
3. Title it **About Us**. Use only this factual starter copy, editing only with verified facts:

   > PlusSizeBeauty is an online store focused on fashion and beauty for plus-size women.

4. Set visibility to hidden/draft while reviewing, if that option is available. Save.
5. Preview the page. Publish/enable its visibility only after the owner approves the wording.

**Done when:** the display name is saved and the About page exists and its visibility is known.

## Phase 3 — Connect the navigation to real Shopify destinations

1. Open **Content > Menus** or **Online Store > Navigation**.
2. Edit the existing **Main menu**; do not make a duplicate.
3. Add or correct these links:
   - Home → Home page
   - Fashion → the existing Fashion collection
   - Beauty → the existing Beauty collection
   - Hair Care → the existing Hair Care collection
   - Skin Care → the existing Skin Care collection
   - About Us → the About Us page
   - Contact → the existing Contact page
4. If the menu editor supports nesting, add the existing subcategory collections under their matching department. Use the actual collection destination selected from Shopify’s link picker, not guessed URLs.
5. Edit the existing **Footer menu**. Keep Search if useful; add Contact, About Us, and only policy/pages that actually exist and have been reviewed. Remove obsolete or broken items. Keep “Your Privacy Choices” only if it is required and configured for the store’s privacy setup.
6. Save each menu. Open the storefront preview and click every link, including nested links, on desktop and mobile.

**Done when:** all menu destinations resolve to the intended existing collection/page and no placeholder/dead links remain.

## Phase 4 — Style the Horizon theme safely

1. In **Online Store > Themes**, use the theme action menu to duplicate Horizon (wording may be **Duplicate** or **Create duplicate**). Make design changes in the unpublished copy, not the live theme.
2. Open **Customize** on the duplicate. Select the home page template.
3. Arrange the home page in this order:
   - Brand/hero section with clear PlusSizeBeauty positioning.
   - Four visible department links: Fashion, Beauty, Hair Care, Skin Care.
   - Featured collections or products only if there are real, approved products. With an empty catalog, show category navigation and do not fabricate products.
   - Footer with working Contact/About/policy links.
4. Use the repository’s rose/pink palette and elegant serif heading style as inspiration, while preserving readable contrast and Horizon’s responsive behavior. Use only approved images; set meaningful alt text. If approved images are not ready, use the theme’s neutral placeholder or omit the image rather than presenting unlicensed stock as a real product.
5. Keep theme search and cart controls if they are functional. Remove or disable any element that looks clickable but has no destination/action.
6. Preview the duplicate theme. Check desktop and mobile widths, keyboard focus, text contrast/readability, menu behavior, collection links, empty collection messaging, and footer links.
7. Save the draft theme. **Do not publish it yet.** Record the preview link and confirm Horizon remains the live theme.

**Done when:** the unpublished theme preview passes the checks and the owner has reviewed it.

## Phase 5 — Enter real products into the existing collections

Do not create fake sample listings. First fill the worksheet in `data/products-template.csv` with verified facts. Leave unknown fields blank rather than guessing.

### Simple method: add products one at a time

For each real product:

1. In Admin, open **Products > Add product**.
2. Enter the verified title and description.
3. Add the approved images and useful alt text.
4. Set the real price and applicable tax setting based on the owner’s verified tax decisions.
5. Add SKU/barcode if actually used; set the verified vendor and product type.
6. Add only real variants. Enter the actual variant price/SKU/inventory as applicable. Do not add generic sizes or shades that the product does not have.
7. Configure inventory tracking and quantity from the owner’s stock count. Select the correct sales channels/status; keep as Draft until reviewed.
8. Assign the product to its existing department and relevant existing subcategory collection(s). Check tags and product organization.
9. Save. Preview the product page and verify each variant, image, price, inventory behavior, and collection assignment.
10. After review, change product status to Active only when the owner intends it to be purchasable.

### Bulk method: Shopify product CSV

1. In **Products**, use the current Shopify **Export**/CSV template or Shopify’s current product CSV documentation/template. Do not directly import this repository’s intake worksheet.
2. Map and validate every row against Shopify’s template, including variant rows and image URLs.
3. Export/backup existing products first if any now exist.
4. Import a small test file or a few products first. Review the import result and product records before importing the rest.
5. Verify collection membership—CSV import behavior may not assign collections the way you expect. Use Admin’s collection/product organization or collection conditions, then inspect each collection.
6. Keep products Draft until content, price, images, inventory, and variants are checked.

**Done when:** every intended listing is authentic, accurate, reviewed, assigned correctly, and has an intentional Draft/Active status. Product count and each collection’s contents match the owner’s inventory.

## Phase 6 — Languages (after English content is approved)

1. Keep English as the default until English theme text, pages, collection copy, and product content are final.
2. In Admin, find **Settings > Languages** or the store’s language/translation area and review Shopify’s currently available translation workflow/apps (for example, Shopify Translate & Adapt if available for the store).
3. Add Spanish and French only if the workflow covers the storefront and product/collection content—not just the theme buttons.
4. Have a fluent human reviewer edit/review translations for product meaning, size/shade names, policies, and customer-facing instructions. Do not publish unreviewed machine translations.
5. Preview each language and test language switching, navigation, product pages, cart, and the checkout language options available for the store.
6. Add Brazilian Portuguese later only if customer demand, fulfillment, and support justify maintaining it.

**Done when:** the owner confirms every translated part and language switching behaves correctly. Until then, leave additional languages unpublished/unavailable.

## Phase 7 — Owner completes business, payment, shipping, tax, and policy settings

These settings depend on facts only the business owner can verify. The assistant or guide must not fill them with guesses.

1. **Contact:** open **Settings > Store details** and enter verified customer-facing contact details. Confirm the Contact page shows the correct channel.
2. **Payments:** open **Settings > Payments**. Choose and activate the intended provider only after the owner completes provider onboarding and authorizes it. Never paste credentials into chat or GitHub.
3. **Shipping:** open **Settings > Shipping and delivery**. Set shipping origin, destinations, package/fulfillment details, and rates from the actual business plan. Test eligible addresses and rates.
4. **Taxes/duties:** open **Settings > Taxes and duties**. The owner verifies registrations and obligations for each selling region; consult a qualified tax professional as needed. Do not infer tax settings from the store currency or domain.
5. **Policies:** open **Settings > Policies** (or the current policy area). Draft/review refund, privacy, terms of service, and shipping policies for the actual business and applicable locations. Add actual contact/return details. Do not publish template text without review.
6. **Checkout:** open **Settings > Checkout**. Review customer contact method, checkout fields, marketing consent, and order processing options. Keep only choices the owner intends.
7. **Domain:** open **Settings > Domains**. Connect a domain the owner controls, if desired; follow Shopify’s domain connection instructions and verify DNS/SSL before using it as primary. A custom domain is optional; do not buy or change one without owner approval.

**Done when:** the owner has saved and verified each setting, and test checkout shows the expected currency, destination, shipping, tax, and policy links.

## Phase 8 — Final test and publish

Do this only after real products, owner settings, and draft theme are reviewed.

### Test before launch

- Main and footer menus work; all collection links go to the right collections.
- Each department and subcategory displays the intended products; no incorrect/empty placeholders are presented as merchandise.
- Product titles, descriptions, images/alt text, prices, variants, stock, and availability are correct.
- Search returns expected products; cart add/update/remove behavior works.
- Test checkout using Shopify’s available test mode/test provider where possible. Do not charge a real payment method or place an unintended order.
- Shipping/tax estimates match owner-verified rules for representative destinations.
- Contact, About, policy, and privacy links work and show approved content.
- Mobile layout, keyboard access, focus visibility, labels, and contrast are acceptable.
- Spanish/French only appear if reviewed and ready.
- Password protection is still on during testing; order notifications and fulfillment workflow are understood.

### Publish the theme

1. In **Online Store > Themes**, open the reviewed draft/duplicate Horizon theme.
2. Confirm its preview is approved and the owner intends to make it public.
3. Use the theme action menu’s **Publish** action and confirm Shopify’s prompt. Verify the theme is now marked **Current theme**. If the owner is not ready, leave it unpublished.

### Remove password protection / open the store

1. Only after payment, shipping, tax, policy, product, and checkout checks pass, open **Online Store > Preferences** (in some Admin versions, password/storefront visibility is in the Online Store sales channel settings).
2. Find storefront password protection and disable/remove the password. Shopify may require an eligible plan or store setup before removal; follow the current Admin message rather than bypassing it.
3. Save. Open the public domain in a private/incognito browser and confirm the public storefront loads, products can be browsed, and checkout is available as intended.
4. Verify the custom domain and SSL if configured. Keep a record of the launch time and the owner’s approval.

**Launch is complete only when:** the published theme is the intended theme, password protection is intentionally off, the public site is reachable, checkout tests pass, and the owner confirms readiness.

## Stop/go checklist

Do **not** publish or remove the password if any of these are missing:

- Real approved product data, imagery rights, prices, variants, and inventory.
- Verified business contact information.
- Owner-completed payment, shipping, and tax setup.
- Reviewed policies and functioning contact route.
- Theme/menu/product/mobile/checkout tests passed.
- Owner approval to make the site public.

## Shopify chat prompt

Paste this prompt into Shopify chat to have it assist with tasks it can access. It cannot replace owner-only decisions or the final Admin action if its tools do not expose one. Ask it to report verified changes, not merely planned ones.

```text
Help me complete the existing PlusSizeBeauty Shopify store from its current saved state. Do not recreate collections or duplicate menus. First verify current Admin state. Work through the phases in docs/SHOPIFY_LAUNCH_PLAN.md in order: verify; display name/About page; navigation; unpublished Horizon theme; real products only; reviewed translations; owner-specific checkout settings; QA; publish theme; remove password only at final launch.

Use Shopify as the only commerce system. Never invent product data, images, prices, stock, business/legal details, tax or shipping settings, payment credentials, or policy terms. Do not publish the theme, activate payments, or disable password protection unless the owner has supplied the required real details and explicitly authorized launch.

For every task, report one of: Completed and verified, Needs owner information, or Unable to perform. If unable, give the current Admin path and exact next clicks. Do not claim a save unless you verified the saved state. Continue with other safe tasks instead of asking broad questions. At the end provide the remaining owner tasks and the launch checklist.
```
