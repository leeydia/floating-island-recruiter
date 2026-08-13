export interface ContactMethod {
  id: "email" | "linkedin";
  label: string;
  value: string;
  href: string;
  accessibleLabel: string;
  external: boolean;
}

export const CONTACT_LANDMARK_INTRODUCTION =
  "A place to continue the conversation beyond the island.";

export const CONTACT_PANEL_INTRODUCTION =
  "Thank you for taking the time to explore my little island.";

export const CONTACT_INVITATION =
  "If you'd like to discuss an opportunity, collaborate on a project, or simply say hello, I'd love to hear from you.";

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: "leeydialau0125@gmail.com",
    href: "mailto:leeydialau0125@gmail.com",
    accessibleLabel: "Email Leeydia Lau",
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/lauleeydia",
    href: "https://www.linkedin.com/in/lauleeydia/",
    accessibleLabel: "Visit Leeydia Lau on LinkedIn",
    external: true,
  },
];
