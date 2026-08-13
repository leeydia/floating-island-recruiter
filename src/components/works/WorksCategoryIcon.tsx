import type { WorksCategory } from "@/content/works";

interface WorksCategoryIconProps {
  category: WorksCategory;
}

export function WorksCategoryIcon({ category }: WorksCategoryIconProps) {
  if (category === "architecture") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V8.5L12 4l8 4.5V20" />
        <path d="M8 20v-7h8v7M3 20h18M8.5 9h.01M12 9h.01M15.5 9h.01" />
      </svg>
    );
  }

  if (category === "branding") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5V17l3 3h10.5L21 16.5V6L18 3H7.5z" />
        <circle cx="8.2" cy="8" r="1.25" />
        <path d="m11 15 3-3 3 3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </svg>
  );
}
