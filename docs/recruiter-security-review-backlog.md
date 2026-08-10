# Backlog: revisione recruiter, SEO e sicurezza

## Contesto

Questo backlog raccoglie i miglioramenti emersi dalla seconda revisione del portfolio: qualità del codice, SEO, performance Lighthouse, sicurezza front-end e percezione professionale per aziende, clienti e recruiter.

La homepage ha ottenuto, nella rilevazione Lighthouse sulla versione pubblica del 10 agosto 2026, **100** in Performance, **95** in Accessibilità, **100** in Best Practices e **100** in SEO. Il sito è quindi già veloce e solido; le priorità sotto mirano soprattutto a renderlo più accessibile, dimostrabile e capace di convertire contatti qualificati.

## Priorità operative

| Priorità | Area | Intervento | Beneficio atteso | Stato |
| --- | --- | --- | --- | --- |
| P1 | Accessibilità | Correggere skip link e indicatore di focus | Navigazione da tastiera affidabile e conformità del contrasto | Da fare |
| P1 | SEO / resilienza | Pre-renderizzare le pagine note | Contenuti leggibili senza JavaScript e migliore scansione | Da valutare |
| P1 | Portfolio | Pubblicare prove concrete dei progetti | Maggiore fiducia per clienti e recruiter | Da fare |
| P1 | Recruiter | Aggiungere un percorso professionale dedicato | Valutazione più rapida del profilo | Da fare |
| P2 | Conversione / social | Aggiungere canali di contatto e immagini social | Meno attrito nei contatti e preview migliori | Da fare |
| P2 | Sicurezza | Valutare header HTTP tramite proxy/CDN | Difese browser aggiuntive per evoluzioni future | Futuro |

## 1. Correggere l'accessibilità

### Problemi rilevati

- Lo skip link in [App.tsx](../src/App.tsx) punta a `#contenuto`, ma il corrispondente elemento `<main>` non è focusabile. Dopo l'attivazione, il focus da tastiera non entra in modo affidabile nel contenuto principale.
- Il bordo di focus in [styles.css](../src/styles.css) usa un colore con contrasto insufficiente sullo sfondo chiaro del sito.

### Intervento

- Rendere il contenuto principale focusabile, ad esempio con `tabIndex={-1}`, e trasferirvi il focus quando viene attivato lo skip link.
- Sostituire o rinforzare il colore dell'outline fino ad almeno **3:1** di contrasto rispetto alle superfici adiacenti.
- Aggiungere `prefers-reduced-motion` per ridurre smooth scroll, transizioni e trasformazioni quando l'utente lo richiede.
- Completare il menu mobile con chiusura tramite tasto Escape e gestione coerente del focus.

### Criterio di completamento

Una persona che usa solo tastiera può saltare direttamente al contenuto, vedere sempre il focus e usare menu e animazioni senza barriere evitabili.

## 2. Generare HTML statico o pre-renderizzato

### Situazione attuale

Le 15 pagine pubblicate iniziano con il solo contenitore `div#root`. Google può eseguire JavaScript, ma H1, testo, link interni e corpi degli articoli arrivano solo dopo il rendering client-side.

### Intervento

Valutare una soluzione SSG/pre-render che generi, per ciascuna route nota:

- H1, contenuto principale e link interni nell'HTML iniziale;
- metadati e dati strutturati già presenti nella risposta;
- fallback utile anche se JavaScript non viene caricato.

La scelta tecnica dovrà mantenere la semplicità dell'attuale deploy su GitHub Pages.

### Criterio di completamento

Aprendo una pagina con JavaScript disabilitato o leggendo l'HTML prodotto dalla build, titolo, contenuto essenziale, navigazione e link restano disponibili.

## 3. Rendere il portfolio dimostrabile

### Situazione attuale

I casi di studio comunicano con trasparenza che sono prototipi, approcci o progetti in evoluzione, ma non conducono a pagine o prove consultabili. L'onestà va preservata: non devono essere introdotti risultati o clienti non verificabili.

