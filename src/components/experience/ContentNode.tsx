import type { CSSProperties, ReactNode } from "react";
import type { MobileLabelOffset, Position } from "@/types/experience";
import styles from "./ContentNode.module.css";

interface ContentNodeProps {
  category: string;
  label: string;
  position: Position;
  mobilePosition?: Position;
  mobileLabelOffset?: MobileLabelOffset;
  sceneScale?: number;
  visited?: boolean;
  accent?: string;
  accentGlow?: string;
  accentSurface?: boolean;
  children: ReactNode;
  onSelect: (trigger: HTMLButtonElement) => void;
}

export function ContentNode({
  category,
  label,
  position,
  mobilePosition,
  mobileLabelOffset,
  sceneScale = 1,
  visited = false,
  accent,
  accentGlow,
  accentSurface = false,
  children,
  onSelect,
}: ContentNodeProps) {
  return (
    <button
      type="button"
      className={`${styles.node} ${visited ? styles.visited : ""} ${accentSurface ? styles.accentSurface : ""}`}
      style={
        {
          "--node-x": `${position.x}%`,
          "--node-y": `${position.y}%`,
          "--node-scale": 1 / sceneScale,
          ...(mobilePosition
            ? {
                "--node-mobile-x": `${mobilePosition.x}%`,
                "--node-mobile-y": `${mobilePosition.y}%`,
              }
            : {}),
          "--content-node-mobile-label-x": `${mobileLabelOffset?.x ?? 0}px`,
          "--content-node-mobile-label-y": `${mobileLabelOffset?.y ?? 0}px`,
          ...(accent
            ? {
                "--content-node-icon": accent,
                "--content-node-ring": accent,
              }
            : {}),
          ...(accentGlow
            ? {
                "--content-node-glow": accentGlow,
                "--content-node-glow-strong": accentGlow,
              }
            : {}),
        } as CSSProperties
      }
      onClick={(event) => onSelect(event.currentTarget)}
      aria-label={`${category}: ${label}`}
    >
      <span className={styles.iconSurface} aria-hidden="true">
        {children}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
