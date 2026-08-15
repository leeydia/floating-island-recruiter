import type { LandmarkId, SceneTransform } from "@/types/experience";

export const ISLAND_OVERVIEW_TRANSFORM: SceneTransform = {
  scale: 1,
  translateX: 0,
  translateY: 0,
};

/** Landmark focus presets expressed as scale plus frame-relative translation. */
export const LANDMARK_TRANSFORMS: Record<LandmarkId, SceneTransform> = {
  journey: { scale: 1.8, translateX: 47, translateY: -18 },
  works: { scale: 2.05, translateX: 14, translateY: 43 },
  exploration: { scale: 2.05, translateX: -27, translateY: 39 },
  about: { scale: 1.76, translateX: -10, translateY: -25 },
  contact: { scale: 1.8, translateX: -56, translateY: 22 },
};

export const PARALLAX = {
  islandMaxPx: 6,
  backgroundMaxPx: 3,
} as const;

export const TRANSITION_DURATION_MS = {
  fast: 200,
  medium: 400,
  slow: 1600,
} as const;
