"use client";

import { useEffect } from "react";
import liquidGL from "liquid-gl";

type LiquidGlassInitProps = {
  navTarget?: string;
  mobileNavTarget?: string;
  target: string;
  mobileTarget?: string;
  snapshot: string;
};

export default function LiquidGlassInit({
  navTarget,
  mobileNavTarget,
  target,
  mobileTarget,
  snapshot,
}: LiquidGlassInitProps) {
  useEffect(() => {
    const reducedTransparency = window.matchMedia(
      "(prefers-reduced-transparency: reduce)",
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileLayout = window.matchMedia("(max-width: 760px)");
    const glowElements = [navTarget, mobileNavTarget]
      .filter((selector): selector is string => Boolean(selector))
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter((element): element is HTMLElement => Boolean(element));
    let lenses: Array<{ destroy(): void }> = [];
    const glowListeners = new Map<
      HTMLElement,
      { move: (event: PointerEvent) => void; leave: () => void }
    >();

    const resetNavGlow = (element: HTMLElement) => {
      element.style.setProperty("--nav-glow-x", "50%");
      element.style.setProperty("--nav-glow-y", "50%");
    };

    const moveNavGlow = (element: HTMLElement, event: PointerEvent) => {
      if (reducedMotion.matches) return;

      const bounds = element.getBoundingClientRect();
      const x = Math.min(
        100,
        Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100),
      );
      const y = Math.min(
        100,
        Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100),
      );
      element.style.setProperty("--nav-glow-x", `${x}%`);
      element.style.setProperty("--nav-glow-y", `${y}%`);
    };

    const destroyLenses = () => {
      lenses.forEach((lens) => lens.destroy());
      lenses = [];
    };

    const updateMaterial = () => {
      destroyLenses();
      if (reducedMotion.matches) {
        glowElements.forEach(resetNavGlow);
      }
      if (reducedTransparency.matches) return;

      const activeTarget =
        mobileTarget && mobileLayout.matches ? mobileTarget : target;
      const createLenses = (activeTarget: string, tilt = false) => {
        const initialized = liquidGL({
          engine: "webgl",
          target: activeTarget,
          snapshot,
          resolution: 1.5,
          refraction: 0.03,
          aberration: 0,
          bevelDepth: 0.04,
          bevelWidth: 0.12,
          frost: 0,
          shadow: true,
          specular: !reducedMotion.matches,
          reveal: "none",
          tilt: tilt && !reducedMotion.matches,
          tiltFactor: 3,
          tiltEase: 420,
          draggable: false,
          interaction: reducedMotion.matches ? "none" : "fluid",
          interactionStrength: 1,
          interactionRadius: 0.7,
          interactionViscosity: 0.3,
        });

        if (!initialized) {
          throw new Error(`LiquidGL non ha trovato le superfici: ${activeTarget}`);
        }

        return Array.isArray(initialized) ? initialized : [initialized];
      };

      lenses = createLenses(activeTarget, true);
    };

    updateMaterial();
    glowElements.forEach((element) => {
      const move = (event: PointerEvent) => moveNavGlow(element, event);
      const leave = () => resetNavGlow(element);
      glowListeners.set(element, { move, leave });
      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", leave, { passive: true });
    });
    reducedTransparency.addEventListener("change", updateMaterial);
    reducedMotion.addEventListener("change", updateMaterial);
    mobileLayout.addEventListener("change", updateMaterial);

    return () => {
      glowListeners.forEach(({ move, leave }, element) => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      });
      reducedTransparency.removeEventListener("change", updateMaterial);
      reducedMotion.removeEventListener("change", updateMaterial);
      mobileLayout.removeEventListener("change", updateMaterial);
      destroyLenses();
    };
  }, [
    mobileNavTarget,
    mobileTarget,
    navTarget,
    snapshot,
    target,
  ]);

  return null;
}
