import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helico — Impara un mestiere in 6 mesi",
  description:
    "Diventa elettricista o idraulico con lezioni pratiche e il feedback di un coach AI.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
