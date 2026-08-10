# Piano editoriale — processi, dati e strumenti interni

Stato: bozza di lavoro. I contenuti qui elencati non sono pubblicati sul sito.

## Direzione editoriale

Il sito oggi intercetta tre domande utili per chi lavora in una PMI o in un
team operativo:

- quando un file o un passaggio manuale smette di essere sufficiente;
- quali dati, ruoli e controlli servono prima di costruire uno strumento;
- come delimitare un primo intervento senza promettere una trasformazione
  troppo ampia.

NotarFlow può rafforzare questa direzione come **progetto personale e caso di
studio tecnico**. Non deve diventare un racconto di risultati commerciali o di
una campagna reale: serve a mostrare decisioni di progettazione verificabili —
stati, storico, privacy locale, conferme umane e recupero degli errori.

## Decisione editoriale: ispirarsi ai competitor per generare contatti

I nuovi contenuti devono aiutare un potenziale cliente a passare da un problema
operativo riconoscibile a un primo confronto. La linea editoriale si ispira alle
strategie osservabili dei competitor italiani, senza copiarne testi, design,
promesse, casi cliente o identità.

Il benchmark iniziale e le fonti sono raccolti in
[competitor-benchmark.md](competitor-benchmark.md). Le metriche di conversione
dei competitor non sono pubbliche: il documento registra quindi soltanto
meccanismi visibili, non affermazioni sui loro risultati.

Per ogni nuovo articolo:

1. partire da una domanda cercata da PMI, titolari o responsabili operativi,
   non da una tecnologia;
2. chiarire per chi il problema diventa rilevante, con segnali, esempi generali
   e decisioni da prendere;
3. collegare l'articolo a un servizio e ad altri approfondimenti dello stesso
   tema;
4. chiudere con una CTA a basso attrito e coerente, che inviti a descrivere un
   processo o a richiedere un primo confronto, senza promettere esiti;
5. usare NotarFlow come prova di metodo e progetto personale, mai come caso
   cliente o risultato commerciale.

I pilastri da rendere riconoscibili sono: processi Excel e manuali,
affidabilità e integrazione dei dati, dashboard utili alle decisioni, flussi
condivisi e automazione responsabile. Gli articoli devono raccontare il metodo
del sito — capire il flusso, delimitare un primo perimetro, costruire e
verificare — oltre alla storia tecnica del progetto personale.

## Regole per parlare di NotarFlow

1. Chiamarlo sempre progetto personale, prototipo o caso di studio tecnico.
2. Non pubblicare nomi, indirizzi email, testi delle comunicazioni, ricerche,
   URL con parametri, allegati, schermate con dati o dettagli del contesto
   personale che ha dato origine al progetto.
3. Non attribuire risultati, risparmi di tempo, tassi di risposta o giudizi di
   utenti senza una misura e un'autorizzazione pubblicabile.
4. Descrivere principi trasferibili: dati minimi, stati espliciti, conferma
   umana delle azioni irreversibili, audit e confini del primo rilascio.
5. Ogni articolo deve collegarsi naturalmente a uno o due servizi e chiudersi
   con una CTA prudente, non con una promessa di automazione completa.

## Bozze complete pronte per la revisione

| Priorità | Bozza | Intento | Servizi collegati |
| --- | --- | --- | --- |
| 1 | [Automazione assistita e controllo umano](drafts/notarflow-automazione-assistita.md) | Spiegare perché non tutte le azioni ripetitive devono diventare automatiche fino all'ultimo click. | Automazione Excel e processi; web app freelance |
| 2 | [Stati, snapshot e storico operativo](drafts/notarflow-stati-snapshot-storico.md) | Mostrare come uno storico affidabile nasce dalla modellazione del flusso, non da una semplice lista di invii. | Software interni per PMI; dashboard e report |
| 3 | [Privacy by design per piccoli strumenti](drafts/notarflow-privacy-by-design.md) | Rendere concreto il tema della separazione tra codice, configurazione privata e dati operativi. | Web app freelance; integrazione database e API |

## Backlog da sviluppare

| Priorità | Titolo di lavoro | Domanda che intercetta | Angolo NotarFlow / contenuto |
| --- | --- | --- | --- |
| 4 | Quando un'email non è solo un'email: progettare invii con stati e verifiche | Come evitare duplicati o invii non tracciati in un flusso commerciale o operativo? | Stati, bozza, esito incerto, conferma manuale; senza riferimenti al caso d'uso reale. |
| 5 | Il primo database per un processo interno: quali dati salvare davvero | Quando un elenco diventa un database e quali campi servono? | Contatti, snapshot, eventi, esclusioni e storico come modello generale. |
| 6 | Automazione locale, web app o integrazione: come scegliere il primo perimetro | Quale forma tecnica è proporzionata al problema? | Confronto tra script, dashboard locale, web app condivisa e API. |
| 7 | Come progettare una coda di lavoro che non perda il contesto | Cosa serve per sapere chi deve fare il prossimo passo? | Stati, lock, eccezioni e revisione, applicabili a richieste e pratiche. |
| 8 | Dati sensibili in un prototipo: cinque domande prima di collegare un servizio esterno | Cosa valutare prima di OAuth, API cloud o automazioni con dati personali? | Minimizzazione, consenso, archiviazione locale, rischi e confini tecnici. |
| 9 | Dal preventivo ricevuto al confronto utile: perché prima serve un modello di dati | Come trasformare risposte non uniformi in una decisione leggibile? | Totale, note, allegati e possibili voci future senza inventare categorie. |
| 10 | Il valore di un pulsante che non invia | Perché preview, conferma e recupero sono funzionalità e non frizioni? | Human-in-the-loop, azioni irreversibili e UX responsabile. |

## Sequenza di pubblicazione consigliata

1. Pubblicare prima **Automazione assistita e controllo umano**: è vicino agli
   articoli esistenti su Excel e software interno e presenta il progetto senza
   dettagliare un contesto sensibile.
2. Dopo qualche settimana, pubblicare **Stati, snapshot e storico operativo**:
   approfondisce il metodo tecnico e rimanda a software interni e dashboard.
3. Pubblicare **Privacy by design per piccoli strumenti** quando le pagine sui
   servizi sono già collegate tra loro: è un contenuto più tecnico e beneficia
   di un lettore che ha già incontrato il metodo.
4. Per ogni pubblicazione: trasferire il testo in `src/content.ts`, creare la
   pagina SEO in `approfondimenti/<slug>/index.html`, aggiornare
   `public/sitemap.xml`, eseguire `npm run build` e verificare manualmente i
   metadati.

## Criterio di revisione prima della pubblicazione

- Il titolo parte da un problema osservabile, non da una tecnologia.
- Il progetto personale è dichiarato senza ambiguità.
- Ogni esempio è generale, inventato per spiegare o privo di dati personali.
- La CTA invita a descrivere un processo, non promette un risultato.
- Il testo non contiene informazioni che non dovrebbero restare indicizzate
  da un motore di ricerca.
