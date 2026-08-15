"use client";

import { useRef } from "react";
import { ProtectedImage } from "@/components/media/ProtectedImage";
import type { WorksMedia } from "@/content/works";
import styles from "./MediaCarousel.module.css";

interface MediaCarouselProps {
  projectName: string;
  media: WorksMedia[];
  protectionNotice?: string;
}

export function MediaCarousel({
  projectName,
  media,
  protectionNotice,
}: MediaCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  if (media.length === 0) {
    return (
      <div className={styles.noMedia} role="note">
        <span className={styles.noMediaMark} aria-hidden="true" />
        <p>Project media is not currently available.</p>
      </div>
    );
  }

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.max(280, track.clientWidth * 0.82),
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carousel} aria-label={`${projectName} media`}>
      <div className={styles.toolbar}>
        <span>{media.length === 1 ? "1 image" : `${media.length} images`}</span>
        {media.length > 1 ? (
          <div className={styles.controls}>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label={`Previous ${projectName} image`}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label={`Next ${projectName} image`}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : null}
      </div>
      <div ref={trackRef} className={styles.track} tabIndex={0}>
        {media.map((image, index) => (
          <figure key={image.src} className={styles.slide}>
            <div className={styles.imageFrame}>
              <ProtectedImage
                className={styles.image}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 899px) 82vw, (max-width: 1199px) 48vw, 40vw"
              />
              {protectionNotice ? (
                <span className={styles.protectionNotice} aria-hidden="true">
                  {protectionNotice}
                </span>
              ) : null}
            </div>
            <figcaption>
              {String(index + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
