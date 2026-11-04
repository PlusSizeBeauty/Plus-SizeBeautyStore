# PlusSizeBeauty Store

A static storefront concept for PlusSizeBeauty. The HTML, CSS, and JavaScript demonstrate the brand direction and category content; they are not connected to Shopify and do not provide product management, checkout, inventory, or order processing.

## Project status

The Shopify store status described in the latest project handoff is: the four department collections and 15 subcategory collections exist and are empty; there are no products; Horizon is the live theme; the store name is still “My Store”; password protection is enabled; menus and About Us need work; and business, payment, shipping, tax, policy, and translation setup remains unverified. Confirm current status in Shopify Admin before making changes.

## Shopify is the commerce system

Use Shopify Admin as the source of truth for products, variants, inventory, collections, orders, and checkout. Do not treat this static site as a secure admin panel or put Shopify Admin API credentials in its JavaScript. Theme and store changes must be made and verified in Shopify; a GitHub change does not change the Shopify store.

## Setup guide and product worksheet

- See [`docs/SHOPIFY_LAUNCH_PLAN.md`](docs/SHOPIFY_LAUNCH_PLAN.md) for the end-to-end sequence, acceptance checks, owner tasks, and a prompt for Shopify chat.
- Fill in [`data/products-template.csv`](data/products-template.csv) with verified product information. This is an intake worksheet, not a Shopify import file. Map and validate it against Shopify’s current product CSV template before importing.

## Run the concept locally

From the repository root, run:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. This previews the static concept only; it does not connect to Shopify.