### Intervento

Per ogni progetto che è possibile rendere pubblico, creare una pagina o una scheda cliccabile con:

- problema e contesto;
- ruolo svolto e vincoli;
- architettura, stack e decisioni tecniche;
- screenshot, demo o repository, quando condivisibili;
- risultato verificabile o indicatore esplicitamente qualificato come prototipo.

### Criterio di completamento

Un potenziale cliente o recruiter può capire in pochi minuti cosa è stato costruito, perché, come e con quali limiti o risultati documentati.

## 4. Aggiungere un percorso per recruiter

### Situazione attuale

Il sito è orientato bene ai potenziali clienti, ma la pagina personale racconta soprattutto metodo e approccio, non un profilo professionale completo.

### Intervento

Aggiungere solo informazioni verificabili:

- breve biografia o timeline professionale;
- ruolo, ambiti di responsabilità e competenze principali;
- link a LinkedIn e CV aggiornato;
- disponibilità o tipologia di collaborazione desiderata;
- CTA chiara per recruiter e aziende che cercano una figura tecnica.

### Criterio di completamento

Un recruiter può valutare rapidamente seniority, specializzazione, prove di lavoro e modalità di contatto senza dover cercare informazioni fuori dal sito.

## 5. Migliorare conversione e condivisione

### Situazione attuale

Le CTA del sito usano `mailto:`. È semplice e privacy-friendly, ma dipende dalla configurazione del client email e può introdurre attrito. Solo la homepage dispone inoltre di un'immagine Open Graph/Twitter; servizi e articoli non hanno una preview social completa né il campo `image` nei rispettivi dati strutturati Article.

### Intervento

- Mantenere l'email, ma affiancarla a una scelta a basso attrito: link per prenotare una call, pulsante copia-email o form statico rispettoso della privacy.
- Creare un'immagine brandizzata 1200×627 di fallback per servizi, hub e pagina personale.
- Aggiungere immagini pertinenti agli articoli e valorizzarle nei metadati Open Graph/Twitter e nel campo `image` dei JSON-LD Article.

### Criterio di completamento

Un visitatore può contattare Matteo anche senza client email configurato; ogni URL pubblico rilevante produce inoltre una preview coerente quando viene condiviso.

## 6. Hardening degli header HTTP

### Situazione attuale

La Content Security Policy del progetto è corretta ma viene emessa come meta tag. GitHub Pages non consente facilmente di aggiungere header HTTP completi, quindi il sito live non può ancora applicare da questa origine header come CSP lato server, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` o `Permissions-Policy`.

Il rischio è basso nell'assetto attuale: sito statico, senza autenticazione, form di raccolta dati, script di terze parti o API client-side. Diventa più importante prima di introdurre queste funzionalità.

### Intervento

Se il progetto acquisirà form, autenticazione o dati utente, valutare un proxy/CDN davanti a GitHub Pages che consenta di impostare:

- CSP come header HTTP, includendo `frame-ancestors`;
- protezione dal framing;
- `nosniff`, Referrer-Policy e Permissions-Policy;
- cache e redirect gestiti in modo centralizzato.

### Criterio di completamento

Gli header vengono verificati sulla risposta HTTP pubblica e sono coerenti con le funzionalità effettivamente esposte dal sito.

## Verdetto della revisione

Il portfolio è **curato, veloce e affidabile**. Non sono emerse vulnerabilità critiche nel front-end o nella supply chain attuale. Per un salto percepibile nella valutazione di aziende e recruiter, la leva principale non è la performance: sono le **prove concrete dei progetti** e un **profilo professionale più esplicito**.

## Fuori dallo scope immediato

- Aggiornare le dipendenze minori (React e tipizzazioni) in una pull request dedicata, dopo verifica di compatibilità.
- Aggiungere controlli automatici per lint, accessibilità, CSP e coerenza fra contenuti, sitemap e input di build.
- Spezzare progressivamente `App.tsx` e `content.ts` in componenti e moduli più piccoli, quando si interviene sulle relative aree.
