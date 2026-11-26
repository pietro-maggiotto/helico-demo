"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  BookOpen,
  Camera,
  Check,
  LockKeyhole,
  MessageCircle,
  Mic,
  Play,
  type LucideIcon,
} from "lucide-react";

const features = [
  {
    label: "Lezioni",
    title: "Lezioni che vanno al punto.",
    description:
      "Video brevi e pratici, una lezione alla volta. Sai sempre dove sei e cosa viene dopo.",
  },
  {
    label: "Fotocamera",
    title: "Inquadra. Fatto.",
    description:
      "Fotografa il tuo lavoro o un contatore: il coach riconosce subito cosa stai guardando.",
  },
  {
    label: "Coach AI",
    title: "Un coach sempre acceso.",
    description:
      "Ti dice cosa va bene, cosa correggere e come lavorare in sicurezza. In qualsiasi momento.",
  },
  {
    label: "Progressi",
    title: "Vedi quanto manca.",
    description:
      "Lezioni completate, esercizi corretti e il traguardo, a colpo d'occhio.",
  },
] as const;

type FeatureIndex = 0 | 1 | 2 | 3;

const tabs: { label: string; icon: LucideIcon }[] = [
  { label: "Corso", icon: BookOpen },
  { label: "Fotocamera", icon: Camera },
  { label: "Coach", icon: MessageCircle },
  { label: "Progressi", icon: BarChart3 },
];

function StatusBar() {
  return (
    <>
      <div className="iphone-status-bar" aria-hidden="true">
        <span>9:41</span>
        <svg
          className="iphone-status-icons"
          viewBox="0 0 54 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 13V10.5C1 9.7 1.7 9 2.5 9S4 9.7 4 10.5V13M6 13V8C6 7.2 6.7 6.5 7.5 6.5S9 7.2 9 8V13M11 13V5.5C11 4.7 11.7 4 12.5 4S14 4.7 14 5.5V13"
            fill="currentColor"
          />
          <path
            d="M21 6.2C24.3 3.2 29.7 3.2 33 6.2L27 13L21 6.2Z"
            fill="currentColor"
          />
          <rect
            x="38"
            y="3.5"
            width="13"
            height="9"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect x="40" y="5.5" width="8.5" height="5" rx="1" fill="currentColor" />
          <path d="M52 6.5V9.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="iphone-dynamic-island" aria-hidden="true" />
    </>
  );
}

