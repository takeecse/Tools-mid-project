/* =========================
   CART LOGIC — FIXED
========================= */

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function showToast(msg, icon) {
  icon = icon || '✅';
  const toast   = document.getElementById('toast');
  const msgEl   = document.getElementById('toastMsg');
  const iconEl  = toast && toast.querySelector('.toast-icon');
  if (!toast) return;
  if (msgEl)  msgEl.textContent  = msg;
  if (iconEl) iconEl.textContent = icon;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}

function addToCart(id) {
  if (typeof products === 'undefined') return;
  const product = products.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
  updateCartCount();
  showToast(product.name + ' added to cart!', '✅');
}

function removeFromCart(index) {
  const cart    = getCart();
  const removed = cart[index];
  cart.splice(index, 1);
  saveCart(cart);
  updateCartCount();
  displayCart();
  showToast((removed ? removed.name : 'Item') + ' removed', '🗑️');
}

function updateCartCount() {
  const n = getCart().length;
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = n);
}

function clearCart() {
  if (!confirm('Clear all items from your cart?')) return;
  saveCart([]);
  updateCartCount();
  displayCart();
  showToast('Cart cleared', '🗑️');
}

function proceedCheckout() {
  const cart = getCart();
  if (cart.length === 0) { showToast('Your cart is empty!', '⚠️'); return; }

  // Use loggedUser as source of truth
  const user = JSON.parse(localStorage.getItem('loggedUser') || localStorage.getItem('user') || 'null');
  if (!user) {
    sessionStorage.setItem('loginRedirect', 'checkout.html');
    window.location.href = 'login.html';
  } else {
    window.location.href = 'checkout.html';
  }
}

function displayCart() {
  const container = document.getElementById('cartItemsContainer');
  if (!container) return;

  const cart    = getCart();
  const summary = document.getElementById('cartSummary');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty" style="grid-column:1/-1">
        <div class="cart-empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Explore our collection and find your perfect instrument</p>
        <button class="shop-btn" onclick="navigate('products.html')" style="border:none;cursor:pointer;margin-top:16px">Browse Products →</button>
      </div>`;
    if (summary) summary.style.display = 'none';
    return;
  }

  if (summary) summary.style.display = 'block';

  let total = 0;
  container.innerHTML = '<div class="cart-items">' + cart.map((item, i) => {
    total += item.price;
    const icon = (typeof getCatIcon === 'function') ? getCatIcon(item.category) : '🎵';
    const fallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80' viewBox='0 0 100 80'%3E%3Crect width='100' height='80' fill='%23161616'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='32'%3E${encodeURIComponent(icon)}%3C/text%3E%3C/svg%3E`;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${fallback}'">
        <div class="cart-item-info">
          <div class="cart-item-category">${item.category}</div>
          <h3>${item.name}</h3>
          <div class="cart-item-price">$${item.price.toLocaleString()}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i})" title="Remove item">✕</button>
      </div>`;
  }).join('') + '</div>';

  const shipping     = total >= 500 ? 'Free' : '$49';
  const grandTotal   = total >= 500 ? total : total + 49;

  const sub  = document.getElementById('subtotalPrice');
  const tot  = document.getElementById('totalPrice');
  const ship = document.getElementById('shippingCost');
  if (sub)  sub.textContent  = '$' + total.toLocaleString();
  if (tot)  tot.textContent  = '$' + grandTotal.toLocaleString();
  if (ship) ship.textContent = shipping;
}

// Init
updateCartCount();
displayCart();