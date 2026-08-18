import {
  RESUME_DOWNLOAD_URL,
  RESUME_VIEW_URL,
} from "@/content/journey";
import styles from "./ResumeActions.module.css";

export function ResumeActions() {
  return (
    <div className={styles.resume}>
      <div className={styles.actions}>
        <a
          className={styles.primaryAction}
          href={RESUME_VIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
          <span aria-hidden="true">↗</span>
        </a>
        <a
          className={styles.secondaryAction}
          href={RESUME_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          download="Leeydia-Lau-Resume.pdf"
        >
          Download Resume
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <p className={styles.note}>
        The approved résumé is available here as a PDF and opens in a new browser tab.
      </p>
    </div>
  );
}
