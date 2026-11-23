import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Per le aziende — Helico",
  description:
    "Forma nuovi elettricisti e idraulici con percorsi pratici pensati per le imprese.",
};

export default function AziendePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#131313]">
      <header className="mx-auto flex w-[min(1120px,calc(100%-48px))] items-center justify-between py-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[-0.05em]"
          aria-label="Helico, torna alla home"
        >
          helico
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-sm text-[#45464a] hover:text-[#2447c8]"
        >
          Torna alla home
        </Link>
      </header>

      <section className="mx-auto grid w-[min(1120px,calc(100%-48px))] gap-12 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-28">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] md:text-7xl">
            Nuove competenze pratiche per la tua impresa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#45464a]">
            Forma elettricisti e idraulici con percorsi che uniscono lezioni
            online, esercizi pratici e feedback di un coach AI.
          </p>
          <Link
            href="#contatto"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#2447c8] px-6 text-sm font-semibold text-white transition-transform active:scale-[0.97]"
          >
            Parliamo della tua squadra
          </Link>
        </div>

        <dl className="grid gap-8 border-t border-black/15 pt-6 sm:grid-cols-2 md:grid-cols-1">
          <div>
            <dt className="text-sm text-[#45464a]">Formazione</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-[-0.03em]">
              €1.500
              <span className="ml-2 text-base font-normal tracking-normal text-[#45464a]">
                per dipendente
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-[#45464a]">Inserimento in azienda</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-[-0.03em]">
              €2.000
              <span className="ml-2 text-base font-normal tracking-normal text-[#45464a]">
                per diplomato assunto
              </span>
            </dd>
          </div>
          <p className="text-sm leading-relaxed text-[#45464a]">
            Le classi sono composte da circa 20 persone.
          </p>
        </dl>
      </section>

      <section
        id="contatto"
        className="bg-[#131313] py-16 text-[#f5f5f2] md:py-24"
      >
        <div className="mx-auto grid w-[min(1120px,calc(100%-48px))] gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              Costruiamo insieme il prossimo percorso.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/75">
              Il modulo di contatto sarà disponibile a breve.
            </p>
          </div>
          <form aria-label="Modulo di contatto aziende">
            <label
              htmlFor="azienda-email"
              className="mb-2 block text-sm font-semibold"
            >
              Email aziendale
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="azienda-email"
                type="email"
                disabled
                placeholder="Presto disponibile"
                className="min-h-12 min-w-0 flex-1 rounded-full border border-white/30 bg-white/10 px-4 text-sm text-white placeholder:text-white/65 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                disabled
                className="min-h-12 rounded-full border border-white/30 px-5 text-sm font-semibold text-white/75 disabled:cursor-not-allowed"
              >
                In apertura
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="mx-auto flex min-h-20 w-[min(1120px,calc(100%-48px))] items-center justify-between gap-4 text-sm text-[#45464a]">
        <span>helico</span>
        <Link href="/">Torna ai corsi</Link>
      </footer>
    </main>
  );
}
