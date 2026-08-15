import { ResumeActions } from "@/components/journey/ResumeActions";
import { ProtectedImage } from "@/components/media/ProtectedImage";
import { ABOUT_ME_CONTENT } from "@/content/about";
import { RESUME_INTRODUCTION } from "@/content/journey";
import styles from "./AboutPanel.module.css";

export function AboutPanel() {
  return (
    <article className={styles.about}>
      <div className={styles.profile}>
        <div className={styles.opening}>
          {ABOUT_ME_CONTENT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {ABOUT_ME_CONTENT.media ? (
          <figure className={styles.media}>
            <ProtectedImage
              src={ABOUT_ME_CONTENT.media.src}
              alt={ABOUT_ME_CONTENT.media.alt}
              width={ABOUT_ME_CONTENT.media.width}
              height={ABOUT_ME_CONTENT.media.height}
              sizes="(max-width: 520px) 120px, 160px"
            />
          </figure>
        ) : null}
      </div>

      <section className={styles.resumeSection} aria-labelledby="about-resume-title">
        <p className={styles.eyebrow}>Professional overview</p>
        <h2 id="about-resume-title">Resume</h2>
        <p>{RESUME_INTRODUCTION}</p>
        <ResumeActions />
      </section>
    </article>
  );
}
