"use client";

import { useEffect } from "react";
import liquidGL from "liquid-gl";

type LiquidGlassInitProps = {
  target: string;
  mobileTarget?: string;
  snapshot: string;
};

export default function LiquidGlassInit({
  target,
  mobileTarget,
  snapshot,
}: LiquidGlassInitProps) {
  useEffect(() => {
    const reducedTransparency = window.matchMedia(
      "(prefers-reduced-transparency: reduce)",
    );
    const mobileLayout = window.matchMedia("(max-width: 760px)");
    let lenses: ReturnType<typeof liquidGL> = undefined;

    const destroyLenses = () => {
      if (!lenses) return;
      const instances = Array.isArray(lenses) ? lenses : [lenses];
      instances.forEach((lens) => lens.destroy());
      lenses = undefined;
    };

    const updateMaterial = () => {
      destroyLenses();
      if (reducedTransparency.matches) return;

      const activeTarget =
        mobileTarget && mobileLayout.matches ? mobileTarget : target;
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
        specular: false,
        reveal: "none",
        tilt: false,
        draggable: false,
        interaction: "none",
      });

      if (!initialized) {
        throw new Error(
          `LiquidGL non ha trovato le superfici: ${activeTarget}`,
        );
      }

      lenses = initialized;
    };

    updateMaterial();
    reducedTransparency.addEventListener("change", updateMaterial);
    mobileLayout.addEventListener("change", updateMaterial);

    return () => {
      reducedTransparency.removeEventListener("change", updateMaterial);
      mobileLayout.removeEventListener("change", updateMaterial);
      destroyLenses();
    };
  }, [mobileTarget, snapshot, target]);

  return null;
}
