import Image from "next/image";
import { ResumeActions } from "@/components/journey/ResumeActions";
import { ABOUT_ME_CONTENT } from "@/content/about";
import { RESUME_INTRODUCTION } from "@/content/journey";
import styles from "./AboutPanel.module.css";

export function AboutPanel() {
  return (
    <article className={styles.about}>
      <div className={styles.opening}>
        {ABOUT_ME_CONTENT.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {ABOUT_ME_CONTENT.media ? (
        <figure className={styles.media}>
          <Image
            src={ABOUT_ME_CONTENT.media.src}
            alt={ABOUT_ME_CONTENT.media.alt}
            width={ABOUT_ME_CONTENT.media.width}
            height={ABOUT_ME_CONTENT.media.height}
            sizes="(min-width: 1600px) 62vw, (min-width: 900px) 60vw, 100vw"
          />
        </figure>
      ) : null}

      <section className={styles.resumeSection} aria-labelledby="about-resume-title">
        <p className={styles.eyebrow}>Professional overview</p>
        <h2 id="about-resume-title">Resume</h2>
        <p>{RESUME_INTRODUCTION}</p>
        <ResumeActions />
      </section>
    </article>
  );
}
