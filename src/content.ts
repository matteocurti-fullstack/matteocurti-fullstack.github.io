export const siteUrl = "https://matteocurti-fullstack.github.io";
export const contactEmail = "matteocurtilavoro@gmail.com";

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
  ctaLabel: string;
  ctaSubject: string;
  relatedServices: string[];
  relatedInsights: string[];
};

export const insights: Insight[] = [
  {
    slug: "quando-excel-non-basta-piu-azienda",
    path: "/approfondimenti/quando-excel-non-basta-piu-azienda/",
    title: "Quando Excel non basta più in azienda",
    cardTitle: "Quando Excel non basta più in azienda",
    description: "Cinque segnali per capire se un processo Excel richiede regole più chiare, un'automazione mirata o uno strumento condiviso.",
    intro: "Excel non è il problema. È spesso uno strumento efficace per calcoli, analisi e attività circoscritte. Il punto cambia quando il lavoro quotidiano dipende da molte copie, controlli manuali e informazioni che passano da una persona all'altra senza una regola condivisa.",
    takeaway: "Prima di scegliere uno strumento, conviene capire quale passaggio del flusso è fragile e perché.",
    publishedAt: "2026-08-03",
    publishedLabel: "3 agosto 2026",
    readTime: "6 min di lettura",
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
          "Per capire se e come intervenire non serve descrivere tutta l'azienda. Basta partire da un passaggio concreto e ricostruirne il percorso: input, persona che lo aggiorna, controllo, output e destinatario successivo.",
          "Questa mappa rende visibili due aspetti che spesso restano impliciti: dove nasce il dato e dove può cambiare senza che qualcuno se ne accorga. È una base più utile di una lista generica di funzionalità desiderate.",
        ],
        cards: [
          {
            title: "Input",
            text: "Da dove arriva l'informazione e quale formato deve avere per essere usata senza correzioni manuali.",
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
          "Questo approccio evita due estremi: continuare a correggere lo stesso problema senza intervenire sulla causa, oppure avviare un progetto troppo grande prima di avere una regola condivisa sul dato.",
        ],
      },
    ],
    ctaLabel: "Descrivimi il passaggio Excel più fragile",
    ctaSubject: "Vorrei descrivere un passaggio Excel o manuale fragile",
    relatedServices: ["automazione-excel-processi", "software-interni-pmi"],
    relatedInsights: ["software-interno-o-excel-condiviso", "dashboard-aziendale-quali-dati-servono"],
  },
  {
    slug: "dashboard-aziendale-quali-dati-servono",
    path: "/approfondimenti/dashboard-aziendale-quali-dati-servono/",
    title: "Dashboard aziendale: quali dati servono prima di costruirla",
    cardTitle: "Dashboard aziendale: quali dati servono prima di costruirla",
    description: "Le domande da definire prima di costruire una dashboard: decisioni, fonti affidabili, metriche, aggiornamento ed eccezioni operative.",
    intro: "Una dashboard utile non parte dal grafico. Parte dalla decisione che deve rendere più semplice: capire una priorità, individuare un'anomalia, seguire un'attività o decidere dove intervenire. Solo dopo ha senso scegliere i dati e la forma in cui mostrarli.",
    takeaway: "Prima della visualizzazione, servono una domanda operativa chiara e dati di cui sia noto significato, fonte e aggiornamento.",
    publishedAt: "2026-08-03",
    publishedLabel: "3 agosto 2026",
    readTime: "6 min di lettura",
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
        paragraphs: ["Le risposte non devono essere perfette al primo incontro. Devono essere abbastanza chiare da evitare una dashboard costruita attorno a dati casuali."],
        bullets: [
          "Quale decisione deve essere più semplice o più tempestiva?",
          "Chi userà la dashboard e con quale frequenza?",
          "Quale fonte produce il dato e chi ne verifica l'aggiornamento?",
          "Come viene calcolata ogni metrica e quale definizione deve restare coerente per tutti?",
          "Quale azione o controllo segue quando un valore supera una soglia o manca un'informazione?",
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
          "La scelta della visualizzazione arriva alla fine. Un elenco ordinato, una tabella con stati chiari o una vista per eccezioni possono essere più utili di un grafico, se rispondono meglio alla domanda operativa.",
        ],
      },
      {
        title: "Un primo perimetro verificabile",
        paragraphs: [
          "Per iniziare, scegli un gruppo di utenti, una domanda ricorrente e una frequenza di aggiornamento. Ad esempio: rendere visibili le attività ferme da troppo tempo, non “creare la dashboard aziendale”. Questo rende più semplice definire fonti, regole e criterio con cui valutare se la vista è davvero utile.",
          "Quando le fonti sono molte o il dato passa tra programmi diversi, il lavoro sulla dashboard si collega naturalmente alla mappa delle integrazioni: prima si chiarisce dove il dato vive, poi si decide come presentarlo.",
        ],
      },
    ],
    ctaLabel: "Parliamo del report che oggi va ricostruito",
    ctaSubject: "Vorrei parlare di un report o dashboard da rendere più utile",
    relatedServices: ["dashboard-report", "integrazione-database-api"],
    relatedInsights: ["quando-excel-non-basta-piu-azienda", "software-interno-o-excel-condiviso"],
  },
  {
    slug: "software-interno-o-excel-condiviso",
    path: "/approfondimenti/software-interno-o-excel-condiviso/",
    title: "Software interno o Excel condiviso? I segnali da valutare",
    cardTitle: "Software interno o Excel condiviso? I segnali da valutare",
    description: "Quando un Excel condiviso può ancora bastare e quando conviene valutare un software interno per ruoli, stati, dati e tracciabilità.",
    intro: "La scelta non è tra uno strumento “semplice” e uno “professionale”. Un Excel condiviso può essere la soluzione migliore per un processo limitato. Uno strumento interno diventa utile quando il lavoro richiede regole, ruoli e visibilità che il file non riesce più a rappresentare con chiarezza.",
    takeaway: "Il criterio non è quanti fogli esistono: è quanto il processo dipende da stati, responsabilità, controlli e informazioni condivise.",
    publishedAt: "2026-08-03",
    publishedLabel: "3 agosto 2026",
    readTime: "7 min di lettura",
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
      },
      {
        title: "Il primo passo non deve sostituire tutto",
        paragraphs: [
          "La strada più prudente è scegliere una sola procedura con utenti, dati e confini riconoscibili. Può essere una coda di richieste, una raccolta dati o un passaggio che oggi richiede molti messaggi. L'obiettivo è rendere visibile il flusso e verificarne l'uso, non replicare subito ogni foglio esistente.",
          "Questo permette anche di decidere con più consapevolezza se mantenere alcune attività in Excel, automatizzarne altre o costruire un piccolo strumento condiviso. Le soluzioni possono convivere: non tutto deve finire nello stesso sistema.",
        ],
      },
    ],
    ctaLabel: "Descrivimi dove Excel condiviso comincia a non bastare",
    ctaSubject: "Vorrei valutare Excel condiviso o uno strumento interno",
    relatedServices: ["software-interni-pmi", "automazione-excel-processi"],
    relatedInsights: ["quando-excel-non-basta-piu-azienda", "dashboard-aziendale-quali-dati-servono"],
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
  "Python e automazioni",
  "FastAPI e API",
  "SQLite e MariaDB",
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
