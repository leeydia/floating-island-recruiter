import { LETTER_TO_YOU_CONTENT } from "@/content/about";
import styles from "./LetterPanel.module.css";

export function LetterPanel() {
  return (
    <article className={styles.letter}>
      {LETTER_TO_YOU_CONTENT.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p className={styles.signature}>{LETTER_TO_YOU_CONTENT.signature}</p>
    </article>
  );
}
