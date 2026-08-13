import type { WorksContentItemId } from "@/types/experience";

export type WorksCategory = "architecture" | "branding" | "visualization";

export interface WorksMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WorksDetailSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface WorksProject {
  id: string;
  name: string;
  tags: string[];
  summary: string;
  metadata?: string;
  location?: string;
  introduction?: string;
  credits?: Array<{
    label: "Role" | "Studio / Employer" | "Client";
    value: string;
  }>;
  media: WorksMedia[];
  details?: WorksDetailSection[];
}

export interface WorksPanelContent {
  id: WorksContentItemId;
  title: string;
  category: WorksCategory;
  introduction: string;
  metadata?: string[];
  workflow?: string;
  projects: WorksProject[];
  closingNote?: string;
  externalLink?: {
    label: string;
    href: string;
    note: string;
  };
}

export const WORKS_LANDMARK_INTRODUCTION =
  "Selected projects across architecture, branding, and 3D visualisation.";

const architectureMedia = (file: string, alt: string, width: number, height: number): WorksMedia => ({
  src: `/media/Architecture/${file}.webp`,
  alt,
  width,
  height,
});

const brandingMedia = (
  folder: "f&b" | "retail&lifestyle",
  file: string,
  alt: string,
  width: number,
  height: number,
): WorksMedia => ({
  src: `/media/Branding/${folder}/${file}.webp`,
  alt,
  width,
  height,
});

const visualizationMedia = (
  folder: "Township & Aerial" | "Exterior" | "Landscape",
  file: string,
  alt: string,
  width: number,
  height: number,
): WorksMedia => ({
  src: `/media/3D-visualization/${folder}/${file}.webp`,
  alt,
  width,
  height,
});

const VISUALIZATION_STUDIO_CREDIT = "4D Studio";
const VISUALIZATION_INTRODUCTION_PLACEHOLDER =
  "[PROJECT INTRODUCTION — TO BE ADDED]";
const BRANDING_PROJECT_CREDIT: WorksProject["credits"] = [
  { label: "Role", value: "Brand Experience / Communication Executive" },
];
const VISUALIZATION_CLOSING =
  "Selected visualisations are presented as examples of my professional work. Project and development rights remain with the respective developers, clients, employers, and rights holders. Images are used for portfolio presentation only.";

