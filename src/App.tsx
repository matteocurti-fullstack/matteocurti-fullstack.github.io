import { useState, type ReactNode } from "react";
import {
  caseStudies,
  contactEmail,
  getServiceForPath,
  isServicesHubPath,
  methodSteps,
  services,
  servicesHubPath,
  type Service,
} from "./content";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function mailto(subject: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

function Header({ isHome }: { isHome: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const homeSection = (section: string) => (isHome ? `#${section}` : `/#${section}`);

  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={closeMenu} aria-label="Matteo Curti, torna all'inizio">
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
        <a href={servicesHubPath} onClick={closeMenu}>Servizi</a>
        <a href={homeSection("metodo")} onClick={closeMenu}>Metodo</a>
        <a href={homeSection("progetti")} onClick={closeMenu}>Approccio</a>
        <a className="nav-contact" href={mailto("Vorrei parlare di un processo da migliorare")} onClick={closeMenu}>
          Parliamone
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Matteo Curti</p>
      <div>
        <a href={servicesHubPath}>Servizi</a>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <a href="https://github.com/matteocurti-fullstack" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
      </div>
    </footer>
  );
}

function PageShell({ children, isHome = false }: { children: ReactNode; isHome?: boolean }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenuto">Vai al contenuto</a>
      <Header isHome={isHome} />
      {children}
      <Footer />
    </div>
  );
}

function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="service-grid">
      {items.map((service) => (
        <article className="service-card" key={service.slug}>
          <a href={service.path}>
            <p className="service-number">{service.number}</p>
            <h3>{service.cardTitle}</h3>
            <p>{service.cardText}</p>
            <span className="service-card-link">Scopri l'approccio <ArrowIcon /></span>
          </a>
        </article>
      ))}
    </div>
  );
}

function MethodSection() {
  return (
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
  );
}

function ContactSection({ subject = "Vorrei parlare di un processo" }: { subject?: string }) {
  return (
    <section className="contact-section section-space" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Partiamo da una conversazione</p>
        <h2 id="contact-title">Hai un processo che vive tra file, messaggi e passaggi manuali?</h2>
        <p>Raccontami come funziona oggi. Possiamo capire insieme cosa rendere più chiaro, misurabile o facile da gestire.</p>
        <p className="contact-note">Puoi descrivere il flusso senza inviare file o dati sensibili.</p>
      </div>
      <a className="button button-primary contact-button" href={mailto(subject)}>
        Scrivimi <ArrowIcon />
      </a>
    </section>
  );
}

function HomePage() {
  return (
    <PageShell isHome>
      <main id="contenuto">
        <section id="inizio" className="hero section-space" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Freelance · automazione, dati e strumenti interni</p>
            <h1 id="hero-title">Processi più chiari.<br />Dati più utili.<br /><em>Decisioni più semplici.</em></h1>
            <p className="hero-lead">
              Aiuto team e piccole imprese a migliorare processi Excel e manuali,
              rendere affidabili i dati e costruire dashboard, integrazioni o web app facili da usare.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={mailto("Parliamo di un processo da migliorare")}>
                Raccontami il tuo processo <ArrowIcon />
              </a>
              <a className="button button-secondary" href={servicesHubPath}>
                Esplora i servizi
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

        <section className="signal-strip" aria-label="Principi di lavoro">
          <p><strong>Processo reale</strong><span>Prima il lavoro quotidiano, poi la tecnologia.</span></p>
          <p><strong>Perimetro chiaro</strong><span>Un primo passo utile, non una piattaforma indefinita.</span></p>
          <p><strong>Dati trattati con cura</strong><span>Analisi e progettazione senza condividere informazioni sensibili.</span></p>
        </section>

        <section id="servizi" className="section-space services" aria-labelledby="services-title">
          <div className="section-intro">
            <p className="eyebrow">Dove posso essere utile</p>
            <h2 id="services-title">Servizi pensati per i punti in cui i processi si inceppano.</h2>
            <p>Non parto da un catalogo di funzionalità. Parto da ciò che oggi richiede troppo tempo, dipende da una sola persona o rende difficile capire quale sia il dato corretto.</p>
          </div>
          <ServiceGrid items={services} />
          <a className="text-link" href={servicesHubPath}>Vedi tutti i servizi e quando possono essere utili <ArrowIcon /></a>
        </section>

        <MethodSection />

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

        <ContactSection />
      </main>
    </PageShell>
  );
}

