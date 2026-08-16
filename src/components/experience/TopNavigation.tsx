"use client";

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { NAVIGATORS } from "@/config/navigators";
import type { LandmarkId } from "@/types/experience";
import styles from "./TopNavigation.module.css";

interface TopNavigationProps {
  selectedLandmark: LandmarkId;
  onSelect: (landmark: LandmarkId) => void;
}

export function TopNavigation({
  selectedLandmark,
  onSelect,
}: TopNavigationProps) {
  const navigationRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndex = NAVIGATORS.findIndex(
    (navigator) => navigator.id === selectedLandmark,
  );
  const current = NAVIGATORS[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const frameId = window.requestAnimationFrame(() => {
      optionRefs.current[activeIndex]?.focus();
    });

    const handlePointerDown = (event: PointerEvent) => {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeIndex, isOpen]);

  if (!current) return null;

  const openMenu = (index = currentIndex) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  const handleTriggerKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen) closeMenu();
      else openMenu();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      openMenu(currentIndex);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openMenu(currentIndex);
    } else if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      closeMenu();
    }
  };

  const handleOptionKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSelect(NAVIGATORS[index].id);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key === "Tab") {
      closeMenu();
      return;
    }

    let nextIndex = index;
    if (event.key === "ArrowDown") nextIndex = (index + 1) % NAVIGATORS.length;
    else if (event.key === "ArrowUp") {
      nextIndex = (index - 1 + NAVIGATORS.length) % NAVIGATORS.length;
    } else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = NAVIGATORS.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(nextIndex);
    optionRefs.current[nextIndex]?.focus();
  };

  const handleSelect = (landmark: LandmarkId) => {
    closeMenu(true);
    if (landmark !== selectedLandmark) onSelect(landmark);
  };

  return (
    <nav
      ref={navigationRef}
      className={styles.navigation}
      aria-label="Island destinations"
    >
      <div className={styles.currentDestination}>
        <span className={styles.contextLabel}>Current destination</span>
        <button
          ref={triggerRef}
          type="button"
          className={styles.trigger}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          aria-controls="island-destination-menu"
          onClick={() => (isOpen ? closeMenu() : openMenu())}
          onKeyDown={handleTriggerKeyDown}
        >
          <span className={styles.number}>{current.number}</span>
          <span className={styles.currentText}>
            <strong className={styles.destination}>{current.label}</strong>
            <span className={styles.landmark}>{current.landmark}</span>
          </span>
          <span
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen ? (
        <ul
          id="island-destination-menu"
          className={styles.menu}
          role="menu"
          aria-label="Choose an island destination"
        >
          {NAVIGATORS.map((navigator, index) => {
            const isCurrent = navigator.id === selectedLandmark;

            return (
              <li key={navigator.id} role="none">
                <button
                  ref={(element) => {
                    optionRefs.current[index] = element;
                  }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isCurrent}
                  className={`${styles.option} ${isCurrent ? styles.optionCurrent : ""}`}
                  tabIndex={index === activeIndex ? 0 : -1}
                  onClick={() => handleSelect(navigator.id)}
                  onKeyDown={(event) => handleOptionKeyDown(event, index)}
                >
                  <span className={styles.optionNumber}>{navigator.number}</span>
                  <span className={styles.optionText}>
                    <strong>{navigator.label}</strong>
                    <span>{navigator.landmark}</span>
                  </span>
                  <span className={styles.currentMark} aria-hidden="true">
                    {isCurrent ? "Current" : ""}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </nav>
  );
}
