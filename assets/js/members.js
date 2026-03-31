// JavaScript Document
// /assets/js/members.js
(() => {
  const showOnly = (id) => {
    const ids = ["state-loading", "state-signed-out", "state-not-verified", "state-verified"];
    ids.forEach(x => document.getElementById(x)?.classList.add("d-none"));
    document.getElementById(id)?.classList.remove("d-none");
  };

  // ✅ DEV PREVIEW: force Verified section in Dreamweaver / local preview
  const isLocalDev =
    location.hostname === '' ||          // file:// preview (Dreamweaver)
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';

  if (isLocalDev) {
    showOnly("state-verified");
    return; // stop here so it doesn't switch to signed-out or wait for Clerk
  }

  // If you haven't configured Clerk yet, do NOT get stuck on "Checking access…"
  // Show the signed-out state as a safe default.
  showOnly("state-signed-out");

  // TODO: After you create your Clerk app, set your publishable key here.
  const CLERK_PUBLISHABLE_KEY = "PASTE_YOUR_CLERK_PUBLISHABLE_KEY_HERE";

  // If the key hasn't been set, stop here (page remains usable).
  if (!CLERK_PUBLISHABLE_KEY || CLERK_PUBLISHABLE_KEY.includes("PASTE_")) {
    return;
  }

  // ... rest of your file unchanged ...
})();