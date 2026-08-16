import type {
  ExplorationContentItemId,
  MobileLabelOffset,
  Position,
} from "@/types/experience";

export interface ExplorationNodeConfig {
  id: ExplorationContentItemId;
  label: "AI" | "Photography";
  position: Position;
  mobilePosition?: Position;
  mobileLabelOffset?: MobileLabelOffset;
  accent: string;
  accentGlow: string;
}

export const EXPLORATION_NODES: ExplorationNodeConfig[] = [
  {
    id: "exploration-ai",
    label: "AI",
    position: { x: 61.5, y: 27.5 },
    mobilePosition: { x: 59, y: 27.5 },
    accent: "#4f7f7a",
    accentGlow: "rgba(79, 127, 122, 0.3)",
  },
  {
    id: "exploration-photography",
    label: "Photography",
    position: { x: 67, y: 27.5 },
    mobilePosition: { x: 69.5, y: 27.5 },
    accent: "#9a6b45",
    accentGlow: "rgba(154, 107, 69, 0.3)",
  },
];
