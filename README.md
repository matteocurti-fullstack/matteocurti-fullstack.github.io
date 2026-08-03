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

## Contenuti

Il sito presenta servizi, metodo e progetti personali in modo trasparente.
Ogni risultato attribuito a un cliente richiede una fonte, una metrica e
un'autorizzazione esplicita prima della pubblicazione.
