import { ABOUT_NODES } from "@/config/about";
import type { AboutContentItemId, ContentItemId } from "@/types/experience";
import { ContentNode } from "./ContentNode";
import styles from "./AboutNodes.module.css";

interface AboutNodesProps {
  sceneScale: number;
  visitedItems: ReadonlySet<ContentItemId>;
  onSelect: (contentItem: AboutContentItemId) => void;
}

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 19c.6-3.3 2.4-5 5.5-5s4.9 1.7 5.5 5" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 3.5h7l4 4v13h-11z" />
      <path d="M13.5 3.5v4h4M9 12h6M9 16h4.5" />
    </svg>
  );
}

export function AboutNodes({
  sceneScale,
  visitedItems,
  onSelect,
}: AboutNodesProps) {
  return (
    <div className={styles.layer} aria-label="About destination">
      {ABOUT_NODES.map((node) => (
        <ContentNode
          key={node.id}
          category="About"
          label={node.label}
          position={node.position}
          mobileLabelOffset={node.mobileLabelOffset}
          sceneScale={sceneScale}
          visited={visitedItems.has(node.id)}
          onSelect={() => onSelect(node.id)}
        >
          {node.id === "about-me" ? <AboutIcon /> : <NoteIcon />}
        </ContentNode>
      ))}
    </div>
  );
}
