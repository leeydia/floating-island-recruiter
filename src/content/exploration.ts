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
    { label: "Type", value: "Personal Website · AI-Assisted Product Experiment" },
    { label: "Role", value: "Concept, Product, Design & AI-assisted Development" },
    { label: "Status", value: "Ongoing / Current Exploration" },
  ],
  introduction:
    "A personal portfolio built as an interactive floating island rather than a conventional website. It became an experiment in how I could use AI not simply to generate an outcome, but as a tool to help me think, design, build and iterate on a digital product from idea to implementation.",
  process: [
    {
      title: "Defining the Idea",
      description:
        "Started with a simple question: how could a portfolio feel more like exploring a place than browsing a website?",
    },
    {
      title: "Planning the Experience",
      description:
        "Mapped the island, landmarks, content structure, user flow and interactions before development, gradually turning the idea into a detailed PRD.",
    },
    {
      title: "Building the Visual World",
      description:
        "Used AI-assisted image generation and iteration to develop the island, atmosphere, landmarks and overall visual direction.",
    },
    {
      title: "Designing the Interaction",
      description:
        "Worked through navigation, camera movement, nodes, panels, transitions and responsive behaviour to make the island understandable as an interface—not only an illustration.",
    },
    {
      title: "Building with AI",
      description:
        "Used AI coding tools to translate the design and requirements into a working website, while learning how to structure prompts, review implementation decisions and communicate changes precisely.",
    },
    {
      title: "Testing & Iterating",
      description:
        "Repeatedly tested the experience in-browser, refining details such as node placement, content hierarchy, image layouts, transitions, clouds and navigation based on what actually worked.",
    },
    {
      title: "Managing the Build",
      description:
        "Introduced Git version control, organised content and media, and gradually moved from experimenting with individual features toward managing the website as a complete product.",
    },
    {
      title: "Still Exploring",
      description:
        "The website itself remains part of the experiment. As I learn more about AI, product thinking and development, I continue to refine both the island and the way I work with these tools.",
    },
  ],
  whatILearned:
    "This project changed how I see AI—from something that produces answers into something I can actively work with. I learned that getting a good outcome still depends heavily on defining the problem, making decisions, communicating clearly, testing what was built, and knowing when something doesn't feel right.",
  media: [
    {
      src: "/media/AI/AI001.webp",
      alt: "Leeydia's Floating Island project image 1",
      width: 1587,
      height: 885,
    },
    {
      src: "/media/AI/AI002.webp",
      alt: "Leeydia's Floating Island project image 2",
      width: 1586,
      height: 886,
    },
    {
      src: "/media/AI/AI003.webp",
      alt: "Leeydia's Floating Island project image 3",
      width: 1587,
      height: 886,
    },
    {
      src: "/media/AI/AI004.webp",
      alt: "Leeydia's Floating Island project image 4",
      width: 2000,
      height: 2000,
    },
    {
      src: "/media/AI/AI005.webp",
      alt: "Leeydia's Floating Island project image 5",
      width: 1536,
      height: 1024,
    },
    {
      src: "/media/AI/AI006.webp",
      alt: "Leeydia's Floating Island project image 6",
      width: 1536,
      height: 1024,
    },
    {
      src: "/media/AI/AI007.webp",
      alt: "Leeydia's Floating Island project image 7",
      width: 1586,
      height: 992,
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
