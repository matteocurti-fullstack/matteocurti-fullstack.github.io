import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  aboutPath,
  aboutPrinciples,
  caseStudies,
  contactEmail,
  getInsightForPath,
  getServiceForPath,
  insights,
  insightsHubPath,
  isAboutPath,
  isInsightsHubPath,
  isServicesHubPath,
  linkedinProfileUrl,
  methodSteps,
  services,
  servicesHubPath,
  technologyAreas,
  type Insight,
  type Service,
} from "./content";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function mailto(subject: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

type BreadcrumbItem = {
  label: string;
  href?: string;
};

function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Percorso pagina">
      {items.map((item, index) => (
        <span className="breadcrumb-item" key={`${item.label}-${index}`}>
          {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
          {index < items.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    navigationRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="/" onClick={closeMenu} aria-label="Matteo Curti, torna all'inizio">
        <span className="brand-mark">MC</span>
        <span>Matteo Curti</span>
      </a>

      <button
        ref={menuToggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">{menuOpen ? "Chiudi" : "Apri"} il menu</span>
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>

      <nav ref={navigationRef} id="site-navigation" className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Navigazione principale">
        <a href={servicesHubPath} onClick={closeMenu}>Servizi</a>
        <a href={insightsHubPath} onClick={closeMenu}>Approfondimenti</a>
        <a href={aboutPath} onClick={closeMenu}>Chi sono</a>
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
        <a href={insightsHubPath}>Approfondimenti</a>
        <a href={aboutPath}>Chi sono</a>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        <a href={linkedinProfileUrl} target="_blank" rel="noreferrer">
          LinkedIn <span className="sr-only">(si apre in una nuova scheda)</span> <ArrowIcon />
        </a>
        <a href="https://github.com/matteocurti-fullstack" target="_blank" rel="noreferrer">
          GitHub <span className="sr-only">(si apre in una nuova scheda)</span> <ArrowIcon />
        </a>
      </div>
    </footer>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  const skipToContent = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const main = document.getElementById("contenuto");

    if (!main) return;

    event.preventDefault();
    window.history.replaceState(null, "", "#contenuto");
    main.focus({ preventScroll: true });
    main.scrollIntoView();
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenuto" onClick={skipToContent}>Vai al contenuto</a>
      <Header />
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

function InsightGrid({ items }: { items: Insight[] }) {
  return (
    <div className="insight-grid">
      {items.map((insight) => (
        <article className="insight-card" key={insight.slug}>
          <a href={insight.path}>
            <p className="insight-meta">{insight.publishedLabel} · {insight.readTime}</p>
            <h3>{insight.cardTitle}</h3>
            <p>{insight.description}</p>
            <span className="service-card-link">Leggi l'approfondimento <ArrowIcon /></span>
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
  const [copyMessage, setCopyMessage] = useState("");

  const copyEmail = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API non disponibile");
      }

      await navigator.clipboard.writeText(contactEmail);
      setCopyMessage("Indirizzo email copiato.");
    } catch {
      setCopyMessage(`Copia non disponibile: ${contactEmail}`);
    }
  };

  return (
    <section className="contact-section section-space" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Partiamo da una conversazione</p>
        <h2 id="contact-title">Hai un processo che vive tra file, messaggi e passaggi manuali?</h2>
        <p>Raccontami come funziona oggi. Possiamo capire insieme cosa rendere più chiaro, misurabile o facile da gestire.</p>
        <p className="contact-note">Puoi descrivere il flusso senza inviare file o dati sensibili.</p>
      </div>
      <div className="contact-actions">
        <a className="button button-primary contact-button" href={mailto(subject)}>
          Scrivimi <ArrowIcon />
        </a>
        <button className="button button-secondary" type="button" onClick={copyEmail}>
          Copia email
        </button>
        <p className="copy-email-status" role="status" aria-live="polite">{copyMessage}</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <PageShell>
      <main id="contenuto" tabIndex={-1}>
        <section id="inizio" className="hero section-space" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">AI applicata ai processi aziendali · automazione e software su misura</p>
            {/*
              Idea per una futura seconda versione del posizionamento:
              "Non sviluppo solo software: rendo più chiari e affidabili processi,
              dati e decisioni." Da usare insieme a un messaggio più esplicito su
              esperienza enterprise, AI applicata, cloud e sviluppo full stack.
            */}
            <h1 id="hero-title">Aiuto aziende a trasformare<br />processi manuali in sistemi<br /><em>digitali intelligenti.</em></h1>
            <p className="hero-lead">
              Progetto strumenti digitali e sistemi AI per aziende che vogliono
              rendere più affidabili processi, customer care e decisioni basate sui dati.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={mailto("Parliamo di un processo da migliorare")}>
                Parliamo del tuo progetto <ArrowIcon />
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
            <p>Esperienza enterprise: sistemi distribuiti · Azure e Microsoft AI · chatbot enterprise · integrazioni e software interni.</p>
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

        <section className="section-space insights-preview" aria-labelledby="insights-preview-title">
          <div className="section-intro">
            <p className="eyebrow">Approfondimenti</p>
            <h2 id="insights-preview-title">Prima di una soluzione, vale la pena fare le domande giuste.</h2>
            <p>Guide pratiche per riconoscere i segnali, delimitare un problema e decidere quale primo passo ha più senso per il lavoro quotidiano.</p>
          </div>
          <InsightGrid items={insights} />
          <a className="text-link" href={insightsHubPath}>Leggi tutti gli approfondimenti <ArrowIcon /></a>
        </section>

        <MethodSection />

        <section className="about-teaser section-space" aria-labelledby="about-teaser-title">
          <div>
            <p className="eyebrow">Chi sono / come lavoro</p>
            <h2 id="about-teaser-title">Un approccio concreto, senza promesse che non si possono verificare.</h2>
          </div>
          <div>
            <p>Metto insieme analisi del processo, modellazione dei dati e sviluppo software. Il punto di partenza resta sempre lo stesso: capire cosa rendere più semplice per chi usa davvero lo strumento.</p>
            <a className="text-link" href={aboutPath}>Scopri come lavoro <ArrowIcon /></a>
          </div>
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

        <ContactSection />
      </main>
    </PageShell>
  );
}

function ServicesHubPage() {
  return (
    <PageShell>
      <main id="contenuto" tabIndex={-1}>
        <section className="services-hub-hero section-space" aria-labelledby="services-hub-title">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Servizi" }]} />
            <p className="eyebrow">Servizi</p>
            <h1 id="services-hub-title">Dalla complessità operativa a un primo passo più chiaro.</h1>
            <p className="hero-lead">AI applicata, automazioni, dashboard, strumenti interni e integrazioni hanno senso solo quando rispondono a un problema osservabile. Qui trovi i punti di partenza più comuni.</p>
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
      <main id="contenuto" tabIndex={-1}>
        <section className="service-hero section-space" aria-labelledby="service-title">
          <div>
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Servizi", href: servicesHubPath },
              { label: service.cardTitle },
            ]} />
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

function InsightsHubPage() {
  return (
    <PageShell>
      <main id="contenuto" tabIndex={-1}>
        <section className="insights-hub-hero section-space" aria-labelledby="insights-hub-title">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Approfondimenti" }]} />
            <p className="eyebrow">Approfondimenti</p>
            <h1 id="insights-hub-title">Guide per decidere prima di costruire.</h1>
            <p className="hero-lead">Articoli pratici su processi, dati e strumenti interni. Non sono promesse di risultato: servono a riconoscere un problema, formulare le domande giuste e delimitare un primo passo utile.</p>
          </div>
          <aside className="insights-hub-card">
            <p className="card-kicker">Come leggere queste guide</p>
            <p>Ogni approfondimento parte da un sintomo osservabile, distingue le alternative possibili e rimanda a un confronto concreto quando il contesto richiede una valutazione.</p>
          </aside>
        </section>

        <section className="section-space insights-list" aria-labelledby="insights-list-title">
          <div className="section-intro">
            <p className="eyebrow">Guide operative</p>
            <h2 id="insights-list-title">Un buon progetto inizia da una domanda più precisa.</h2>
            <p>Il contenuto è pensato per chi deve rendere un flusso più leggibile, un dato più affidabile o una decisione meno dipendente da file e messaggi sparsi.</p>
          </div>
          <InsightGrid items={insights} />
        </section>

        <section className="about-teaser section-space" aria-labelledby="insights-about-title">
          <div>
            <p className="eyebrow">Metodo di lavoro</p>
            <h2 id="insights-about-title">Le risposte cambiano con il contesto. Il metodo resta trasparente.</h2>
          </div>
          <div>
            <p>Prima di proporre una soluzione, definisco processo, dati, persone coinvolte e primo perimetro verificabile. È il modo più semplice per non aggiungere complessità inutile.</p>
            <a className="text-link" href={aboutPath}>Scopri come lavoro <ArrowIcon /></a>
          </div>
        </section>

        <ContactSection subject="Vorrei confrontarmi su un processo o dato operativo" />
      </main>
    </PageShell>
  );
}

function InsightPage({ insight }: { insight: Insight }) {
  const relatedServices = services.filter((service) => insight.relatedServices.includes(service.slug));
  const relatedInsights = insights.filter((candidate) => insight.relatedInsights.includes(candidate.slug));

  return (
    <PageShell>
      <main id="contenuto" tabIndex={-1}>
        <article className="article-page">
          <header className="article-hero section-space" aria-labelledby="article-title">
            <Breadcrumbs items={[
              { label: "Home", href: "/" },
              { label: "Approfondimenti", href: insightsHubPath },
              { label: insight.title },
            ]} />
            <p className="eyebrow">Approfondimenti · processi, dati e strumenti</p>
            <h1 id="article-title">{insight.title}</h1>
            <p className="hero-lead">{insight.intro}</p>
            <div className="article-meta" aria-label="Informazioni sull'articolo">
              <span>Pubblicato il {insight.publishedLabel}</span>
              <span>{insight.readTime}</span>
            </div>
          </header>

          <div className="article-layout section-space">
            <aside className="article-summary" aria-label="In sintesi">
              <p className="card-kicker">In sintesi</p>
              <p>{insight.takeaway}</p>
              <a className="text-link" href={mailto(insight.ctaSubject)}>{insight.ctaLabel} <ArrowIcon /></a>
            </aside>

            <div className="article-body">
              {insight.sections.map((section) => (
                <section className="article-section" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="article-list">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                  {section.cards && (
                    <div className="article-card-grid">
                      {section.cards.map((card) => (
                        <article key={card.title}>
                          <h3>{card.title}</h3>
                          <p>{card.text}</p>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>

          {insight.faqs && insight.faqs.length > 0 && (
            <section className="section-space faq-section article-faq" aria-labelledby="article-faq-title">
              <div className="section-intro">
                <p className="eyebrow">Domande pratiche</p>
                <h2 id="article-faq-title">Prima di scegliere il prossimo passo.</h2>
                <p>Le risposte aiutano a preparare una valutazione concreta, senza dover inviare file o dati sensibili.</p>
              </div>
              <div className="faq-list">
                {insight.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {relatedServices.length > 0 && (
            <section className="section-space article-related" aria-labelledby="article-services-title">
              <div className="section-intro">
                <p className="eyebrow">Dalla guida al contesto reale</p>
                <h2 id="article-services-title">Se il problema è ricorrente, questi sono i punti da cui partire.</h2>
                <p>Le guide aiutano a formulare il problema. Un confronto serve a capire se il tuo caso richiede organizzazione, automazione o uno strumento condiviso.</p>
              </div>
              <ServiceGrid items={relatedServices} />
            </section>
          )}

          {relatedInsights.length > 0 && (
            <section className="section-space related-insights" aria-labelledby="related-insights-title">
              <div className="section-intro">
                <p className="eyebrow">Continua la lettura</p>
                <h2 id="related-insights-title">Approfondimenti collegati.</h2>
                <p>Problemi di processo, dati e strumenti spesso si intrecciano. Qui trovi le guide che aiutano a guardare il passo successivo.</p>
              </div>
              <InsightGrid items={relatedInsights} />
            </section>
          )}
        </article>

        <ContactSection subject={insight.ctaSubject} />
      </main>
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <main id="contenuto" tabIndex={-1}>
        <section className="about-hero section-space" aria-labelledby="about-title">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Chi sono / Come lavoro" }]} />
            <p className="eyebrow">Chi sono / come lavoro</p>
            <h1 id="about-title">Dal processo che oggi si inceppa a un primo passo verificabile.</h1>
            <p className="hero-lead">Sono Matteo Curti. Progetto strumenti digitali e sistemi AI per aziende che vogliono rendere più affidabili processi, customer care e decisioni basate sui dati. Porto esperienza in contesti enterprise e team internazionali, fra chatbot, Azure, stack Microsoft AI e sistemi distribuiti.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={mailto("Vorrei raccontare un processo da migliorare")}>Raccontami il tuo processo <ArrowIcon /></a>
              <a className="button button-secondary" href={servicesHubPath}>Vedi i servizi</a>
            </div>
          </div>
          <aside className="about-summary">
            <p className="card-kicker">L'idea che guida il lavoro</p>
            <p>La tecnologia è utile quando rende un passaggio più chiaro, un dato più affidabile o una decisione più semplice. Non quando aggiunge un nuovo strato da gestire.</p>
          </aside>
        </section>

        <section className="about-intro section-space" aria-labelledby="about-intro-title">
          <div className="section-intro">
            <p className="eyebrow">Un approccio indipendente</p>
            <h2 id="about-intro-title">Non vendo pacchetti standard: costruisco chiarezza sul problema prima della soluzione.</h2>
            <p>Questo sito raccoglie il mio approccio, i prototipi e gli approfondimenti con cui applico AI, automazioni e software su misura a processi aziendali concreti. Ogni contesto richiede un perimetro diverso: per questo evito di partire da una lista di funzionalità preconfezionata.</p>
          </div>
          <div className="about-copy-grid">
            <p>Un primo confronto serve a capire dove passa l'informazione, chi svolge il lavoro, quali controlli sono necessari e cosa dovrebbe diventare più facile. Da lì è possibile stabilire se la risposta più semplice sia una regola migliore, un file più ordinato, un'automazione o una web app.</p>
            <p>Il valore di un intervento non dipende dalla quantità di tecnologia inserita. Dipende dalla capacità di lasciare un flusso che le persone possano capire, usare e far evolvere con consapevolezza.</p>
          </div>
          <a className="text-link" href={linkedinProfileUrl} target="_blank" rel="noreferrer">
            Guarda il mio percorso su LinkedIn <span className="sr-only">(si apre in una nuova scheda)</span> <ArrowIcon />
          </a>
        </section>

        <section className="section-space about-principles" aria-labelledby="principles-title">
          <div className="section-intro">
            <p className="eyebrow">Come lavoro</p>
            <h2 id="principles-title">Quattro principi per non digitalizzare la confusione.</h2>
            <p>Queste fasi non promettono tempi o risultati prestabiliti. Servono a rendere esplicite le decisioni da prendere insieme prima e durante lo sviluppo.</p>
          </div>
          <div className="principles-grid">
            {aboutPrinciples.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space about-skills" aria-labelledby="skills-title">
          <div>
            <p className="eyebrow">Tecnologie e ambiti</p>
            <h2 id="skills-title">Strumenti al servizio di una decisione, non il contrario.</h2>
          </div>
          <div>
            <p>Nei progetti e prototipi lavoro con tecnologie adatte a dati persistenti, automazioni, API e interfacce web. La scelta concreta dipende dal problema, dal perimetro e dalla necessità di rendere il sistema comprensibile nel tempo.</p>
            <ul className="technology-list" aria-label="Tecnologie e ambiti di lavoro">
              {technologyAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
        </section>

        <section className="section-space transparency-section" aria-labelledby="transparency-title">
          <div>
            <p className="eyebrow">Trasparenza</p>
            <h2 id="transparency-title">Cosa aspettarti — e cosa non prometto.</h2>
          </div>
          <div className="transparency-grid">
            <article>
              <h3>Un confronto concreto</h3>
              <p>Non serve arrivare con una soluzione pronta. È utile poter descrivere un'attività, il punto in cui si blocca e il risultato che dovrebbe diventare più semplice.</p>
            </article>
            <article>
              <h3>Niente promesse assolute</h3>
              <p>Non prometto di automatizzare tutto, eliminare ogni errore o produrre risultati non misurabili. Ogni beneficio va osservato nel contesto in cui lo strumento viene usato.</p>
            </article>
            <article>
              <h3>Riservatezza fin dall'inizio</h3>
              <p>Per un primo confronto non servono file, credenziali o dati sensibili. Si parte dal flusso e dalle informazioni strettamente necessarie a comprenderlo.</p>
            </article>
            <article>
              <h3>Progetti raccontati con cura</h3>
              <p>I prototipi personali sono dichiarati come tali. Risultati, nomi e dati di clienti vengono pubblicati solo quando verificabili e autorizzati.</p>
            </article>
          </div>
        </section>

        <ContactSection subject="Vorrei raccontare un processo da migliorare" />
      </main>
    </PageShell>
  );
}

type AppProps = {
  path?: string;
};

export default function App({ path }: AppProps) {
  const currentPath = path ?? window.location.pathname;
  const service = getServiceForPath(currentPath);
  const insight = getInsightForPath(currentPath);

  if (service) {
    return <ServicePage service={service} />;
  }

  if (insight) {
    return <InsightPage insight={insight} />;
  }

  if (isServicesHubPath(currentPath)) {
    return <ServicesHubPage />;
  }

  if (isInsightsHubPath(currentPath)) {
    return <InsightsHubPage />;
  }

  if (isAboutPath(currentPath)) {
    return <AboutPage />;
  }

  return <HomePage />;
}
