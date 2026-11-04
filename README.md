# PlusSizeBeauty Store

A static storefront concept for PlusSizeBeauty. The HTML, CSS, and JavaScript demonstrate the brand direction and category content; they are not connected to Shopify and do not provide product management, checkout, inventory, or order processing.

## Complete the Shopify store

Follow [`docs/SHOPIFY_LAUNCH_PLAN.md`](docs/SHOPIFY_LAUNCH_PLAN.md) from the current-state check through product setup, theme review, testing, theme publishing, and password removal. It includes the owner information checklist, exact Shopify Admin paths, safety checks, and a Shopify chat prompt. The reported store state is historical; verify it in Admin before acting.

Fill in [`data/products-template.csv`](data/products-template.csv) with verified information. It is an intake worksheet, **not** a Shopify import file. For imports, download/use Shopify’s current product CSV template and map the verified data into it.

Shopify Admin is the source of truth for products, variants, inventory, collections, orders, and checkout. Do not treat this static site as a secure admin panel or put Shopify Admin API credentials in its JavaScript. GitHub changes do not change the Shopify storefront.

## Run the concept locally

From the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. This previews the static concept only; it does not connect to Shopify.
