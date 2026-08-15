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
  media: {
    src: "/media/About/about-portrait.png",
    alt: "Illustrated portrait of Leeydia Lau",
    width: 1287,
    height: 1222,
  } satisfies AboutMedia,
} as const;

export const LETTER_TO_YOU_PANEL_INTRODUCTION =
  "If you’ve made it this far, thank you.";

export const LETTER_TO_YOU_CONTENT = {
  paragraphs: [
    "Whether you’re a recruiter, a fellow designer, or simply someone curious enough to explore this little island, I truly appreciate the time you’ve spent here.",
    "My journey hasn’t followed a straight line. Architecture taught me to understand people and work within real-world constraints. Branding showed me how strategy and storytelling shape experiences. 3D visualisation taught me to turn complex ideas into something clear and imaginable.",
    "Although these fields may seem different, they have led me to the same belief: meaningful solutions begin with understanding people.",
    "Today, I’m curious about technology and how thoughtful digital experiences can solve real problems. I’m still exploring where my experience and strengths might fit within this space, and I’m open to the directions that journey may take me.",
    "What I bring is curiosity, a willingness to learn quickly, and an approach that balances creativity with structure.",
    "This website is part of that exploration. I built it to share what I’ve done while also showing where I’m heading. I hope this island continues to grow with new projects, experiments, lessons, and a few unexpected detours along the way.",
    "If you believe my perspective and potential could contribute to your team, I would genuinely love to have a conversation. And if you simply share my curiosity about design, technology, or meaningful experiences, I’d be equally happy to connect.",
    "Thank you for visiting.",
    "I hope our paths cross again.",
  ],
  signature: "— Leeydia Lau",
} as const;
