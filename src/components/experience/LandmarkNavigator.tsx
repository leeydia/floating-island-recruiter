import type { NavigatorConfig } from "@/types/experience";
import styles from "./LandmarkNavigator.module.css";

interface LandmarkNavigatorProps {
  config: NavigatorConfig;
  isSelected: boolean;
  isVisible?: boolean;
  isInteractive?: boolean;
  onSelect: () => void;
}

export function LandmarkNavigator({
  config,
  isSelected,
  isVisible = true,
  isInteractive = true,
  onSelect,
}: LandmarkNavigatorProps) {
  const { number, label, landmark, anchor, labelPosition } = config;

  return (
    <div
      className={`${styles.wrapper} ${isVisible ? styles.wrapperVisible : ""}`}
    >
      <svg
        className={styles.leaderSvg}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1={labelPosition.x}
          y1={labelPosition.y}
          x2={anchor.x}
          y2={anchor.y}
          className={`${styles.leaderLine} ${isSelected ? styles.leaderActive : ""}`}
        />
      </svg>

      <button
        type="button"
        className={`${styles.navigator} ${isSelected ? styles.selected : ""}`}
        onClick={onSelect}
        disabled={!isInteractive}
        aria-label={`${number} ${label}, ${landmark}`}
        aria-current={isSelected ? "true" : undefined}
      >
        <span
          className={styles.labelTarget}
          style={{
            left: `${labelPosition.x}%`,
            top: `${labelPosition.y}%`,
          }}
        >
          <span className={styles.labelSurface}>
            <span className={styles.number}>{number}</span>
            <span className={styles.label}>{label}</span>
          </span>
        </span>

        <span
          className={styles.anchorTarget}
          style={{
            left: `${anchor.x}%`,
            top: `${anchor.y}%`,
          }}
          aria-hidden="true"
        >
          <span
            className={`${styles.anchor} ${isSelected ? styles.anchorActive : ""}`}
          />
        </span>
      </button>
    </div>
  );
}
