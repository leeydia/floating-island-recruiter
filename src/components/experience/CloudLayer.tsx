import styles from "./CloudLayer.module.css";

interface CloudLayerProps {
  dispersing?: boolean;
}

export function CloudLayer({ dispersing = false }: CloudLayerProps) {
  return (
    <div
      className={`${styles.welcomeClouds} ${dispersing ? styles.dispersing : ""}`}
      data-cloud-role="reveal"
      aria-hidden="true"
    >
      <div className={`${styles.revealCloud} ${styles.revealOne}`} />
      <div className={`${styles.revealCloud} ${styles.revealTwo}`} />
      <div className={`${styles.revealCloud} ${styles.revealThree}`} />
      <div className={`${styles.revealCloud} ${styles.revealFour}`} />
      <div className={`${styles.revealCloud} ${styles.revealFive}`} />
      <div className={styles.welcomeVeil} />
    </div>
  );
}
