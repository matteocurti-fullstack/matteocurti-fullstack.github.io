export const siteUrl = "https://matteocurti-fullstack.github.io";
export const contactEmail = "matteocurtilavoro@gmail.com";
export const linkedinProfileUrl = "https://www.linkedin.com/in/matteo-curti-835323162/";

export const servicesHubPath = "/servizi/";
export const insightsHubPath = "/approfondimenti/";
export const aboutPath = "/chi-sono/";

export type Service = {
  slug: string;
  path: string;
  number: string;
  eyebrow: string;
  cardTitle: string;
  cardText: string;
  title: string;
  intro: string;
  signals: string[];
  considerations: Array<{ title: string; text: string }>;
  steps: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
  ctaLabel: string;
  ctaSubject: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "automazione-excel-processi",
    path: "/servizi/automazione-excel-processi/",
    number: "01",
    eyebrow: "Servizi · processi e automazioni",
    cardTitle: "Automazione di processi Excel e manuali",
    cardText: "Per i flussi in cui si ricopiano dati, si rincorrono versioni diverse o i controlli dipendono dalla memoria di una persona.",
    title: "Meno passaggi manuali nei file che usate ogni giorno.",
    intro: "Se un'attività richiede di copiare dati, ricomporre fogli o rincorrere versioni diverse, partiamo da lì. Analizziamo il flusso attuale e definiamo un primo passaggio più chiaro, senza cambiare tutto insieme.",
    signals: [
      "Ogni periodo qualcuno ricompone gli stessi dati da più file.",
      "Le formule o i controlli importanti sono conosciuti da poche persone.",
      "Lo stesso dato viene copiato, corretto o verificato più volte.",
    ],
    considerations: [
      {
        title: "Il flusso reale",
        text: "Da dove arriva il dato, chi lo modifica e quale risultato deve produrre ogni passaggio.",
      },
      {
        title: "Regole e controlli",
        text: "Quali verifiche servono davvero, dove nascono gli errori e quali eccezioni vanno gestite.",
      },
      {
        title: "Un primo perimetro utile",
        text: "Se basta organizzare meglio un file, se serve automatizzare una parte o se occorre uno strumento condiviso.",
      },
    ],
    steps: [
      {
        title: "Mappiamo un passaggio",
        text: "Descriviamo input, persone coinvolte, controlli e output senza chiedere file o dati sensibili via email.",
      },
      {
        title: "Scegliamo il punto fragile",
        text: "Partiamo dal passaggio più ripetitivo, più difficile da verificare o più costoso da ricostruire.",
      },
      {
        title: "Valutiamo il primo miglioramento",
        text: "Definiamo una soluzione proporzionata: regole chiare, modello dati, automazione o un piccolo pannello operativo.",
      },
    ],
    faqs: [
      {
        question: "Quando basta organizzare meglio Excel e quando serve automatizzare?",
        answer: "Dipende da frequenza, numero di persone coinvolte, controlli necessari e costo degli errori. La prima analisi serve proprio a non costruire più del necessario.",
      },
      {
        question: "Si può iniziare da un singolo file?",
        answer: "Sì. Un file o un passaggio ricorrente può essere un perimetro sensato per capire il problema e verificare il valore di un intervento più ampio.",
      },
    ],
    ctaLabel: "Raccontami il flusso Excel",
    ctaSubject: "Vorrei parlare di un processo Excel o manuale",
    related: ["dashboard-report", "software-interni-pmi"],
  },
  {
    slug: "dashboard-report",
    path: "/servizi/dashboard-report/",
    number: "02",
    eyebrow: "Servizi · dati e decisioni",
    cardTitle: "Dashboard e report aziendali su misura",
    cardText: "Per rendere leggibili dati, priorità e stato del lavoro senza creare l'ennesimo foglio da aggiornare.",
    title: "Dati operativi leggibili, senza un altro foglio da rincorrere.",
    intro: "Una dashboard è utile quando aiuta a capire cosa sta succedendo e quale passo fare. Definiamo prima dati, fonti e domande; poi progettiamo un report o un pannello essenziale.",
    signals: [
      "Il report viene ricostruito ogni volta da fonti diverse.",
      "Lo stato delle attività è poco visibile finché qualcuno non lo chiede.",
      "Ci sono molte metriche disponibili, ma poche rispondono a una decisione concreta.",
    ],
    considerations: [
      {
        title: "Le domande utili",
        text: "Quali decisioni devono essere più rapide e quali informazioni servono davvero per prenderle.",
      },
      {
        title: "Fonte e aggiornamento",
        text: "Da quali dati parte il report, con quale frequenza cambiano e come riconoscere un valore affidabile.",
      },
      {
        title: "Una lettura essenziale",
        text: "Priorità, eccezioni e tendenze prima di grafici superflui o indicatori senza un'azione collegata.",
      },
    ],
    steps: [
      {
        title: "Partiamo dalle decisioni",
        text: "Prima dei grafici, individuiamo cosa deve diventare più visibile per chi usa il report.",
      },
      {
        title: "Verifichiamo le fonti",
        text: "Mappiamo dati disponibili, responsabilità di aggiornamento e regole che ne determinano la qualità.",
      },
      {
        title: "Progettiamo una prima vista",
        text: "Costruiamo un pannello comprensibile, testabile con gli utenti e migliorabile nel tempo.",
      },
    ],
    faqs: [
      {
        question: "Quali dati servono prima di creare una dashboard?",
        answer: "Servono dati identificabili, una domanda operativa chiara e una regola condivisa su chi aggiorna o verifica le informazioni.",
      },
      {
        question: "Ogni quanto deve aggiornarsi un report?",
        answer: "La frequenza dipende dalla decisione che deve supportare. Un aggiornamento continuo non è sempre utile né necessario.",
      },
    ],
    ctaLabel: "Parliamo dei tuoi report",
    ctaSubject: "Vorrei parlare di dashboard o report operativi",
    related: ["automazione-excel-processi", "integrazione-database-api"],
  },
  {
    slug: "software-interni-pmi",
    path: "/servizi/software-interni-pmi/",
    number: "03",
    eyebrow: "Servizi · strumenti condivisi",
    cardTitle: "Software interni per PMI",
    cardText: "Per procedure che vivono tra file, messaggi e memoria delle persone e hanno bisogno di stati, ruoli e dati più visibili.",
    title: "Uno strumento interno quando file e messaggi non bastano più.",
    intro: "Quando una procedura vive tra file, chat e memoria delle persone, un piccolo software interno può rendere passaggi, stati e responsabilità più visibili. Si parte dal pezzo più delicato, non da una piattaforma enorme.",
    signals: [
      "Le stesse informazioni vengono inserite più volte in strumenti diversi.",
      "Non è sempre chiaro chi deve fare il prossimo passo.",
      "Le code di lavoro o le richieste aperte sono difficili da seguire.",
    ],
    considerations: [
      {
        title: "Ruoli e responsabilità",
        text: "Chi crea, aggiorna, approva o consulta un'informazione e quali azioni devono restare tracciabili.",
      },
      {
        title: "Stati e passaggi",
        text: "Come un'attività passa da una persona all'altra e quali condizioni permettono di avanzare in modo chiaro.",
      },
      {
        title: "Dati necessari",
        text: "Quali informazioni vanno raccolte una volta sola, con regole coerenti e senza duplicazioni evitabili.",
      },
    ],
    steps: [
      {
        title: "Delimitiamo una procedura",
        text: "Scegliamo un flusso frequente o fragile, invece di provare a digitalizzare tutto in un solo progetto.",
      },
      {
        title: "Disegniamo il percorso",
        text: "Rendiamo espliciti utenti, dati, stati e controlli prima di parlare di schermate o funzionalità.",
      },
      {
        title: "Costruiamo un primo rilascio",
        text: "Valutiamo un perimetro ridotto, utilizzabile e verificabile con chi svolge il lavoro ogni giorno.",
      },
    ],
    faqs: [
      {
        question: "Quando serve uno strumento dedicato invece di un foglio?",
        answer: "Quando le informazioni devono essere condivise, hanno stati o permessi diversi, richiedono controlli coerenti oppure non possono dipendere da una singola versione del file.",
      },
      {
        question: "Da quale processo conviene iniziare?",
        answer: "Da quello più ripetitivo, più esposto a errori o più difficile da seguire. Un primo caso concreto aiuta a prendere decisioni migliori sui successivi.",
      },
    ],
    ctaLabel: "Descrivimi il processo interno",
    ctaSubject: "Vorrei parlare di uno strumento interno",
    related: ["web-app-freelance", "automazione-excel-processi"],
  },
  {
    slug: "integrazione-database-api",
    path: "/servizi/integrazione-database-api/",
    number: "04",
    eyebrow: "Servizi · integrazioni dati",
    cardTitle: "Integrazione database, API e strumenti aziendali",
    cardText: "Per collegare file, database e applicazioni senza perdere il significato dei dati o moltiplicare le copie.",
    title: "Far dialogare dati, database e strumenti già in uso.",
    intro: "Le informazioni non devono necessariamente vivere tutte nello stesso programma. Individuiamo fonti, regole di aggiornamento e dati da tracciare prima di collegare database, file o API.",
    signals: [
      "Lo stesso cliente, ordine o prodotto ha nomi o codici diversi in più strumenti.",
      "Gli aggiornamenti passano manualmente da un file a un gestionale o a un servizio esterno.",
      "Non è semplice capire quale sia il dato corretto o ricostruire quando è cambiato.",
    ],
    considerations: [
      {
        title: "Mappa delle fonti",
        text: "Dove nascono le informazioni, chi le aggiorna e quali sistemi devono consultarle o riceverle.",
      },
      {
        title: "Regole di allineamento",
        text: "Identificativi, frequenza, eccezioni e responsabilità necessari per evitare copie incoerenti.",
      },
      {
        title: "Tracciabilità",
        text: "Quali cambiamenti vanno conservati e quali controlli servono prima che un dato alimenti un altro strumento.",
      },
    ],
    steps: [
      {
        title: "Mappiamo dati e sistemi",
        text: "Raccogliamo le fonti esistenti e il percorso che segue oggi ogni informazione importante.",
      },
      {
        title: "Definiamo una regola condivisa",
        text: "Chiariamo quale fonte è autorevole, cosa succede alle eccezioni e come riconciliare i dati.",
      },
      {
        title: "Progettiamo un collegamento misurato",
        text: "Valutiamo import, database, API o automazioni partendo dal punto in cui l'integrazione porta più chiarezza.",
      },
    ],
    faqs: [
      {
        question: "Cosa serve per collegare due strumenti?",
        answer: "Servono prima di tutto una mappa dei dati, identificativi affidabili e regole su cosa aggiornare, quando e in caso di errore.",
      },
      {
        question: "Come si decide quale dato è quello corretto?",
        answer: "Si identifica una fonte autorevole per ciascuna informazione e si rende esplicita la regola con cui eventuali copie vengono aggiornate o controllate.",
      },
    ],
    ctaLabel: "Mappiamo le fonti dati",
    ctaSubject: "Vorrei parlare di integrazione dati, database o API",
    related: ["dashboard-report", "software-interni-pmi"],
  },
  {
    slug: "web-app-freelance",
    path: "/servizi/web-app-freelance/",
    number: "05",
    eyebrow: "Servizi · sviluppo web",
    cardTitle: "Sviluppatore freelance per web app e automazioni",
    cardText: "Per team e PMI che hanno bisogno di uno strumento condiviso nel browser, costruito intorno a un processo concreto.",
    title: "Web app su misura, costruite intorno al lavoro da fare.",
    intro: "Progetto e sviluppo applicazioni web quando serve uno strumento condiviso, accessibile dal browser e costruito sul flusso reale. Prima definiamo problema, utenti, dati e primo perimetro; poi valutiamo come procedere.",
    signals: [
      "Serve un'interfaccia condivisa per raccogliere, consultare o aggiornare dati.",
      "Un prototipo aiuterebbe a chiarire il valore prima di estendere il progetto.",
      "Un processo esistente richiede regole, visibilità o controlli che i file non rendono semplici.",
    ],
    considerations: [
      {
        title: "Utenti e compiti",
        text: "Chi usa lo strumento, con quali obiettivi e quali azioni devono essere rapide, chiare o protette.",
      },
      {
        title: "Dati e regole",
        text: "Quali informazioni servono, dove vivono e quali controlli rendono il flusso affidabile nel tempo.",
      },
      {
        title: "Primo rilascio",
        text: "Quale parte può essere realizzata e provata per prima, senza impegnarsi subito in un progetto troppo ampio.",
      },
    ],
    steps: [
      {
        title: "Mettiamo a fuoco il problema",
        text: "Partiamo dal lavoro quotidiano e dalla decisione o attività che lo strumento deve rendere più semplice.",
      },
      {
        title: "Definiamo il perimetro",
        text: "Stabiliamo utenti, dati, funzionalità essenziali e confini del primo rilascio prima di sviluppare.",
      },
      {
        title: "Costruiamo e verifichiamo",
        text: "Realizziamo un primo strumento utilizzabile, con attenzione a chiarezza, sicurezza e possibilità di evoluzione.",
      },
    ],
    faqs: [
      {
        question: "È necessario definire tutto prima di iniziare?",
        answer: "No. Serve definire bene il primo perimetro; le decisioni successive possono basarsi sull'uso reale e su ciò che emerge dal primo rilascio.",
      },
      {
        question: "Come si delimita un primo rilascio utile?",
        answer: "Si sceglie un gruppo di utenti, un flusso e un risultato osservabile. L'obiettivo è avere uno strumento utilizzabile, non una demo troppo generica.",
      },
    ],
    ctaLabel: "Parliamo della tua web app",
    ctaSubject: "Vorrei parlare di una web app o automazione",
    related: ["software-interni-pmi", "integrazione-database-api"],
  },
];

