(() => {
  const YEAR = document.getElementById('year');
  if (YEAR) YEAR.textContent = new Date().getFullYear();

  // --- Age gate (required 21+) ---
const AGE_KEY = 'pjnugz_age_ok_v1';
const gateEl = document.getElementById('ageGate');
const confirmBox = document.getElementById('confirm21');
const enterBtn = document.getElementById('enterSiteBtn');
const leaveBtn = document.getElementById('leaveSiteBtn');

/* ✅ DEV BYPASS: suppress age gate in Dreamweaver / local preview */
const isLocalDev =
  location.hostname === '' ||                 // file:// preview (Dreamweaver)
  location.hostname === 'localhost' ||
  location.hostname === '127.0.0.1';

function showGate() {
  if (!gateEl) return;

  /* ✅ Skip age gate entirely during local development */
  if (isLocalDev) {
    localStorage.setItem(AGE_KEY, 'true');
    return;
  }

  const ok = localStorage.getItem(AGE_KEY) === 'true';
  if (ok) return;

  const modal = new bootstrap.Modal(gateEl);
  modal.show();

  if (confirmBox && enterBtn) {
    confirmBox.checked = false;
    enterBtn.disabled = true;
    confirmBox.addEventListener(
      'change',
      () => {
        enterBtn.disabled = !confirmBox.checked;
      },
      { once: false }
    );
  }

  if (enterBtn) {
    enterBtn.onclick = () => {
      if (confirmBox && !confirmBox.checked) return;
      localStorage.setItem(AGE_KEY, 'true');
      modal.hide();
    };
  }

  if (leaveBtn) {
    leaveBtn.onclick = () => {
      // Redirect away; user can change this destination.
      window.location.href = 'https://www.google.com';
    };
  }
}
``

  // Trigger on load
  if (gateEl) {
    document.addEventListener('DOMContentLoaded', showGate);
  }

  // --- Shop modal binding ---
  const productModal = document.getElementById('productModal');
  if (productModal) {
    const pmTitle = document.getElementById('pmTitle');
    const pmSku = document.getElementById('pmSku');
    const pmPrice = document.getElementById('pmPrice');
    const pmDesc = document.getElementById('pmDesc');

    // Replace these with your real payment URLs.
    const payLinks = {
      venmo: '#',
      cashapp: '#',
      paypal: '#',
      applepay: '#'
    };

    // Also update tiles on the shop page
    document.querySelectorAll('[data-pay="venmo"]').forEach(a => a.href = payLinks.venmo);
    document.querySelectorAll('[data-pay="cashapp"]').forEach(a => a.href = payLinks.cashapp);
    document.querySelectorAll('[data-pay="paypal"]').forEach(a => a.href = payLinks.paypal);
    document.querySelectorAll('[data-pay="applepay"]').forEach(a => a.href = payLinks.applepay);

    const pmVenmo = document.getElementById('pmVenmo');
    const pmCashapp = document.getElementById('pmCashapp');
    const pmPaypal = document.getElementById('pmPaypal');
    const pmApplepay = document.getElementById('pmApplepay');

    function addSkuToLink(url, sku) {
      // Some providers support notes via query params; keep it simple.
      // You can customize per provider later.
      if (!url || url === '#') return '#';
      return url;
    }

    document.querySelectorAll('.product-card button[data-bs-target="#productModal"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;
        const title = card.dataset.title || 'Product';
        const sku = card.dataset.sku || '';
        const price = card.dataset.price || '';
        const desc = card.dataset.desc || '';

        if (pmTitle) pmTitle.textContent = title;
        if (pmSku) pmSku.textContent = sku;
        if (pmPrice) pmPrice.textContent = price;
        if (pmDesc) pmDesc.textContent = desc;

        if (pmVenmo) pmVenmo.href = addSkuToLink(payLinks.venmo, sku);
        if (pmCashapp) pmCashapp.href = addSkuToLink(payLinks.cashapp, sku);
        if (pmPaypal) pmPaypal.href = addSkuToLink(payLinks.paypal, sku);
        if (pmApplepay) pmApplepay.href = addSkuToLink(payLinks.applepay, sku);
      });
    });
  }

  // --- Contact form validation ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      contactForm.classList.add('was-validated');
    }, false);
  }
})();
