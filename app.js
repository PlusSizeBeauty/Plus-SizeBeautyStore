const PRODUCTS = [
  { id: 1, name: 'Curve Dress', category: 'Fashion', price: 78, emoji: '👗', color: 'linear-gradient(135deg, #f6d6e0, #e58ab1)' },
  { id: 2, name: 'Soft Knit Top', category: 'Fashion', price: 46, emoji: '🧶', color: 'linear-gradient(135deg, #f5d7b5, #d999a8)' },
  { id: 3, name: 'Confidence Jeans', category: 'Fashion', price: 64, emoji: '👖', color: 'linear-gradient(135deg, #cfd8ff, #7f8dd8)' },
  { id: 4, name: 'Glow Kit', category: 'Beauty', price: 52, emoji: '💄', color: 'linear-gradient(135deg, #f9d8c4, #d3667d)' },
  { id: 5, name: 'Radiance Lip Set', category: 'Beauty', price: 34, emoji: '💋', color: 'linear-gradient(135deg, #f8dce4, #d76a8d)' },
  { id: 6, name: 'Hydrating Serum', category: 'Skin Care', price: 42, emoji: '🧴', color: 'linear-gradient(135deg, #d9f2ea, #7ec5c0)' },
  { id: 7, name: 'Daily Hair Oil', category: 'Hair Care', price: 38, emoji: '✨', color: 'linear-gradient(135deg, #f4dfb7, #d4a96c)' },
  { id: 8, name: 'Curl Care Duo', category: 'Hair Care', price: 56, emoji: '🌿', color: 'linear-gradient(135deg, #dceec7, #8ab87f)' },
  { id: 9, name: 'Skin Reset Cream', category: 'Skin Care', price: 48, emoji: '🫧', color: 'linear-gradient(135deg, #f7d9e3, #b7d9d6)' }
];

const STORAGE_KEYS = {
  favs: 'plus-size-beauty-favorites',
  bag: 'plus-size-beauty-bag'
};

const state = {
  search: '',
  category: 'All',
  favorites: loadSet(STORAGE_KEYS.favs),
  bag: loadBag()
};

const elements = {
  searchInput: document.getElementById('searchInput'),
  categoryFilters: document.getElementById('categoryFilters'),
  productGrid: document.getElementById('productGrid'),
  resultsCount: document.getElementById('resultsCount'),
  bagCount: document.getElementById('bagCount'),
  bagItems: document.getElementById('bagItems'),
  bagTotal: document.getElementById('bagTotal'),
  clearBag: document.getElementById('clearBag')
};

function loadSet(key) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || '[]'));
  } catch {
    return new Set();
  }
}

function loadBag() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.bag) || '[]');
  } catch {
    return [];
  }
}

function saveSet(key, value) {
  localStorage.setItem(key, JSON.stringify(Array.from(value)));
}

function saveBag() {
  localStorage.setItem(STORAGE_KEYS.bag, JSON.stringify(state.bag));
}

function getCategories() {
  return ['All', ...new Set(PRODUCTS.map((item) => item.category))];
}

function getVisibleProducts() {
  const query = state.search.trim().toLowerCase();
  return PRODUCTS.filter((item) => {
    const matchesCategory = state.category === 'All' || item.category === state.category;
    const matchesSearch = !query || `${item.name} ${item.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}

function renderFilters() {
  const categories = getCategories();
  elements.categoryFilters.innerHTML = categories.map((category) => `
    <button class="filter-chip ${category === state.category ? 'active' : ''}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join('');

  document.querySelectorAll('.filter-chip').forEach((button) => {
    button.addEventListener('click', () => {
      state.category = button.dataset.category;
      render();
    });
  });
}

function renderProducts() {
  const visible = getVisibleProducts();
  elements.resultsCount.textContent = `${visible.length} item${visible.length === 1 ? '' : 's'}`;

  if (!visible.length) {
    elements.productGrid.innerHTML = '<div class="empty-state">No items match your search.</div>';
    return;
  }

  elements.productGrid.innerHTML = visible.map((product) => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-visual" style="background:${product.color}">${product.emoji}</div>
      <div class="product-body">
        <div class="product-header">
          <h3>${product.name}</h3>
          <span class="product-price">$${product.price}</span>
        </div>
        <div class="product-meta">${product.category}</div>
        <div class="product-actions">
          <button class="favorite-toggle ${state.favorites.has(product.id) ? 'active' : ''}" data-favorite-id="${product.id}" type="button" aria-label="Save ${product.name}">${state.favorites.has(product.id) ? '♥' : '♡'}</button>
          <button class="add-button" data-add-id="${product.id}" type="button">Add</button>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.favorite-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.favoriteId);
      if (state.favorites.has(id)) {
        state.favorites.delete(id);
      } else {
        state.favorites.add(id);
      }
      saveSet(STORAGE_KEYS.favs, state.favorites);
      renderProducts();
    });
  });

  document.querySelectorAll('.add-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.addId);
      const product = PRODUCTS.find((item) => item.id === id);
      if (!product) return;
      state.bag.push(product);
      saveBag();
      renderBag();
    });
  });
}

function renderBag() {
  const count = state.bag.length;
  elements.bagCount.textContent = String(count);

  if (!count) {
    elements.bagItems.innerHTML = '<div class="empty-state">Your bag is empty.</div>';
    elements.bagTotal.textContent = '$0.00';
    return;
  }

  const total = state.bag.reduce((sum, item) => sum + item.price, 0);
  elements.bagItems.innerHTML = state.bag.map((item, index) => `
    <div class="bag-item">
      <div>
        <strong>${item.name}</strong>
        <small>${item.category}</small>
      </div>
      <strong>$${item.price}</strong>
    </div>
  `).join('');
  elements.bagTotal.textContent = `$${total.toFixed(2)}`;
}

elements.searchInput.addEventListener('input', (event) => {
  state.search = event.target.value;
  renderProducts();
});

elements.clearBag.addEventListener('click', () => {
  state.bag = [];
  saveBag();
  renderBag();
});

function render() {
  renderFilters();
  renderProducts();
  renderBag();
}

render();
