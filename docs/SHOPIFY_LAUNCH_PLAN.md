# Shopify completion plan

This guide ties the existing static concept to the Shopify store. The latest status below comes from the store report supplied in the conversation, not a live Admin check by this repository. Re-check each item in Admin before acting.

## What exists and what remains

| Area | Reported state | Completion condition |
| --- | --- | --- |
| Collections | Four departments and 15 subcategories exist; all are empty | Confirm handles/titles and keep these collections; no duplicates |
| Products | 0 | Add only real, owner-verified products and variants |
| Store identity | Display name is “My Store” | Saved display name is PlusSizeBeauty; do not alter legal details without the owner |
| Pages | Contact and Your Privacy Choices exist; About Us missing | Create a factual About page and verify its visibility |
| Navigation | Main: Home, Catalog, Contact. Footer: Search, Your Privacy Choices | Menus link to existing pages/collections; no dead `#` links |
| Theme | Horizon is live; custom concept design not verified | Configure and preview a draft theme; do not publish without owner approval |
| Languages | Spanish/French not verified | Configure and human-review translations before making them available |
| Launch settings | Password on; payments, shipping, taxes, policies, contact details unconfirmed | Owner completes and verifies settings, then tests checkout before launch |

## How the parts fit together

Shopify owns commerce data and workflow: collections group products, products carry variant/price/inventory data, Shopify’s theme renders the catalog and product pages, and Shopify handles cart and checkout. The repository is a visual reference and documentation source; it is not wired to the Shopify store. Do not build a parallel browser-based admin or expose Admin API credentials.

The collections already created provide the category skeleton:

- Fashion: Dresses, Tops, Jeans, Activewear
- Beauty: Face Makeup, Eye Makeup, Lip Makeup, Makeup Tools
- Hair Care: Conditioner, Shampoo, Hair Treatments
- Skin Care: Cleansers, Moisturizers, Serums, Skin Treatments

Check each collection’s conditions and handle. Add product listings only after the owner has provided accurate product details. The empty collections are expected until then.

## Execution order

### 1. Confirm baseline and preserve the live store

In Shopify Admin, confirm the store identity, collection list, product count, menus, theme, password protection, and current settings. Keep the storefront password enabled. Do not recreate collections or publish a theme as part of this verification.

**Pass when:** the owner has a current inventory of what exists, and the live theme/password state is recorded.

### 2. Store name and About page

Change the customer-facing display name to PlusSizeBeauty in the appropriate store details setting. Create an About Us page using only verified information. Safe starter copy, if the owner approves it: “PlusSizeBeauty is an online store focused on fashion and beauty for plus-size women.” Do not invent a founder story, location, company history, or product promises. Keep the page unpublished/draft if the editor allows it until reviewed.

**Owner input:** legal business name and contact details belong in their designated settings, not in invented page copy.

**Pass when:** the saved display name is confirmed and the About page exists with reviewed factual content.

### 3. Navigation

Edit the existing menus instead of creating duplicates. Main menu should point to Home, the four department collections, About Us, and Contact. Add category links beneath departments only if the theme/menu supports clear nesting. Footer should link to existing Contact, About Us, Search, and actually existing policy pages. Do not link to missing pages or use placeholder URLs.

**Pass when:** every menu link opens the intended destination on desktop and mobile.

### 4. Draft theme design

Keep Horizon. Make changes in a duplicate/unpublished theme if available. Build a home page with a welcoming hero, accessible links to the four departments, and featured products only when real products exist. Use the existing rose palette and typography as visual inspiration, but prioritize readability and mobile layout. Use real approved images or leave image slots empty; do not present stock placeholders as store products. Ensure the search and cart controls are actual theme functions.

**Pass when:** a preview is reviewed on desktop and mobile; links, focus states, contrast, image alt text, and empty collection states are checked. Do not publish without owner approval.

### 5. Real product information

The worksheet at `data/products-template.csv` is for gathering data, not direct import. For every product, the owner supplies and verifies title, description, brand/vendor, price/currency, images and image rights, SKU/barcode if applicable, inventory, product type, tags, and collection. Add only applicable variants (e.g. actual sizes/colors for apparel or actual shades for cosmetics). Do not invent stock, prices, ingredient lists, efficacy claims, sizes, or certifications.

