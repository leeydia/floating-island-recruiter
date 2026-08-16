import type {
  AboutContentItemId,
  MobileLabelOffset,
  Position,
} from "@/types/experience";

export interface AboutNodeConfig {
  id: AboutContentItemId;
  label: "About Me" | "A Note";
  position: Position;
  mobileLabelOffset?: MobileLabelOffset;
}

export const ABOUT_NODES: AboutNodeConfig[] = [
  {
    id: "about-me",
    label: "About Me",
    position: { x: 47.5, y: 67 },
    mobileLabelOffset: { x: -8 },
  },
  {
    id: "about-note",
    label: "A Note",
    position: { x: 56.5, y: 67 },
    mobileLabelOffset: { x: 8 },
  },
];
