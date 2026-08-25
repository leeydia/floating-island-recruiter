"use client";

import { useState } from "react";
import {
  TIMELINE_CLOSING,
  TIMELINE_ENTRIES,
  type TimelineEntry,
  type TimelineRelatedAction,
} from "@/content/journey";
import styles from "./TimelinePanel.module.css";

interface TimelinePanelProps {
  onNavigate: (action: TimelineRelatedAction) => void;
}

function TimelineItem({
  entry,
  onNavigate,
}: {
  entry: TimelineEntry;
  onNavigate: (action: TimelineRelatedAction) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `timeline-details-${entry.id}`;
  const relatedAction = entry.relatedAction;

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

          {relatedAction ? (
            <button
              type="button"
              className={styles.relatedAction}
              onClick={() => onNavigate(relatedAction)}
            >
              {relatedAction.label}
              <span aria-hidden="true">→</span>
            </button>
          ) : null}
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
