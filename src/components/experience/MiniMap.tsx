import Image from "next/image";
import { ISLAND_WEBP } from "@/config/assets";
import { NAVIGATORS } from "@/config/navigators";
import type { LandmarkId } from "@/types/experience";
import styles from "./MiniMap.module.css";

interface MiniMapProps {
  selectedLandmark: LandmarkId;
  onOpen: () => void;
}

interface MiniMapCloseProps {
  selectedLandmark: LandmarkId;
  onClose: () => void;
}

export function MiniMap({ selectedLandmark, onOpen }: MiniMapProps) {
  const current = NAVIGATORS.find(
    (navigator) => navigator.id === selectedLandmark,
  );

  if (!current) return null;

  return (
    <button
      type="button"
      className={styles.miniMap}
      onClick={onOpen}
      aria-label={`Open Island Overview. Current location: ${current.label}, ${current.landmark}`}
    >
      <span className={styles.caption}>Island Overview</span>
      <span className={styles.thumbnail} aria-hidden="true">
        <Image
          src={ISLAND_WEBP}
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

export function MiniMapClose({
  selectedLandmark,
  onClose,
}: MiniMapCloseProps) {
  const current = NAVIGATORS.find(
    (navigator) => navigator.id === selectedLandmark,
  );

  return (
    <button
      type="button"
      className={styles.closeOverview}
      onClick={onClose}
      aria-label={`Close Island Overview and return to ${current?.label ?? "the selected landmark"}`}
    >
      <span className={styles.closeIcon} aria-hidden="true">
        ×
      </span>
      <span>Return to {current?.label ?? "landmark"}</span>
    </button>
  );
}
