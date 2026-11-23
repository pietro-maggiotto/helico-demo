"use client";

import { useEffect } from "react";
import liquidGL from "liquid-gl";

type LiquidGlassInitProps = {
  navTarget?: string;
  target: string;
  mobileTarget?: string;
  snapshot: string;
};

export default function LiquidGlassInit({
  navTarget,
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
    let lenses: Array<{ destroy(): void }> = [];

    const destroyLenses = () => {
      lenses.forEach((lens) => lens.destroy());
      lenses = [];
    };

    const updateMaterial = () => {
      destroyLenses();
      if (reducedTransparency.matches) return;

      const activeTarget =
        mobileTarget && mobileLayout.matches ? mobileTarget : target;
      const navTint = getComputedStyle(document.documentElement)
        .getPropertyValue("--glass-nav-tint")
        .trim();

      if (navTarget && !navTint) {
        throw new Error("Token --glass-nav-tint non trovato");
      }

      const createLenses = (
        activeTarget: string,
        tint?: string,
        tilt = false,
      ) => {
        const initialized = liquidGL({
          engine: "webgl",
          target: activeTarget,
          snapshot,
          resolution: 1.5,
          refraction: 0.008,
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
          interactionStrength: 0.55,
          interactionRadius: 0.5,
          interactionViscosity: 0.6,
          tint,
        });

        if (!initialized) {
          throw new Error(`LiquidGL non ha trovato le superfici: ${activeTarget}`);
        }

        return Array.isArray(initialized) ? initialized : [initialized];
      };

      lenses = [
        ...(navTarget
          ? createLenses(navTarget, navTint)
          : []),
        ...createLenses(activeTarget, undefined, true),
      ];
    };

    updateMaterial();
    reducedTransparency.addEventListener("change", updateMaterial);
    reducedMotion.addEventListener("change", updateMaterial);
    mobileLayout.addEventListener("change", updateMaterial);

    return () => {
      reducedTransparency.removeEventListener("change", updateMaterial);
      reducedMotion.removeEventListener("change", updateMaterial);
      mobileLayout.removeEventListener("change", updateMaterial);
      destroyLenses();
    };
  }, [mobileTarget, navTarget, snapshot, target]);

  return null;
}
