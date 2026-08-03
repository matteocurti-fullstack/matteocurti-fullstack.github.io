# Matteo Curti — portfolio

Sito personale statico pubblicato su GitHub Pages:
<https://matteocurti-fullstack.github.io/>

## Sviluppo locale

```powershell
npm install
npm run dev
```

La build di produzione si verifica con:

```powershell
npm run build
```

Ogni push su `main` avvia il workflow `.github/workflows/deploy-pages.yml`.
GitHub Pages ospita soltanto il bundle statico React/Vite: nessun token,
database, backend o dato cliente deve essere aggiunto al repository.

## Pagine e indicizzazione

Oltre alla home, la build genera URL statici e indicizzabili per l'hub
`/servizi/` e per i cinque servizi principali. Le pagine sono definite in
`servizi/*/index.html`, mentre contenuti e componenti condivisi vivono in
`src/content.ts` e `src/App.tsx`.

Quando si aggiunge una pagina pubblica bisogna aggiornare anche
`public/sitemap.xml`. Il file `public/google2332d652f93740bd.html` mantiene
la verifica Google Search Console e non deve essere rimosso.

## Contenuti

Il sito presenta servizi, metodo e progetti personali in modo trasparente.
Ogni risultato attribuito a un cliente richiede una fonte, una metrica e
un'autorizzazione esplicita prima della pubblicazione.
