import { PAVILION_POSITION } from "@/config/navigators";
import { PAVILION_TEXT } from "@/config/copy";
import styles from "./PavilionLabel.module.css";

export function PavilionLabel() {
  return (
    <p
      className={styles.pavilion}
      style={{
        left: `${PAVILION_POSITION.x}%`,
        top: `${PAVILION_POSITION.y}%`,
      }}
      aria-hidden="true"
    >
      {PAVILION_TEXT}
    </p>
  );
}
