import { WORKS_NODES } from "@/config/works";
import type { WorksCategory } from "@/content/works";
import type { ContentItemId, WorksContentItemId } from "@/types/experience";
import { WorksCategoryIcon } from "@/components/works/WorksCategoryIcon";
import { ContentNode } from "./ContentNode";
import styles from "./WorksNodes.module.css";

interface WorksNodesProps {
  sceneScale: number;
  visitedItems: ReadonlySet<ContentItemId>;
  onSelect: (contentItem: WorksContentItemId) => void;
}

const CATEGORY_COLORS: Record<
  WorksCategory,
  { accent: string; glow: string }
> = {
  architecture: {
    accent: "rgba(173, 96, 88, 0.92)",
    glow: "rgba(193, 112, 102, 0.36)",
  },
  branding: {
    accent: "rgba(93, 134, 174, 0.94)",
    glow: "rgba(93, 134, 174, 0.34)",
  },
  visualization: {
    accent: "rgba(93, 137, 109, 0.94)",
    glow: "rgba(93, 137, 109, 0.34)",
  },
};

export function WorksNodes({
  sceneScale,
  visitedItems,
  onSelect,
}: WorksNodesProps) {
  return (
    <div className={styles.layer} aria-label="Works projects">
      {WORKS_NODES.map((node) => (
        <ContentNode
          key={node.id}
          category={node.categoryLabel}
          label={node.label}
          position={node.position}
          mobilePosition={node.mobilePosition}
          mobileLabelOffset={node.mobileLabelOffset}
          sceneScale={sceneScale}
          visited={visitedItems.has(node.id)}
          accent={CATEGORY_COLORS[node.category].accent}
          accentGlow={CATEGORY_COLORS[node.category].glow}
          accentSurface
          onSelect={() => onSelect(node.id)}
        >
          <WorksCategoryIcon category={node.category} />
        </ContentNode>
      ))}
    </div>
  );
}
