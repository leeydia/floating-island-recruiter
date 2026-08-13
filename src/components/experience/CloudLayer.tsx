import styles from "./CloudLayer.module.css";

interface CloudLayerProps {
  variant: "welcome" | "haze";
  dispersing?: boolean;
}

export function CloudLayer({ variant, dispersing = false }: CloudLayerProps) {
  if (variant === "welcome") {
    return (
      <div
        className={`${styles.welcomeClouds} ${dispersing ? styles.dispersing : ""}`}
        aria-hidden="true"
      >
        <div className={`${styles.cloud} ${styles.cloudOne}`} />
        <div className={`${styles.cloud} ${styles.cloudTwo}`} />
        <div className={`${styles.cloud} ${styles.cloudThree}`} />
        <div className={`${styles.cloud} ${styles.cloudFour}`} />
        <div className={`${styles.cloud} ${styles.cloudFive}`} />
        <div className={styles.welcomeVeil} />
      </div>
    );
  }

  return (
    <div className={styles.hazeLayer} aria-hidden="true">
      <div className={`${styles.haze} ${styles.hazeLeft}`} />
      <div className={`${styles.haze} ${styles.hazeRight}`} />
      <div className={`${styles.haze} ${styles.hazeBottom}`} />
    </div>
  );
}
