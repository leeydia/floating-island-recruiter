import type {
  MobileLabelOffset,
  Position,
  WorksContentItemId,
} from "@/types/experience";
import type { WorksCategory } from "@/content/works";

export interface WorksNodeConfig {
  id: WorksContentItemId;
  category: WorksCategory;
  categoryLabel: string;
  label: string;
  position: Position;
  mobilePosition?: Position;
  mobileLabelOffset?: MobileLabelOffset;
}

export const WORKS_NODES: WorksNodeConfig[] = [
  {
    id: "works-academic-portfolio",
    category: "architecture",
    categoryLabel: "Architecture",
    label: "Academic Portfolio",
    position: { x: 32.5, y: 18 },
    mobilePosition: { x: 24, y: 19 },
  },
  {
    id: "works-visualization-township-aerial",
    category: "visualization",
    categoryLabel: "3D Visualization",
    label: "Township & Aerial",
    position: { x: 33, y: 26.5 },
    mobilePosition: { x: 24, y: 52 },
  },
  {
    id: "works-visualization-exterior",
    category: "visualization",
    categoryLabel: "3D Visualization",
    label: "Exterior",
    position: { x: 41.5, y: 27.8 },
    mobilePosition: { x: 41, y: 52 },
  },
  {
    id: "works-visualization-landscape",
    category: "visualization",
    categoryLabel: "3D Visualization",
    label: "Landscape",
    position: { x: 49, y: 26.7 },
    mobilePosition: { x: 58, y: 52 },
  },
  {
    id: "works-branding-fnb",
    category: "branding",
    categoryLabel: "Branding",
    label: "F&B",
    position: { x: 49.5, y: 19 },
    mobilePosition: { x: 41, y: 19 },
  },
  {
    id: "works-branding-retail-lifestyle",
    category: "branding",
    categoryLabel: "Branding",
    label: "Retail & Lifestyle",
    position: { x: 41, y: 16.8 },
    mobilePosition: { x: 58, y: 19 },
  },
];

export const WORKS_CATEGORIES = [
  { id: "architecture", label: "Architecture" },
  { id: "branding", label: "Branding" },
  { id: "visualization", label: "3D Visualization" },
] as const;
