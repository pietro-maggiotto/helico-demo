# Helico — demo website

Helico è una scuola professionale AI-native per aspiranti elettricisti e idraulici in Italia. Gli studenti acquistano un corso di 5–6 mesi (€699), si esercitano a casa con un kit e ricevono feedback da un coach AI sulle foto scattate con la fotocamera del telefono. Le aziende pagano €1.500 per dipendente formato (classi di circa 20 persone) e €2.000 per ogni diplomato assunto.

## Stack

- Next.js App Router, TypeScript e Tailwind CSS
- Neon Postgres tramite `DATABASE_URL`, con Drizzle ORM
- Deploy su Vercel da GitHub, branch `main`

## Pagine

- `/`: landing page e modulo waitlist
- `/demo`: demo del coach AI (caricamento foto → feedback). Per il pitch usare risposte di esempio predefinite, senza chiamate API live.
- `/aziende`: pagina B2B e modulo di contatto

## Linee guida

- Tutti i testi visibili sul sito devono essere in italiano.
- Progettare mobile-first: gli studenti usano il telefono.
- Non inserire mai chiavi API o password nel codice. Usare variabili d'ambiente (ad esempio `.env.local`), senza committarle.
- Mantenere le modifiche piccole e mirate alla richiesta; evitare refactor non correlati.
