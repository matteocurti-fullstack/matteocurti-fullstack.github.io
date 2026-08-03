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
`/servizi/`, i cinque servizi principali, `/approfondimenti/`, le guide
editoriali e `/chi-sono/`. Le pagine sono definite nelle relative cartelle
con `index.html`; contenuti e componenti condivisi vivono in `src/content.ts`
e `src/App.tsx`.

Quando si aggiunge una pagina pubblica bisogna aggiornare anche
`public/sitemap.xml`. Il file `public/google2332d652f93740bd.html` mantiene
la verifica Google Search Console e non deve essere rimosso.

Ogni pagina pubblica conserva title, descrizione, canonical e dati strutturati
JSON-LD nel proprio `<head>`. Il markup descrive soltanto informazioni visibili
e verificabili: non aggiungere prezzi, recensioni, risultati cliente, località
o dettagli societari senza una fonte pubblicabile e autorizzata.

## Contenuti

Il sito presenta servizi, metodo e progetti personali in modo trasparente.
Ogni risultato attribuito a un cliente richiede una fonte, una metrica e
un'autorizzazione esplicita prima della pubblicazione.

Gli approfondimenti sono guide operative, non case study. Ogni guida deve
partire da un problema osservabile, collegare in modo naturale un servizio e
terminare con una CTA coerente, senza presentare esempi ipotetici come risultati
di clienti reali.
