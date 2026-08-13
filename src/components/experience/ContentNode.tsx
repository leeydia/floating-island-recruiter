import type { CSSProperties, ReactNode } from "react";
import type { Position } from "@/types/experience";
import styles from "./ContentNode.module.css";

interface ContentNodeProps {
  category: string;
  label: string;
  position: Position;
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
