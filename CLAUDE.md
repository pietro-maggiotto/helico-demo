# Helico — demo website

Helico è una scuola professionale AI-native per aspiranti elettricisti e idraulici in Italia. Gli studenti acquistano un corso di 5–6 mesi (€699), imparano con lezioni pratiche e ricevono feedback AI sulle foto dei loro esercizi. Le aziende pagano €1.500 per dipendente formato (classi di circa 20 persone) e €2.000 per ogni diplomato assunto.

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

## Git workflow
After completing every task:
1. Run `npm run build` and fix any error.
2. Run `git add -A`.
3. Commit with a short, descriptive message in Italian (e.g. "Landing: nuovo hero liquid glass").
4. Run `git push` so Vercel deploys automatically.
Tell me the commit message and that the deploy has started.