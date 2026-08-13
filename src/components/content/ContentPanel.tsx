"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Wordmark } from "@/components/experience/Wordmark";
import styles from "./ContentPanel.module.css";

interface ContentPanelProps {
  eyebrow?: string;
  title: string;
  introduction: string;
  children: ReactNode;
  onClose: () => void;
  onReturnToWelcome: () => void;
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function ContentPanel({
  eyebrow = "Journey · Harbor",
  title,
  introduction,
  children,
  onClose,
  onReturnToWelcome,
}: ContentPanelProps) {
  const titleId = useId();
  const introductionId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const reducedMotion = useReducedMotion();

  const requestClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(onClose, reducedMotion ? 150 : 400);
  }, [isClosing, onClose, reducedMotion]);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [requestClose]);

  const handleFocusTrap = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return;

    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className={`${styles.layer} ${isClosing ? styles.layerClosing : ""}`}
    >
      <button
        type="button"
        className={styles.overlay}
        onClick={requestClose}
        tabIndex={-1}
        aria-label={`Close ${title} panel`}
      />

      <aside
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={introductionId}
        onKeyDown={handleFocusTrap}
      >
        <div className={styles.chrome}>
          <div className={styles.wordmark}>
            <Wordmark asButton onClick={onReturnToWelcome} />
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            onClick={requestClose}
            aria-label={`Close ${title} panel`}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className={styles.scroller}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 id={titleId} className={styles.title}>
              {title}
            </h1>
            <p id={introductionId} className={styles.introduction}>
              {introduction}
            </p>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
