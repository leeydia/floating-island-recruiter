"use client";

import { useEffect } from "react";
import { WELCOME_COPY } from "@/config/copy";
import { TRANSITION_DURATION_MS } from "@/config/scene";
import { useExperience } from "@/context/ExperienceContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CloudLayer } from "./CloudLayer";
import { Wordmark } from "./Wordmark";
import styles from "./WelcomeScreen.module.css";

interface WelcomeScreenProps {
  loadingProgress: number;
  assetsReady: boolean;
  loadError: string | null;
  visible: boolean;
  onRetry: () => void;
}

export function WelcomeScreen({
  loadingProgress,
  assetsReady,
  loadError,
  visible,
  onRetry,
}: WelcomeScreenProps) {
  const { enterIsland, isEntering, completeEnterTransition } = useExperience();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isEntering) return;

    const duration = reducedMotion
      ? 300
      : TRANSITION_DURATION_MS.slow;

    const timer = window.setTimeout(() => {
      completeEnterTransition();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [isEntering, completeEnterTransition, reducedMotion]);

  if (!visible && !isEntering) {
    return null;
  }

  const handleEnter = () => {
    if (assetsReady && !loadError) {
      enterIsland();
    }
  };

  return (
    <div
      className={`${styles.welcome} ${isEntering ? styles.entering : ""}`}
      aria-hidden={isEntering}
    >
      <div className={styles.content}>
        <Wordmark className={styles.welcomeWordmark} />

        <div className={styles.copy}>
          <h1 className={styles.greeting}>{WELCOME_COPY.greeting}</h1>
          <p className={styles.body}>{WELCOME_COPY.body}</p>
          <p className={styles.closing}>{WELCOME_COPY.closing}</p>
        </div>

        <div className={styles.loading} aria-live="polite">
          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-label="Preparing the island"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={loadingProgress}
          >
            <span
              className={styles.progressValue}
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <span className={styles.loadingLabel}>
            {loadError ? "Loading interrupted" : `${loadingProgress}%`}
          </span>
        </div>

        <button
          type="button"
          className={styles.enterButton}
          onClick={handleEnter}
          disabled={!assetsReady || Boolean(loadError) || isEntering}
          aria-label={WELCOME_COPY.cta}
        >
          {WELCOME_COPY.cta}
        </button>

        {loadError ? (
          <div className={styles.error} role="alert">
            <p>{loadError}</p>
            <button
              type="button"
              className={styles.retryButton}
              onClick={onRetry}
            >
              Try again
            </button>
          </div>
        ) : null}
      </div>

      <CloudLayer variant="welcome" dispersing={isEntering} />
    </div>
  );
}
