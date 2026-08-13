import { EXPLORATION_LANDMARK_INTRODUCTION } from "@/content/exploration";
import { LandmarkIntroduction } from "@/components/experience/LandmarkIntroduction";
import styles from "./ExplorationIntroduction.module.css";

export function ExplorationIntroduction() {
  return (
    <aside className={styles.context} aria-label="Exploration introduction">
      <LandmarkIntroduction>
        {EXPLORATION_LANDMARK_INTRODUCTION}
      </LandmarkIntroduction>
    </aside>
  );
}
