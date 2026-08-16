"use client";

import { useState, type CSSProperties } from "react";
import { ProtectedImage } from "@/components/media/ProtectedImage";
import {
  PHOTOGRAPHY_GROUPS,
  type ExplorationMedia,
  type PhotographyGroup,
} from "@/content/exploration";
import styles from "./PhotographyPanel.module.css";

const INITIAL_PHOTOGRAPHY_ROWS = 2;
const SQUARE_RATIO_TOLERANCE = 0.08;

type PhotographOrientation = "landscape" | "portrait" | "square";

interface ComposedPhotograph {
  image: ExplorationMedia;
  index: number;
  orientation: PhotographOrientation;
}

function getOrientation(image: ExplorationMedia): PhotographOrientation {
  const ratio = image.width / image.height;

  if (ratio > 1 + SQUARE_RATIO_TOLERANCE) return "landscape";
  if (ratio < 1 - SQUARE_RATIO_TOLERANCE) return "portrait";
  return "square";
}

function composePhotographyRows(
  media: ExplorationMedia[],
  pairFinalMedia = false,
): ComposedPhotograph[][] {
  const finalPairStart = pairFinalMedia ? Math.max(0, media.length - 2) : media.length;
  const mediaToCompose = media.slice(0, finalPairStart);
  const buckets: Record<PhotographOrientation, ComposedPhotograph[]> = {
    landscape: [],
    portrait: [],
    square: [],
  };

  mediaToCompose.forEach((image, index) => {
    const orientation = getOrientation(image);
    buckets[orientation].push({ image, index, orientation });
  });

  const rows: ComposedPhotograph[][] = [];

  for (const orientation of [
    "landscape",
    "portrait",
    "square",
  ] as const) {
    const items = buckets[orientation];

    for (let index = 0; index < items.length; index += 2) {
      rows.push(items.slice(index, index + 2));
    }
  }

  if (pairFinalMedia && media.length >= 2) {
    rows.push(
      media.slice(finalPairStart).map((image, pairIndex) => ({
        image,
        index: finalPairStart + pairIndex,
        orientation: getOrientation(image),
      })),
    );
  }

  return rows.sort((left, right) => left[0].index - right[0].index);
}

function PhotographyLocation({ group }: { group: PhotographyGroup }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const galleryId = `photography-${group.id}-gallery`;
  const rows = composePhotographyRows(group.media, group.pairFinalMedia);
  const visibleRows = isExpanded
    ? rows
    : rows.slice(0, INITIAL_PHOTOGRAPHY_ROWS);
  const initialImageCount = rows
    .slice(0, INITIAL_PHOTOGRAPHY_ROWS)
    .reduce((count, row) => count + row.length, 0);
  const canExpand = group.media.length > initialImageCount;

  return (
    <section className={styles.location}>
      <header>
        <h2>{group.location}</h2>
        <p className={styles.count}>{group.media.length} photographs</p>
        <p className={styles.introduction}>{group.introduction}</p>
        <ul aria-label={`${group.location} photography themes`}>
          {group.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </header>

      <div id={galleryId} className={styles.gallery}>
        {visibleRows.map((row) => (
          <div
            key={row.map(({ image }) => image.src).join("|")}
            className={`${styles.row} ${row.length === 1 ? styles.singleRow : ""}`}
            data-orientations={row
              .map(({ orientation }) => orientation)
              .join(" ")}
          >
            {row.map(({ image, index, orientation }) => (
              <figure
                key={image.src}
                className={styles[orientation]}
                style={
                  {
                    "--photograph-ratio": image.width / image.height,
                  } as CSSProperties
                }
              >
                <div className={styles.imageFrame}>
                  <ProtectedImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 899px) 88vw, (max-width: 1199px) 50vw, (min-width: 1600px) 19vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  {group.location} · {String(index + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>

      {canExpand ? (
        <button
          type="button"
          className={styles.disclosure}
          aria-expanded={isExpanded}
          aria-controls={galleryId}
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? "Show less" : `View all ${group.media.length}`}
        </button>
      ) : null}
    </section>
  );
}

export function PhotographyPanel() {
  return (
    <div className={styles.collection}>
      {PHOTOGRAPHY_GROUPS.map((group) => (
        <PhotographyLocation key={group.id} group={group} />
      ))}
    </div>
  );
}
