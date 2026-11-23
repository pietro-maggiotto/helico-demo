import Link from "next/link";
import LiquidGlassInit from "../liquid-glass-init";
import "./glass-test.css";

export default function GlassTestPage() {
  return (
    <main className="glass-test__scene">
      <LiquidGlassInit
        target=".glass-test__glass"
        snapshot=".glass-test__scene"
      />
      <nav
        className="glass-test__glass glass-test__navigation"
        aria-label="Navigazione principale"
      >
        <Link className="glass-test__wordmark" href="/">
          helico
        </Link>
        <div className="glass-test__nav-links">
          <Link href="/#metodo">Metodo</Link>
          <Link href="/#corsi">Percorsi</Link>
          <Link href="/aziende">Aziende</Link>
        </div>
      </nav>

      <Link
        className="glass-test__glass glass-test__primary-cta"
        href="/#lista-attesa"
      >
        Entra in lista d&apos;attesa
      </Link>

      <aside
        className="glass-test__glass glass-test__coach-bubble"
        aria-label="Feedback del coach AI"
      >
        <p className="glass-test__coach-title">Coach AI</p>
        <p className="glass-test__coach-feedback">
          Il collegamento è corretto. Verifica l&apos;assenza di tensione prima
          di intervenire.
        </p>
      </aside>
    </main>
  );
}
