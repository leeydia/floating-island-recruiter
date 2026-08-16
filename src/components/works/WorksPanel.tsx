import type {
  WorksCategory,
  WorksDetailSection,
  WorksPanelContent,
  WorksProject,
} from "@/content/works";
import { ProjectDisclosure } from "@/components/content/ProjectDisclosure";
import { MediaCarousel } from "./MediaCarousel";
import styles from "./WorksPanel.module.css";

interface WorksPanelProps {
  content: WorksPanelContent;
}

function DetailSections({
  details,
}: {
  details: WorksDetailSection[];
}) {
  return (
    <div className={styles.detailSections}>
      {details.map((section) => (
        <section key={section.heading} className={styles.detailSection}>
          <h3>{section.heading}</h3>
          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className={section.variant === "question" ? styles.question : undefined}
            >
              {paragraph}
            </p>
          ))}
          {section.items?.length ? (
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}

function ProjectDetails({
  project,
  showMetadata,
}: {
  project: WorksProject;
  showMetadata: boolean;
}) {
  if (!project.details?.length) return null;

  return (
    <ProjectDisclosure>
      <div className={styles.projectDetailsBody}>
        {showMetadata && project.detailMetadata?.length ? (
          <ul className={styles.projectMetadata} aria-label={`${project.name} details`}>
            {project.detailMetadata.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        <DetailSections details={project.details} />
      </div>
    </ProjectDisclosure>
  );
}

function Project({
  project,
  category,
}: {
  project: WorksProject;
  category: WorksCategory;
}) {
  return (
    <article className={styles.project}>
      <header className={styles.projectHeader}>
        <h2>{project.name}</h2>
        {project.location ? (
          <p className={styles.location}>{project.location}</p>
        ) : null}
        <p className={styles.summary}>
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

      {category === "architecture" || category === "branding" ? (
        <ProjectDetails
          project={project}
          showMetadata={category === "architecture"}
        />
      ) : null}

      <MediaCarousel
        projectName={project.name}
        media={project.media}
        protectionNotice={
          category === "visualization"
            ? "Client Project · For Portfolio Presentation Only"
            : undefined
        }
      />

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
          <Project key={project.id} project={project} category={content.category} />
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
