import Image from "next/image";
import { ISLAND_ARTWORK } from "@/config/assets";
import styles from "./IslandArtwork.module.css";

interface IslandArtworkProps {
  onReady?: () => void;
  onError?: () => void;
}

export function IslandArtwork({ onReady, onError }: IslandArtworkProps) {
  return (
    <div className={styles.artwork}>
      <Image
        src={ISLAND_ARTWORK}
        alt="Illustrated floating island with a maze garden, outdoor theatre, harbor, natural lake, pavilion, and lighthouse."
        width={3840}
        height={2160}
        preload
        className={styles.image}
        sizes="(min-width: 1600px) 1380px, (min-width: 901px) 82vw, 94vw"
        draggable={false}
        onLoad={onReady}
        onError={onError}
      />
    </div>
  );
}
