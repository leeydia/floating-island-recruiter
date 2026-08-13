export interface AboutMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ABOUT_LANDMARK_INTRODUCTION =
  "A quiet place to learn a little more about the person behind the work.";

export const ABOUT_PANEL_INTRODUCTION = "Hi, I'm Leeydia.";

export const ABOUT_ME_CONTENT = {
  paragraphs: [
    "I'm an architectural visualizer with a background in architecture and branding, now exploring the world of technology, AI, and product thinking.",
    "I enjoy understanding people, solving meaningful problems, and turning ideas into experiences. This website is a collection of my work, curiosity, and the journey that continues to shape who I am.",
  ],
  media: null as AboutMedia | null,
} as const;

export const LETTER_TO_YOU_PANEL_INTRODUCTION =
  "If you've made it this far, thank you.";

export const LETTER_TO_YOU_CONTENT = {
  paragraphs: [
    "Whether you're a recruiter, a hiring manager, a fellow designer, or simply someone who was curious enough to explore this little island, I truly appreciate the time you've spent here.",
    "This website isn't just a portfolio. It's a reflection of how I think, how I learn, and how I approach problems.",
    "My journey hasn't followed a straight line. I studied architecture, where I learned to understand people through the spaces they inhabit. I later worked in branding, where I discovered how strategy and storytelling shape experiences. Today, I work as a 3D architectural visualizer, transforming ideas into environments that help others imagine what doesn't yet exist.",
    "Looking back, these experiences may seem different on the surface, but they have all been teaching me something similar: meaningful solutions begin with understanding people.",
    "As technology continues to reshape the way we live and work, I've become increasingly interested in how thoughtful products are built. That curiosity has led me to explore AI, product thinking, and digital experiences — not simply as technologies, but as tools for solving real problems.",
    "I'm still learning, and I expect that I always will be.",
    "I don't claim to know everything about product management or AI. What I do bring is curiosity, a willingness to learn quickly, and a habit of approaching challenges with both creativity and structure. Architecture taught me to balance vision with constraints. Branding taught me to understand audiences beyond demographics. Visualization taught me to communicate complex ideas with clarity. Together, these experiences continue to shape the way I solve problems today.",
    "My long-term goal is to become an AI Product Manager — not because of the title itself, but because the role brings together many of the things that excite me: technology, design, business, and, most importantly, people.",
    "This website is part of that journey.",
    "I built it not only to showcase what I've done, but also to document where I'm going. I hope that, as my career evolves, this island will continue to grow with new projects, experiments, lessons, and perhaps even a few unexpected detours along the way.",
    "If you believe my background, perspective, and potential could contribute to your team, I would genuinely love the opportunity to have a conversation. And if you're simply someone who shares a curiosity about design, technology, or building meaningful products, I'd be equally happy to connect.",
    "Thank you for visiting.",
    "I hope our paths cross again.",
  ],
  signature: "— Leeydia Lau",
} as const;