function AppTabBar({ activeIndex }: { activeIndex: FeatureIndex }) {
  return (
    <div className="iphone-tab-bar" aria-hidden="true">
      {tabs.map(({ label, icon: Icon }, index) => (
        <div
          className={`iphone-tab${index === activeIndex ? " is-active" : ""}`}
          key={label}
        >
          <Icon size={18} strokeWidth={1.8} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function CourseScreen() {
  const lessons = [
    { title: "10 · Sicurezza e messa a terra", status: "done" },
    { title: "11 · Cavi e sezioni", status: "done" },
    { title: "12 · Interruttore e punto luce", status: "current" },
    { title: "13 · Il deviatore", status: "locked" },
    { title: "14 · Prese e linee dedicate", status: "locked" },
  ] as const;

  return (
    <div
      className="iphone-app-screen iphone-app-screen--course"
      role="img"
      aria-label="Schermata Corso: lezioni di elettricista, lezione 12 in corso"
    >
      <StatusBar />
      <div className="iphone-screen-content course-content">
        <h3>Il tuo corso</h3>
        <p className="course-module">Elettricista · Modulo 3 di 8</p>
        <article className="current-lesson">
          <div className="lesson-thumbnail" aria-hidden="true">
            <Play size={22} fill="white" strokeWidth={1.5} />
          </div>
          <div className="current-lesson-copy">
            <span className="current-lesson-label">In corso</span>
            <strong>Lezione 12</strong>
            <span>Interruttore e punto luce</span>
            <small>18 min</small>
          </div>
          <span className="resume-pill">Riprendi</span>
        </article>
        <div className="course-lesson-list">
          {lessons.map((lesson) => (
            <div className="course-lesson-row" key={lesson.title}>
              {lesson.status === "done" ? (
                <Check className="lesson-status lesson-status--done" size={16} />
              ) : lesson.status === "current" ? (
                <span className="lesson-status-dot" />
              ) : (
                <LockKeyhole
                  className="lesson-status lesson-status--locked"
                  size={14}
                />
              )}
              <span className="course-lesson-title">{lesson.title}</span>
              {lesson.status === "current" && (
                <small className="lesson-current-label">in corso</small>
              )}
            </div>
          ))}
        </div>
      </div>
      <AppTabBar activeIndex={0} />
    </div>
  );
}

function CameraScreen() {
  return (
    <div
      className="iphone-app-screen iphone-app-screen--camera"
      role="img"
      aria-label="Schermata Fotocamera: inquadratura del contatore pronta per l'esercizio"
    >
      <StatusBar />
      <div className="camera-photo-placeholder">
        <span>Foto contatore</span>
      </div>
      <div className="camera-top-pill">Esercizio 12 · Lettura contatore</div>
      <div className="camera-focus">
        <span className="camera-detected">Contatore rilevato</span>
        <div className="camera-frame" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="camera-controls">
        <p>Inquadra il display del contatore</p>
        <div className="camera-shutter" aria-hidden="true">
          <span />
        </div>
        <span className="camera-mode">FOTO</span>
      </div>
      <AppTabBar activeIndex={1} />
    </div>
  );
}

function CoachScreen() {
  return (
    <div
      className="iphone-app-screen iphone-app-screen--coach"
      role="img"
      aria-label="Schermata Coach AI: conversazione sul lavoro elettrico con il coach online"
    >
      <StatusBar />
      <div className="iphone-screen-content coach-content">
        <header className="coach-header">
          <h3>Coach AI</h3>
          <span className="coach-online-dot" />
          <span>Online</span>
        </header>
        <div className="coach-messages">
          <div className="coach-message coach-message--user coach-message--with-photo">
            <div className="coach-photo-thumb" role="img" aria-label="Foto contatore">
              Foto contatore
            </div>
            <span>Ho fatto la lettura, è giusta?</span>
          </div>
          <div className="coach-message coach-message--coach">
            Sì, la lettura è corretta. Ricorda: prima di aprire il quadro verifica
            sempre l&apos;assenza di tensione con il tester.
          </div>
          <div className="coach-message coach-message--user">
            Perfetto, e adesso?
          </div>
          <div className="coach-message coach-message--coach">
            Passa alla lezione 13, il deviatore. Ci vogliono circa 20 minuti.
          </div>
        </div>
        <div className="coach-input">
          <span>Scrivi al coach…</span>
          <Mic size={17} aria-hidden="true" />
        </div>
      </div>
      <AppTabBar activeIndex={2} />
    </div>
  );
}

function ProgressScreen() {
  const bars = [
    { day: "L", height: "38%" },
    { day: "M", height: "55%" },
    { day: "M", height: "44%" },
    { day: "G", height: "78%", today: true },
    { day: "V", height: "62%" },
    { day: "S", height: "35%" },
    { day: "D", height: "48%" },
  ];

  return (
    <div
      className="iphone-app-screen iphone-app-screen--progress"
      role="img"
      aria-label="Schermata Progressi: 12 di 28 lezioni completate e attività settimanale"
    >
      <StatusBar />
      <div className="iphone-screen-content progress-content">
        <h3>Progressi</h3>
        <div className="progress-ring">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle className="progress-ring-track" cx="60" cy="60" r="52" />
            <circle
              className="progress-ring-value"
              cx="60"
              cy="60"
              r="52"
              strokeDasharray="326.7"
              strokeDashoffset="186.2"
            />
          </svg>
          <div className="progress-ring-label">
            <strong>12 di 28</strong>
            <span>lezioni</span>
          </div>
        </div>
        <p className="progress-remaining">
          Mancano 16 lezioni · circa 7 settimane
        </p>
        <div className="progress-stats">
          <div>
            <strong>34</strong>
            <span>esercizi corretti</span>
          </div>
          <div>
            <strong>26 h</strong>
            <span>di pratica</span>
          </div>
        </div>
        <section className="weekly-progress">
          <h4>Questa settimana</h4>
          <div className="weekly-chart">
            {bars.map(({ day, height, today }, index) => (
              <div className="weekly-bar-column" key={`${day}-${index}`}>
                <span
                  className={`weekly-bar${today ? " is-today" : ""}`}
                  style={{ height }}
                />
                <small>{day}</small>
              </div>
            ))}
          </div>
        </section>
        <div className="next-milestone">
          <span>Prossimo traguardo</span>
          <strong>Attestato di metà corso · tra 2 lezioni</strong>
        </div>
      </div>
      <AppTabBar activeIndex={3} />
    </div>
  );
}

const screens = [CourseScreen, CameraScreen, CoachScreen, ProgressScreen] as const;

function IPhoneFrame({ activeIndex }: { activeIndex: FeatureIndex }) {
  const Screen = screens[activeIndex];

  return (
    <div className="iphone-frame">
      <span className="iphone-side-button iphone-side-button--action" />
      <span className="iphone-side-button iphone-side-button--volume-up" />
      <span className="iphone-side-button iphone-side-button--volume-down" />
      <span className="iphone-side-button iphone-side-button--power" />
      <div className="iphone-bezel">
        <div className="iphone-screen" key={activeIndex}>
          <Screen />
        </div>
      </div>
    </div>
  );
}

export default function IPhoneShowcase() {
  const [activeIndex, setActiveIndex] = useState<FeatureIndex>(0);
  const triggers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLDivElement).dataset.featureIndex,
            );
            if (index >= 0 && index < features.length) {
              setActiveIndex(index as FeatureIndex);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    triggers.current.forEach((trigger) => {
      if (trigger) observer.observe(trigger);
    });

    return () => observer.disconnect();
  }, []);

  function scrollToFeature(index: FeatureIndex) {
    const trigger = triggers.current[index];
    if (!trigger) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const top = window.scrollY + trigger.getBoundingClientRect().top;
    window.scrollTo({
      top,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className="iphone-showcase">
      <div className="iphone-showcase-desktop">
        <div className="iphone-showcase-scroll">
          <div className="iphone-showcase-sticky">
            <div className="iphone-showcase-grid">
              <div className="iphone-feature-copy" key={activeIndex}>
                <h3>{features[activeIndex].title}</h3>
                <p>{features[activeIndex].description}</p>
              </div>
              <div className="iphone-feature-device">
                <IPhoneFrame activeIndex={activeIndex} />
              </div>
              <nav className="iphone-feature-nav" aria-label="Funzioni dell'app">
                {features.map((feature, index) => (
                  <button
                    className={
                      index === activeIndex
                        ? "iphone-feature-step is-active"
                        : "iphone-feature-step"
                    }
                    key={feature.label}
                    type="button"
                    aria-current={index === activeIndex ? "step" : undefined}
                    onClick={() => scrollToFeature(index as FeatureIndex)}
                  >
                    {feature.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="iphone-showcase-triggers" aria-hidden="true">
            {features.map((feature, index) => (
              <div
                className="iphone-showcase-trigger"
                data-feature-index={index}
                key={feature.label}
                ref={(element) => {
                  triggers.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="iphone-showcase-mobile">
        {features.map((feature, index) => {
          const featureIndex = index as FeatureIndex;
          return (
            <article className="iphone-mobile-feature" key={feature.label}>
              <div className="iphone-mobile-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <IPhoneFrame activeIndex={featureIndex} />
            </article>
          );
        })}
      </div>
    </div>
  );
}
