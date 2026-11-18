const steps = [
  {
    number: "01",
    title: "Impari facendo",
    description:
      "Lezioni pratiche online, chiare e guidate da professionisti del settore.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        className="size-8"
      >
        <rect
          x="6"
          y="9"
          width="36"
          height="26"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M17 41h14M24 35v6m-7-17 5 5 10-11"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Ti eserciti a casa",
    description:
      "Metti subito in pratica quello che studi con il kit professionale che ricevi a casa.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        className="size-8"
      >
        <path
          d="m8 20 16-12 16 12v19a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V20Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M19 41V27h10v14m-5-23v5m-2.5-2.5h5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ricevi feedback AI",
    description:
      "Scatta una foto con il telefono: il coach AI analizza il tuo lavoro e ti aiuta a migliorare.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        className="size-8"
      >
        <rect
          x="8"
          y="12"
          width="32"
          height="26"
          rx="5"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M17 12l2-4h10l2 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="25" r="7" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="m34 17 .5 1.5L36 19l-1.5.5L34 21l-.5-1.5L32 19l1.5-.5L34 17Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const courses = [
  {
    name: "Elettricista",
    description:
      "Impianti, cablaggio e sicurezza: costruisci competenze che servono davvero.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        className="size-7"
      >
        <path
          d="M27 5 12 26h11l-2 17 15-23H25l2-15Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Idraulico",
    description:
      "Impara a installare, riparare e prenderti cura degli impianti idraulici.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        fill="none"
        className="size-7"
      >
        <path
          d="M24 6c-5 8-12 15-12 23a12 12 0 0 0 24 0c0-8-7-15-12-23Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M19 30a5 5 0 0 0 5 5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="liquid-page relative isolate overflow-clip text-[#183b32]">
      <header className="glass-panel mx-auto mt-4 flex w-[calc(100%-1.5rem)] max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:w-[calc(100%-4rem)] sm:px-7">
        <a
          href="#inizio"
          className="flex items-center gap-2 text-2xl font-black tracking-[-0.07em]"
          aria-label="Helico, torna all'inizio"
        >
          <span className="glass-control flex size-8 items-center justify-center rounded-full text-lg font-black">
            h
          </span>
          helico
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a className="transition-colors hover:text-[#668c38]" href="#metodo">
            Come funziona
          </a>
          <a className="transition-colors hover:text-[#668c38]" href="#corsi">
            I corsi
          </a>
          <a
            className="transition-colors hover:text-[#668c38]"
            href="/aziende"
          >
            Per le aziende
          </a>
        </nav>
        <a
          className="glass-control rounded-full px-4 py-2.5 text-sm font-semibold text-[#183b32] hover:-translate-y-0.5 hover:bg-white/90"
          href="#lista-attesa"
        >
          Inizia da qui <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section
        id="inizio"
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:pb-32"
      >
        <div className="relative z-10">
          <p className="glass-control mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#36553c]">
            <span className="size-2 rounded-full bg-[#79a84b]" />
            Una nuova strada, concreta
          </p>
          <h1 className="max-w-3xl text-[clamp(2.6rem,4.6vw,4.25rem)] font-semibold leading-[0.99] tracking-[-0.065em]">
            Diventa elettricista o idraulico in{" "}
            <span className="relative inline-block whitespace-nowrap">
              6 mesi
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-2 rounded-full bg-[#c4ed69] sm:-bottom-2 sm:h-5"
              />
            </span>
            , con un coach AI
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#53665c] sm:text-lg sm:leading-8">
            Impara un mestiere richiesto con lezioni pratiche, un kit a casa e
            un coach AI sempre al tuo fianco. Parti da zero, costruisci il tuo
            futuro.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#lista-attesa"
              className="glass-cta inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 hover:brightness-110"
            >
              Entra in lista d&apos;attesa <span aria-hidden="true">↗</span>
            </a>
            <span className="text-sm text-[#66776e]">
              Il prossimo passo lo fai tu.
            </span>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-[#53665c]">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="glass-float flex size-8 items-center justify-center rounded-full border-2 border-[#f5f8f5] text-xs">
                ✦
              </span>
              <span className="glass-float flex size-8 items-center justify-center rounded-full border-2 border-[#f5f8f5] text-xs">
                +
              </span>
              <span className="glass-float flex size-8 items-center justify-center rounded-full border-2 border-[#f5f8f5] text-xs">
                ✓
              </span>
            </div>
            Formazione pratica, al tuo ritmo
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -right-4 top-4 size-64 rounded-full bg-[#dbe9c4] blur-3xl sm:-right-8 sm:top-0 sm:size-80"
          />
          <div className="glass-panel relative rounded-[2rem] p-4 sm:rounded-[2.5rem] sm:p-6">
            <div className="glass-float absolute -left-2 -top-3 z-20 flex items-center gap-2 rounded-full px-4 py-3 text-xs font-semibold sm:-left-10 sm:text-sm">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#e3f3c7] text-[#527334]">
                ✓
              </span>
              Impara facendo
            </div>
            <div className="glass-float absolute -right-2 bottom-0 z-20 flex items-center gap-2 rounded-full px-4 py-3 text-xs font-semibold sm:-right-8 sm:text-sm">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#183b32] text-white">
                ✦
              </span>
              Feedback personalizzato
            </div>
            <div className="glass-tinted relative overflow-hidden rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-7">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#50644e]">
                  La tua palestra, a casa
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-[#c4ed69] text-[#183b32]">
                  ✦
                </span>
              </div>
              <div className="glass-tinted relative my-7 flex aspect-[1.1] items-center justify-center overflow-hidden rounded-[1.25rem] sm:my-8 sm:aspect-[1.18]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(24,59,50,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(24,59,50,.16) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="glass-inset relative flex h-[68%] w-[72%] items-center justify-center rounded-2xl border-2 border-dashed border-[#718965]">
                  <div className="absolute left-[18%] top-0 h-full w-1.5 rounded-full bg-[#435f4a]" />
                  <div className="absolute right-[18%] top-0 h-full w-1.5 rounded-full bg-[#435f4a]" />
                  <div className="absolute left-0 top-[23%] h-1.5 w-full bg-[#435f4a]" />
                  <div className="absolute left-0 top-[50%] h-1.5 w-full bg-[#435f4a]" />
                  <div className="absolute left-0 top-[77%] h-1.5 w-full bg-[#435f4a]" />
                  <div className="relative flex size-16 items-center justify-center rounded-2xl bg-[#183b32] text-[#c4ed69] shadow-xl sm:size-20">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                      className="size-9 sm:size-11"
                    >
                      <path d="M27 5 12 26h11l-2 17 15-23H25l2-15Z" />
                    </svg>
                  </div>
                  <span className="absolute -bottom-4 right-3 rounded-full bg-[#183b32] px-3 py-1.5 text-[10px] font-semibold text-white sm:right-6 sm:text-xs">
                    Kit esercitazione
                  </span>
                </div>
              </div>
              <div className="glass-float rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#e6f2d5] text-[#547238]">
                    ✦
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#183b32]">
                      Il tuo coach AI
                    </p>
                    <p className="mt-0.5 text-[11px] text-[#738178]">
                      Sempre pronto ad aiutarti
                    </p>
                  </div>
                  <span className="ml-auto size-2 rounded-full bg-[#80b255]" />
                </div>
                <p className="mt-4 rounded-xl bg-[#f5f7f1] p-3 text-xs leading-5 text-[#53665c] sm:text-sm">
                  Ottimo lavoro! Il cablaggio è ordinato. Ricontrolla il
                  collegamento prima di procedere.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-[#738178]">
            Un esempio di come impari con Helico
          </p>
        </div>
      </section>

      <section id="metodo" className="bg-white/20 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#68874a]">
              Il metodo Helico
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Tre passi, un mestiere nuovo.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#66776e]">
              Tutto quello che ti serve per imparare un lavoro concreto, senza
              rinunciare alla flessibilità.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="glass-panel rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-[#e9f1dd] text-[#53743a]">
                    {step.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-[#a2ad9e]">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#66776e]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="corsi" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#68874a]">
                Scegli il tuo percorso
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Un mestiere che fa per te.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#66776e]">
              Percorsi pensati per imparare facendo, da casa e con il supporto
              giusto.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {courses.map((course, index) => (
              <article
                key={course.name}
                className={`rounded-[1.75rem] p-6 sm:p-9 ${
                  index === 0
                    ? "glass-dark-panel text-white"
                    : "glass-panel"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl ${
                      index === 0
                        ? "bg-white/10 text-[#c4ed69]"
                        : "bg-[#edf4df] text-[#53743a]"
                    }`}
                  >
                    {course.icon}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      index === 0
                        ? "bg-white/10 text-[#d5e0d9]"
                        : "bg-[#edf4df] text-[#56713f]"
                    }`}
                  >
                    5–6 mesi
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-tight">
                  {course.name}
                </h3>
                <p
                  className={`mt-2 max-w-md text-sm leading-6 ${
                    index === 0 ? "text-white/70" : "text-[#66776e]"
                  }`}
                >
                  {course.description}
                </p>
                <div
                  className={`mt-8 flex items-end justify-between border-t pt-6 ${
                    index === 0 ? "border-white/15" : "border-[#e8ece4]"
                  }`}
                >
                  <div>
                    <span
                      className={`text-xs ${
                        index === 0 ? "text-white/60" : "text-[#738178]"
                      }`}
                    >
                      Percorso completo
                    </span>
                    <p className="mt-1 text-3xl font-semibold tracking-tight">
                      €699
                    </p>
                  </div>
                  <a
                    href="#lista-attesa"
                    aria-label={`Scopri il corso di ${course.name}`}
                    className={`flex size-12 items-center justify-center rounded-full text-xl transition-transform hover:-translate-y-0.5 ${
                      index === 0
                        ? "bg-[#c4ed69] text-[#183b32]"
                        : "bg-[#183b32] text-white"
                    }`}
                  >
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="glass-panel mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-14">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#68874a]">
              Helico per le aziende
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Persone formate. Competenze che servono.
            </h2>
            <p className="mt-4 leading-7 text-[#5f7065]">
              Forma nuovi talenti e trova le persone giuste per la tua impresa.
              Scopri il percorso pensato per le aziende.
            </p>
          </div>
          <a
            href="/aziende"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#183b32] px-6 font-semibold text-white transition-colors hover:bg-[#285447] md:self-center"
          >
            Scopri Helico per le aziende <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section
        id="lista-attesa"
        className="liquid-cta-section scroll-mt-8 px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c4ed69]">
              Il tuo prossimo capitolo
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Pronto a imparare un mestiere nuovo?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Stiamo preparando la lista d&apos;attesa. Il modulo sarà
              disponibile a breve.
            </p>
          </div>
          <div className="glass-on-dark rounded-[1.5rem] p-5 sm:p-7">
            <p className="text-sm font-semibold">Lista d&apos;attesa</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email-lista-attesa">
                La tua email
              </label>
              <input
                id="email-lista-attesa"
                type="email"
                disabled
                placeholder="Il modulo sarà disponibile a breve"
                className="glass-input min-h-12 min-w-0 flex-1 rounded-full px-5 text-sm text-white placeholder:text-white/70 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="min-h-12 rounded-full bg-[#c4ed69] px-6 text-sm font-semibold text-[#183b32] opacity-60 disabled:cursor-not-allowed"
              >
                Presto disponibile
              </button>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/50">
              Nessun dato viene raccolto in questa fase.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-[#66776e] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <a
          href="#inizio"
          className="flex items-center gap-2 font-black tracking-[-0.06em] text-[#183b32]"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#c4ed69] text-base">
            h
          </span>
          helico
        </a>
        <p>Impara un mestiere. Costruisci il tuo futuro.</p>
        <a className="font-medium hover:text-[#183b32]" href="/aziende">
          Per le aziende <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}
