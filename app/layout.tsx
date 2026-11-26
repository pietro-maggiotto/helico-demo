import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helico — Impara un mestiere in 6 mesi",
  description:
    "Diventa elettricista o idraulico con lezioni pratiche e il feedback di un coach AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Script id="home-reload-scroll" strategy="beforeInteractive">
          {`const navigation = performance.getEntriesByType("navigation")[0];
if (location.pathname === "/" && navigation?.type === "reload") {
  history.scrollRestoration = "manual";
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const restoreScrollRestoration = () => {
    history.scrollRestoration = "auto";
    window.removeEventListener("pointerdown", restoreScrollRestoration);
    window.removeEventListener("touchstart", restoreScrollRestoration);
    window.removeEventListener("wheel", restoreScrollRestoration);
    window.removeEventListener("keydown", restoreScrollRestoration);
    window.removeEventListener("pagehide", restoreScrollRestoration);
  };
  window.addEventListener("pointerdown", restoreScrollRestoration, { once: true });
  window.addEventListener("touchstart", restoreScrollRestoration, { once: true });
  window.addEventListener("wheel", restoreScrollRestoration, { once: true });
  window.addEventListener("keydown", restoreScrollRestoration, { once: true });
  window.addEventListener("pagehide", restoreScrollRestoration, { once: true });
}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
