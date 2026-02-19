/* =========================================================
   app.js – Interaktivität für den Onepager

   Enthält:
   1) Footer-Jahr automatisch setzen
   2) Login-Modal öffnen/schließen (Button, Overlay, ESC)
   3) Demo-Login (Frontend-only) + einfache Validierung
   4) Menü-Suche & Kategorie-Filter
========================================================= */

/* =========================
   1) Footer-Jahr setzen
========================= */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

/* =========================
   2) Login Modal: Elemente holen
========================= */
const loginOpenBtn = document.getElementById("loginOpenBtn");
const loginModal = document.getElementById("loginModal");
const loginCloseBtn = document.getElementById("loginCloseBtn");

/* Hilfsfunktionen: Modal öffnen/schließen */
function openLoginModal() {
  if (!loginModal) return;
  loginModal.hidden = false;

  // Fokus auf erstes Feld setzen (gute UX/Accessibility)
  const email = document.getElementById("loginEmail");
  if (email) email.focus();

  // Scroll sperren, wenn Modal offen ist
  document.body.style.overflow = "hidden";
}

function closeLoginModal() {
  if (!loginModal) return;
  loginModal.hidden = true;

  // Status zurücksetzen (optional)
  const status = document.getElementById("loginStatus");
  if (status) status.textContent = "";

  document.body.style.overflow = "";
}

/* Button-Events */
if (loginOpenBtn) loginOpenBtn.addEventListener("click", openLoginModal);
if (loginCloseBtn) loginCloseBtn.addEventListener("click", closeLoginModal);

/* Overlay-Klick schließt Modal (aber nicht Klick im Modal selbst) */
if (loginModal) {
  loginModal.addEventListener("click", (e) => {
    // Wenn direkt auf Overlay geklickt wird (nicht auf Modal-Inhalt), schließen
    if (e.target === loginModal) closeLoginModal();
  });
}

/* ESC schließt Modal */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && loginModal && !loginModal.hidden) {
    closeLoginModal();
  }
});

/* =========================
   3) Login-Form: Demo-Logik
========================= */
const loginForm = document.getElementById("loginForm");
const loginDemoBtn = document.getElementById("loginDemoBtn");
const loginStatus = document.getElementById("loginStatus");

function setStatus(message, type) {
  if (!loginStatus) return;
  loginStatus.textContent = message;

  // Farb-Feedback ohne extra CSS-Klassen (simple)
  // (Alternativ: per classList und CSS lösen)
  if (type === "ok") loginStatus.style.color = "#28d17c";
  else if (type === "error") loginStatus.style.color = "#ff4d4d";
  else loginStatus.style.color = "";
}

/* "Echter" Submit (Frontend-only): Minimal-Validierung */
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail")?.value.trim() ?? "";
    const pw = document.getElementById("loginPassword")?.value ?? "";

    // Sehr einfache Plausibilitätschecks (kein echtes Auth!)
    if (!email.includes("@")) {
      setStatus("Bitte eine gültige E-Mail eingeben.", "error");
      return;
    }
    if (pw.length < 4) {
      setStatus("Passwort ist zu kurz (Demo: mind. 4 Zeichen).", "error");
      return;
    }

    setStatus("Erfolgreich eingeloggt (Demo).", "ok");

    // Demo: Modal nach kurzer Zeit schließen
    window.setTimeout(() => {
      closeLoginModal();
    }, 800);
  });
}

/* Demo-Login füllt Felder und zeigt Erfolg */
if (loginDemoBtn) {
  loginDemoBtn.addEventListener("click", () => {
    const emailEl = document.getElementById("loginEmail");
    const pwEl = document.getElementById("loginPassword");
    if (emailEl) emailEl.value = "demo@doenerhaus-mg.de";
    if (pwEl) pwEl.value = "demo1234";
    setStatus("Demo-Daten gesetzt. Klick auf „Einloggen“ zum Fortfahren.", "ok");
  });
}

/* =========================
   4) Menü: Suche & Filter
========================= */
const menuSearch = document.getElementById("menuSearch");
const menuCategory = document.getElementById("menuCategory");
const menuReset = document.getElementById("menuReset");
const menuGrid = document.getElementById("menuGrid");
const noResults = document.getElementById("noResults");

function filterMenu() {
  if (!menuGrid) return;

  const query = (menuSearch?.value ?? "").trim().toLowerCase();
  const category = menuCategory?.value ?? "all";

  const items = Array.from(menuGrid.querySelectorAll(".menuItem"));
  let visibleCount = 0;

  items.forEach((item) => {
    const itemCategory = item.getAttribute("data-category") || "";
    const itemName = (item.getAttribute("data-name") || "").toLowerCase();

    // Kategorie-Filter
    const categoryOk = (category === "all") ? true : (itemCategory === category);

    // Textsuche (Name)
    const searchOk = query === "" ? true : itemName.includes(query);

    const show = categoryOk && searchOk;
    item.style.display = show ? "" : "none";
    if (show) visibleCount++;
  });

  // "Keine Treffer" Hinweis
  if (noResults) {
    noResults.hidden = visibleCount !== 0;
  }
}

/* Events für Suche/Filter */
if (menuSearch) menuSearch.addEventListener("input", filterMenu);
if (menuCategory) menuCategory.addEventListener("change", filterMenu);

/* Reset-Button */
if (menuReset) {
  menuReset.addEventListener("click", () => {
    if (menuSearch) menuSearch.value = "";
    if (menuCategory) menuCategory.value = "all";
    filterMenu();
  });
}

/* Einmal initial filtern (stellt sicher, dass UI korrekt ist) */
filterMenu();
