export interface ExplorationMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PhotographyGroup {
  id: string;
  location: string;
  introduction: string;
  themes: string[];
  media: ExplorationMedia[];
}

export const EXPLORATION_LANDMARK_INTRODUCTION =
  "Experiments, observations, and interests that continue to shape how I see and create.";

export const AI_PANEL_INTRODUCTION =
  "An area of ongoing exploration where I am learning how AI can support thoughtful design, creative development, and new ways of making ideas tangible.";

export const AI_PROJECT = {
  title: "Leeydia's Floating Island",
  metadata: [
    { label: "Project", value: "Leeydia's Floating Island" },
    { label: "Type", value: "Personal Website / AI Exploration" },
    { label: "Role", value: "Concept, Design & Development" },
    { label: "Status", value: "Ongoing / Current Exploration" },
  ],
  introduction:
    "A personal portfolio experiment combining AI-assisted creation, design, spatial storytelling, interaction, and portfolio presentation within one explorable island.",
  processIntroduction:
    "The project moves iteratively between product thinking, visual exploration, implementation, and testing.",
  process: [
    "Concept development",
    "Information architecture",
    "Visual direction",
    "AI-assisted asset exploration",
    "Interaction planning",
    "PRD development",
    "Iterative implementation",
    "Testing and refinement",
  ],
  media: [
    {
      src: "/media/AI/website-island001.webp",
      alt: "Early visual development for Leeydia's Floating Island",
      width: 1536,
      height: 1024,
    },
    {
      src: "/media/AI/website-island002.webp",
      alt: "Annotated interaction development for Leeydia's Floating Island",
      width: 1536,
      height: 1024,
    },
    {
      src: "/media/AI/website-island003.webp",
      alt: "Floating Island experience development visual",
      width: 1672,
      height: 941,
    },
  ] satisfies ExplorationMedia[],
} as const;

export const PHOTOGRAPHY_PANEL_INTRODUCTION =
  "Photography is a personal way of observing places, light, architecture, landscapes, and everyday details that might otherwise go unnoticed.";

const photographyMedia = (
  folder: string,
  file: string,
  location: string,
  width: number,
  height: number,
): ExplorationMedia => ({
  src: `/media/Photography/${folder}/${file}.webp`,
  alt: `${location} photography collection`,
  width,
  height,
});

export const PHOTOGRAPHY_GROUPS: PhotographyGroup[] = [
  {
    id: "china",
    location: "China",
    introduction:
      "China introduced me to the contrast between history and modern transformation—from traditional architecture and cultural landscapes to rapidly changing urban environments.",
    themes: ["Architecture", "Culture", "Urban Landscapes", "Human Stories"],
    media: [
      photographyMedia("China", "China 001", "China", 3072, 4608),
      photographyMedia("China", "China 002", "China", 2988, 4608),
      photographyMedia("China", "China 003", "China", 3072, 4608),
      photographyMedia("China", "China 004", "China", 3072, 4608),
      photographyMedia("China", "China 005", "China", 3072, 4608),
      photographyMedia("China", "China 006", "China", 3072, 4608),
      photographyMedia("China", "China 007", "China", 3072, 4608),
      photographyMedia("China", "China 008", "China", 3072, 4608),
      photographyMedia("China", "China 009", "China", 3072, 4608),
    ],
  },
  {
    id: "indonesia",
    location: "Indonesia",
    introduction:
      "Indonesia offered a different rhythm—one shaped by nature, traditional craftsmanship, and the relationship between people and their surroundings.",
    themes: ["Nature", "Local Culture", "Lifestyle", "Environment"],
    media: [
      photographyMedia("Indonesia", "Indo001", "Indonesia", 4608, 3456),
      photographyMedia("Indonesia", "Indo002", "Indonesia", 3456, 4608),
      photographyMedia("Indonesia", "Indo003", "Indonesia", 4608, 3456),
      photographyMedia("Indonesia", "Indo004", "Indonesia", 4608, 3456),
      photographyMedia("Indonesia", "Indo005", "Indonesia", 4608, 3456),
      photographyMedia("Indonesia", "Indo006", "Indonesia", 4608, 3456),
      photographyMedia("Indonesia", "Indo007", "Indonesia", 3456, 4608),
      photographyMedia("Indonesia", "Indo008", "Indonesia", 4608, 3456),
      photographyMedia("Indonesia", "Indo009", "Indonesia", 3456, 4608),
      photographyMedia("Indonesia", "Indo010", "Indonesia", 4608, 3456),
    ],
  },
  {
    id: "new-zealand",
    location: "New Zealand",
    introduction:
      "New Zealand inspired me through its vast landscapes and quiet moments, reminding me how powerful simplicity and natural environments can be.",
    themes: ["Landscape", "Nature", "Light", "Atmosphere"],
    media: [
      photographyMedia("Newzealand", "NZ001", "New Zealand", 1920, 2880),
      photographyMedia("Newzealand", "NZ002", "New Zealand", 1920, 2880),
      photographyMedia("Newzealand", "NZ003", "New Zealand", 1920, 2880),
      photographyMedia("Newzealand", "NZ004", "New Zealand", 3072, 4608),
      photographyMedia("Newzealand", "NZ005", "New Zealand", 3072, 4608),
      photographyMedia("Newzealand", "NZ006", "New Zealand", 3072, 4608),
      photographyMedia("Newzealand", "NZ007", "New Zealand", 3072, 4608),
      photographyMedia("Newzealand", "NZ008", "New Zealand", 3072, 4608),
      photographyMedia("Newzealand", "NZ009", "New Zealand", 3072, 4608),
      photographyMedia("Newzealand", "NZ010", "New Zealand", 3072, 4608),
      photographyMedia("Newzealand", "NZ011", "New Zealand", 4608, 3072),
    ],
  },
  {
    id: "europe",
    location: "Europe",
    introduction:
      "Europe allowed me to explore how architecture, history, and daily life coexist—where every street, building, and corner carries a story.",
    themes: ["Architecture", "Heritage", "Urban Experience", "Design"],
    media: [
      photographyMedia("Europe", "Europe001", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe002", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe003", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe004", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe005", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe006", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe007", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe008", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe009", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe010", "Europe", 3456, 4608),
      photographyMedia("Europe", "Europe011", "Europe", 3456, 4608),
    ],
  },
];
