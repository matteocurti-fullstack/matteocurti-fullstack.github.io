# Backlog di hardening preventivo

Data della verifica: 10 agosto 2026.

## Contesto

Il sito è un portfolio statico React/Vite pubblicato su GitHub Pages. Alla data
della verifica non sono emersi segreti nel repository o nella cronologia Git,
vulnerabilità note in `npm audit`, script JavaScript esterni, analytics o form
con invio dati al server. Le azioni qui raccolte sono miglioramenti preventivi,
non la risposta a una vulnerabilità confermata.

## Priorità alta

### 1. Rendere più sicuro l'inserimento accidentale di segreti

**Stato attuale:** [.gitignore](../.gitignore) ignora `*.local`, ma non ignora
esplicitamente `.env`, varianti `.env.*`, chiavi PEM o file tipici di account
di servizio.

**Rischio:** in futuro un token, una connection string o una chiave privata
potrebbero essere aggiunti e committati per errore.

**Azione proposta:** aggiungere regole esplicite per:

```gitignore
.env
.env.*
!.env.example
*.pem
*.key
*.pfx
*.p12
credentials.json
service-account.json
```

**Nota:** non salvare mai segreti in variabili `VITE_*`: Vite le include nel
bundle esposto al browser. Se in futuro saranno necessari servizi esterni,
usare segreti nel sistema CI o in un backend, mai nel repository o nel codice
client.

## Priorità alta

### 2. Applicare il principio del privilegio minimo al deploy

**Stato attuale:** il workflow
[deploy-pages.yml](../.github/workflows/deploy-pages.yml) assegna
`pages: write` e `id-token: write` a livello globale. Di conseguenza anche il
job di build, che esegue `npm ci`, riceve permessi di pubblicazione.

**Rischio:** aumenta l'impatto potenziale di una dipendenza o di un'azione
compromessa durante la build.

**Azioni proposte:**

1. Impostare permessi minimi globali, per esempio `contents: read`.
2. Assegnare `pages: write` e `id-token: write` solo al job `deploy`, se il
   workflow continua a funzionare con questa separazione.
3. Sostituire i tag mobili delle GitHub Actions, come `actions/checkout@v4`,
   con SHA di commit verificati.
4. Abilitare Dependabot anche per gli aggiornamenti delle GitHub Actions, così
   da ricevere proposte di aggiornamento controllabili.

**Verifica dopo la modifica:** eseguire il workflow manualmente o con un commit
di prova e controllare che build e deploy GitHub Pages completino entrambi con
successo.

## Priorità media

### 3. Pianificare gli header di sicurezza per un'eventuale evoluzione del sito

**Stato attuale:** il sito è servito in HTTPS con HSTS, ma non restituisce
header CSP, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` o
`Permissions-Policy`.

**Rischio:** basso nel sito attuale, che è statico e non usa input utente,
script esterni o form con invio dati. Gli header restano una difesa utile contro
regressioni future, clickjacking e caricamenti non previsti.

**Vincolo:** GitHub Pages non permette di configurare normalmente response
header personalizzati. Un meta CSP può dare una protezione parziale, ma gli
header completi richiedono un proxy/CDN davanti al sito o un hosting diverso.

**Azione proposta:** se il sito introdurrà form, API, analytics o script di
terze parti, valutare Cloudflare o un altro reverse proxy/hosting che permetta
di configurare almeno:

- `Content-Security-Policy` restrittiva;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy`;
- `Permissions-Policy`;
- una protezione anti-frame tramite CSP `frame-ancestors`.

**Verifica dopo la modifica:** controllare tutte le pagine statiche, i dati
strutturati JSON-LD, l'anteprima social e le eventuali integrazioni esterne.

## Priorità alta — impostazioni GitHub da verificare manualmente

Queste impostazioni non sono modificabili dal repository e vanno controllate
nell'interfaccia GitHub:

1. Protezione del branch `main`: richiedere pull request, review e controlli di
   stato prima del merge; limitare chi può effettuare push diretti.
2. Protezione dell'ambiente `github-pages`: richiedere eventuale approvazione
   al deploy e limitare i branch autorizzati, se compatibile con il flusso di
   pubblicazione desiderato.
3. Dependabot: abilitare gli aggiornamenti di sicurezza per dipendenze npm e
   gli aggiornamenti delle GitHub Actions. Alla data della verifica gli alert o
   aggiornamenti automatici Dependabot non risultavano abilitati.
4. Mantenere GitHub Secret Scanning e Push Protection attivi: alla data della
   verifica risultavano già abilitati.

## Criterio di chiusura

Ogni voce va considerata completata solo dopo una revisione del diff, una build
locale con `npm run build` e un deploy GitHub Pages completato con successo.
