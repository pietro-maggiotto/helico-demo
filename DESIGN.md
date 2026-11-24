# Helico — Liquid Glass per il web

## Direzione

Un'interfaccia essenziale e fotografica: contenuti netti e a tutta larghezza,
controlli flottanti in Liquid Glass. Il vetro è un livello funzionale, non una
decorazione per le card.

## Palette

| Token | Valore | Uso |
| --- | --- | --- |
| `--color-canvas` | `#F5F5F2` | Fondo neutro delle sezioni |
| `--color-ink` | `#131313` | Testo principale |
| `--color-secondary` | `#45464A` | Testo secondario |
| `--color-accent` | `#2447C8` | Unico accento: azioni, focus e mesh |
| `--glass-neutral` | `rgba(255, 255, 255, 0.90)` | Coach e barra mobile |
| `--glass-tint` | `rgba(228, 235, 255, 0.92)` | Solo CTA principale |

Il gradiente mesh usa il blu d'accento a diverse opacità con bianco e nero:
non introduce altri colori UI. Quando saranno disponibili, le fotografie
originali sostituiranno il gradiente senza filtri decorativi o sovrapposizioni
che ne alterino il contenuto.

### Contrasto sul vetro

Il testo sui controlli in vetro usa `--color-ink`. Anche assumendo un'immagine
nera dietro la superficie, `--glass-neutral` composita a circa `#E6E6E6` e
`--glass-tint` a circa `#D2D8EB`: il testo mantiene rispettivamente circa
`14.9:1` e `13.1:1`. La nav usa una sorgente opaca da `#FFFFFF` a `#EDEDED`,
con contrasto superiore a `15:1`. L'accento sul vetro neutro supera `4.5:1`;
sul vetro tinto supera `5.2:1`. Per i fallback senza trasparenza usare gli
stessi fondi chiari, non superfici scure.

## Materiale, raggi e ombre

| Token | Valore |
| --- | --- |
| `--glass-blur` | `blur(20px) saturate(180%)` |
| `--radius-control` | `999px` (capsule) |
| `--radius-float` | `24px` |
| `--radius-image` | `32px` |
| `--glass-edge` | `1px solid rgba(255, 255, 255, 0.78)` |
| `--glass-highlight` | `inset 0 1px 0 rgba(255, 255, 255, 0.9)` |
| `--glass-shadow` | `0 12px 36px rgba(0, 0, 0, 0.12)` |

LiquidGL è il miglioramento WebGL del materiale; il CSS usa
`backdrop-filter: blur(20px) saturate(180%)` come fallback e resta leggibile
quando WebGL non è disponibile. L'effetto viene applicato una sola volta per
controllo: niente superfici di vetro annidate o sovrapposte.

## Tipografia

Stack: `-apple-system, "SF Pro Display", system-ui, sans-serif`.
Usare solo i pesi `400` e `600`.

| Ruolo | Dimensione | Interlinea | Spaziatura |
| --- | --- | --- | --- |
| Hero | `clamp(3rem, 8vw, 7rem)` | `0.98` | `-0.03em` |
| Titolo sezione | `clamp(2rem, 4vw, 3.5rem)` | `1.04` | `-0.03em` |
| Titolo card | `1.25rem` | `1.2` | `-0.02em` |
| Corpo | `1rem` | `1.55` | normale |
| Etichetta | `0.8125rem` | `1.3` | `0.01em` |

## Composizione e comportamento

- **Solo due livelli:** contenuto fotografico/mesh a tutta larghezza e controlli
  flottanti. Sezioni e card informative restano opache, senza blur.
- **Vetro solo sui controlli:** barra di navigazione, CTA principale, bolla
  flottante del coach AI e barra a schede mobile. Non mettere il CTA dentro una
  superficie nav già vetrata: tenerlo separato evita vetro su vetro.
- **Tintura:** la CTA usa il vetro azzurro chiaro; la nav usa una sorgente
  bianca opaca agganciata alla barra fissa; gli altri controlli usano il vetro
  neutro.
- **Spazio:** layout mobile-first, titoli ampi, margini generosi e contenuto
  leggibile sopra immagini vivide. Le card dei corsi non diventano vetro.
- **Rimozioni:** niente pill-eyebrow, griglie illustrative, icone sparkle/check
  decorative o microcopy riempitivo.
- **Interazione:** al `:active` i pulsanti scalano a `0.97`; gli anchor scorrono
  con morbidezza; il vetro segue il tocco e il puntatore con distorsione ampia,
  riflessi e inclinazione lieve sui controlli più piccoli. Le barre superiore e
  inferiore usano superfici bianche isolate: il riflesso segue puntatore o
  tocco, senza rifrangere il contenuto della pagina. La capsula superiore resta
  fissa e opaca. Le card dei corsi si sollevano appena in hover, senza diventare
  vetro.
- **Accessibilità:** bersagli interattivi di almeno `44px`; focus visibile con
  l'accento; testo su ogni superficie vetrata con contrasto minimo `4.5:1`.
  Con `prefers-reduced-transparency: reduce` si disattiva WebGL/blur e si usa
  il fondo opaco chiaro. Con `prefers-reduced-motion: reduce` si rimuovono
  transizioni, scorrimento morbido ed effetti di movimento.
- **Barra mobile:** flottante sopra la safe area inferiore, con fondo neutro
  vetrato e senza sovrapporsi al CTA o ai contenuti.
