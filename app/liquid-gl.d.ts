declare module "liquid-gl" {
  interface LiquidGLLens {
    destroy(): void;
  }

  interface LiquidGLOptions {
    engine?: "auto" | "webgpu" | "webgl2" | "webgl";
    target?: string;
    snapshot?: string;
    resolution?: number;
    refraction?: number;
    aberration?: number;
    bevelDepth?: number;
    bevelWidth?: number;
    frost?: number;
    shadow?: boolean;
    specular?: boolean;
    reveal?: "fade" | "none";
    tilt?: boolean;
    tiltFactor?: number;
    tiltEase?: number;
    draggable?: boolean;
    interaction?: "none" | "fluid";
    interactionStrength?: number;
    interactionRadius?: number;
    interactionViscosity?: number;
    tint?: string | null;
  }

  function liquidGL(
    options?: LiquidGLOptions,
  ): LiquidGLLens | LiquidGLLens[] | undefined;

  export default liquidGL;
}
