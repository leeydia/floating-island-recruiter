import { EXPLORATION_NODES } from "@/config/exploration";
import type {
  ContentItemId,
  ExplorationContentItemId,
} from "@/types/experience";
import { ContentNode } from "./ContentNode";
import styles from "./ExplorationNodes.module.css";

interface ExplorationNodesProps {
  sceneScale: number;
  visitedItems: ReadonlySet<ContentItemId>;
  onSelect: (contentItem: ExplorationContentItemId) => void;
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="2" />
      <circle cx="17.5" cy="6.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
      <path d="m7.8 11.1 7.8-3.7M7.8 12.9l7.8 3.7" />
      <path d="m11.5 4 .55 1.45L13.5 6l-1.45.55L11.5 8l-.55-1.45L9.5 6l1.45-.55z" />
    </svg>
  );
}

function PhotographyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.25" />
      <path d="M4 8.5h3l1.3-2h7.4l1.3 2h3v10H4z" />
      <path d="M17.5 11h.01" />
    </svg>
  );
}

export function ExplorationNodes({
  sceneScale,
  visitedItems,
  onSelect,
}: ExplorationNodesProps) {
  return (
    <div className={styles.layer} aria-label="Exploration destinations">
      {EXPLORATION_NODES.map((node) => (
        <ContentNode
          key={node.id}
          category="Exploration"
          label={node.label}
          position={node.position}
          mobilePosition={node.mobilePosition}
          mobileLabelOffset={node.mobileLabelOffset}
          sceneScale={sceneScale}
          visited={visitedItems.has(node.id)}
          accent={node.accent}
          accentGlow={node.accentGlow}
          onSelect={() => onSelect(node.id)}
        >
          {node.id === "exploration-ai" ? (
            <AiIcon />
          ) : (
            <PhotographyIcon />
          )}
        </ContentNode>
      ))}
    </div>
  );
}
