import type { ReactNode } from "react";
import styles from "./LandmarkIntroduction.module.css";

export function LandmarkIntroduction({ children }: { children: ReactNode }) {
  return <p className={styles.surface}>{children}</p>;
}
