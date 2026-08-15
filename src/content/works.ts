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
  variant?: "question";
}

export interface WorksProject {
  id: string;
  name: string;
  tags: string[];
  summary: string;
  detailMetadata?: string[];
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
  src: `/media/3D-visualization/${encodeURIComponent(folder)}/${file}.webp`,
  alt,
  width,
  height,
});

const VISUALIZATION_STUDIO_CREDIT = "4D Studio";
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
        detailMetadata: [
          "Food Hub · Chow Kit, Kuala Lumpur",
          "Design Studio 6 · August 2020",
        ],
        summary:
          "An urban food hub conceived as a green, inclusive social space within the dense fabric of Chow Kit. Developed through site observation and user research, the proposal combines food, play, learning, and urban farming to create a place where local communities, transit users, and overlooked groups can meet.",
        media: [
          architectureMedia("Food001", "The Fun Food Fair main courtyard render", 504, 284),
          architectureMedia("Food002", "The Fun Food Fair supporting project visual", 505, 284),
          architectureMedia("Food003", "The Fun Food Fair supporting project visual", 521, 303),
        ],
        details: [
          {
            heading: "Context",
            paragraphs: [
              "Chow Kit is dense, fast-moving and culturally diverse, but the research identified a lack of accessible green, recreational and community spaces—particularly for children and underserved communities. The project asked how a food hub could become more than a place to eat, and instead provide a shared social space within the city.",
            ],
          },
          {
            heading: "Design Idea — Fun + Food + Fair",
            paragraphs: [
              "The proposal combines food with recreation, education, culture and urban farming. Rather than separating these functions, the building is designed as a multi-use environment where different groups and activities overlap—using food as the common element that brings people together.",
            ],
          },
          {
            heading: "Design Response",
            items: [
              "Four entrances respond to major pedestrian approaches and invite different user groups into the building.",
              "A green belt helps filter traffic noise and air pollution.",
              "Public and quieter programmes are positioned according to surrounding noise conditions.",
              "The ground floor operates almost as an extension of the city, able to shift between park, market, exhibition, amphitheatre and event uses.",
              "Rooftop and upper-level programmes introduce urban farming, edible gardens, play, learning and a public kitchen.",
            ],
          },
          {
            heading: "Underlying Question",
            paragraphs: [
              "How can architecture slow people down in a fast-moving part of the city and create opportunities for different communities to meet?",
            ],
            variant: "question",
          },
        ],
      },
      {
        id: "floating-island",
        name: "The Floating Island",
        tags: ["Community Centre", "Kajang", "Design Studio 5"],
        detailMetadata: [
          "Community Centre · Kajang Old Town",
          "Design Studio 5 · March 2020",
        ],
        summary:
          "A community centre designed around continuity—connecting streets, histories, generations, and nature within Kajang Old Town. Layered circulation, planted semi-outdoor spaces, and a protective façade create a calm gathering place within a busy urban setting.",
        media: [
          architectureMedia("Community001", "The Floating Island main exterior visualisation", 506, 589),
          architectureMedia("Community002", "The Floating Island supporting project visual", 477, 659),
          architectureMedia("Community003", "The Floating Island supporting project visual", 622, 427),
        ],
        details: [
          {
            heading: "Context",
            paragraphs: [
              "Located within the busy streets of Kajang Old Town, the site is surrounded by traffic, commercial shophouses and very limited greenery. The project responds by creating a community centre that reconnects people, nature and the existing urban context.",
            ],
          },
          {
            heading: "Design Idea — Continuity",
            paragraphs: [
              "“Continuity” became the central concept at two levels. Physical continuity extends streets, paths and visual connections through the building to increase opportunities for people to encounter one another. Cultural continuity uses history, memories and shared activities to connect different generations.",
            ],
          },
          {
            heading: "Design Response",
            items: [
              "Corridors and stairs are treated as internal “streets” connecting programmes and people.",
              "Angled stairs strengthen visual connections while bringing daylight deeper into the building.",
              "Programmes including a café, basketball court, mahjong space, reading and co-working areas, indoor playscape and learning spaces cater to different generations.",
              "Pocket gardens, terraces and a rooftop garden weave greenery throughout the building.",
              "Environmental strategies include rainwater collection, green roofs, skylights and a double façade that provides shading and reduces traffic noise.",
            ],
          },
          {
            heading: "Underlying Question",
            paragraphs: [
              "Can a community building create more opportunities for people of different generations to cross paths, interact and develop a stronger sense of belonging?",
            ],
            variant: "question",
          },
        ],
      },
      {
        id: "garden",
        name: "The Garden",
        tags: ["Early Years Centre", "PJS 7, Sunway", "Design Studio 4"],
        detailMetadata: [
          "Early Years Centre · PJS 7, Sunway",
          "Design Studio 4 · November 2019",
        ],
        summary:
          "An early-years centre shaped from a child's perspective, using simple triangular geometry, natural materials, and garden spaces to support play, discovery, and self-directed learning. The building acts as a flexible canvas for children to create their own experiences.",
        media: [
          architectureMedia("Garden001", "The Garden exterior render", 504, 307),
          architectureMedia("Garden002", "The Garden supporting project visual", 504, 284),
          architectureMedia("Garden003", "The Garden supporting project visual", 539, 303),
        ],
        details: [
          {
            heading: "Context",
            paragraphs: [
              "Conceived as a hidden garden within the concrete jungle, this project explores architecture from a child's perspective—where spaces are less prescribed and learning can happen through play, movement, discovery and interaction with the environment.",
            ],
          },
          {
            heading: "Design Idea — A Canvas for Children",
            paragraphs: [
              "Instead of treating the building as something complete, The Garden imagines it as a simple canvas that children bring to life themselves. Triangular geometry creates a clear architectural language while allowing spaces of different scales and characters to emerge throughout the centre.",
            ],
          },
          {
            heading: "Design Response",
            items: [
              "The programme combines classrooms with an outdoor courtyard, jungle-school activity area, outdoor learning spaces, gardens, indoor gym and multipurpose spaces.",
              "Existing trees were considered during the development of the building mass.",
              "Public and private areas, building height and scale informed how the mass was divided.",
              "Smaller-scale volumes create different spatial characters rather than one institutional building.",
              "A lightweight timber framing system reinforces the project's natural and child-oriented character.",
              "Green space is maximised while strategies such as porous paving respond to sustainability and the landscape.",
            ],
          },
          {
            heading: "Underlying Question",
            paragraphs: [
              "What happens when an educational space is designed through the eyes of a child rather than entirely through the expectations of adults?",
            ],
            variant: "question",
          },
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
        media: [
          brandingMedia("f&b", "Tsutayacafe001", "Tsutaya Books Café brand and menu work", 1206, 2099),
          brandingMedia("f&b", "Tsutayacafe002", "Tsutaya Books Café brand and menu work", 1206, 2115),
          brandingMedia("f&b", "Tsutayacafe003", "Tsutaya Books Café brand and menu work", 1206, 2132),
        ],
        details: [
          { heading: "What I Worked On", items: ["Market and audience research", "Overall café concept development", "Menu curation and selection", "Food styling and photography assistance", "Menu graphics and material coordination", "Printer and supplier liaison", "Social media content and posting"] },
          { heading: "Reflection", paragraphs: ["Being involved from the beginning taught me how many small decisions come together to shape a complete brand experience—from what appears on the menu to how the food is presented, photographed, printed, and communicated to customers."] },
        ],
      },
      {
        id: "jade-pavilion",
        name: "Jade Pavilion",
        tags: ["Rebranding", "PR", "Seasonal Menu", "Events"],
        summary:
          "Supported the restaurant's rebranding and formal reopening after its original launch during the pandemic, bringing together refreshed communication, seasonal menus, PR, and an opening event.",
        media: [
          brandingMedia("f&b", "Jade001", "Jade Pavilion rebranding and reopening work", 1800, 1200),
          brandingMedia("f&b", "Jade002", "Jade Pavilion rebranding and reopening work", 2048, 1365),
          brandingMedia("f&b", "Jade003", "Jade Pavilion rebranding and reopening work", 6541, 4361),
          brandingMedia("f&b", "Jade004", "Jade Pavilion rebranding and reopening work", 7008, 4672),
        ],
        details: [
          { heading: "What I Worked On", items: ["Rebranding support", "Reopening / opening ceremony planning", "Seasonal menu PR", "Social media content and posting", "Media PR and coordination", "Menu graphic design", "Food tasting", "PR event planning", "Event-day coordination"] },
          { heading: "Reflection", paragraphs: ["This project showed me how branding extends beyond visual identity. Reintroducing the restaurant required aligning the menu, communication, media relationships, and physical event experience so that the brand could be presented to the public as one cohesive story."] },
        ],
      },
      {
        id: "huckleberry-hospitality-group",
        name: "Huckleberry Hospitality Group",
        tags: ["Hospitality Group", "Social Media", "Seasonal Campaigns", "E-commerce"],
        summary:
          "Supported ongoing brand communication for a hospitality group comprising three restaurant brands and six outlets, spanning social media, seasonal menus, e-commerce, and food imagery.",
        media: [
          brandingMedia("f&b", "Huckleberry001", "Huckleberry Hospitality Group brand communication", 1206, 782),
          brandingMedia("f&b", "Huckleberry002", "Huckleberry Hospitality Group brand communication", 1206, 1398),
          brandingMedia("f&b", "Huckleberry003", "Huckleberry Hospitality Group brand communication", 1206, 1495),
          brandingMedia("f&b", "Huckleberry004", "Huckleberry Hospitality Group brand communication", 1806, 845),
          brandingMedia("f&b", "Huckleberry005", "Huckleberry Hospitality Group brand communication", 1465, 803),
        ],
        details: [
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
        media: [
          brandingMedia("f&b", "tiffin001", "TiffinLab brand identity and communication", 1206, 1181),
          brandingMedia("f&b", "tiffin002", "TiffinLab brand identity and communication", 1206, 1183),
          brandingMedia("f&b", "tiffin003", "TiffinLab brand identity and communication", 1206, 1185),
        ],
        details: [
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
          { heading: "What I Worked On", items: ["Market and audience research", "Overall brand identity", "E-commerce experience", "App development support", "Food styling and photography assistance", "Food tasting", "Social media content and posting", "Media PR"] },
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
        media: [
          brandingMedia("retail&lifestyle", "Tsutaya001", "Tsutaya Books Malaysia market launch and retail experience", 4672, 7008),
          brandingMedia("retail&lifestyle", "Tsutaya002", "Tsutaya Books Malaysia market launch and retail experience", 7008, 4672),
          brandingMedia("retail&lifestyle", "Tsutaya003", "Tsutaya Books Malaysia market launch and retail experience", 612, 582),
          brandingMedia("retail&lifestyle", "Tsutaya004", "Tsutaya Books Malaysia market launch and retail experience", 5184, 3456),
          brandingMedia("retail&lifestyle", "Tsutaya005", "Tsutaya Books Malaysia market launch and retail experience", 1206, 1196),
          brandingMedia("retail&lifestyle", "Tsutaya006", "Tsutaya Books Malaysia market launch and retail experience", 1206, 1195),
        ],
        details: [
          { heading: "Recognition / Milestones", items: ["First Tsutaya Books location in Southeast Asia", "Winner of the Monocle Retail Awards 2023 — Best Asian Expansion"] },
          { heading: "What I Worked On", items: ["Retail experience & customer journey", "Wayfinding & in-store communication", "Launch planning & coordination", "Day-to-day operational support", "Stakeholder meetings & coordination", "Bridging stakeholders and operational teams", "Media & PR coordination", "Social media content & communication", "Events & ongoing brand activities"] },
          { heading: "Reflection", paragraphs: ["Being involved from the early stages through launch and ongoing operations gave me a broader understanding of how an international brand is translated into a new market. The experience connected physical space, customer navigation, communication, media, events, and everyday operations as parts of one retail brand experience."] },
        ],
      },
      {
        id: "auri",
        name: "Auri",
        tags: ["Fashion", "Store Launch", "Media & PR"],
        summary:
          "Supported the grand launch of Auri's fashion retail outlet, with a focus on launch coordination, media, and PR.",
        media: [
          brandingMedia("retail&lifestyle", "Auri001", "Auri fashion retail launch work", 2500, 1406),
          brandingMedia("retail&lifestyle", "Auri002", "Auri fashion retail launch work", 2500, 1669),
          brandingMedia("retail&lifestyle", "Auri003", "Auri fashion retail launch work", 2500, 1669),
          brandingMedia("retail&lifestyle", "Auri004", "Auri fashion retail launch work", 2500, 1669),
        ],
        details: [
          { heading: "What I Worked On", items: ["Grand opening coordination", "Media & PR", "Launch communication", "On-ground event support"] },
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
      visualizationProject("donnybrook-aerial", "Donnybrook Acclaim", "Yourland Developments", "Donnybrook VIC, Australia", "A large-scale township visualisation showcasing the development as a connected community, bringing together residential neighbourhoods, local parks, a sports centre, community facilities and schools within the wider masterplan.", [
        visualizationMedia("Township & Aerial", "donnybrook-acclaim_aerial", "Donnybrook Acclaim aerial render", 3000, 2250),
        visualizationMedia("Township & Aerial", "donnybrook-acclaim_topdown", "Donnybrook Acclaim top-down aerial render", 3000, 3000),
      ]),
      visualizationProject("plumpton", "Plumpton", "Yourland Developments", "Plumpton VIC, Australia", "A township-scale visualisation illustrating how residential neighbourhoods sit alongside parks, schools, community facilities and recreational spaces, presenting the development as a complete and connected place to live.", [
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
      visualizationProject("thyme-forster", "Thyme Forster", "Serenitas Management", "Forster NSW, Australia", "A close-up exterior visualisation focused on architectural, material and landscape detail. The surrounding context was created through photomontage using a photographer’s 360° panorama—bringing a workflow more commonly used in aerial imagery into a street-level perspective.", [
        visualizationMedia("Exterior", "thyme-forster_streetscape", "Thyme Forster streetscape render", 2500, 1250),
        visualizationMedia("Exterior", "thyme-forster_swimming-pool", "Thyme Forster swimming pool render", 2500, 1250),
      ]),
      visualizationProject("donnybrook-exterior", "Donnybrook Acclaim", "Yourland Developments", "Donnybrook VIC, Australia", "A close-up visualisation of the town centre and sports centre public spaces, with particular focus on landscape and community space planning. The project allowed greater creative freedom in shaping the layouts, making it an opportunity to explore how these shared spaces could feel active, welcoming and lived-in.", [
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
      visualizationProject("maple-grove", "Maple Grove", "Satterley Property Group", "Katoomba NSW, Australia", "A landscape-focused visualisation requiring close attention to planting composition and species accuracy. Working from the landscape designer’s documentation, planting was carefully placed and balanced using Forest Pack to stay true to the design while creating a natural and visually cohesive landscape.", [
        visualizationMedia("Landscape", "maplegrove-park_000", "Maple Grove park render", 2500, 1876),
        visualizationMedia("Landscape", "maplegrove-park_001", "Maple Grove park render", 2500, 1407),
        visualizationMedia("Landscape", "maplegrove-park_002", "Maple Grove park render", 2500, 1499),
        visualizationMedia("Landscape", "maplegrove-park_003", "Maple Grove park render", 2500, 1499),
      ]),
      visualizationProject("donnybrook-landscape", "Donnybrook Acclaim", "Yourland Developments", "Donnybrook VIC, Australia", "A detailed landscape visualisation developed closely from the landscape designer’s planting documentation. Using Forest Pack, plant species and placement were carefully coordinated to reflect the specified landscape design while refining density, variation and composition for a convincing final image", [
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
  introduction: string,
  media: WorksMedia[],
): WorksProject {
  return {
    id,
    name,
    tags: [location],
    summary: `${name} · ${location}`,
    location,
    introduction,
    media,
    credits: [
      { label: "Role", value: "3D Artist" },
      { label: "Studio / Employer", value: VISUALIZATION_STUDIO_CREDIT },
      { label: "Client", value: client },
    ],
  };
}
