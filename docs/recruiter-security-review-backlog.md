# Backlog: revisione recruiter, SEO e sicurezza

## Contesto

Questo backlog raccoglie i miglioramenti emersi dalla seconda revisione del portfolio: qualità del codice, SEO, performance Lighthouse, sicurezza front-end e percezione professionale per aziende, clienti e recruiter.

La homepage ha ottenuto, nella rilevazione Lighthouse sulla versione pubblica dell'11 agosto 2026, **99** in Performance e **100** in Accessibilità, Best Practices e SEO. FCP e LCP sono entrambi a **1,6 s**, TBT è **0 ms** e CLS è **0**. Il sito è quindi già veloce e solido; le priorità sotto mirano soprattutto a renderlo più accessibile, dimostrabile e capace di convertire contatti qualificati.

## Priorità operative

| Priorità | Area | Intervento | Beneficio atteso | Stato |
| --- | --- | --- | --- | --- |
| P1 | Accessibilità | Correggere skip link e indicatore di focus | Navigazione da tastiera affidabile e conformità del contrasto | Completato |
| P1 | SEO / resilienza | Pre-renderizzare le pagine note | Contenuti leggibili senza JavaScript e migliore scansione | Completato |
| P1 | Conversione | Rendere Calendly la CTA primaria nei punti commerciali | Meno attrito rispetto al solo `mailto:` | Da fare |
| P1 | Portfolio | Pubblicare due case study enterprise consultabili | Maggiore fiducia per clienti e recruiter | Da fare |
| P1 | Recruiter | Aggiungere un percorso professionale dedicato | Valutazione più rapida del profilo | Da fare |
| P2 | Soluzioni | Collegare ogni soluzione a un percorso pertinente | Auto-selezione più semplice per il potenziale cliente | Da fare |
| P2 | Conversione | Inserire una CTA dopo le prove enterprise | Contatto nel punto di massima fiducia | Da fare |
| P2 | Conversione / social | Aggiornare la preview social al posizionamento AI / enterprise | Coerenza tra condivisioni e sito attuale | Da fare |
| P2 | Conversione / social | Aggiungere canali di contatto e immagini social | Meno attrito nei contatti e preview migliori | Completato in parte |
| P2 | Sicurezza | Valutare header HTTP tramite proxy/CDN | Difese browser aggiuntive per evoluzioni future | Futuro |
| P3 | Posizionamento | Rendere esplicito il cliente ideale | Richieste più qualificate | Da fare |
| P3 | SEO / qualità | Completare i piccoli miglioramenti di metadati e controlli | Diagnostica e preview più robuste | Da fare |
| P3 | Performance | Ridurre l'idratazione JavaScript delle pagine statiche | Margine ulteriore su mobile | Futuro |

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

### Stato

Completato nell'agosto 2026: ogni `<main>` è focusabile, lo skip link trasferisce il focus e aggiorna l'ancora, l'indicatore di focus supera il contrasto richiesto, il sito rispetta `prefers-reduced-motion` e il menu mobile gestisce focus e tasto Escape. Il link GitHub dichiara inoltre l'apertura in una nuova scheda alle tecnologie assistive.

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

### Stato

Completato nell'agosto 2026 con un pre-render senza dipendenze aggiuntive. Dopo la build Vite, `scripts/prerender.mjs` rende le 15 route note nell'HTML già generato; il client usa `hydrateRoot` quando trova il markup e conserva il normale mount client-side in sviluppo.

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

Come prossimo salto di qualità, pubblicare **2-3 casi studio** che rendano
verificabili esperienza enterprise, AI applicata e lavoro su sistemi reali:
contesto, problema, ruolo, vincoli enterprise, soluzione e risultato. Evitare
progetti-demo generici e claim come "expert" senza una prova concreta.

Ogni caso dovrebbe seguire l'ordine **problema → soluzione → tecnologie →
risultato**. Le tecnologie mostrano come è stata realizzata la risposta, ma non
sono il messaggio principale: clienti e recruiter devono poter capire prima il
valore creato. Se metriche, nomi o numeri non sono pubblicabili, descrivere
solo benefici, vincoli e prove che possono essere verificati.

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

### Stato

