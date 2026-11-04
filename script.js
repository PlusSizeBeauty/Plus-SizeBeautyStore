// Public affiliate offers are intentionally empty until the owner supplies verified
// products, retailer destinations, and approved affiliate tracking links.
// Never put credentials or non-public program data in this file.
const products = [];

const grid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('[data-filter]');

function safeText(value) {
  const element = document.createElement('span');
  element.textContent = String(value ?? '');
  return element.innerHTML;
}

function validExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:';
  } catch {
    return false;
  }
}

function renderProducts(filter = 'all') {
  if (!grid) return;
  const visible = products.filter(product => filter === 'all' || product.category === filter);
  if (visible.length === 0) {
    grid.innerHTML = '<div class="empty-state"><h3>Recommendations are being prepared</h3><p>We will add products after verifying the product information, image permissions, retailer destination, and affiliate link. We do not make up offers.</p></div>';
    return;
  }
  grid.innerHTML = visible.map(product => {
    if (!product || !product.name || !product.retailer || !validExternalUrl(product.affiliateUrl)) return '';
    const image = product.image && validExternalUrl(product.image)
      ? `<img loading="lazy" src="${safeText(product.image)}" alt="${safeText(product.imageAlt || product.name)}">`
      : '<div class="product-image-placeholder" aria-hidden="true">PlusSizeBeauty</div>';
    return `<article class="product-card">${image}<div class="product-body"><p class="product-category">${safeText(product.categoryLabel || product.category)}</p><h3>${safeText(product.name)}</h3><p>${safeText(product.description)}</p><p class="retailer-label">Sold by ${safeText(product.retailer)}</p><a class="button button-primary product-link" href="${safeText(product.affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer">View at ${safeText(product.retailer)} <span class="visually-hidden"> (opens in a new tab)</span></a><small class="card-disclosure">Affiliate link; we may earn a commission.</small></div></article>`;
  }).filter(Boolean).join('') || '<div class="empty-state"><h3>No verified recommendations in this category yet</h3><p>Please check back after our links have been reviewed.</p></div>';
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderProducts(button.dataset.filter || 'all');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('is-open', !expanded);
  });
}

renderProducts();
