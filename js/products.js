/* =========================
   PRODUCT DATA — EXPANDED
========================= */
const products = [
  // ── GUITARS ──────────────────────────────────────────────────
  { id:1,  name:'Fender Stratocaster',        price:1200, category:'guitar',   rating:5, badge:'Best Seller', image:'images/products/guitars/guitar-fender-stratocaster.jpg' },
  { id:2,  name:'Gibson Les Paul Standard',   price:1500, category:'guitar',   rating:4, badge:null,          image:'images/products/guitars/guitar-gibson-lespaul.jpg' },
  { id:3,  name:'Taylor 814ce Acoustic',      price:2200, category:'guitar',   rating:5, badge:'Premium',     image:'images/products/guitars/guitar-taylor-814ce.jpg' },
  { id:4,  name:'Martin D-28 Acoustic',       price:1900, category:'guitar',   rating:5, badge:null,          image:'images/products/guitars/guitar-martin-d28.jpg' },
  { id:5,  name:'PRS Custom 24',              price:1800, category:'guitar',   rating:4, badge:null,          image:'images/products/guitars/guitar-prs-custom24.jpg' },
  { id:6,  name:'Ibanez RG550 Electric',      price:850,  category:'guitar',   rating:4, badge:'Value Pick',  image:'images/products/guitars/guitar-ibanez-rg550.jpg' },

  // ── PIANOS ───────────────────────────────────────────────────
  { id:7,  name:'Yamaha U3 Upright Piano',    price:3500, category:'piano',    rating:5, badge:'Premium',     image:'images/products/pianos/piano-yamaha-u3.jpg' },
  { id:8,  name:'Steinway & Sons Model B',    price:9500, category:'piano',    rating:5, badge:'Luxury',      image:'images/products/pianos/piano-steinway-b.jpg' },
  { id:9,  name:'Roland FP-90X Digital',      price:1600, category:'piano',    rating:4, badge:'New',         image:'images/products/pianos/piano-roland-fp90x.jpg' },
  { id:10, name:'Kawai ES920 Stage Piano',    price:1200, category:'piano',    rating:4, badge:null,          image:'images/products/pianos/piano-kawai-es920.jpg' },
  { id:11, name:'Casio PX-S3100 Privia',      price:650,  category:'piano',    rating:4, badge:'Value Pick',  image:'images/products/pianos/piano-casio-pxs3100.jpg' },

  // ── VIOLINS ──────────────────────────────────────────────────
  { id:12, name:'Stradivarius Copy Violin',   price:2500, category:'violin',   rating:4, badge:null,          image:'images/products/violins/violin-stradivarius.jpg' },
  { id:13, name:'Yamaha V7SG Student Violin', price:480,  category:'violin',   rating:4, badge:'Best Seller', image:'images/products/violins/violin-yamaha-v7sg.jpg' },
  { id:14, name:'Karl Höfner H11E Electric',  price:720,  category:'violin',   rating:3, badge:null,          image:'images/products/violins/violin-hofner-h11e.jpg' },
  { id:15, name:'Cecilio CVN-300 Violin',     price:320,  category:'violin',   rating:4, badge:'Value Pick',  image:'images/products/violins/violin-cecilio-cvn300.jpg' },

  // ── DRUMS ────────────────────────────────────────────────────
  { id:16, name:'Roland VAD306 E-Drum',       price:2000, category:'drum',     rating:4, badge:'New',         image:'images/products/drums/drum-roland-vad306.jpg' },
  { id:17, name:'Pearl Export EXX Kit',       price:950,  category:'drum',     rating:4, badge:null,          image:'images/products/drums/drum-pearl-export.jpg' },
  { id:18, name:'Yamaha DTX6K2-X E-Drum',    price:1700, category:'drum',     rating:5, badge:'Premium',     image:'images/products/drums/drum-yamaha-dtx6k2.jpg' },
  { id:19, name:'Tama Starclassic Maple',     price:2400, category:'drum',     rating:5, badge:null,          image:'images/products/drums/drum-tama-starclassic.jpg' },

  // ── BASS ─────────────────────────────────────────────────────
  { id:20, name:'Fender Jazz Bass',           price:1100, category:'bass',     rating:5, badge:'Best Seller', image:'images/products/bass/bass-fender-jazz.jpg' },
  { id:21, name:'Music Man StingRay 5',       price:1600, category:'bass',     rating:5, badge:'Premium',     image:'images/products/bass/bass-musicman-stingray.jpg' },
  { id:22, name:'Ibanez SR500E Bass',         price:750,  category:'bass',     rating:4, badge:null,          image:'images/products/bass/bass-ibanez-sr500e.jpg' },

  // ── SAXOPHONE ────────────────────────────────────────────────
  { id:23, name:'Yamaha YAS-280 Alto Sax',    price:1100, category:'saxophone',rating:4, badge:'Best Seller', image:'images/products/saxophone/sax-yamaha-yas280.jpg' },
  { id:24, name:'Selmer Paris Alto Sax',      price:3800, category:'saxophone',rating:5, badge:'Luxury',      image:'images/products/saxophone/sax-selmer-paris.jpg' },
  { id:25, name:'Jupiter JAS500Q Alto Sax',   price:890,  category:'saxophone',rating:4, badge:null,          image:'images/products/saxophone/sax-jupiter-jas500q.jpg' },

  // ── FLUTE ────────────────────────────────────────────────────
  { id:26, name:'Yamaha YFL-222 Student',     price:620,  category:'flute',    rating:4, badge:null,          image:'images/products/flute/flute-yamaha-yfl222.jpg' },
  { id:27, name:'Pearl PF-525 Flute',         price:870,  category:'flute',    rating:4, badge:'Best Seller', image:'images/products/flute/flute-pearl-pf525.jpg' },
  { id:28, name:'Gemeinhardt 3SB Flute',      price:540,  category:'flute',    rating:3, badge:'Value Pick',  image:'images/products/flute/flute-gemeinhardt-3sb.jpg' },

  // ── UKULELE ──────────────────────────────────────────────────
  { id:29, name:'Kala KA-C Mahogany Uke',    price:180,  category:'ukulele',  rating:5, badge:'Best Seller', image:'images/products/ukulele/uke-kala-kac.jpg' },
  { id:30, name:'Fender Venice Soprano Uke', price:160,  category:'ukulele',  rating:4, badge:null,          image:'images/products/ukulele/uke-fender-venice.jpg' },
  { id:31, name:'Cordoba 20CM Concert Uke',  price:220,  category:'ukulele',  rating:4, badge:null,          image:'images/products/ukulele/uke-cordoba-20cm.jpg' },
];