export const methodSteps = [
  ["Ascoltare", "Partiamo dal processo esistente, non da una soluzione preconfezionata."],
  ["Delimitare", "Scegliamo il passaggio più costoso, ripetitivo o fragile da migliorare per primo."],
  ["Costruire", "Realizziamo un pilota concreto, con dati, stati e conferme comprensibili."],
  ["Verificare", "Misuriamo l'uso reale, gli errori evitati e il passo successivo più sensato."],
] as const;

export const caseStudies = [
  {
    label: "Progetto personale · in evoluzione",
    title: "Dati operativi, snapshot e flussi controllati",
    text: "Un laboratorio software per esplorare come rendere persistenti dati e code di lavoro, mantenere uno storico confrontabile e gestire annullamenti o interruzioni senza perdere il contesto.",
    tags: ["Python", "SQLite", "FastAPI", "React"],
  },
  {
    label: "Approccio applicabile",
    title: "Da file dispersi a una fonte di verità",
    text: "Un modello di lavoro per capire quali file sono davvero operativi, quali dati devono essere tracciati e quando un database diventa più utile di una raccolta di copie.",
    tags: ["Processi", "Dati", "Report"],
  },
  {
    label: "Ricerca e progettazione",
    title: "Conoscenza interna consultabile",
    text: "Studio di strumenti che rendano documenti e procedure più facili da trovare, con attenzione a fonti, aggiornamento delle informazioni e controllo degli accessi.",
    tags: ["RAG", "Fonti", "Qualità dati"],
  },
];

