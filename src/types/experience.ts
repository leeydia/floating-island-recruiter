export type ExperienceState =
  | "welcome"
  | "island-overview"
  | "landmark-view"
  | "minimap-overview"
  | "content-panel";

export type LandmarkId =
  | "works"
  | "exploration"
  | "journey"
  | "about"
  | "contact";

export type JourneyContentItemId = "journey-timeline";

export type WorksContentItemId =
  | "works-academic-portfolio"
  | "works-branding-fnb"
  | "works-branding-retail-lifestyle"
  | "works-visualization-township-aerial"
  | "works-visualization-exterior"
  | "works-visualization-landscape";

export type ExplorationContentItemId =
  | "exploration-ai"
  | "exploration-photography";

export type AboutContentItemId = "about-me" | "about-note";

export type ContactContentItemId = "contact-details";

export type ContentItemId =
  | JourneyContentItemId
  | WorksContentItemId
  | ExplorationContentItemId
  | AboutContentItemId
  | ContactContentItemId;

export interface SceneTransform {
  scale: number;
  translateX: number;
  translateY: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface NavigatorConfig {
  id: LandmarkId;
  number: string;
  label: string;
  landmark: string;
  anchor: Position;
  labelPosition: Position;
}