// ── Category metadata ────────────────────────────────────────────
const categoryMeta = {
  guitar:    { icon: '🎸', label: 'Guitar' },
  piano:     { icon: '🎹', label: 'Piano' },
  violin:    { icon: '🎻', label: 'Violin' },
  drum:      { icon: '🥁', label: 'Drums' },
  bass:      { icon: '🎵', label: 'Bass Guitar' },
  saxophone: { icon: '🎷', label: 'Saxophone' },
  flute:     { icon: '🪈', label: 'Flute' },
  ukulele:   { icon: '🪗', label: 'Ukulele' },
};

function getCatIcon(cat)  { return (categoryMeta[cat] || {}).icon  || '🎵'; }
function getCatLabel(cat) { return (categoryMeta[cat] || {}).label || cat; }

/* =========================
   DISPLAY PRODUCTS
========================= */
function displayProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  if (!list || list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 40px">
        <div style="font-size:56px;margin-bottom:16px;opacity:0.3">🔍</div>
        <h3 style="font-family:'Playfair Display',serif;font-size:22px;color:var(--white);margin-bottom:8px">No instruments found</h3>
        <p style="color:var(--muted);font-size:14px">Try adjusting your filters or search term.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(product => {
    const stars  = '⭐'.repeat(product.rating);
    const badge  = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
    const icon   = getCatIcon(product.category);
    const label  = getCatLabel(product.category);
    // SVG fallback (no external request)
    const fallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23161616'/%3E%3Ctext x='50%25' y='42%25' dominant-baseline='middle' text-anchor='middle' font-size='72'%3E${encodeURIComponent(icon)}%3C/text%3E%3Ctext x='50%25' y='68%25' dominant-baseline='middle' text-anchor='middle' font-size='13' fill='%23666' font-family='sans-serif'%3E${encodeURIComponent(product.name)}%3C/text%3E%3C/svg%3E`;

    return `
      <div class="product-card">
        <div class="product-img-wrap">
          <a href="product.html?id=${product.id}" onclick="navigate('product.html?id=${product.id}');return false;">
            <img src="${product.image}" alt="${product.name}" loading="lazy"
              onerror="this.onerror=null;this.src='${fallback}'">
          </a>
          ${badge}
          <div class="product-actions">
            <button class="action-btn" title="View Details"
              onclick="navigate('product.html?id=${product.id}')">👁</button>
          </div>
        </div>
        <div class="product-body">
          <div class="product-category">${icon} ${label}</div>
          <h3>${product.name}</h3>
          <div class="product-rating">${stars}</div>
          <div class="product-footer">
            <div class="product-price"><sup>$</sup>${product.price.toLocaleString()}</div>
            <button class="add-cart" onclick="addToCart(${product.id})">Add →</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// Navigate without showing URL on hover (fixes status bar URL leak)
function navigate(url) {
  window.location.href = url;
}