import { WORKS_CATEGORIES } from "@/config/works";
import { WORKS_LANDMARK_INTRODUCTION } from "@/content/works";
import { LandmarkIntroduction } from "@/components/experience/LandmarkIntroduction";
import { WorksCategoryIcon } from "./WorksCategoryIcon";
import styles from "./WorksLegend.module.css";

export function WorksLegend() {
  return (
    <aside className={styles.landmarkContext} aria-label="Works categories">
      <LandmarkIntroduction>{WORKS_LANDMARK_INTRODUCTION}</LandmarkIntroduction>
      <div className={styles.legend}>
        <p className={styles.heading}>Project categories</p>
        <ul className={styles.items}>
          {WORKS_CATEGORIES.map((category) => (
            <li
              key={category.id}
              className={`${styles.item} ${styles[category.id]}`}
            >
              <span className={styles.icon} aria-hidden="true">
                <WorksCategoryIcon category={category.id} />
              </span>
              <span>{category.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
