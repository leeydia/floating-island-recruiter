import { LandmarkIntroduction } from "@/components/experience/LandmarkIntroduction";
import { CONTACT_LANDMARK_INTRODUCTION } from "@/content/contact";
import styles from "./ContactIntroduction.module.css";

export function ContactIntroduction() {
  return (
    <aside className={styles.context} aria-label="Contact introduction">
      <LandmarkIntroduction>{CONTACT_LANDMARK_INTRODUCTION}</LandmarkIntroduction>
    </aside>
  );
}
