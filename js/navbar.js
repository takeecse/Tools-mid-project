/* =========================
   NAVBAR LOGIC — FIXED
========================= */

function toggleMenu() {
  const menu = document.getElementById('dropdownMenu');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open');

  if (!isOpen) {
    // Delay so this click doesn't immediately close it
    setTimeout(() => {
      function outsideClick(e) {
        const menuIcon = document.querySelector('.menu-icon');
        if (!menu.contains(e.target) && e.target !== menuIcon && !menuIcon.contains(e.target)) {
          menu.classList.remove('open');
          document.removeEventListener('click', outsideClick);
        }
      }
      document.addEventListener('click', outsideClick);
    }, 10);
  }
}

function logoutUser() {
  localStorage.removeItem('loggedUser');
  localStorage.removeItem('user');
  checkUser();
  // Show toast if available
  if (typeof showToast === 'function') showToast('Logged out successfully', '👋');
  setTimeout(() => window.location.href = 'index.html', 600);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = cart.length;
  });
}

function checkUser() {
  // Use loggedUser as the single source of truth
  const user = JSON.parse(localStorage.getItem('loggedUser') || localStorage.getItem('user') || 'null');

  const loginLink      = document.getElementById('loginLink');
  const logoutLink     = document.getElementById('logoutLink');
  const usernameDisplay = document.getElementById('usernameDisplay');
  const usernameBtn    = document.getElementById('usernameBtn');

  if (user) {
    if (usernameDisplay) usernameDisplay.textContent = '👤 ' + user.username;
    if (usernameBtn) {
      usernameBtn.textContent = user.username;
      usernameBtn.style.display = 'inline-block';
    }
    if (loginLink)  loginLink.style.display  = 'none';
    if (logoutLink) logoutLink.style.display = 'flex';
  } else {
    if (usernameDisplay) usernameDisplay.textContent = '';
    if (usernameBtn) usernameBtn.style.display = 'none';
    if (loginLink)  loginLink.style.display  = 'flex';
    if (logoutLink) logoutLink.style.display = 'none';
  }
}

// Scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Init on every page
updateCartCount();
checkUser();