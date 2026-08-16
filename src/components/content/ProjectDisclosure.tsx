import type { ReactNode } from "react";
import styles from "./ProjectDisclosure.module.css";

interface ProjectDisclosureProps {
  children: ReactNode;
}

export function ProjectDisclosure({ children }: ProjectDisclosureProps) {
  return (
    <details className={styles.disclosure}>
      <summary>
        <span>View Details</span>
        <span className={styles.collapsedMark} aria-hidden="true">+</span>
        <span className={styles.expandedMark} aria-hidden="true">−</span>
      </summary>
      <div className={styles.body}>{children}</div>
    </details>
  );
}
