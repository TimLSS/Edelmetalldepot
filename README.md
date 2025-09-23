# Edelmetalldepot Webseite

Diese Ordner enthält eine kleine Webseite für das Edelmetalldepot. Sie wurde mit [Vite](https://vite.dev/) und React gebaut.

## Was du zum Arbeiten brauchst

- [Node.js](https://nodejs.org/) ab Version 18 (inklusive npm)

## Seite lokal ansehen

1. Öffne ein Terminal in diesem Ordner.
2. Installiere einmal alle Pakete:
   ```bash
   npm install
   ```
3. Starte die Vorschau:
   ```bash
   npm run dev
   ```
4. Öffne anschließend [http://localhost:5173](http://localhost:5173) im Browser.

## Dateien für das Hochladen bauen

1. Baue die fertige Variante:
   ```bash
   npm run build
   ```
2. Der fertige Code landet im Ordner `docs/`.
3. Lade genau diesen `docs`-Ordner auf deinen Webspace oder nutze ihn für GitHub Pages (Repository-Einstellungen → Pages → Branch `main`, Ordner `/docs`).

## Weitere Skripte

- `npm run preview` – zeigt den fertigen `docs`-Build lokal an
- `npm run lint` – prüft den Code auf mögliche Fehler
