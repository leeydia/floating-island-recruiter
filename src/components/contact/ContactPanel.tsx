import { CONTACT_INVITATION, CONTACT_METHODS } from "@/content/contact";
import styles from "./ContactPanel.module.css";

export function ContactPanel() {
  return (
    <article className={styles.contact}>
      <p className={styles.invitation}>{CONTACT_INVITATION}</p>

      <ul className={styles.methods} aria-label="Contact methods">
        {CONTACT_METHODS.map((method) => (
          <li key={method.id}>
            <a
              href={method.href}
              aria-label={method.accessibleLabel}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
            >
              <span className={styles.label}>{method.label}</span>
              <span className={styles.value}>{method.value}</span>
              <span className={styles.arrow} aria-hidden="true">
                {method.external ? "↗" : "→"}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
