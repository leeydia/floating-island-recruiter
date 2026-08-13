import type { NavigatorConfig } from "@/types/experience";

/**
 * Navigator positions derived from island-annotated.png.
 * Final annotated sequence: 01 Journey, 02 Works, 03 Exploration, 04 About,
 * 05 Contact.
 * Coordinates are percentages relative to the scene container.
 */
export const NAVIGATORS: NavigatorConfig[] = [
  {
    id: "journey",
    number: "01",
    label: "Journey",
    landmark: "Harbor",
    anchor: { x: 24, y: 60 },
    labelPosition: { x: 8.5, y: 55 },
  },
  {
    id: "works",
    number: "02",
    label: "Works",
    landmark: "Maze Garden",
    anchor: { x: 43.5, y: 29 },
    labelPosition: { x: 31, y: 9.5 },
  },
  {
    id: "exploration",
    number: "03",
    label: "Exploration",
    landmark: "Outdoor Theatre",
    anchor: { x: 63, y: 31 },
    labelPosition: { x: 74, y: 11.5 },
  },
  {
    id: "about",
    number: "04",
    label: "About",
    landmark: "Natural Lake",
    anchor: { x: 56, y: 64 },
    labelPosition: { x: 42, y: 86 },
  },
  {
    id: "contact",
    number: "05",
    label: "Contact",
    landmark: "Lighthouse",
    anchor: { x: 81, y: 38 },
    labelPosition: { x: 90.5, y: 29.5 },
  },
];

export const PAVILION_POSITION = { x: 50.5, y: 42.5 } as const;
