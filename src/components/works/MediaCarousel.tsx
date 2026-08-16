"use client";

import { useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

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
    const nextIndex = Math.max(
      0,
      Math.min(media.length - 1, activeIndex + direction),
    );
    const slide = track.children.item(nextIndex) as HTMLElement | null;
    if (!slide) return;
    const trackBounds = track.getBoundingClientRect();
    const slideBounds = slide.getBoundingClientRect();

    setActiveIndex(nextIndex);
    track.scrollTo({
      left: track.scrollLeft + slideBounds.left - trackBounds.left,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const syncActiveSlide = () => {
    const track = trackRef.current;
    if (!track) return;
    const trackLeft = track.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - trackLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex((current) =>
      current === nearestIndex ? current : nearestIndex,
    );
  };

  const activeMedia = media[activeIndex] ?? media[0];
  const activeIsPortrait = activeMedia.height > activeMedia.width;

  return (
    <div className={styles.carousel} aria-label={`${projectName} media`}>
      <div
        className={`${styles.toolbar} ${activeIsPortrait ? styles.toolbarPortrait : ""}`}
      >
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
      <div
        ref={trackRef}
        className={styles.track}
        tabIndex={0}
        onScroll={syncActiveSlide}
      >
        {media.map((image, index) => {
          const isPortrait = image.height > image.width;

          return (
            <figure
              key={image.src}
              className={`${styles.slide} ${isPortrait ? styles.slidePortrait : ""}`}
              data-orientation={isPortrait ? "portrait" : "landscape"}
            >
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
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(media.length).padStart(2, "0")}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
