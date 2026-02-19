# Dönerhaus MG – Onepager (HTML / CSS / JS)

Ein einfacher, moderner **Onepager** für einen Dönerladen in **Mönchengladbach** mit:
- Menükarte (inkl. **Suche** & **Kategorie-Filter**)
- **Login-Button** (öffnet ein Modal, Demo ohne Backend)
- Sektionen: Über uns, Öffnungszeiten, Kontakt
- **Impressum** & **Datenschutzerklärung** (Mustertexte)

> Hinweis: Impressum/Datenschutz sind **Muster** und müssen für echte Nutzung mit euren Daten ersetzt und ggf. rechtlich geprüft werden.

---

## Projektstruktur

Lege die Dateien so an:
doenerhaus-mg/
├─ index.html
├─ style.css
├─ app.js
├─ README.md
└─ assets/ <-- MUSS von dir selbst erstellt werden


### Wichtig: `assets` Ordner selbst erstellen
Du musst **manuell einen Ordner** mit dem Namen **`assets`** im Projekt anlegen.

Dort kannst du später z. B. ablegen:
- Logo (`assets/logo.png`)
- Bilder (`assets/doener.jpg`, `assets/store.jpg`)
- Icons (`assets/icon.svg`)

---

## Nutzung / Start

1. Projektordner erstellen (`doenerhaus-mg/`)
2. Dateien einfügen: `index.html`, `style.css`, `app.js`, `README.md`
3. **Ordner `assets/` selbst erstellen**
4. `index.html` im Browser öffnen (Doppelklick)

Optional (empfohlen): Lokalen Server starten, z. B. mit VS Code Live Server.

---

## Anpassungen (was du wahrscheinlich ändern willst)

### 1) Kontaktdaten
In `index.html` im Abschnitt `#contact`:
- Adresse
- Telefon
- E-Mail

### 2) Öffnungszeiten
In `index.html` im Abschnitt `#hours`:
- Zeiten nach euren echten Öffnungszeiten anpassen

### 3) Menü & Preise
In `index.html` im Abschnitt `#menu`:
- Menü-Items sind als `<article class="menuItem"...>` angelegt
- Kategorien stehen in `data-category`
- Name steht in `data-name`
- Preise sind aktuell Beispielwerte

### 4) Login (Demo)
Der Login ist aktuell **nur Frontend-Demo**:
- Keine Datenbank
- Keine echte Authentifizierung
- Keine Speicherung

Wenn du echtes Login willst, brauchst du ein Backend (PHP/Node/etc.).

---

## Lizenz / Hinweis
Frei verwendbar für eigene Zwecke. Bitte prüfe Impressum/Datenschutz (DSGVO) vor Live-Schaltung.
