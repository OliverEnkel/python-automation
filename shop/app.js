const products = [
  {
    id: 'aura',
    name: 'NOX Aura Light',
    price: 59.99,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hub',
    name: 'NOX Smart Hub',
    price: 99.99,
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'plug',
    name: 'NOX Smart Plug',
    price: 24.99,
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cam',
    name: 'Home Security Cam',
    price: 79.99,
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80',
  },
];

const cart = [];
const grid = document.getElementById('product-grid');
const summaryList = document.getElementById('summary-list');
const totalNode = document.getElementById('summary-total');
const cartCount = document.getElementById('cart-count');

const euro = (amount) => `${amount.toFixed(2).replace('.', ',')}€`;

function renderProducts() {
  grid.innerHTML = products
    .map(
      (product) => `
      <article class="card">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <h3>${product.name}</h3>
        <p>ab ${euro(product.price)}</p>
        <button data-id="${product.id}">In den Warenkorb</button>
      </article>
    `,
    )
    .join('');

  grid.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => addToCart(button.dataset.id));
  });
}

function renderSummary() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  summaryList.innerHTML = cart.length
    ? cart.map((item) => `<li><span>${item.name}</span><strong>${euro(item.price)}</strong></li>`).join('')
    : '<li><span>Noch keine Produkte</span><strong>0,00€</strong></li>';

  totalNode.textContent = euro(total);
  cartCount.textContent = String(cart.length);
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  cart.push(product);
  renderSummary();
}

document.getElementById('bundle-btn').addEventListener('click', () => {
  const bundleIds = ['aura', 'plug', 'hub'];
  bundleIds.forEach(addToCart);
});

renderProducts();
renderSummary();
