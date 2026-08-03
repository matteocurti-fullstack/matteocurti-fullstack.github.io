import { useState } from "react";

const contactEmail = "matteocurtilavoro@gmail.com";

const services = [
  {
    number: "01",
    title: "Processi manuali",
    text: "Mappiamo passaggi, responsabilità e punti di blocco per trasformare attività ripetitive in un flusso più chiaro e condiviso.",
  },
  {
    number: "02",
    title: "Dati e report",
    text: "Mettiamo ordine tra file, fonti e informazioni operative affinché i dati restino coerenti, leggibili e rintracciabili.",
  },
  {
    number: "03",
    title: "Dashboard e strumenti interni",
    text: "Progetto interfacce essenziali che mostrano lo stato del lavoro e gli indicatori utili a decidere, senza aggiungere complessità inutile.",
  },
];

const methodSteps = [
  ["Ascoltare", "Partiamo dal processo esistente, non da una soluzione preconfezionata."],
  ["Delimitare", "Scegliamo il passaggio più costoso, ripetitivo o fragile da migliorare per primo."],
  ["Costruire", "Realizziamo un pilota concreto, con dati, stati e conferme comprensibili."],
  ["Verificare", "Misuriamo l'uso reale, gli errori evitati e il passo successivo più sensato."],
];

const caseStudies = [
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

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>

      <header className="site-header">
        <a className="brand" href="#inizio" onClick={closeMenu} aria-label="Matteo Curti, torna all'inizio">
          <span className="brand-mark">MC</span>
          <span>Matteo Curti</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Chiudi" : "Apri"} il menu</span>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav id="site-navigation" className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Navigazione principale">
          <a href="#servizi" onClick={closeMenu}>Servizi</a>
          <a href="#metodo" onClick={closeMenu}>Metodo</a>
          <a href="#progetti" onClick={closeMenu}>Progetti</a>
          <a className="nav-contact" href={`mailto:${contactEmail}`} onClick={closeMenu}>
            Parliamone
          </a>
        </nav>
      </header>

      <main id="contenuto">
        <section id="inizio" className="hero section-space" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Freelance · processi, dati e strumenti interni</p>
            <h1 id="hero-title">Processi più chiari.<br />Dati più utili.<br /><em>Decisioni più semplici.</em></h1>
            <p className="hero-lead">
              Aiuto team e piccole imprese a mettere ordine nei flussi manuali,
              rendere affidabili i dati e trasformarli in strumenti facili da usare.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${contactEmail}?subject=Parliamo%20di%20un%20processo%20da%20migliorare`}>
                Raccontami il tuo processo <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#metodo">
                Vedi il metodo
              </a>
            </div>
            <p className="hero-note">Si parte dal modo in cui lavorate oggi, non da una soluzione standard.</p>
          </div>

          <aside className="hero-card" aria-label="Approccio di lavoro">
            <p className="card-kicker">Un buon progetto parte così</p>
            <ol>
              <li><span>01</span> Capire il flusso reale</li>
              <li><span>02</span> Rendere visibile il dato</li>
              <li><span>03</span> Ridurre i passaggi fragili</li>
              <li><span>04</span> Misurare prima di estendere</li>
            </ol>
            <div className="card-line" />
            <p>Piccoli passi verificabili, invece di promesse troppo grandi.</p>
          </aside>
        </section>

        <section id="servizi" className="section-space services" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="eyebrow">Dove posso essere utile</p>
            <h2 id="services-title">La tecnologia è utile quando riduce un problema concreto.</h2>
            <p>Non parto da un catalogo di funzionalità. Parto da ciò che oggi richiede troppo tempo, dipende da una sola persona o genera dati poco affidabili.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <p className="service-number">{service.number}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="metodo" className="section-space method" aria-labelledby="method-title">
          <div className="method-heading">
            <p className="eyebrow">Metodo</p>
            <h2 id="method-title">Dal problema operativo a uno strumento utilizzabile.</h2>
            <p>Un progetto utile non deve partire enorme. Deve rendere più chiaro il prossimo passo e lasciare un risultato che il team possa usare davvero.</p>
          </div>
          <ol className="method-list">
            {methodSteps.map(([title, text], index) => (
              <li key={title}>
                <span className="method-index">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="progetti" className="section-space projects" aria-labelledby="projects-title">
          <div className="section-intro projects-intro">
            <p className="eyebrow">Casi di studio e prototipi</p>
            <h2 id="projects-title">Costruire con cura, raccontare con trasparenza.</h2>
            <p>I progetti personali mostrano metodo e direzione. Non sostituiscono risultati di clienti, che vengono raccontati solo quando misurabili e autorizzati.</p>
          </div>
          <div className="project-grid">
            {caseStudies.map((study) => (
              <article className="project-card" key={study.title}>
                <p className="project-label">{study.label}</p>
                <h3>{study.title}</h3>
                <p>{study.text}</p>
                <ul aria-label={`Tecnologie o temi: ${study.title}`}>
                  {study.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-space" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Partiamo da una conversazione</p>
            <h2 id="contact-title">Hai un processo che vive tra file, messaggi e passaggi manuali?</h2>
            <p>Raccontami come funziona oggi. Possiamo capire insieme cosa rendere più chiaro, misurabile o facile da gestire.</p>
          </div>
          <a className="button button-primary contact-button" href={`mailto:${contactEmail}?subject=Vorrei%20parlare%20di%20un%20processo`}>
            Scrivimi <ArrowIcon />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Matteo Curti</p>
        <div>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href="https://github.com/matteocurti-fullstack" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
        </div>
      </footer>
    </div>
  );
}
