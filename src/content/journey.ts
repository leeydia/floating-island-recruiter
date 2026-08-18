export interface TimelineEntry {
  id: string;
  date: string;
  category: string;
  title: string;
  organisation?: string;
  summary: string;
  details: string[];
  reflectionLabel: "What I carried forward" | "Where I am heading";
  reflection: string;
  relatedAction: {
    label: string;
    landmark: "works" | "exploration";
  };
}

export const TIMELINE_INTRODUCTION =
  "A path shaped by design, storytelling, visualisation, and continuous exploration.";

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: "architecture-education",
    date: "2018–2021",
    category: "Education",
    title: "Bachelor of Science (Honours) in Architecture",
    organisation: "Taylor's University",
    summary:
      "I learned to study people, context, and space — and to translate complex ideas into clear visual stories.",
    details: [
      "Built a foundation in design thinking, user-centred problem solving, research, spatial design, and visual communication.",
      "Completed the degree with LAM Part I.",
      "Received the Taylor's Excellent Award.",
    ],
    reflectionLabel: "What I carried forward",
    reflection:
      "The habit of balancing an idea with its context, constraints, and the people it is intended to serve.",
    relatedAction: {
      label: "View Architecture Work",
      landmark: "works",
    },
  },
  {
    id: "architectural-intern",
    date: "2021",
    category: "Architecture",
    title: "Architectural Intern",
    organisation: "O2DA Design Atelier",
    summary:
      "I entered professional practice and saw how early design ideas develop into drawings and built outcomes.",
    details: [
      "Gained exposure to architectural design development and documentation.",
      "Learned how concepts are refined through drawings, feedback, and practical requirements.",
      "Developed an early understanding of professional architectural workflows.",
    ],
    reflectionLabel: "What I carried forward",
    reflection:
      "A greater awareness of the process required to turn an idea into something tangible.",
    relatedAction: {
      label: "View Architecture Work",
      landmark: "works",
    },
  },
  {
    id: "assistant-architect",
    date: "2021–2022",
    category: "Architecture",
    title: "Assistant Architect",
    organisation: "Ping Ng Architect",
    summary:
      "I learned to balance design intent with technical requirements, coordination, and real-world project constraints.",
    details: [
      "Contributed to architectural design development and technical drawings.",
      "Worked with project information across different stages of development.",
      "Built experience in design coordination, project execution, and communication.",
    ],
    reflectionLabel: "What I carried forward",
    reflection:
      "The ability to work creatively within constraints while keeping ideas clear and buildable.",
    relatedAction: {
      label: "View Architecture Work",
      landmark: "works",
    },
  },
  {
    id: "brand-experience",
    date: "2022–2023",
    category: "Branding & Marketing",
    title: "Brand Experience / Communication Executive",
    organisation: "Avant-X",
    summary:
      "I moved beyond physical space and began exploring how strategy, storytelling, and communication shape the way people experience a brand.",
    details: [
      "Supported campaigns across social media, marketing collateral, content, and creative direction.",
      "Liaised with clients, suppliers, and internal teams to keep projects aligned and moving forward.",
      "Worked across brands in retail, hospitality, and lifestyle.",
      "Learned to consider audience needs, brand positioning, and communication objectives together.",
    ],
    reflectionLabel: "What I carried forward",
    reflection:
      "A stronger understanding of audiences, stakeholder communication, and how a clear story can shape an experience.",
    relatedAction: {
      label: "View Branding Work",
      landmark: "works",
    },
  },
  {
    id: "architectural-visualizer",
    date: "2023–Present",
    category: "3D Visualisation",
    title: "3D Architectural Visualizer",
    organisation: "Australia-based visualisation studio",
    summary:
      "I translate architectural ideas into atmospheric visual experiences that help others understand and imagine spaces before they are built.",
    details: [
      "Produce architectural visualisations that communicate design intent, mood, materials, light, and spatial experience.",
      "Interpret design information and transform abstract concepts into clear, compelling imagery.",
      "Refine work through feedback, iteration, and close attention to detail.",
      "Communicate progress clearly while working toward project deadlines.",
    ],
    reflectionLabel: "What I carried forward",
    reflection:
      "The ability to make complex or unfinished ideas feel understandable, visual, and real.",
    relatedAction: {
      label: "View 3D Visualisation Work",
      landmark: "works",
    },
  },
  {
    id: "ai-product-exploration",
    date: "2026–Now",
    category: "Current Exploration",
    title: "Exploring AI & Product",
    summary:
      "I am bringing together design, storytelling, visual communication, and technology to explore how thoughtful digital products are imagined and built.",
    details: [
      "Learning about AI, product thinking, user experience, and AI-assisted development through self-directed study.",
      "Developing Leeydia's Floating Island as a personal product experiment — from concept and PRD to assets, implementation, testing, and iteration.",
      "Exploring how my experience across architecture, branding, and visualisation can contribute to useful, human-centred technology.",
    ],
    reflectionLabel: "Where I am heading",
    reflection:
      "I’m still exploring where AI and product might take me. Rather than aiming for one fixed role, I want to keep learning, building, and discovering where my different experiences can come together.",
    relatedAction: {
      label: "Explore My AI Projects",
      landmark: "exploration",
    },
  },
];

export const TIMELINE_CLOSING = "The journey continues…";

export const RESUME_INTRODUCTION =
  "A formal overview of my experience, education, skills, and professional journey.";

export const RESUME_VIEW_URL =
  "/document/LauLeeYdia_Resume.pdf";

export const RESUME_DOWNLOAD_URL =
  "/document/LauLeeYdia_Resume.pdf";