Completato in parte nell'agosto 2026: oltre al pulsante per copiare l'indirizzo email e alla preview brandizzata condivisa, è disponibile Calendly per prenotare una prima call. Le sei pagine Article includono ora anche `image` nei JSON-LD. Restano da rendere coerenti le CTA nei punti commerciali principali e da aggiornare l'immagine social al nuovo posizionamento.

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

## 7. Aggiornamento revisione: conversione, proof e posizionamento

### Evidenze della revisione dell'11 agosto 2026

- Il sito live è indicizzabile e sano: tutte le 15 route generate, `robots.txt`, sitemap, canonical, H1, markup pre-renderizzato e link interni sono coerenti.
- `npm audit` non riporta vulnerabilità e la build completa supera TypeScript, Vite, pre-render e controllo statico.
- Calendly è attivo e raggiungibile; email, LinkedIn e GitHub sono già esposti.
- Le nuove sezioni **Soluzioni** e **Esperienze e progetti** rendono il posizionamento più commerciale e rendono visibili esperienze enterprise in forma compatibile con NDA.

Le proposte seguenti non correggono difetti critici: servono a passare da un sito tecnicamente molto buono a un sito più efficace nel generare contatti e nel dimostrare seniority.

### 7.1 Rendere Calendly la CTA primaria

#### Situazione attuale

Calendly è presente in menu, footer e blocco contatti, ma le CTA above-the-fold della home e della sezione Soluzioni continuano ad aprire un `mailto:`. Un visitatore interessato deve quindi scegliere tra due percorsi diversi senza una gerarchia esplicita.

#### Intervento

- Usare **Prenota una prima call** come CTA primaria in hero, Soluzioni e pagine di servizio dove la call è il passo più naturale.
- Lasciare **Scrivimi** o **Invia un'email** come alternativa secondaria per chi preferisce descrivere il contesto per iscritto.
- Mantenere il link Calendly esterno, senza incorporare widget o script di terze parti nel sito.

#### Criterio di completamento

Un potenziale cliente trova un percorso coerente per prenotare una call entro uno o due click, con l'email sempre disponibile come alternativa.

### 7.2 Trasformare due esperienze enterprise in case study consultabili

#### Situazione attuale

Le schede enterprise mostrano già problema, soluzione e contributo, ma non portano a una pagina che permetta di approfondire contesto, vincoli e decisioni. Sono quindi una proof iniziale, non ancora un caso studio completo.

#### Intervento

Creare almeno due pagine NDA-safe, una per:

- piattaforme conversazionali integrate;
- servizi cloud e integrazioni di processo.

Ogni pagina deve raccontare, senza nominare aziende o divulgare dati riservati:

1. contesto e tipo di problema;
2. vincoli enterprise, integrazioni e responsabilità;
3. architettura o decisioni tecniche pubblicabili;
4. contributo personale e collaborazione con il team;
5. beneficio verificabile oppure limite esplicito della descrizione;
6. CTA per discutere un problema analogo.

Evitare metriche, nomi cliente, screenshot, ruoli come "Technical Lead" o tecnologie specifiche se non sono stati confermati come pubblicabili.

#### Criterio di completamento

Un'azienda o un recruiter può capire cosa è stato affrontato, perché la risposta era complessa e quale contributo Matteo può portare a un progetto simile, senza violare NDA.

### 7.3 Collegare le card Soluzioni a un percorso concreto

#### Situazione attuale

Le tre card spiegano bene le aree di intervento, ma non permettono ancora a un visitatore di scegliere autonomamente il passo successivo.

#### Intervento

Aggiungere una CTA contestuale a ogni card, usando solo pagine esistenti o il calendario:

- **AI Customer Assistant** → esperienza conversazionale / case study, oppure prima call;
- **Software enterprise** → servizio software interni o web app;
- **Automazione dei processi** → servizio automazione di processi Excel e manuali.

#### Criterio di completamento

Dopo aver riconosciuto il proprio problema, il visitatore può raggiungere un approfondimento coerente o prenotare una call senza dover interpretare l'intero catalogo servizi.

### 7.4 Inserire una CTA subito dopo le prove enterprise

#### Situazione attuale

Le due esperienze enterprise sono seguite dai progetti personali e, soprattutto su mobile, dalla relativa lunghezza della pagina prima del blocco contatti finale.

#### Intervento

Inserire dopo le card enterprise un blocco compatto, ad esempio:

> Hai un sistema da integrare, far evolvere o rendere più affidabile? Valutiamo insieme il contesto.

