/* =========================
   AUTH LOGIC — FIXED
========================= */

// ── Captcha system ──────────────────────────────────────────────
const captchaPool = [
  { q: 'What is 5 + 3?',   a: '8' },
  { q: 'What is 9 − 4?',   a: '5' },
  { q: 'What is 3 × 4?',   a: '12' },
  { q: 'What is 2 + 7?',   a: '9' },
  { q: 'What is 6 × 2?',   a: '12' },
  { q: 'What is 15 − 6?',  a: '9' },
  { q: 'What is 4 + 8?',   a: '12' },
  { q: 'What is 7 + 5?',   a: '12' },
  { q: 'What is 20 − 11?', a: '9' },
  { q: 'What is 3 × 3?',   a: '9' },
];

let currentCaptcha = null;

function generateCaptcha() {
  const pick = captchaPool[Math.floor(Math.random() * captchaPool.length)];
  currentCaptcha = pick;
  const label = document.getElementById('captchaLabel');
  const input = document.getElementById('captchaInput');
  if (label) label.textContent = pick.q;
  if (input) input.value = '';
}

// ── Sign Up ──────────────────────────────────────────────────────
function signupUser() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const username  = document.getElementById('signupUsername').value.trim();
  const email     = document.getElementById('signupEmail').value.trim();
  const password  = document.getElementById('signupPassword').value;
  const confirm   = document.getElementById('confirmPassword').value;
  const captchaAnswer = document.getElementById('captchaInput').value.trim();

  if (!firstName || !lastName || !username || !email || !password) {
    showAuthError('Please fill in all required fields.'); return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showAuthError('Please enter a valid email address.'); return;
  }

  if (username.length < 3 || /\s/.test(username)) {
    showAuthError('Username must be at least 3 characters with no spaces.'); return;
  }

  if (password.length < 6) {
    showAuthError('Password must be at least 6 characters.'); return;
  }

  if (password !== confirm) {
    showAuthError('Passwords do not match.'); return;
  }

  if (!currentCaptcha || captchaAnswer !== currentCaptcha.a) {
    showAuthError('Incorrect captcha answer. Try a new one.');
    generateCaptcha(); return;
  }

  const users = JSON.parse(localStorage.getItem('takee_users') || '[]');
  if (users.find(u => u.email === email)) {
    showAuthError('An account with this email already exists.'); return;
  }

  const newUser = { firstName, lastName, username, email, password };
  users.push(newUser);
  localStorage.setItem('takee_users', JSON.stringify(users));

  sessionStorage.setItem('authMsg', '✅ Account created! Please sign in.');
  window.location.href = 'login.html';
}

// ── Login ────────────────────────────────────────────────────────
function loginUser() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showAuthError('Please enter your email and password.'); return;
  }

  const users = JSON.parse(localStorage.getItem('takee_users') || '[]');

  // Migrate legacy single-user storage
  const legacy = JSON.parse(localStorage.getItem('user') || 'null');
  if (legacy && legacy.email && !users.find(u => u.email === legacy.email)) {
    users.push(legacy);
    localStorage.setItem('takee_users', JSON.stringify(users));
  }

  const match = users.find(u => u.email === email && u.password === password);

  if (!match) {
    showAuthError('Invalid email or password. Please try again.'); return;
  }

  localStorage.setItem('loggedUser', JSON.stringify(match));
  localStorage.setItem('user', JSON.stringify(match)); // keep in sync

  const redirect = sessionStorage.getItem('loginRedirect') || 'index.html';
  sessionStorage.removeItem('loginRedirect');
  window.location.href = redirect;
}

// ── Show error ───────────────────────────────────────────────────
function showAuthError(msg) {
  let el = document.getElementById('authError');
  if (!el) {
    el = document.createElement('div');
    el.id = 'authError';
    el.style.cssText = 'background:rgba(255,68,68,0.1);border:1px solid rgba(255,68,68,0.3);color:#ff6b6b;padding:12px 16px;border-radius:8px;font-size:14px;text-align:center;margin-bottom:12px;';
    const box = document.querySelector('.auth-box');
    const btn = box.querySelector('button');
    box.insertBefore(el, btn);
  }
  el.textContent = '⚠️ ' + msg;
  el.style.display = 'block';
  clearTimeout(el._t);
  el._t = setTimeout(() => el.style.display = 'none', 5000);
}

// ── On load ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Auto-generate captcha for signup page
  generateCaptcha();

  // If already logged in, skip auth pages
  const isAuthPage = !!document.querySelector('.auth-page');
  if (isAuthPage) {
    const logged = JSON.parse(localStorage.getItem('loggedUser') || 'null');
    if (logged) { window.location.href = 'index.html'; return; }
  }

  // Success message after signup redirect
  const msg = sessionStorage.getItem('authMsg');
  if (msg) {
    const el = document.createElement('div');
    el.style.cssText = 'background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);color:#c9a84c;padding:12px 16px;border-radius:8px;font-size:14px;text-align:center;margin-bottom:16px;';
    el.textContent = msg;
    const box = document.querySelector('.auth-box');
    if (box) box.insertBefore(el, box.firstChild);
    sessionStorage.removeItem('authMsg');
  }
});