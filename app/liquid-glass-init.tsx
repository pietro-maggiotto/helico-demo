"use client";

import { useEffect } from "react";
import liquidGL from "liquid-gl";

type LiquidGlassInitProps = {
  navTarget?: string;
  navSnapshot?: string;
  target: string;
  mobileTarget?: string;
  snapshot: string;
};

export default function LiquidGlassInit({
  navTarget,
  navSnapshot,
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
      const createLenses = (
        activeTarget: string,
        tilt = false,
        sourceSnapshot = snapshot,
      ) => {
        const initialized = liquidGL({
          engine: "webgl",
          target: activeTarget,
          snapshot: sourceSnapshot,
          resolution: 1.5,
          refraction: 0.018,
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
          interactionRadius: 0.55,
          interactionViscosity: 0.45,
        });

        if (!initialized) {
          throw new Error(`LiquidGL non ha trovato le superfici: ${activeTarget}`);
        }

        return Array.isArray(initialized) ? initialized : [initialized];
      };

      lenses = [
        ...(navTarget
          ? createLenses(navTarget, false, navSnapshot ?? snapshot)
          : []),
        ...createLenses(activeTarget, true),
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
  }, [mobileTarget, navSnapshot, navTarget, snapshot, target]);

  return null;
}