export type InsightSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  cards?: Array<{ title: string; text: string }>;
};

export type Insight = {
  slug: string;
  path: string;
  title: string;
  cardTitle: string;
  description: string;
  intro: string;
  takeaway: string;
  publishedAt: string;
  publishedLabel: string;
  readTime: string;
  sections: InsightSection[];
  faqs?: Array<{ question: string; answer: string }>;
  ctaLabel: string;
  ctaSubject: string;
  relatedServices: string[];
  relatedInsights: string[];
};

export const insights: Insight[] = [
  {
    slug: "automazione-assistita-controllo-umano",
    path: "/approfondimenti/automazione-assistita-controllo-umano/",
    title: "Automazione assistita: quando il controllo umano è parte della soluzione",
    cardTitle: "Quando il controllo umano serve in un'automazione",
    description: "Perché un processo ripetitivo non deve sempre arrivare fino all'invio automatico: stati, conferme e storico per progettare automazioni più affidabili.",
    intro: "Automatizzare non significa togliere ogni decisione a chi lavora. Significa ridurre i passaggi ripetitivi, rendere visibili le informazioni necessarie e lasciare una conferma dove un'azione è difficile da annullare.",
    takeaway: "Una buona automazione prepara il lavoro e rende verificabile il passo successivo; non deve necessariamente eseguire al posto della persona l'azione più delicata.",
    publishedAt: "2026-08-10",
    publishedLabel: "10 agosto 2026",
    readTime: "6 min di lettura",
    sections: [
      {
        title: "Il problema non è il numero di click",
        paragraphs: [
          "Un processo con molti click non è automaticamente un buon candidato per un robot che faccia tutto. La domanda utile è un'altra: quale passaggio richiede davvero giudizio, responsabilità o una verifica esterna?",
          "Preparare un elenco, applicare un template, controllare un campo obbligatorio o ordinare una coda sono attività che spesso possono diventare più rapide e coerenti. L'invio definitivo di un messaggio, l'approvazione di un pagamento o la modifica di un dato ufficiale sono diversi: il software può preparare il contesto, ma non sempre può sapere se l'azione sia appropriata in quel momento.",
        ],
      },
      {
        title: "Tre domande prima di automatizzare",
        paragraphs: [
          "Quando una risposta resta incerta, la soluzione non è fingere che il sistema sappia di più. È progettare un passaggio che renda l'incertezza visibile e richieda una scelta esplicita.",
        ],
        cards: [
          {
            title: "Reversibilità",
            text: "L'azione può essere annullata senza conseguenze rilevanti oppure produce un effetto difficile da ritirare?",
          },
          {
            title: "Evidenza dell'esito",
            text: "Il sistema può sapere con certezza che l'azione è avvenuta, o può solo registrare che è stata preparata?",
          },
          {
            title: "Responsabilità",
            text: "Chi deve controllare destinatario, contenuto, eccezione o autorizzazione prima dell'ultimo passaggio?",
          },
        ],
      },
      {
        title: "Separare preparazione, conferma e storico",
        paragraphs: [
          "In molti flussi manuali questi momenti vengono confusi: una persona crea una bozza, apre un programma esterno, esegue un'azione e poi prova a ricordare cosa sia già successo. Il risultato è una lista poco affidabile, dove è difficile distinguere ciò che è pronto da ciò che è davvero concluso.",
          "Un'automazione assistita può rendere il percorso esplicito senza trasformarlo in una piattaforma enorme.",
        ],
        bullets: [
          "L'attività o il contatto viene controllato.",
          "Il sistema prepara il contesto individuale.",
          "La persona apre e verifica la bozza o l'azione nel proprio strumento.",
          "La persona conferma l'esito oppure segnala che va rivisto.",
          "Lo storico conserva ciò che è stato registrato e riduce il rischio di ricominciare per errore dallo stesso punto.",
        ],
      },
      {
        title: "Cosa mostra il progetto personale NotarFlow",
        paragraphs: [
          "NotarFlow è un progetto personale locale e un caso di studio tecnico, non un progetto cliente né una dimostrazione di risultati commerciali. Esplora un flusso con contatti, template, bozze individuali e storico per capire come mantenere il controllo nei punti irreversibili.",
          "Nel prototipo, il sistema può preparare una bozza individuale, il programma esterno scelto dall'utente resta responsabile dell'azione finale, un elemento aperto non viene considerato automaticamente concluso e un esito dubbio rimane visibile finché una persona non lo chiarisce. Lo stesso principio è trasferibile a richieste di approvazione, aggiornamenti di dati, invii di documenti o passaggi che oggi vivono tra file e messaggi.",
        ],
      },
      {
        title: "Tre errori che il flusso dovrebbe rendere difficili",
        paragraphs: [
          "Un controllo umano non annulla il valore dell'automazione. Può ridurre la ricostruzione del contesto, mantenendo una conferma solo dove serve.",
        ],
        cards: [
          {
            title: "Scambiare una bozza per un'azione conclusa",
            text: "Aprire una pagina o generare un link non prova che un messaggio sia stato inviato. È più utile distinguere tra pronto, richiesto e confermato.",
          },
          {
            title: "Rendere troppo facile il reinvio",
            text: "Un pulsante ripetuto senza protezioni può creare duplicati. Identificativi, blocchi e recuperi espliciti possono ridurre questo rischio.",
          },
          {
            title: "Nascondere le eccezioni",
            text: "Una bozza può non aprirsi o una persona può dover escludere un elemento. Le eccezioni sono parte del flusso, non un dettaglio da gestire dopo.",
          },
        ],
      },
      {
        title: "Da dove iniziare in un processo reale",
        paragraphs: [
          "Un primo perimetro utile può essere una sola coda di lavoro con una fonte chiara per i dati, pochi stati comprensibili, una distinzione tra preparazione e conferma e uno storico minimo. Solo dopo aver osservato l'uso reale ha senso valutare integrazioni, invii automatizzati o ruoli più articolati.",
          "Per descrivere il caso in un primo confronto bastano il processo, il passaggio irreversibile o dubbio e la persona che oggi deve confermarlo. Non servono allegati, credenziali o dati personali.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quando è adatta un'automazione completa?",
        answer: "Quando il passaggio è ripetitivo, le regole sono chiare, l'esito è verificabile e non serve un giudizio contestuale prima dell'azione. Se uno di questi elementi manca, può essere più appropriata un'automazione assistita.",
      },
      {
        question: "La conferma umana annulla il beneficio dell'automazione?",
        answer: "No, se il software prepara dati, controlli e contesto in modo coerente. La persona può concentrarsi sulla scelta che richiede responsabilità, invece di ricostruire ogni volta il lavoro da file, copie e finestre aperte.",
      },
      {
        question: "Cosa serve per capire da dove partire?",
        answer: "È sufficiente descrivere un flusso ricorrente, il passaggio che non può essere annullato facilmente e il punto in cui oggi l'esito è incerto. Il primo scambio non richiede file o dati sensibili.",
      },
    ],
    ctaLabel: "Descrivimi il passaggio che richiede una conferma",
    ctaSubject: "Vorrei valutare un'automazione assistita per un processo",
    relatedServices: ["automazione-excel-processi", "web-app-freelance"],
    relatedInsights: ["quando-excel-non-basta-piu-azienda", "stati-snapshot-storico-operativo"],
  },
  {
    slug: "stati-snapshot-storico-operativo",
    path: "/approfondimenti/stati-snapshot-storico-operativo/",
    title: "Quando una lista non basta: stati, snapshot e storico operativo",
    cardTitle: "Quando una lista non basta per seguire un processo",
    description: "Perché una semplice lista non basta per seguire un processo: come usare stati, snapshot ed eventi per costruire uno storico operativo più affidabile.",
    intro: "Molti processi iniziano con una lista. Quando arrivano eccezioni, correzioni e passaggi di consegna, non basta più sapere se una riga è “fatta”: serve conservare il contesto che spiega cosa è successo e quale passo viene dopo.",
    takeaway: "Uno storico utile non registra solo l'ultimo stato: conserva abbastanza contesto da spiegare una decisione passata e da evitare che il lavoro riparta per errore.",
    publishedAt: "2026-08-10",
    publishedLabel: "10 agosto 2026",
    readTime: "7 min di lettura",
    sections: [
      {
        title: "Quando una lista smette di bastare",
        paragraphs: [
          "Una riga per una richiesta, un contatto, un documento o un'attività può funzionare finché il percorso è lineare. Poi qualcosa viene preparato ma non confermato, un dato viene corretto, una persona deve rivedere un passaggio oppure serve capire quale informazione fosse valida in un momento precedente.",
          "Quando queste domande diventano frequenti, il problema non è la grafica della lista. È il modello con cui il processo conserva il contesto.",
        ],
        bullets: [
          "Non è chiaro chi debba fare il prossimo passo.",
          "Un esito può essere richiesto a uno strumento esterno, ma non ancora verificato.",
          "Una correzione rischia di riscrivere il significato dello storico.",
          "Una coda condivisa può generare doppie lavorazioni o recuperi non tracciati.",
        ],
      },
      {
        title: "Stato, evento e snapshot rispondono a domande diverse",
        paragraphs: [
          "Raccogliere tutto in una sola colonna rende il modello poco leggibile. Separare questi concetti aiuta a capire sia cosa può succedere ora sia che cosa è accaduto prima.",
        ],
        cards: [
          {
            title: "Stato",
            text: "Indica dove si trova ora l'attività e quale comportamento è consentito come passo successivo.",
          },
          {
            title: "Evento",
            text: "Conserva una traccia essenziale di una transizione importante, come una preparazione, una conferma o un'esclusione.",
          },
          {
            title: "Snapshot",
            text: "Mantiene il minimo contesto necessario per leggere correttamente un evento passato anche quando il record corrente cambia.",
          },
        ],
      },
      {
        title: "Cosa mostra il progetto personale NotarFlow",
        paragraphs: [
          "NotarFlow è un prototipo personale e un caso di studio tecnico, non il lavoro di un cliente. Nel progetto ogni attività registrata conserva il destinatario e il contesto operativo minimo utile a leggere lo storico; un contatto può essere corretto in seguito senza riscrivere ciò che era stato registrato.",
          "Anche la provenienza resta esplicita: un'attività preparata dal flusso e un'azione manuale registrata nello storico non sono la stessa cosa, pur potendo comparire nella stessa vista di revisione. Il principio è applicabile a richieste interne, preventivi, approvazioni, manutenzioni, ticket e importazioni di dati.",
        ],
      },
      {
        title: "Proteggere il flusso dai duplicati",
        paragraphs: [
          "Uno stato esplicito può rendere più difficile preparare o prendere in carico due volte la stessa attività. In un file condiviso questo controllo resta spesso affidato a memoria e messaggi; in uno strumento dedicato può diventare una regola del modello.",
        ],
        bullets: [
          "Un elemento già in lavorazione non rientra nella selezione standard.",
          "Un tentativo di recupero richiede una conferma esplicita.",
          "Un esito incerto non viene trasformato in successo per comodità.",
          "Una registrazione manuale lascia comunque una traccia e può ridurre un reinvio involontario.",
        ],
      },
      {
        title: "Uno storico utile anche per decidere",
        paragraphs: [
          "Quando lo storico è leggibile, può diventare la base di una dashboard semplice. Non servono subito molti grafici: una vista operativa può mostrare attività pronte ma ferme, elementi che richiedono una verifica, chiusure con il contesto necessario ed eccezioni ricorrenti.",
          "La dashboard arriva dopo il modello. Se gli stati sono ambigui o i dati storici vengono riscritti, un grafico rende soltanto più veloce la lettura di un'informazione poco affidabile.",
        ],
      },
      {
        title: "Il primo perimetro sensato",
        paragraphs: [
          "Non serve digitalizzare l'intera azienda. Si può partire da una sola coda con pochi stati, un contesto storico essenziale e una vista che aiuti qualcuno a capire cosa fare oggi.",
        ],
        bullets: [
          "Quali sono i pochi stati che cambiano davvero il prossimo passo?",
          "Quali informazioni devono restare leggibili nello storico anche se il record corrente viene corretto?",
          "Quali transizioni devono richiedere una conferma o lasciare una traccia?",
          "Quale vista aiuterebbe una persona a capire cosa fare oggi?",
        ],
      },
    ],
    faqs: [
      {
        question: "Quando può ancora bastare Excel per seguire una coda?",
        answer: "Quando gli utenti sono pochi, le responsabilità sono semplici, gli stati limitati e un controllo periodico è sufficiente. Se il prossimo passo, le eccezioni o lo storico devono essere condivisi con regole coerenti, può essere necessario un perimetro diverso.",
      },
      {
        question: "Serve registrare ogni click?",
        answer: "No. Uno storico utile non è telemetria completa: basta registrare le transizioni che aiutano a capire perché un elemento si trova in uno stato e come evitare un recupero o una duplicazione involontaria.",
      },
      {
        question: "Cosa serve per definire il primo rilascio?",
        answer: "Una coda concreta, le persone che la usano, pochi stati, un'eccezione ricorrente e il minimo contesto da conservare nello storico. Non è necessario sostituire tutto il sistema esistente.",
      },
    ],
    ctaLabel: "Raccontami la coda che oggi è difficile da seguire",
    ctaSubject: "Vorrei rendere più chiaro uno storico o una coda di lavoro",
    relatedServices: ["software-interni-pmi", "dashboard-report"],
    relatedInsights: ["software-interno-o-excel-condiviso", "dashboard-aziendale-quali-dati-servono", "automazione-assistita-controllo-umano"],
  },
  {
    slug: "privacy-by-design-piccoli-strumenti",
    path: "/approfondimenti/privacy-by-design-piccoli-strumenti/",
    title: "Dati sensibili in un piccolo strumento: dove tenere codice, configurazioni e file",
    cardTitle: "Dati sensibili in un piccolo strumento: le prime scelte",
    description: "Come separare codice, configurazioni private e dati operativi quando si costruisce un piccolo strumento interno o un prototipo con informazioni sensibili.",
    intro: "Un piccolo script, un foglio evoluto o una dashboard locale possono contenere più informazioni di quanto sembri. La domanda iniziale non è solo come proteggerle: è quali dati servono davvero, dove vivono e chi può recuperarli.",
    takeaway: "Separare codice, configurazioni e dati operativi limita ciò che può essere condiviso, versionato o perso per errore e rende più chiaro il perimetro tecnico del progetto.",
    publishedAt: "2026-08-10",
    publishedLabel: "10 agosto 2026",
    readTime: "6 min di lettura",
    sections: [
      {
        title: "La privacy inizia dalle prime scelte",
        paragraphs: [
          "La privacy non inizia quando il progetto diventa grande. Inizia quando si decide quali dati servono davvero, dove vivono e chi può recuperarli. Indirizzi, testi di comunicazioni, documenti, credenziali o note operative non dovrebbero finire per errore in un repository pubblico, in una cartella condivisa o in uno screenshot.",
          "Questa è una guida tecnica, non una certificazione di conformità né una valutazione legale. Serve a rendere più responsabili le prime scelte su prototipi, piccoli strumenti interni e integrazioni.",
        ],
      },
      {
        title: "Il repository non è il posto per tutto",
        paragraphs: [
          "Un repository Git è utile per codice, documentazione, esempi fittizi e regole di build. Non è il posto giusto per dati reali di persone, file ricevuti, configurazioni operative o token. Anche un repository privato può essere clonato, archiviato, condiviso con un collaboratore o reso pubblico per errore in futuro.",
          "Una separazione iniziale semplice rende più sicuro anche il lavoro quotidiano.",
        ],
        cards: [
          {
            title: "Codice e documentazione",
            text: "Sorgenti, test con dati fittizi e istruzioni possono vivere nel repository versionato.",
          },
          {
            title: "Configurazione privata",
            text: "Template reali, indirizzi e impostazioni locali dovrebbero restare fuori dal versionamento o in un archivio sicuro.",
          },
          {
            title: "Dati operativi",
            text: "Record, allegati, storico ed esportazioni hanno bisogno di un database o di una cartella dati separata dal checkout del codice.",
          },
        ],
      },
      {
        title: "Ridurre i dati prima di proteggerli",
        paragraphs: [
          "La domanda non è solo “come cifrare tutto?”. Prima conviene chiedersi se una determinata informazione serva davvero. Conservare HTML completo, risposte di servizi esterni, metadati non necessari o copie multiple di documenti aumenta la superficie da gestire senza aggiungere valore operativo.",
          "NotarFlow è un progetto personale costruito per esplorare un flusso locale. Mostra un principio trasferibile: un modello dati piccolo, un template privato separato dal codice e una root dati dedicata possono rendere più chiari sia il prodotto sia le sue responsabilità. Non è una prova di conformità né un caso cliente.",
        ],
      },
      {
        title: "Il file .gitignore aiuta, ma non è una cassaforte",
        paragraphs: [
          "Escludere file e cartelle dal versionamento è necessario, ma non basta da solo. Un nome di file errato, una cartella temporanea o un comando di staging troppo ampio possono comunque portare materiale privato nell'indice Git.",
        ],
        bullets: [
          "Tenere configurazioni reali fuori dal repository quando possibile.",
          "Usare esempi anonimi e vuoti per spiegare la struttura senza distribuire valori reali.",
          "Controllare il diff prima di ogni commit.",
          "Ignorare in modo esplicito cartelle dati e allegati.",
          "Usare solo record fittizi nei test e nella documentazione.",
        ],
      },
      {
        title: "Locale non significa automaticamente sicuro",
        paragraphs: [
          "Uno strumento locale può ridurre alcuni rischi perché non espone per forza un database su internet e può funzionare senza consegnare dati a un servizio esterno. Restano però importanti chi usa il computer, dove vengono effettuati backup, quali permessi hanno le cartelle e se un allegato può essere aperto da un processo non previsto.",
          "Per un uso individuale possono essere appropriati dati locali e un server in ascolto solo sul computer. Per un team servono in genere account, ruoli, backup e responsabilità più esplicite. Per integrazioni esterne occorre chiarire autorizzazioni, scopo dei dati, tempi di conservazione e comportamento in caso di errore.",
        ],
      },
      {
        title: "Una checklist prima di condividere lo strumento",
        paragraphs: [
          "Le risposte non trasformano automaticamente un progetto in un sistema conforme a ogni requisito. Costruiscono però una base più responsabile per discutere con chi usa lo strumento, con un responsabile IT o con un consulente competente.",
        ],
        bullets: [
          "Quali dati sono indispensabili al flusso e quali possono non essere raccolti?",
          "Quali valori reali non devono mai entrare nel repository, nei test o nelle immagini della documentazione?",
          "Dove vivono configurazioni, database e allegati? Sono separati dal codice?",
          "Chi può aprire, modificare o scaricare i dati sul dispositivo o sul server?",
          "Come vengono gestiti correzioni, rimozioni, backup ed errori?",
        ],
      },
    ],
    faqs: [
      {
        question: "Un piccolo prototipo deve già essere conforme a tutti i requisiti privacy?",
        answer: "Le responsabilità dipendono dal contesto e richiedono valutazioni organizzative e, quando necessario, legali. Anche in un prototipo è però utile ridurre i dati, separare i valori privati dal codice e chiarire chi può accedere a cosa.",
      },
      {
        question: "Quando un uso locale è sufficiente e quando serve uno strumento condiviso?",
        answer: "Un uso individuale può funzionare con dati locali e confini chiari. Quando più persone devono accedere, modificare o approvare informazioni, diventano importanti account, ruoli, backup, responsabilità e un modello di accesso esplicito.",
      },
      {
        question: "Cosa serve per un primo confronto senza esporre dati sensibili?",
        answer: "Puoi descrivere il tipo di dato, chi deve accedervi e il passaggio che vuoi rendere più gestibile. File reali, credenziali e dettagli personali non sono necessari per delimitare il primo perimetro tecnico.",
      },
    ],
    ctaLabel: "Descrivimi il dato e il passaggio da proteggere",
    ctaSubject: "Vorrei valutare dati, configurazioni o integrazioni di un piccolo strumento",
    relatedServices: ["web-app-freelance", "integrazione-database-api"],
    relatedInsights: ["automazione-assistita-controllo-umano", "software-interno-o-excel-condiviso"],
  },
  {
    slug: "quando-excel-non-basta-piu-azienda",
    path: "/approfondimenti/quando-excel-non-basta-piu-azienda/",
    title: "Quando Excel non basta più in azienda",
    cardTitle: "Quando Excel non basta più in azienda",
    description: "Cinque segnali per capire se un processo Excel richiede regole più chiare, un'automazione mirata o uno strumento condiviso.",
    intro: "Excel non è il problema. È spesso uno strumento efficace per calcoli, analisi e attività circoscritte. Il punto cambia quando il lavoro quotidiano dipende da molte copie, controlli manuali e informazioni che passano da una persona all'altra senza una regola condivisa.",
    takeaway: "Prima di scegliere uno strumento, individua un passaggio concreto, la sua fonte, il controllo necessario e chi usa l'output.",
    publishedAt: "2026-08-03",
    publishedLabel: "3 agosto 2026",
    readTime: "7 min di lettura",
    sections: [
      {
        title: "Excel non è il problema: conta il contesto in cui viene usato",
        paragraphs: [
          "Un foglio può essere il posto giusto per un'analisi individuale, una simulazione o un elenco limitato. Diventa più difficile da governare quando rappresenta un processo condiviso: più persone lo aggiornano, il risultato serve ad altri strumenti o una decisione dipende dal fatto che quel dato sia aggiornato e corretto.",
          "In quel momento la domanda non è “dobbiamo abbandonare Excel?”. La domanda utile è: quale informazione deve essere affidabile, chi la modifica e quale passaggio oggi richiede più ricostruzioni, verifiche o solleciti?",
        ],
      },
      {
        title: "Cinque segnali da osservare",
        paragraphs: ["Un singolo segnale non impone un nuovo software. Più segnali insieme meritano però un confronto sul flusso."],
        bullets: [
          "Ogni settimana o mese qualcuno ricompone gli stessi dati da file diversi.",
          "Esistono più versioni del foglio e non è immediato sapere quale sia quella corretta.",
          "Formule, controlli o eccezioni importanti sono conosciuti soprattutto da una persona.",
          "Un errore viene scoperto tardi, quando il dato è già stato copiato in un report o comunicato ad altri.",
          "La stessa attività si ripete con gli stessi passaggi, ma senza una procedura o una responsabilità esplicita.",
        ],
      },
      {
        title: "La mappa minima prima di cambiare qualcosa",
        paragraphs: [
          "Per capire se e come intervenire non serve descrivere tutta l'azienda. Basta partire da un passaggio concreto e ricostruirne il percorso: attività, fonte del dato, persona responsabile, controllo e output successivo.",
          "Questa mappa rende visibili due aspetti che spesso restano impliciti: dove nasce il dato e dove può cambiare senza che qualcuno se ne accorga. È una base più utile di una lista generica di funzionalità desiderate e può essere preparata senza condividere file o dati sensibili.",
        ],
        cards: [
          {
            title: "Passaggio",
            text: "Quale attività si ripete, con quale frequenza e in quale punto oggi si perde più tempo o chiarezza.",
          },
          {
            title: "Fonte",
            text: "Da dove arriva l'informazione e quale formato deve avere per essere usata senza correzioni manuali.",
          },
          {
            title: "Responsabile",
            text: "Chi aggiorna o verifica il dato e chi deve poter capire quale sia il prossimo passo.",
          },
          {
            title: "Controllo",
            text: "Quale regola deve essere verificata, chi se ne occupa e cosa succede quando emerge un'eccezione.",
          },
          {
            title: "Output",
            text: "Quale decisione, report o attività dipende dal dato e con quale frequenza serve averlo aggiornato.",
          },
        ],
      },
      {
        title: "Tre opzioni proporzionate",
        paragraphs: [
          "Non tutti i casi richiedono una web app. Un percorso professionale parte dal proporzionare la soluzione al problema, invece di sostituire uno strumento solo perché è conosciuto o di moda.",
        ],
        cards: [
          {
            title: "Organizzare meglio il file",
            text: "Può bastare quando il flusso è piccolo: una struttura coerente, regole di inserimento, una fonte unica e controlli espliciti possono già ridurre molta confusione.",
          },
          {
            title: "Automatizzare un passaggio",
            text: "È utile quando un'operazione ricorrente è chiara: consolidare dati, validare un import o produrre un report seguendo regole condivise.",
          },
          {
            title: "Creare uno strumento condiviso",
            text: "Ha senso quando servono ruoli, stati, tracciabilità o una vista comune sul lavoro e un file non riesce più a rappresentarli con semplicità.",
          },
        ],
      },
      {
        title: "Come delimitare un primo intervento",
        paragraphs: [
          "Un buon primo perimetro non è “digitalizzare tutto”. Può essere un report ricorrente, un'importazione fragile o una richiesta che oggi passa tra file e messaggi. L'obiettivo è rendere quel passaggio più chiaro e verificabile, poi osservare cosa cambia nell'uso reale.",
          "Questo approccio evita due estremi: continuare a correggere lo stesso problema senza intervenire sulla causa, oppure avviare un progetto troppo grande prima di avere una regola condivisa sul dato. Per un primo confronto bastano il passaggio da esaminare, la fonte, chi lo svolge, il controllo necessario e il risultato atteso.",
        ],
      },
    ],
    faqs: [
      {
        question: "Devo sostituire tutti i file Excel?",
        answer: "No. Se il processo è limitato, un file organizzato meglio può essere la scelta più proporzionata. Si valuta un'automazione o uno strumento condiviso solo nel passaggio in cui versioni, controlli o responsabilità diventano difficili da gestire.",
      },
      {
        question: "Cosa serve per capire da dove iniziare?",
        answer: "È sufficiente descrivere un'attività ricorrente, da dove arriva il dato, chi la svolge, quale controllo serve e quale risultato deve produrre. Non occorre inviare file o dati sensibili nel primo scambio.",
      },
      {
        question: "Quando ha senso automatizzare invece di riorganizzare il file?",
        answer: "Quando un passaggio è ripetitivo, ha regole abbastanza chiare e richiede di ricopiare, validare o ricomporre sempre le stesse informazioni. Se il problema riguarda invece ruoli, stati e visibilità condivisa, può servire un perimetro diverso.",
      },
    ],
    ctaLabel: "Descrivimi passaggio, fonte e controllo",
    ctaSubject: "Vorrei descrivere un passaggio Excel da rendere più affidabile",
    relatedServices: ["automazione-excel-processi", "software-interni-pmi"],
    relatedInsights: ["software-interno-o-excel-condiviso", "dashboard-aziendale-quali-dati-servono", "automazione-assistita-controllo-umano"],
  },
  {
    slug: "dashboard-aziendale-quali-dati-servono",
    path: "/approfondimenti/dashboard-aziendale-quali-dati-servono/",
    title: "Dashboard aziendale: quali dati servono prima di costruirla",
    cardTitle: "Dashboard aziendale: quali dati servono prima di costruirla",
    description: "Le domande da definire prima di costruire una dashboard: decisioni, fonti affidabili, metriche, aggiornamento ed eccezioni operative.",
    intro: "Una dashboard utile non parte dal grafico. Parte dalla decisione che deve rendere più semplice: capire una priorità, individuare un'anomalia, seguire un'attività o decidere dove intervenire. Solo dopo ha senso scegliere i dati, chi li aggiorna e la forma in cui mostrarli.",
    takeaway: "Prima della visualizzazione, chiarisci la decisione, il segnale da leggere, la fonte, la frequenza e chi agisce quando emerge un'eccezione.",
    publishedAt: "2026-08-03",
    publishedLabel: "3 agosto 2026",
    readTime: "7 min di lettura",
    sections: [
      {
        title: "Una dashboard non è un insieme di grafici",
        paragraphs: [
          "Quando un report è difficile da usare, la causa non è sempre la sua estetica. Spesso mancano una domanda precisa, una definizione condivisa delle metriche o una regola su cosa fare quando un valore cambia. In quel caso aggiungere grafici rende più elegante un'incertezza che resta identica.",
          "Una dashboard utile mette in primo piano il contesto necessario per agire: che cosa sta accadendo, rispetto a quale riferimento, a chi compete il prossimo passo e quando un'eccezione merita attenzione.",
        ],
      },
      {
        title: "Le cinque domande da fare prima",
        paragraphs: ["Le risposte non devono essere perfette al primo incontro. Devono essere abbastanza chiare da evitare una dashboard costruita attorno a dati casuali. Questa scheda minima può essere compilata anche senza inviare report, esportazioni o dati sensibili."],
        cards: [
          {
            title: "Decisione",
            text: "Quale scelta deve diventare più semplice o più tempestiva per chi legge la vista.",
          },
          {
            title: "Segnale",
            text: "Quale metrica, eccezione o attività ferma indica che quella decisione merita attenzione.",
          },
          {
            title: "Fonte",
            text: "Da quale sistema o file arriva il dato e chi può confermare che sia aggiornato.",
          },
          {
            title: "Frequenza",
            text: "Ogni quanto la decisione viene presa e quando un aggiornamento smette di essere utile.",
          },
          {
            title: "Responsabile e azione",
            text: "Chi guarda il segnale, quale controllo esegue e cosa deve accadere quando emerge un'eccezione.",
          },
        ],
      },
      {
        title: "I rischi più frequenti",
        paragraphs: [
          "Una dashboard può diventare rapidamente un altro punto da controllare senza aiutare davvero il lavoro. Questi rischi emergono spesso quando il progetto inizia dalla visualizzazione invece che dalla decisione.",
        ],
        cards: [
          {
            title: "Molte metriche, nessuna priorità",
            text: "Se tutti gli indicatori hanno lo stesso peso, chi legge non sa quale merita attenzione prima.",
          },
          {
            title: "Aggiornamento continuo senza utilità",
            text: "La frequenza deve seguire il ritmo della decisione. Un dato aggiornato più spesso non è automaticamente più utile.",
          },
          {
            title: "Etichette ambigue",
            text: "Quando due persone interpretano la stessa voce in modo diverso, il problema è la definizione del dato prima ancora della grafica.",
          },
        ],
      },
      {
        title: "La prima vista utile",
        paragraphs: [
          "Una prima dashboard può essere molto essenziale. In molti casi bastano tre livelli: priorità da gestire, eccezioni che richiedono un controllo e andamento nel tempo. L'obiettivo non è mostrare tutto, ma evitare che le informazioni importanti restino nascoste in un file o in una conversazione.",
          "Ad esempio, per chi coordina un flusso può essere più utile vedere le attività ferme e il responsabile del prossimo passo che una serie di grafici generici. La scelta della visualizzazione arriva alla fine: un elenco ordinato, una tabella con stati chiari o una vista per eccezioni possono essere più utili di un grafico, se rispondono meglio alla domanda operativa.",
        ],
      },
      {
        title: "Un primo perimetro verificabile",
        paragraphs: [
          "Per iniziare, scegli un gruppo di utenti, una domanda ricorrente e una frequenza di aggiornamento. Ad esempio: rendere visibili le attività ferme da troppo tempo, non “creare la dashboard aziendale”. Questo rende più semplice definire fonti, regole e criterio con cui valutare se la vista è davvero utile.",
          "Quando le fonti sono molte o il dato passa tra programmi diversi, il lavoro sulla dashboard si collega naturalmente alla mappa delle integrazioni: prima si chiarisce dove il dato vive, poi si decide come presentarlo. Per un primo confronto puoi partire dalla decisione da sostenere, dal segnale che oggi manca, dalla fonte conosciuta e dalla persona che dovrebbe agire: non occorre inviare file o esportazioni.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qual è la differenza tra un report e una dashboard?",
        answer: "Un report può documentare dati o risultati in modo più ampio. Una dashboard dovrebbe rendere più leggibile una decisione ricorrente, mettendo in evidenza priorità, eccezioni e il prossimo controllo da svolgere.",
      },
      {
        question: "Quante metriche servono in una prima dashboard?",
        answer: "Non esiste un numero utile per tutti. Conviene partire dalle poche metriche o eccezioni che cambiano davvero una decisione; quelle che non guidano un'azione possono restare fuori dalla prima vista.",
      },
      {
        question: "Cosa serve per capire se un report può diventare più utile?",
        answer: "Bastano una decisione ricorrente, il segnale che oggi è difficile leggere, la fonte da cui proviene e la persona che deve agire. I dettagli tecnici e i dati reali possono restare fuori dal primo scambio.",
      },
    ],
    ctaLabel: "Raccontami la decisione che il report deve sostenere",
    ctaSubject: "Vorrei rendere più utile un report o una dashboard",
    relatedServices: ["dashboard-report", "integrazione-database-api"],
    relatedInsights: ["quando-excel-non-basta-piu-azienda", "software-interno-o-excel-condiviso", "stati-snapshot-storico-operativo"],
  },
  {
    slug: "software-interno-o-excel-condiviso",
    path: "/approfondimenti/software-interno-o-excel-condiviso/",
    title: "Software interno o Excel condiviso? I segnali da valutare",
    cardTitle: "Software interno o Excel condiviso? I segnali da valutare",
    description: "Quando un Excel condiviso può ancora bastare e quando conviene valutare un software interno per ruoli, stati, dati e tracciabilità.",
    intro: "La scelta non è tra uno strumento “semplice” e uno “professionale”. Un Excel condiviso può essere la soluzione migliore per un processo limitato. Uno strumento interno diventa utile quando il lavoro richiede regole, ruoli e visibilità che il file non riesce più a rappresentare con chiarezza.",
    takeaway: "Il criterio non è quanti fogli esistono: è quanto il processo dipende da ruoli, stati, controlli, storico e informazioni condivise.",
    publishedAt: "2026-08-03",
    publishedLabel: "3 agosto 2026",
    readTime: "8 min di lettura",
    sections: [
      {
        title: "Non è una scelta ideologica",
        paragraphs: [
          "Un foglio condiviso può funzionare bene se il processo è breve, i dati sono limitati, gli utenti hanno ruoli simili e non servono controlli particolari. Passare a un software solo perché “sembra più moderno” aggiunge costi e complessità senza garantire un miglioramento.",
          "Allo stesso modo, continuare a estendere un file quando deve gestire richieste, stati, responsabilità e storico può trasformarlo in un sistema difficile da usare e ancora più difficile da verificare. Il punto è osservare cosa chiede davvero il lavoro quotidiano.",
        ],
      },
      {
        title: "Quando un Excel condiviso può ancora bastare",
        paragraphs: ["Un file organizzato bene può essere una scelta ragionevole quando il flusso resta circoscritto e le regole sono semplici."],
        bullets: [
          "Il numero di persone che modificano i dati è ridotto e le responsabilità sono chiare.",
          "Non servono permessi diversi, approvazioni o tracce dettagliate delle modifiche.",
          "Il processo non ha molti stati o passaggi di consegna tra persone.",
          "Il dato non deve essere riutilizzato automaticamente da più strumenti.",
          "Un controllo periodico è sufficiente e le eccezioni sono poche e gestibili.",
        ],
      },
      {
        title: "Tre scelte che possono convivere",
        paragraphs: [
          "La scelta non è sempre tra tenere tutto in Excel o costruire subito un software. Parti diverse dello stesso processo possono richiedere strumenti diversi: il punto è assegnare a ciascuno il compito che riesce a svolgere con più chiarezza.",
        ],
        cards: [
          {
            title: "Excel organizzato",
            text: "È adatto a elenchi o analisi circoscritte, con pochi utenti, regole chiare e controlli periodici sufficienti.",
          },
          {
            title: "Automazione mirata",
            text: "Può ridurre un passaggio ripetitivo come un consolidamento, un controllo o un import, senza sostituire l'intero flusso.",
          },
          {
            title: "Strumento interno",
            text: "Diventa utile quando persone, ruoli, stati e storico devono essere condivisi in modo coerente e controllabile.",
          },
        ],
      },
      {
        title: "I segnali che meritano di valutare uno strumento interno",
        paragraphs: ["Non sono una checklist automatica per acquistare software. Sono indizi che il file sta cercando di rappresentare un processo più ricco di quello per cui è stato pensato."],
        cards: [
          {
            title: "Stati e code di lavoro",
            text: "Serve sapere non solo quale dato esiste, ma chi deve agire, cosa è bloccato e quale passo viene dopo.",
          },
          {
            title: "Ruoli e permessi",
            text: "Persone diverse devono vedere, modificare o approvare informazioni diverse e questa regola non può restare affidata a istruzioni informali.",
          },
          {
            title: "Tracciabilità e controlli",
            text: "È importante sapere chi ha cambiato un dato, quando è successo o se un'azione è stata completata secondo una regola.",
          },
          {
            title: "Dati riutilizzati altrove",
            text: "Lo stesso dato alimenta report, database, documenti o altri strumenti e le copie iniziano a divergere.",
          },
        ],
      },
      {
        title: "Cosa definire prima di costruire",
        paragraphs: [
          "Prima delle schermate servono alcune decisioni di processo: chi usa lo strumento, quale dato è indispensabile, quali stati esistono, quali controlli vanno applicati e come riconoscere un primo rilascio utile. Senza queste risposte, un software rischia di digitalizzare la confusione esistente.",
          "Un primo schema può essere molto semplice: una richiesta entra, viene assegnata, passa attraverso pochi stati espliciti e lascia una traccia quando viene completata o bloccata. Solo dopo si capisce quali automazioni o integrazioni aggiungere.",
        ],
        cards: [
          {
            title: "Persone e ruoli",
            text: "Chi crea, aggiorna, approva o consulta una richiesta e quali azioni devono restare distinte.",
          },
          {
            title: "Stati e controlli",
            text: "Quali passaggi cambiano davvero il prossimo passo e quali transizioni richiedono una verifica.",
          },
          {
            title: "Dati e collegamenti",
            text: "Quali informazioni vanno raccolte una volta sola, quale fonte è autorevole e se devono dialogare con altri strumenti.",
          },
        ],
      },
      {
        title: "Il primo passo non deve sostituire tutto",
        paragraphs: [
          "La strada più prudente è scegliere una sola procedura con utenti, dati e confini riconoscibili. Può essere una coda di richieste, una raccolta dati o un passaggio che oggi richiede molti messaggi. L'obiettivo è rendere visibile il flusso e verificarne l'uso, non replicare subito ogni foglio esistente.",
          "Questo permette anche di decidere con più consapevolezza se mantenere alcune attività in Excel, automatizzarne altre o costruire un piccolo strumento condiviso. Le soluzioni possono convivere: non tutto deve finire nello stesso sistema. Per un primo confronto bastano una procedura concreta, le persone coinvolte, gli stati o le eccezioni da chiarire e il risultato che deve diventare più visibile.",
        ],
      },
    ],
    faqs: [
      {
        question: "Devo sostituire tutti i file prima di creare uno strumento interno?",
        answer: "No. Un primo rilascio può riguardare una sola procedura fragile. Alcune analisi o attività individuali possono restare in Excel se continuano a essere la soluzione più semplice.",
      },
      {
        question: "Cosa serve per definire un primo rilascio utile?",
        answer: "Servono un gruppo di utenti riconoscibile, una procedura, pochi stati, i dati indispensabili e un risultato osservabile. Non è necessario definire subito tutte le funzionalità del sistema futuro.",
      },
      {
        question: "Quando ha senso parlare di software su misura per PMI?",
        answer: "Quando un processo richiede ruoli diversi, stati condivisi, controlli coerenti o dati riutilizzati in più punti e queste regole non possono più restare affidate a un file e a istruzioni informali.",
      },
    ],
    ctaLabel: "Descrivimi procedura, ruoli e stati da chiarire",
    ctaSubject: "Vorrei valutare una procedura condivisa o uno strumento interno",
    relatedServices: ["software-interni-pmi", "automazione-excel-processi"],
    relatedInsights: ["quando-excel-non-basta-piu-azienda", "dashboard-aziendale-quali-dati-servono", "stati-snapshot-storico-operativo"],
  },
];

export const aboutPrinciples = [
  {
    number: "01",
    title: "Partire dal lavoro reale",
    text: "Prima di parlare di funzionalità, ricostruisco il passaggio che oggi richiede più attenzione: persone coinvolte, dati, controlli e risultato atteso.",
  },
  {
    number: "02",
    title: "Delimitare prima di costruire",
    text: "Un primo perimetro chiaro riduce ambiguità e consente di verificare se una soluzione è utile prima di estenderla.",
  },
  {
    number: "03",
    title: "Rendere esplicite le regole",
    text: "Dati, stati, ruoli ed eccezioni non devono restare solo nella memoria di chi conosce già il processo.",
  },
  {
    number: "04",
    title: "Misurare con onestà",
    text: "I risultati vanno raccontati solo quando esistono una metrica, un contesto e l'autorizzazione a pubblicarli.",
  },
];

export const technologyAreas = [
  "AI applicata ai processi",
  "Azure e stack Microsoft AI",
  "Chatbot enterprise",
  "Sistemi distribuiti",
  "Python e automazioni",
  "FastAPI e API",
  "SQL Server e PostgreSQL",
  "React e TypeScript",
  "Modellazione dati",
  "Dashboard e interfacce operative",
];

function normalizePath(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed || "/";
}

export function getServiceForPath(pathname: string) {
  const normalized = normalizePath(pathname);
  return services.find((service) => normalizePath(service.path) === normalized);
}

export function isServicesHubPath(pathname: string) {
  return normalizePath(pathname) === normalizePath(servicesHubPath);
}

export function getInsightForPath(pathname: string) {
  const normalized = normalizePath(pathname);
  return insights.find((insight) => normalizePath(insight.path) === normalized);
}

export function isInsightsHubPath(pathname: string) {
  return normalizePath(pathname) === normalizePath(insightsHubPath);
}

export function isAboutPath(pathname: string) {
  return normalizePath(pathname) === normalizePath(aboutPath);
}