con CTA **Prenota una prima call** e link Calendly.

#### Criterio di completamento

La proof di maggiore credibilità è seguita immediatamente da un invito all'azione, senza interrompere la trasparenza su NDA e dettagli riservati.

### 7.5 Aggiornare la preview social della home

#### Situazione attuale

L'immagine Open Graph condivisa parla ancora di automazioni, dashboard e strumenti web per team e PMI. Il sito ora posiziona anche AI applicata, esperienze enterprise, sistemi distribuiti e consulenza.

#### Intervento

Rigenerare l'asset 1200×627 con il messaggio coerente con la home, ad esempio:

> Software, automazioni e sistemi AI per processi, dati e decisioni più affidabili.

Aggiornare quindi testo alternativo e metadati della home; verificare la cache di LinkedIn dopo la pubblicazione.

#### Criterio di completamento

La preview che circola su LinkedIn e altri social comunica lo stesso valore percepito dalla prima schermata del sito.

### 7.6 Rendere più esplicito il cliente ideale

#### Situazione attuale

La home parla di aziende in generale, mentre pagine e servizi citano team e PMI. Il perimetro di chi può trarre maggior beneficio non è ancora espresso in una frase immediata.

#### Intervento

Aggiungere vicino al lead della home una riga verificabile, senza promesse commerciali:

> Per team che gestiscono dati, richieste e passaggi operativi tra file e sistemi esistenti.

#### Criterio di completamento

Il visitatore capisce rapidamente se il sito parla del proprio contesto, senza restringere artificialmente il target o dichiarare clienti non pubblicabili.

### 7.7 Piccoli miglioramenti SEO e di qualità

#### Interventi

- Aggiornare `lastmod` nella sitemap quando una pagina pubblica viene modificata in modo sostanziale.
- Usare datetime ISO-8601 completi per `article:published_time` e `article:modified_time` delle guide.
- Aggiungere `twitter:title` e `twitter:description` espliciti alle pagine non-home, anche se Open Graph offre già fallback.
- Valutare `publisher` e logo nei JSON-LD `Article` per arricchire il markup editoriale.
- Correggere nel controllo statico il riferimento a `filePath` non definito nel ramo che segnala canonical duplicati, così l'errore indica il file corretto.

#### Criterio di completamento

Le preview social e i messaggi di errore della build restano deterministici; sitemap e metadati descrivono in modo accurato le pagine realmente aggiornate.

### 7.8 Evoluzioni tecniche non urgenti

- Il bundle JavaScript comune viene idratato su tutte le pagine, comprese guide molto statiche. Valutare in futuro code splitting per route o isole interattive per menu e copia-email.
- GitHub Pages invia HSTS, ma non header HTTP completi per CSP, `frame-ancestors`, `X-Frame-Options`, `nosniff`, Referrer-Policy o Permissions-Policy. Un CDN/proxy può aggiungerli se il sito introdurrà form, autenticazione o dati utente.
- Una piattaforma con header configurabili può anche impostare cache immutabile per asset con hash, oltre alla cache breve oggi gestita da GitHub Pages.

Questi interventi non sono prioritari per l'attuale sito statico: performance, accessibilità e sicurezza client-side risultano già solide.

## Verdetto della revisione

Il portfolio è **curato, veloce e affidabile**. Non sono emerse vulnerabilità critiche nel front-end o nella supply chain attuale. Le nuove Soluzioni, esperienze enterprise e CTA Calendly hanno già migliorato branding e vendita dei servizi. Per un salto percepibile nella valutazione di aziende e recruiter, la leva principale resta la stessa: **case study approfondibili, CTA coerenti e prove concrete del valore portato ai progetti**.

## Fuori dallo scope immediato

- Aggiornare le dipendenze minori (React e tipizzazioni) in una pull request dedicata, dopo verifica di compatibilità.
- Il controllo statico `npm run check:static` verifica ora, dopo ogni build, contenuto pre-renderizzato, H1, canonical, descrizione, CSP, metadati social e coerenza bidirezionale con la sitemap. Restano da valutare lint, test di accessibilità automatizzati e controlli di coerenza fra contenuti e input di build.
- Spezzare progressivamente `App.tsx` e `content.ts` in componenti e moduli più piccoli, quando si interviene sulle relative aree.
