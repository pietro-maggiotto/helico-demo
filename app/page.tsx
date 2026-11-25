import SmoothAnchor from "./smooth-anchor";

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
      <header className="home-nav" id="inizio">
        <SmoothAnchor
          href="#inizio"
          className="home-brand"
          aria-label="Helico, inizio"
        >
          helico
        </SmoothAnchor>
        <nav className="home-nav-links" aria-label="Navigazione principale">
          <SmoothAnchor href="#metodo">Metodo</SmoothAnchor>
          <SmoothAnchor href="#corsi">Percorsi</SmoothAnchor>
          <a href="/aziende">Aziende</a>
        </nav>
      </header>

      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">Helico</p>
          <h1 className="hero-headline" id="hero-title">
            <span className="hero-word hero-word--plain">Impara.</span>{" "}
            <span className="hero-word hero-word--gradient">Ripara.</span>
          </h1>
          <p className="hero-subtitle">
            Diventa elettricista o idraulico con lezioni pratiche e un coach AI
            che corregge ogni tuo esercizio.
          </p>
          <div className="hero-actions">
            <SmoothAnchor
              className="primary-cta"
              href="#lista-attesa"
            >
              Entra in lista d&apos;attesa
            </SmoothAnchor>
            <SmoothAnchor className="hero-secondary" href="#metodo">
              Scopri il metodo ›
            </SmoothAnchor>
          </div>
          <div className="hero-facts" aria-label="Dettagli del percorso">
            <div>
              <strong>6 mesi</strong>
              <span>dal primo giorno al lavoro</span>
            </div>
            <div>
              <strong>€699</strong>
              <span>pagamento unico</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>feedback su ogni esercizio</span>
            </div>
          </div>
        </div>
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
                  <SmoothAnchor className="course-link" href="#lista-attesa">
                    Scopri il corso <span aria-hidden="true">→</span>
                  </SmoothAnchor>
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
        <SmoothAnchor
          href="#inizio"
          className="home-brand"
          aria-label="Torna all'inizio"
        >
          helico
        </SmoothAnchor>
        <p>Impara un mestiere. Costruisci il tuo futuro.</p>
        <a href="/aziende">Per le aziende</a>
      </footer>

    </main>
  );
}
