import LiquidGlassInit from "./liquid-glass-init";

const steps = [
  {
    number: "01",
    title: "Lezioni pratiche online",
    description:
      "Impara i fondamentali con spiegazioni chiare e dimostrazioni guidate.",
  },
  {
    number: "02",
    title: "Esercizi con il kit a casa",
    description:
      "Metti subito in pratica quello che studi, direttamente a casa tua.",
  },
  {
    number: "03",
    title: "Feedback AI dalla fotocamera",
    description:
      "Fotografa il tuo lavoro e ricevi indicazioni per migliorare, passo dopo passo.",
  },
] as const;

const courses = [
  {
    name: "Elettricista",
    description:
      "Impianti, cablaggio e sicurezza: competenze pratiche per lavorare sul campo.",
  },
  {
    name: "Idraulico",
    description:
      "Installazione, riparazione e manutenzione degli impianti idraulici.",
  },
] as const;

export default function Home() {
  return (
    <main className="site-shell home-page">
      <LiquidGlassInit
        target=".home-glass:not(.mobile-tabs)"
        mobileTarget=".home-glass"
        snapshot=".home-page"
      />

      <header className="home-nav home-glass" id="inizio">
        <a href="#inizio" className="home-brand" aria-label="Helico, inizio">
          helico
        </a>
        <nav className="home-nav-links" aria-label="Navigazione principale">
          <a href="#metodo">Metodo</a>
          <a href="#corsi">Percorsi</a>
          <a href="/aziende">Aziende</a>
        </nav>
      </header>

      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">
            Diventa elettricista o idraulico in{" "}
            <span>6 mesi.</span>
          </h1>
          <p className="hero-subtitle">
            Impara con lezioni pratiche, un kit a casa e il feedback di un coach
            AI sulle foto dei tuoi esercizi.
          </p>
          <div className="hero-actions">
            <a className="home-glass home-glass--tinted primary-cta" href="#lista-attesa">
              Entra in lista d&apos;attesa
            </a>
            <a className="text-link" href="#metodo">
              Scopri il metodo
            </a>
          </div>
          <div className="hero-facts" aria-label="Dettagli del percorso">
            <div>
              <strong>5–6 mesi</strong>
              <span>percorso pratico</span>
            </div>
            <div>
              <strong>€699</strong>
              <span>kit incluso</span>
            </div>
            <div>
              <strong>Coach AI</strong>
              <span>feedback sui tuoi lavori</span>
            </div>
          </div>
        </div>

        <aside className="coach-bubble home-glass" aria-label="Feedback del coach AI">
          <p className="coach-title">Coach AI</p>
          <p>
            Il collegamento è corretto. Verifica l&apos;assenza di tensione
            prima di intervenire.
          </p>
        </aside>
      </section>

      <section className="method-section" id="metodo">
        <div className="content-wrap">
          <div className="section-heading">
            <h2>Impari facendo. Poi lo fai davvero.</h2>
            <p>
              Un percorso costruito intorno alla pratica: studi, provi e
              migliori con un coach al tuo fianco.
            </p>
          </div>
          <ol className="step-list">
            {steps.map((step) => (
              <li className="step-item" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="course-section" id="corsi">
        <div className="content-wrap">
          <div className="section-heading">
            <h2>Un mestiere che fa per te.</h2>
            <p>Due percorsi pratici, lo stesso investimento.</p>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.name}>
                <p className="course-duration">5–6 mesi</p>
                <h3>{course.name}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-footer">
                  <strong className="course-price">€699</strong>
                  <a className="course-link" href="#lista-attesa">
                    Scopri il corso <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="business-section">
        <div className="content-wrap business-inner">
          <div>
            <h2>Competenze che servono alle imprese.</h2>
            <p>
              Forma nuovi talenti e trova le persone giuste per la tua azienda
              con percorsi pensati insieme a chi lavora sul campo.
            </p>
          </div>
          <a className="text-link business-link" href="/aziende">
            Scopri il percorso aziende <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="waitlist-section" id="lista-attesa">
        <div className="content-wrap waitlist-inner">
          <div className="waitlist-copy">
            <h2>Entra nella lista d&apos;attesa.</h2>
            <p>Ricevi un aggiornamento quando si aprono le iscrizioni.</p>
          </div>
          <div className="waitlist-form">
            <label htmlFor="waitlist-email">La tua email</label>
            <div className="waitlist-controls">
              <input
                id="waitlist-email"
                type="email"
                disabled
                placeholder="Modulo in apertura"
              />
              <button type="button" disabled>
                Presto disponibile
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <a href="#inizio" className="home-brand" aria-label="Torna all'inizio">
          helico
        </a>
        <p>Impara un mestiere. Costruisci il tuo futuro.</p>
        <a href="/aziende">Per le aziende</a>
      </footer>

      <nav className="mobile-tabs home-glass" aria-label="Navigazione mobile">
        <a href="#metodo">Metodo</a>
        <a href="#corsi">Corsi</a>
        <a href="/aziende">Aziende</a>
      </nav>
    </main>
  );
}
