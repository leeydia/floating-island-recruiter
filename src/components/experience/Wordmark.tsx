import styles from "./Wordmark.module.css";
import { WORDMARK_TEXT } from "@/config/copy";

interface WordmarkProps {
  asButton?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Wordmark({ asButton = false, onClick, className }: WordmarkProps) {
  const combinedClassName = [styles.wordmark, className].filter(Boolean).join(" ");
  const content = (
    <>
      <span>Leeydia&apos;s</span>
      <span>Floating Island</span>
    </>
  );

  if (asButton) {
    return (
      <button
        type="button"
        className={combinedClassName}
        onClick={onClick}
        aria-label="Return to welcome screen"
      >
        {content}
      </button>
    );
  }

  return (
    <p className={combinedClassName} aria-label={WORDMARK_TEXT}>
      {content}
    </p>
  );
}