function ServicesHubPage() {
  return (
    <PageShell>
      <main id="contenuto">
        <section className="services-hub-hero section-space" aria-labelledby="services-hub-title">
          <div>
            <nav className="breadcrumbs" aria-label="Percorso pagina">
              <a href="/">Home</a><span aria-hidden="true">/</span><span>Servizi</span>
            </nav>
            <p className="eyebrow">Servizi</p>
            <h1 id="services-hub-title">Dalla complessità operativa a un primo passo più chiaro.</h1>
            <p className="hero-lead">Automazioni, dashboard, strumenti interni e integrazioni hanno senso solo quando rispondono a un problema osservabile. Qui trovi i punti di partenza più comuni.</p>
          </div>
          <aside className="services-hub-card">
            <p className="card-kicker">Prima di scegliere una soluzione</p>
            <p>Descriviamo il lavoro di oggi, le informazioni coinvolte e il risultato da rendere più semplice. Da lì definiamo cosa vale la pena fare per primo.</p>
          </aside>
        </section>

        <section className="services-list section-space" aria-labelledby="services-list-title">
          <div className="section-intro">
            <p className="eyebrow">Ambiti di intervento</p>
            <h2 id="services-list-title">Un servizio è utile se chiarisce una situazione concreta.</h2>
            <p>Ogni pagina spiega quando un approccio può avere senso, cosa valutare prima di iniziare e come impostare un primo confronto.</p>
          </div>
          <ServiceGrid items={services} />
        </section>

        <ContactSection subject="Vorrei capire quale servizio può essere utile" />
      </main>
    </PageShell>
  );
}

function ServicePage({ service }: { service: Service }) {
  const relatedServices = services.filter((candidate) => service.related.includes(candidate.slug));

  return (
    <PageShell>
      <main id="contenuto">
        <section className="service-hero section-space" aria-labelledby="service-title">
          <div>
            <nav className="breadcrumbs" aria-label="Percorso pagina">
              <a href="/">Home</a><span aria-hidden="true">/</span><a href={servicesHubPath}>Servizi</a><span aria-hidden="true">/</span><span>{service.cardTitle}</span>
            </nav>
            <p className="eyebrow">{service.eyebrow}</p>
            <h1 id="service-title">{service.title}</h1>
            <p className="hero-lead">{service.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={mailto(service.ctaSubject)}>{service.ctaLabel} <ArrowIcon /></a>
              <a className="button button-secondary" href="#come-si-parte">Come si parte</a>
            </div>
          </div>
          <aside className="service-summary" aria-labelledby="signals-title">
            <p className="card-kicker" id="signals-title">Quando può essere utile</p>
            <ul>
              {service.signals.map((signal) => <li key={signal}>{signal}</li>)}
            </ul>
          </aside>
        </section>

        <section className="section-space service-considerations" aria-labelledby="considerations-title">
          <div className="section-intro">
            <p className="eyebrow">Prima di scegliere uno strumento</p>
            <h2 id="considerations-title">Cosa valutiamo insieme.</h2>
            <p>La tecnologia arriva dopo aver capito qual è il problema, quali dati lo attraversano e quale cambiamento può essere verificato nel lavoro quotidiano.</p>
          </div>
          <div className="consideration-grid">
            {service.considerations.map((consideration, index) => (
              <article className="consideration-card" key={consideration.title}>
                <span>0{index + 1}</span>
                <h3>{consideration.title}</h3>
                <p>{consideration.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="come-si-parte" className="section-space service-method" aria-labelledby="service-method-title">
          <div className="method-heading">
            <p className="eyebrow">Come si parte</p>
            <h2 id="service-method-title">Un confronto concreto prima di qualsiasi proposta.</h2>
            <p>Lo scopo non è raccogliere requisiti infiniti: è capire se esiste un primo perimetro utile, chiaro e proporzionato.</p>
          </div>
          <ol className="method-list">
            {service.steps.map((step, index) => (
              <li key={step.title}>
                <span className="method-index">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-space faq-section" aria-labelledby="faq-title">
          <div className="section-intro">
            <p className="eyebrow">Domande pratiche</p>
            <h2 id="faq-title">Prima di iniziare, è utile chiarire anche questo.</h2>
            <p>Una risposta onesta dipende sempre dal processo e dal contesto. Queste sono le domande più frequenti da cui partire.</p>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="section-space related-services" aria-labelledby="related-title">
            <div className="section-intro">
              <p className="eyebrow">Servizi collegati</p>
              <h2 id="related-title">Potrebbe essere utile guardare anche qui.</h2>
              <p>Molti problemi attraversano più di un ambito. Il primo confronto serve anche a scegliere l'ordine più sensato.</p>
            </div>
            <ServiceGrid items={relatedServices} />
          </section>
        )}

        <ContactSection subject={service.ctaSubject} />
      </main>
    </PageShell>
  );
}

export default function App() {
  const service = getServiceForPath(window.location.pathname);

  if (service) {
    return <ServicePage service={service} />;
  }

  if (isServicesHubPath(window.location.pathname)) {
    return <ServicesHubPage />;
  }

  return <HomePage />;
}
