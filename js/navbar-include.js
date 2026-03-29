/* =========================
   NAVBAR INJECT — runs before page scripts
   Include this as the FIRST script on every page.
   It writes the navbar + dropdown into #navbarMount and #dropdownMount.
========================= */
(function () {
  // ── Inject navbar HTML ──────────────────────────────────────
  const navMount = document.getElementById('navbarMount');
  if (navMount) {
    navMount.innerHTML = `
      <header class="navbar" id="navbar">
        <a class="logo" href="javascript:void(0)" onclick="navigate('index.html')">TAKEE</a>

        <div class="nav-center">
          <input type="text" placeholder="Search instruments…" id="searchInput"
            class="search-bar" autocomplete="off"
            onkeydown="if(event.key==='Enter'){navSearch()}">
        </div>

        <div class="nav-right">
          <a class="cart-link" href="javascript:void(0)" onclick="navigate('cart.html')">
            <span class="cart-icon">🛒</span>
            Cart&nbsp;<span id="cartCount">0</span>
          </a>
          <div class="menu-icon" onclick="toggleMenu()">☰</div>
        </div>
      </header>

      <div id="dropdownMenu" class="dropdown-menu">
        <div class="menu-user">
          <span id="usernameDisplay"></span>
          <button id="usernameBtn" style="display:none"></button>
        </div>
        <a href="javascript:void(0)" onclick="navigate('index.html');toggleMenu()">🏠 Home</a>
        <a href="javascript:void(0)" onclick="navigate('products.html');toggleMenu()">🎵 Products</a>
        <a href="javascript:void(0)" onclick="navigate('cart.html');toggleMenu()">🛒 Cart</a>
        <a href="javascript:void(0)" onclick="navigate('contact.html');toggleMenu()">📬 Contact</a>
        <a href="javascript:void(0)" id="loginLink"
          onclick="navigate('login.html');toggleMenu()">🔑 Login</a>
        <a href="javascript:void(0)" id="logoutLink" style="display:none"
          onclick="logoutUser()">🚪 Logout</a>
      </div>`;
  }

  // ── Shared navigate helper (no URL in status bar) ───────────
  window.navigate = function (url) { window.location.href = url; };

  // ── Search from navbar ──────────────────────────────────────
  window.navSearch = function () {
    const val = (document.getElementById('searchInput') || {}).value || '';
    navigate('products.html?search=' + encodeURIComponent(val.trim()));
  };
})();