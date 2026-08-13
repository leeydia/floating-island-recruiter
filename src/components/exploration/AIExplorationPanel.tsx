import { AI_PROJECT } from "@/content/exploration";
import { MediaCarousel } from "@/components/works/MediaCarousel";
import styles from "./AIExplorationPanel.module.css";

export function AIExplorationPanel() {
  return (
    <article className={styles.project}>
      <h2>{AI_PROJECT.title}</h2>

      <dl className={styles.metadata}>
        {AI_PROJECT.metadata.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <p className={styles.introduction}>{AI_PROJECT.introduction}</p>

      <MediaCarousel
        projectName={AI_PROJECT.title}
        media={[...AI_PROJECT.media]}
      />

      <section className={styles.process}>
        <p className={styles.eyebrow}>Process</p>
        <h3>From idea to an evolving experience</h3>
        <p>{AI_PROJECT.processIntroduction}</p>
        <ol>
          {AI_PROJECT.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}