After the worksheet is complete, map fields to Shopify’s current official product CSV format or enter products through Products in Admin. Preview the import and inspect variants, prices, inventory tracking, product status, and collection membership before making products available.

**Pass when:** each product is real, reviewed, correctly assigned, has working variants/images, and its status is intentional (draft or active).

### 6. Languages

Keep English as the default. Shopify’s translation workflow must cover theme labels, navigation, pages, collection names/descriptions, and all product/variant content. Spanish and French should be enabled only after a fluent reviewer checks the actual content. Do not assume the static prototype’s localStorage language switcher translates Shopify checkout or product data. Brazilian Portuguese is a later decision based on audience demand.

**Pass when:** a reviewer verifies translated pages and product content, and the language selector takes customers to the intended locale.

### 7. Business and checkout settings (owner-only inputs)

In Shopify Admin, review store contact details, payments, shipping and delivery, taxes/duties, checkout, and policies. The owner must supply/approve legal name, address, contact email/phone, payment provider/account details, tax registrations/decisions, shipping origin/rates/regions, returns/refunds terms, and legal policy text. Do not guess or activate anything based on placeholders. Obtain qualified advice for legal or tax decisions where needed.

**Pass when:** the owner has saved and verified each required setting and test checkout behavior matches the intended market and fulfillment plan.

### 8. QA and launch

Keep password protection on until the owner authorizes launch. Preview/test navigation, collection pages, product details, variants, inventory behavior, search, cart, checkout, mobile behavior, accessibility basics, translations, contact details, and policy links. Use Shopify’s safe test/payment testing options as available; do not place a real order or charge a payment method unless the owner explicitly intends to.

**Pass when:** all tests pass, real products and owner settings are present, preview is approved, and the owner explicitly removes password protection/publishes the approved theme.

## Owner information needed

- Real product data and image rights; product variants, stock and prices.
- Legal business name, business address, customer service email/phone.
- Payment provider setup and authorization.
- Selling locations, tax registrations/decisions, shipping regions/origin/rates and fulfillment/returns approach.
- Approved policies and any domain choice.
- Human reviewers for Spanish and French, if those languages are to be launched.
- Final approval to publish the theme and disable storefront password protection.

Do not send payment credentials, passwords, or secret keys into chat or commit them to this repository.

## Prompt to continue in Shopify chat

Paste this after confirming the state in Admin:

```text
Continue from the CURRENT saved Shopify Admin state. Do not start over, duplicate the existing collections, or claim work is complete unless you verify it.

Use Shopify as the only commerce/admin system. Keep password protection enabled and do not publish the live theme, activate payments, or change tax/shipping/legal settings using guesses.

Work in this order:
1. Verify and report the existing collections, products, store name, pages, menus, live theme, password state, and settings. Reuse the existing 19 collections.
2. Change only the customer-facing display name to PlusSizeBeauty, if you can save and verify it. Do not alter legal business details.
3. Create a factual About Us draft using only: “PlusSizeBeauty is an online store focused on fashion and beauty for plus-size women.” Do not invent history or claims.
4. Edit existing menus to link Home, Fashion, Beauty, Hair Care, Skin Care, About Us, Contact, and only pages/collections that actually exist. Verify each destination and do not create duplicate menus.
5. Prepare a duplicate/unpublished Horizon theme with the existing rose/pink and elegant typography direction. Build a homepage linking to the four existing departments. Do not publish it. Do not show fake products or nonfunctional search/cart controls.
6. Do not create products: the store has no verified product data yet. Give me the exact product fields to provide and the current Shopify Admin steps to add/import them into the existing collections.
7. Keep English as default. Explain the verified Shopify workflow for Spanish/French, but do not publish machine-generated or unreviewed translations.
8. List the exact owner inputs and Admin paths for contact, payments, shipping, taxes, policies, and domain. Do not invent or save these settings.
9. Provide a prelaunch test checklist. Keep the password on and theme unpublished.

For every task, label it Completed and verified, Blocked on owner input, or Unable to perform. If unable, give exact current Admin menu path and clicks. Continue with other safe tasks rather than stopping. End with a concise status report and do not say launch-ready until real products, owner settings, tests, and owner approval are complete.
```
