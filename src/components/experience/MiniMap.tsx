import Image from "next/image";
import { ISLAND_ARTWORK } from "@/config/assets";
import { NAVIGATORS } from "@/config/navigators";
import type { LandmarkId } from "@/types/experience";
import styles from "./MiniMap.module.css";

interface MiniMapProps {
  selectedLandmark: LandmarkId;
  onReturnToOverview: () => void;
}

export function MiniMap({
  selectedLandmark,
  onReturnToOverview,
}: MiniMapProps) {
  const current = NAVIGATORS.find(
    (navigator) => navigator.id === selectedLandmark,
  );

  if (!current) return null;

  return (
    <button
      type="button"
      className={styles.miniMap}
      onClick={onReturnToOverview}
      aria-label={`Return to Island Overview. Current location: ${current.label}, ${current.landmark}`}
    >
      <span className={styles.caption}>Island Overview</span>
      <span className={styles.thumbnail} aria-hidden="true">
        <Image
          src={ISLAND_ARTWORK}
          alt=""
          fill
          sizes="(max-width: 900px) 144px, 176px"
          className={styles.image}
        />
        <span
          className={styles.currentMarker}
          style={{ left: `${current.anchor.x}%`, top: `${current.anchor.y}%` }}
        />
      </span>
    </button>
  );
}
