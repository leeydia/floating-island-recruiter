import type {
  WorksPanelContent,
  WorksProject,
} from "@/content/works";
import { MediaCarousel } from "./MediaCarousel";
import styles from "./WorksPanel.module.css";

interface WorksPanelProps {
  content: WorksPanelContent;
}

function Project({ project }: { project: WorksProject }) {
  return (
    <article className={styles.project}>
      <header className={styles.projectHeader}>
        <h2>{project.name}</h2>
        {project.location ? (
          <p className={styles.location}>{project.location}</p>
        ) : null}
        <p
          className={`${styles.summary} ${project.introduction ? styles.placeholderIntroduction : ""}`}
        >
          {project.introduction ?? project.summary}
        </p>
      </header>

      {project.credits?.length ? (
        <section className={styles.credits} aria-label={`${project.name} project credit`}>
          <h3>Project Credit</h3>
          <dl>
            {project.credits.map((credit) => (
              <div key={credit.label}>
                <dt>{credit.label}</dt>
                <dd>{credit.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <MediaCarousel projectName={project.name} media={project.media} />
    </article>
  );
}

export function WorksPanel({ content }: WorksPanelProps) {
  return (
    <div className={styles.works}>
      {content.metadata?.length ? (
        <ul className={styles.metadata} aria-label="Project overview">
          {content.metadata.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {content.workflow ? (
        <div className={styles.workflow}>
          <p className={styles.workflowLabel}>Workflow</p>
          <p>{content.workflow}</p>
        </div>
      ) : null}

      <div className={styles.projects}>
        {content.projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>

      {content.externalLink ? (
        <div className={styles.externalCta}>
          <a
            href={content.externalLink.href}
            target="_blank"
            rel="noreferrer"
          >
            {content.externalLink.label}
            <span aria-hidden="true">↗</span>
          </a>
          <p>{content.externalLink.note}</p>
        </div>
      ) : null}

      {content.closingNote ? (
        <p className={styles.closingNote}>{content.closingNote}</p>
      ) : null}
    </div>
  );
}