export const WORKS_CONTENT: Record<WorksContentItemId, WorksPanelContent> = {
  "works-academic-portfolio": {
    id: "works-academic-portfolio",
    title: "Academic Portfolio",
    category: "architecture",
    introduction:
      "Selected academic projects exploring how architecture can respond to community, context, and everyday human experience. Through site research, user observation, and spatial development, these works shaped how I approach design as both a social and visual problem.",
    metadata: ["Academic Architecture", "Taylor's University · 2018–2021"],
    projects: [
      {
        id: "fun-food-fair",
        name: "The Fun Food Fair",
        tags: ["Food Hub", "Chow Kit", "Design Studio 6"],
        metadata: "August 2020",
        summary:
          "An urban food hub conceived as a green, inclusive social space within the dense fabric of Chow Kit. Developed through site observation and user research, the proposal combines food, play, learning, and urban farming to create a place where local communities, transit users, and overlooked groups can meet.",
        media: [
          architectureMedia("Food001", "The Fun Food Fair main courtyard render", 504, 284),
          architectureMedia("Food002", "The Fun Food Fair supporting project visual", 505, 284),
          architectureMedia("Food003", "The Fun Food Fair supporting project visual", 521, 303),
        ],
        details: [
          {
            heading: "Research Foundation — Ciao Kit",
            paragraphs: [
              "The Ciao Kit site analysis informed the project by examining Chow Kit's users, movement patterns, community needs, and surrounding urban conditions. It is presented as the research phase of The Fun Food Fair, rather than as a separate project.",
            ],
          },
        ],
      },
      {
        id: "floating-island",
        name: "The Floating Island",
        tags: ["Community Centre", "Kajang", "Design Studio 5"],
        metadata: "March 2020",
        summary:
          "A community centre designed around continuity—connecting streets, histories, generations, and nature within Kajang Old Town. Layered circulation, planted semi-outdoor spaces, and a protective façade create a calm gathering place within a busy urban setting.",
        media: [
          architectureMedia("Community001", "The Floating Island main exterior visualisation", 506, 589),
          architectureMedia("Community002", "The Floating Island supporting project visual", 477, 659),
          architectureMedia("Community003", "The Floating Island supporting project visual", 622, 427),
        ],
        details: [
          {
            heading: "Research Foundation — Town of Collaging",
            paragraphs: [
              "The Town of Collaging study explored gaps in Kajang's spatial continuity, local identity, and connections between people and place. It is presented as the research phase of The Floating Island, rather than as a separate project.",
            ],
          },
        ],
      },
      {
        id: "garden",
        name: "The Garden",
        tags: ["Early Years Centre", "PJS 7, Sunway", "Design Studio 4"],
        metadata: "November 2019",
        summary:
          "An early-years centre shaped from a child's perspective, using simple triangular geometry, natural materials, and garden spaces to support play, discovery, and self-directed learning. The building acts as a flexible canvas for children to create their own experiences.",
        media: [
          architectureMedia("Garden001", "The Garden exterior render", 504, 307),
          architectureMedia("Garden002", "The Garden supporting project visual", 504, 284),
          architectureMedia("Garden003", "The Garden supporting project visual", 539, 303),
        ],
      },
    ],
    externalLink: {
      label: "View Full Academic Portfolio",
      href: "https://drive.google.com/file/d/1pu12mMRh1Fnobl5Xsm2CsTRzDCpJnhp6/view?usp=sharing",
      note: "PDF · 4.6 MB · Opens in a new tab",
    },
  },
  "works-branding-fnb": {
    id: "works-branding-fnb",
    title: "F&B",
    category: "branding",
    introduction:
      "A selection of branding, marketing, content, and launch work across food, beverage, hospitality, and food-tech brands. The projects required adapting to different business models, audiences, and stages of growth—from helping shape a brand from day one to supporting established restaurant groups and relaunching a restaurant after the pandemic.",
    metadata: ["Branding — F&B", "2022–2023", "Brand Experience / Communication Executive"],
    projects: [
      {
        id: "tsutaya-books-cafe",
        name: "Tsutaya Books Café",
        tags: ["Brand Development", "Menu", "Photography", "Social Media"],
        summary:
          "Supported Tsutaya Books Café from its early development, contributing across the overall concept, menu, visual communication, food presentation, and ongoing brand touchpoints.",
        credits: BRANDING_PROJECT_CREDIT,
        media: [
          brandingMedia("f&b", "Tsutayacafe001", "Tsutaya Books Café brand and menu work", 1206, 2099),
          brandingMedia("f&b", "Tsutayacafe002", "Tsutaya Books Café brand and menu work", 1206, 2115),
          brandingMedia("f&b", "Tsutayacafe003", "Tsutaya Books Café brand and menu work", 1206, 2132),
        ],
        details: [
          { heading: "Context", paragraphs: ["Tsutaya Books Café was part of a newly introduced brand concept, and I was involved from the early stages of bringing the café experience to life locally."] },
          { heading: "My Role", paragraphs: ["Supported the café across brand, menu, content, and launch-related work, including menu curation, market research, food tasting, food styling and photography assistance, menu selection and materials, printer liaison, social media, and overall concept development."] },
          { heading: "What I Worked On", items: ["Market and audience research", "Overall café concept development", "Menu curation and selection", "Food tasting", "Food styling and photography assistance", "Menu graphics and material coordination", "Printer and supplier liaison", "Social media content and posting"] },
          { heading: "Reflection", paragraphs: ["Being involved from the beginning taught me how many small decisions come together to shape a complete brand experience—from what appears on the menu to how the food is presented, photographed, printed, and communicated to customers."] },
        ],
      },
      {
        id: "jade-pavilion",
        name: "Jade Pavilion",
        tags: ["Rebranding", "PR", "Seasonal Menu", "Events"],
        summary:
          "Supported the restaurant's rebranding and formal reopening after its original launch during the pandemic, bringing together refreshed communication, seasonal menus, PR, and an opening event.",
        credits: BRANDING_PROJECT_CREDIT,
        media: [],
        details: [
          { heading: "Context", paragraphs: ["Jade Pavilion opened during the pandemic, which meant its original launch did not have the opportunity to fully establish the restaurant in the market. When our team took over the account, the focus was on refreshing the brand and creating a more formal reopening moment."] },
          { heading: "My Role", paragraphs: ["Supported the rebranding and reopening campaign, including seasonal menu PR, menu graphic design, social media, media relations, food tasting, PR event planning, event-day coordination, and communication with media and partners."] },
          { heading: "What I Worked On", items: ["Rebranding support", "Reopening / opening ceremony planning", "Seasonal menu PR", "Menu graphic design", "Social media content and posting", "Food tasting", "Media PR and coordination", "PR event planning", "Event-day coordination"] },
          { heading: "Reflection", paragraphs: ["This project showed me how branding extends beyond visual identity. Reintroducing the restaurant required aligning the menu, communication, media relationships, and physical event experience so that the brand could be presented to the public as one cohesive story."] },
        ],
      },
      {
        id: "huckleberry-hospitality-group",
        name: "Huckleberry Hospitality Group",
        tags: ["Hospitality Group", "Social Media", "Seasonal Campaigns", "E-commerce"],
        summary:
          "Supported ongoing brand communication for a hospitality group comprising three restaurant brands and six outlets, spanning social media, seasonal menus, e-commerce, and food imagery.",
        credits: BRANDING_PROJECT_CREDIT,
        media: [
          brandingMedia("f&b", "Huckleberry001", "Huckleberry Hospitality Group brand communication", 1206, 782),
          brandingMedia("f&b", "Huckleberry002", "Huckleberry Hospitality Group brand communication", 1206, 1398),
          brandingMedia("f&b", "Huckleberry003", "Huckleberry Hospitality Group brand communication", 1206, 1495),
          brandingMedia("f&b", "Huckleberry004", "Huckleberry Hospitality Group brand communication", 1806, 845),
          brandingMedia("f&b", "Huckleberry005", "Huckleberry Hospitality Group brand communication", 1465, 803),
        ],
        details: [
          { heading: "Context", paragraphs: ["Huckleberry Hospitality Group operated three restaurant brands across six outlets, requiring ongoing communication across multiple locations and seasonal updates."] },
          { heading: "My Role", paragraphs: ["Supported day-to-day brand communication across the group through social media, seasonal menu design, e-commerce website maintenance, and assistance with food photography."] },
          { heading: "What I Worked On", items: ["Social media content and posting", "Seasonal menu graphic design", "E-commerce website maintenance", "Food photography assistance", "Ongoing brand communication across multiple outlets"] },
          { heading: "Reflection", paragraphs: ["Working across several brands and outlets strengthened my ability to manage recurring content while keeping communication organised and relevant to each restaurant's needs."] },
        ],
      },
      {
        id: "tiffinlab",
        name: "TiffinLab",
        tags: ["Brand Identity", "Virtual Kitchen", "Food Styling", "Social Media"],
        summary:
          "Worked on the identity and communication of a Singapore-based virtual-kitchen concept designed to help restaurant kitchens make better use of otherwise unused operating hours.",
        credits: BRANDING_PROJECT_CREDIT,
        media: [
          brandingMedia("f&b", "tiffin001", "TiffinLab brand identity and communication", 1206, 1181),
          brandingMedia("f&b", "tiffin002", "TiffinLab brand identity and communication", 1206, 1183),
          brandingMedia("f&b", "tiffin003", "TiffinLab brand identity and communication", 1206, 1185),
        ],
        details: [
          { heading: "Context", paragraphs: ["TiffinLab was a Singapore-based virtual kitchen concept built around maximising underused restaurant kitchen capacity. Multiple food brands operated under the concept, partnering with restaurants whose kitchens were unused during certain parts of the day."] },
          { heading: "My Role", paragraphs: ["Supported the development and communication of the concept through brand identity work, logo design, food styling, photography assistance, and social media content."] },
          { heading: "What I Worked On", items: ["Brand identity development", "Logo design", "Food styling", "Food photography assistance", "Social media content and posting"] },
          { heading: "Reflection", paragraphs: ["TiffinLab introduced me to a less conventional F&B business model. It pushed me to think beyond the visual identity and first understand how the service worked, who it served, and how a new concept could be communicated clearly to customers."] },
        ],
      },
      {
        id: "freshable",
        name: "Freshable",
        tags: ["Startup", "Brand Identity", "E-commerce", "App", "Food Content"],
        summary:
          "Supported Freshable from its early stage as a meal-kit startup, contributing across brand identity, digital experience, research, food content, social media, and PR.",
        credits: BRANDING_PROJECT_CREDIT,
        media: [
          brandingMedia("f&b", "Freshable001", "Freshable brand and customer experience work", 1206, 1028),
          brandingMedia("f&b", "Freshable002", "Freshable brand and customer experience work", 1206, 1193),
          brandingMedia("f&b", "Freshable003", "Freshable brand and customer experience work", 1206, 1229),
          brandingMedia("f&b", "Freshable004", "Freshable brand and customer experience work", 1206, 1487),
          brandingMedia("f&b", "Freshable005", "Freshable brand and customer experience work", 1206, 1350),
          brandingMedia("f&b", "Freshable006", "Freshable brand and customer experience work", 1897, 818),
          brandingMedia("f&b", "Freshable007", "Freshable brand and customer experience work", 1878, 838),
        ],
        details: [
          { heading: "Context", paragraphs: ["Freshable was a meal-kit startup, and I was involved from its early stage as the brand and customer experience were being developed across both digital and physical touchpoints."] },
          { heading: "My Role", paragraphs: ["Supported a broad range of work across brand development, digital products, content, and food experience, including market research, overall brand identity, e-commerce, app development support, food styling and photography, food tasting, social media, and media PR."] },
          { heading: "What I Worked On", items: ["Market and audience research", "Overall brand identity", "E-commerce website development / maintenance support", "App development support", "Food tasting", "Food styling and photography", "Social media content and posting", "Media PR"] },
          { heading: "Reflection", paragraphs: ["Freshable gave me early exposure to working on a startup where the brand, product, digital experience, and customer communication were evolving at the same time. It taught me to look at a business more holistically rather than treating branding as a standalone visual exercise."] },
        ],
      },
    ],
  },
  "works-branding-retail-lifestyle": {
    id: "works-branding-retail-lifestyle",
    title: "Retail & Lifestyle",
    category: "branding",
    introduction:
      "A selection of retail and lifestyle work spanning new-market launches, physical customer experience, wayfinding, media and PR, social content, events, and ongoing brand operations.",
    metadata: ["Branding — Retail & Lifestyle", "2022–2023", "Brand Experience / Communication Executive"],
    projects: [
      {
        id: "tsutaya-books-malaysia",
        name: "Tsutaya Books Malaysia",
        tags: ["Market Launch", "Retail Experience", "PR", "Events", "Social Media"],
        summary:
          "Supported Tsutaya Books Malaysia from its entry into the Malaysian market as the first Tsutaya Books location in Southeast Asia, contributing across the physical retail experience, launch, communication, and ongoing brand activities.",
        credits: BRANDING_PROJECT_CREDIT,
        media: [
          brandingMedia("retail&lifestyle", "Tsutaya001", "Tsutaya Books Malaysia market launch and retail experience", 4672, 7008),
          brandingMedia("retail&lifestyle", "Tsutaya002", "Tsutaya Books Malaysia market launch and retail experience", 7008, 4672),
          brandingMedia("retail&lifestyle", "Tsutaya003", "Tsutaya Books Malaysia market launch and retail experience", 612, 582),
          brandingMedia("retail&lifestyle", "Tsutaya004", "Tsutaya Books Malaysia market launch and retail experience", 5184, 3456),
          brandingMedia("retail&lifestyle", "Tsutaya005", "Tsutaya Books Malaysia market launch and retail experience", 1206, 1196),
          brandingMedia("retail&lifestyle", "Tsutaya006", "Tsutaya Books Malaysia market launch and retail experience", 1206, 1195),
        ],
        details: [
          { heading: "Context", paragraphs: ["Tsutaya Books Malaysia was introduced through a joint-venture collaboration with the Japanese bookstore brand, marking its first location in Southeast Asia. I was involved from the early stages of bringing the brand into the Malaysian market and continued supporting it beyond launch."] },
          { heading: "My Role", paragraphs: ["Supported the project across interior and site coordination, wayfinding, launch planning, media and PR, social media, day-to-day brand operations, and seasonal events."] },
          { heading: "What I Worked On", items: ["Interior site visits and coordination", "Wayfinding system development / coordination", "Grand launch planning and event coordination", "Curated media and KOL tours during the soft-launch period", "Media and PR coordination", "Social media content and posting", "Day-to-day brand operations and communication", "Seasonal event planning and coordination"] },
          { heading: "Recognition / Milestones", items: ["First Tsutaya Books location in Southeast Asia", "Grand launch preceded by curated media and KOL tours during the soft launch", "Japanese Ambassador invited to the grand launch", "Winner of the Monocle Retail Awards 2023 — Best Asian Expansion"] },
          { heading: "Reflection", paragraphs: ["Being involved from the early stages through launch and ongoing operations gave me a broader understanding of how an international brand is translated into a new market. The experience connected physical space, customer navigation, communication, media, events, and everyday operations as parts of one retail brand experience."] },
        ],
      },
      {
        id: "auri",
        name: "Auri",
        tags: ["Fashion", "Store Launch", "Media & PR"],
        summary:
          "Supported the grand launch of Auri's fashion retail outlet, with a focus on launch coordination, media, and PR.",
        credits: BRANDING_PROJECT_CREDIT,
        media: [],
        details: [
          { heading: "Context", paragraphs: ["Auri is a fashion brand launching a retail outlet, requiring a coordinated opening moment supported by media and PR."] },
          { heading: "My Role", paragraphs: ["Supported the outlet's grand launch and related media and PR activities."] },
          { heading: "What I Worked On", items: ["Grand launch support and coordination", "Media coordination", "PR support"] },
          { heading: "Reflection", paragraphs: ["The project gave me further experience in using a physical launch event and media engagement to introduce a retail brand and create a coordinated public-facing moment."] },
        ],
      },
    ],
  },
  "works-visualization-township-aerial": {
    id: "works-visualization-township-aerial",
    title: "Township & Aerial",
    category: "visualization",
    introduction:
      "Large-scale aerial visualisations that combine architectural models with real-world site context, terrain, and aerial photography.",
    metadata: ["3D Visualisation", "3D Artist"],
    workflow: "Google Earth → Camera Brief → Aerial / Drone / Helicopter Photography → Blender → 3ds Max → V-Ray → Photoshop",
    projects: [
      visualizationProject("donnybrook-aerial", "Donnybrook Acclaim", "Yourland Developments", "Donnybrook VIC, Australia", [
        visualizationMedia("Township & Aerial", "donnybrook-acclaim_aerial", "Donnybrook Acclaim aerial render", 3000, 2250),
        visualizationMedia("Township & Aerial", "donnybrook-acclaim_topdown", "Donnybrook Acclaim top-down aerial render", 3000, 3000),
      ]),
      visualizationProject("plumpton", "Plumpton", "Yourland Developments", "Plumpton VIC, Australia", [
        visualizationMedia("Township & Aerial", "Plumpton_aerial", "Plumpton aerial render", 2500, 1667),
        visualizationMedia("Township & Aerial", "Plumpton_topdown", "Plumpton top-down aerial render", 2500, 2500),
      ]),
    ],
    closingNote: VISUALIZATION_CLOSING,
  },
  "works-visualization-exterior": {
    id: "works-visualization-exterior",
    title: "Exterior",
    category: "visualization",
    introduction:
      "Selected exterior visualisations showcasing architecture and outdoor environments across different scales—from building-focused views to town centres and amenity spaces.",
    metadata: ["3D Visualisation", "3D Artist"],
    workflow: "AutoCAD → 3ds Max → V-Ray → Photoshop",
    projects: [
      visualizationProject("thyme-forster", "Thyme Forster", "Serenitas Management", "Forster NSW, Australia", [
        visualizationMedia("Exterior", "thyme-forster_streetscape", "Thyme Forster streetscape render", 2500, 1250),
        visualizationMedia("Exterior", "thyme-forster_swimming-pool", "Thyme Forster swimming pool render", 2500, 1250),
      ]),
      visualizationProject("donnybrook-exterior", "Donnybrook Acclaim", "Yourland Developments", "Donnybrook VIC, Australia", [
        visualizationMedia("Exterior", "donnybrook-acclaim_towncentre", "Donnybrook Acclaim town centre render", 2500, 1250),
        visualizationMedia("Exterior", "donnybrook-acclaim_sportcentre", "Donnybrook Acclaim sport centre render", 2500, 1500),
      ]),
    ],
    closingNote: VISUALIZATION_CLOSING,
  },
  "works-visualization-landscape": {
    id: "works-visualization-landscape",
    title: "Landscape",
    category: "visualization",
    introduction:
      "Selected park visualisations focused on landscape, greenery, public space, and the experience of outdoor environments.",
    metadata: ["3D Visualisation", "3D Artist"],
    workflow: "AutoCAD → 3ds Max → V-Ray → Photoshop",
    projects: [
      visualizationProject("maple-grove", "Maple Grove", "Satterley Property Group", "Katoomba NSW, Australia", [
        visualizationMedia("Landscape", "maplegrove-park_000", "Maple Grove park render", 2500, 1876),
        visualizationMedia("Landscape", "maplegrove-park_001", "Maple Grove park render", 2500, 1407),
        visualizationMedia("Landscape", "maplegrove-park_002", "Maple Grove park render", 2500, 1499),
        visualizationMedia("Landscape", "maplegrove-park_003", "Maple Grove park render", 2500, 1499),
      ]),
      visualizationProject("donnybrook-landscape", "Donnybrook Acclaim", "Yourland Developments", "Donnybrook VIC, Australia", [
        visualizationMedia("Landscape", "donnybrook-acclaim_park000", "Donnybrook Acclaim park render", 2500, 1250),
        visualizationMedia("Landscape", "donnybrook-acclaim_park001", "Donnybrook Acclaim park render", 2500, 2083),
        visualizationMedia("Landscape", "donnybrook-acclaim_creek", "Donnybrook Acclaim creek render", 2500, 1406),
      ]),
    ],
    closingNote: VISUALIZATION_CLOSING,
  },
};

function visualizationProject(
  id: string,
  name: string,
  client: string,
  location: string,
  media: WorksMedia[],
): WorksProject {
  return {
    id,
    name,
    tags: [location],
    summary: `${name} · ${location}`,
    location,
    introduction: VISUALIZATION_INTRODUCTION_PLACEHOLDER,
    media,
    details: [
      {
        heading: "Project Credit",
        paragraphs: [
          `Developer / Client: ${client}`,
          `Visualisation Studio / Employer: ${VISUALIZATION_STUDIO_CREDIT}`,
          "My Role: 3D Artist",
        ],
      },
    ],
    credits: [
      { label: "Role", value: "3D Artist" },
      { label: "Studio / Employer", value: VISUALIZATION_STUDIO_CREDIT },
      { label: "Client", value: client },
    ],
  };
}
