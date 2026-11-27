const navigation = performance.getEntriesByType("navigation")[0];

if (location.pathname === "/" && navigation?.type === "reload") {
  history.scrollRestoration = "manual";

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
  window.addEventListener(
    "pageshow",
    () => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    },
    { once: true },
  );
}
