"use client";

import { useState } from "react";
import {
  TIMELINE_CLOSING,
  TIMELINE_ENTRIES,
  type TimelineEntry,
} from "@/content/journey";
import styles from "./TimelinePanel.module.css";

interface TimelinePanelProps {
  onNavigate: (landmark: "works" | "exploration") => void;
}

function TimelineItem({
  entry,
  onNavigate,
}: {
  entry: TimelineEntry;
  onNavigate: (landmark: "works" | "exploration") => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `timeline-details-${entry.id}`;

  return (
    <article className={styles.entry}>
      <span className={styles.marker} aria-hidden="true" />
      <p className={styles.date}>{entry.date}</p>
      <p className={styles.category}>{entry.category}</p>
      <h2 className={styles.entryTitle}>{entry.title}</h2>
      {entry.organisation ? (
        <p className={styles.organisation}>{entry.organisation}</p>
      ) : null}
      <p className={styles.summary}>{entry.summary}</p>

      <button
        type="button"
        className={styles.detailsButton}
        aria-expanded={expanded}
        aria-controls={detailsId}
        onClick={() => setExpanded((current) => !current)}
      >
        <span>{expanded ? "Hide details" : "View details"}</span>
        <span className={styles.detailsIcon} aria-hidden="true">
          {expanded ? "−" : "+"}
        </span>
      </button>

      <div
        id={detailsId}
        className={`${styles.details} ${expanded ? styles.detailsExpanded : ""}`}
        inert={!expanded ? true : undefined}
        aria-hidden={!expanded}
      >
        <div className={styles.detailsInner}>
          <ul>
            {entry.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>

          <div className={styles.reflection}>
            <h3>{entry.reflectionLabel}</h3>
            <p>{entry.reflection}</p>
          </div>

          <button
            type="button"
            className={styles.relatedAction}
            onClick={() => onNavigate(entry.relatedAction.landmark)}
          >
            {entry.relatedAction.label}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export function TimelinePanel({ onNavigate }: TimelinePanelProps) {
  return (
    <div className={styles.timeline}>
      {TIMELINE_ENTRIES.map((entry) => (
        <TimelineItem
          key={entry.id}
          entry={entry}
          onNavigate={onNavigate}
        />
      ))}
      <p className={styles.closing}>{TIMELINE_CLOSING}</p>
    </div>
  );
}
