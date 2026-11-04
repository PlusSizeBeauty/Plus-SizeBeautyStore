const productData = [
  {
    id: 1,
    name: 'Curvy Fit Wrap Dress',
    category: 'fashion',
    department: 'Fashion',
    retailer: 'Sample Retailer',
    description: 'A flattering wrap silhouette, soft stretch fabric, and confident fit for everyday styling.',
    price: 'From $49',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/curvy-fit-wrap-dress',
    badge: 'Trending'
  },
  {
    id: 2,
    name: 'Power Puff Blush',
    category: 'beauty',
    department: 'Beauty',
    retailer: 'Sample Retailer',
    description: 'A radiant blush with buildable color for a fresh, polished look.',
    price: 'From $24',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/power-puff-blush',
    badge: 'Top pick'
  },
  {
    id: 3,
    name: 'Hydra Shine Conditioner',
    category: 'hair',
    department: 'Hair Care',
    retailer: 'Sample Retailer',
    description: 'A hydrating conditioner designed to smooth, soften, and add shine without heaviness.',
    price: 'From $18',
    image: 'https://images.unsplash.com/photo-1521590832167-7e1d4b7b3f7b?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/hydra-shine-conditioner',
    badge: 'New'
  },
  {
    id: 4,
    name: 'Cloud Dew Cleanser',
    category: 'skin',
    department: 'Skin Care',
    retailer: 'Sample Retailer',
    description: 'A gentle cleanser that refreshes skin and supports a calm, hydrated feel.',
    price: 'From $22',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/cloud-dew-cleanser',
    badge: 'Best seller'
  },
  {
    id: 5,
    name: 'Everyday Stretch Jeans',
    category: 'fashion',
    department: 'Fashion',
    retailer: 'Sample Retailer',
    description: 'Stretch denim with a flattering rise and comfort-first feel for daily wear.',
    price: 'From $58',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/everyday-stretch-jeans',
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'Glow Mist Serum',
    category: 'skin',
    department: 'Skin Care',
    retailer: 'Sample Retailer',
    description: 'A lightweight serum designed to support hydration and a soft, luminous finish.',
    price: 'From $30',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/glow-mist-serum',
    badge: 'Glow booster'
  },
  {
    id: 7,
    name: 'Curve Lift Lip Tint',
    category: 'beauty',
    department: 'Beauty',
    retailer: 'Sample Retailer',
    description: 'A smooth, hydrated tint for a fuller-looking finish with natural color payoff.',
    price: 'From $16',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/curve-lift-lip-tint',
    badge: 'Fan favorite'
  },
  {
    id: 8,
    name: 'Silk Volume Shampoo',
    category: 'hair',
    department: 'Hair Care',
    retailer: 'Sample Retailer',
    description: 'A gentle shampoo that lifts away buildup while keeping hair soft and manageable.',
    price: 'From $19',
    image: 'https://images.unsplash.com/photo-1521590832167-7e1d4b7b3f7b?auto=format&fit=crop&w=900&q=80',
    affiliateUrl: 'https://example.com/affiliate/silk-volume-shampoo',
    badge: 'New'
  }
];

const productGrid = document.getElementById('product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderProducts(filter = 'all') {
  const visibleProducts = filter === 'all'
    ? productData
    : productData.filter(product => product.category === filter);

  productGrid.innerHTML = visibleProducts.map(product => `
    <article class="product-card">
      <span class="product-badge">${product.badge}</span>
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-body">
        <p class="product-department">${product.department}</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-meta">
          <span>${product.price}</span>
          <span>${product.retailer}</span>
        </div>
        <a class="button product-link" href="${product.affiliateUrl}" target="_blank" rel="noopener noreferrer">
          View offer
        </a>
      </div>
    </article>
  `).join('');
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    renderProducts(button.dataset.filter);
  });
});

renderProducts();
