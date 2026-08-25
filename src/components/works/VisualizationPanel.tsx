import type {
  VisualizationPanelContent,
  VisualizationWorkflowIcon,
} from "@/content/works";
import styles from "./VisualizationPanel.module.css";

interface VisualizationPanelProps {
  content: VisualizationPanelContent;
}

function WorkflowIcon({ icon }: { icon: VisualizationWorkflowIcon }) {
  if (icon === "plan") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5h11v4h5v10zM8 5v4H4M15 9v4h5" />
        <path d="M8 15h4M10 13v4" />
      </svg>
    );
  }

  if (icon === "layers") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 3 8 4.5-8 4.5-8-4.5zM4 12l8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
      </svg>
    );
  }

  if (icon === "camera") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7.5h4l1.4-2h5.2l1.4 2h4v11H4z" />
        <circle cx="12" cy="13" r="3.2" />
        <path d="M18 3v2M21 6h-2M19.5 4.5 21 3" />
      </svg>
    );
  }

  if (icon === "render") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="14" height="14" rx="1" />
        <path d="m6.5 16 3.2-3.5 2.4 2.2 2.2-2.4 3.2 3.7M20 3v4M18 5h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h9.5L14 4.5M17 17H7.5l2.5 2.5" />
      <path d="M17.5 7A7 7 0 0 1 19 11.5M6.5 17A7 7 0 0 1 5 12.5" />
      <path d="m14.5 13.5 2 2 4-4" />
    </svg>
  );
}

export function VisualizationPanel({ content }: VisualizationPanelProps) {
  return (
    <div className={styles.visualization}>
      <section className={styles.workflow} aria-labelledby="visualization-workflow">
        <p className={styles.sectionLabel}>Professional Workflow</p>
        <h2 id="visualization-workflow">From information to final image</h2>

        <ol className={styles.steps}>
          {content.steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <div className={styles.stepMarker}>
                <span className={styles.number}>{step.number}</span>
                <span className={styles.icon}>
                  <WorkflowIcon icon={step.icon} />
                </span>
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.tools} aria-labelledby="visualization-tools">
        <h2 id="visualization-tools">Tools</h2>
        <p>{content.tools.join(" · ")}</p>
      </section>

      <aside className={styles.commercialWork} aria-labelledby="commercial-work">
        <h2 id="commercial-work">{content.commercialWork.heading}</h2>
        <p>{content.commercialWork.text}</p>
      </aside>
    </div>
  );
}
