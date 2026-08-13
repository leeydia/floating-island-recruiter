import { LandmarkIntroduction } from "@/components/experience/LandmarkIntroduction";
import { ABOUT_LANDMARK_INTRODUCTION } from "@/content/about";
import styles from "./AboutIntroduction.module.css";

export function AboutIntroduction() {
  return (
    <aside className={styles.context} aria-label="About introduction">
      <LandmarkIntroduction>{ABOUT_LANDMARK_INTRODUCTION}</LandmarkIntroduction>
    </aside>
  );
}
