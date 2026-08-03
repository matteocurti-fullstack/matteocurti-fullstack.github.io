export const contactEmail = "matteocurtilavoro@gmail.com";

export const servicesHubPath = "/servizi/";

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
