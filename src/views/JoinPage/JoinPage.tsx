import Image from "next/image";
import type { ReactNode } from "react";
import type { CSSProperties } from "react";
import { links } from "@/content/links";
import { assetPath } from "@/lib/assetPath";
import styles from "./JoinPage.module.scss";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export type JoinPageProps = {
  heroTitle: string;
  heroSubtitle: string;
  introSubtitle: string;
  introTitle: string;
  introText: ReactNode;
  introCtaButtonText: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  finalCtaTitle: string;
  finalCtaButtonText: string;
};

export function JoinPage({
  heroTitle,
  heroSubtitle,
  introSubtitle,
  introTitle,
  introText,
  introCtaButtonText,
  faqTitle,
  faqSubtitle,
  faqs,
  finalCtaTitle,
  finalCtaButtonText,
}: JoinPageProps) {
  const ctaStyle = {
    "--stripes-image": `url("${assetPath("/images/tigerstriper.png")}")`,
  } as CSSProperties;

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Oslo Roller Derby team">
        <Image
          className={styles.heroImage}
          src={assetPath("/images/endgame.jpg")}
          alt="Oslo Roller Derby team"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <p>{heroSubtitle}</p>
            <h1>{heroTitle}</h1>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <article className={styles.introText}>
            <p className={styles.kicker}>{introSubtitle}</p>
            <h2>{introTitle}</h2>
            {introText}
            <a
              className={styles.primaryButton}
              href={links.signUpForm}
              rel="noopener noreferrer"
              target="_blank"
            >
              {introCtaButtonText}
            </a>
          </article>

          <div className={styles.squareImageFrame}>
            <Image
              className={styles.squareImage}
              src={assetPath("/images/valjoin.jpg")}
              alt="Roller derby spiller i bevegelse"
              fill
              sizes="(max-width: 900px) 100vw, 420px"
            />
          </div>
        </div>
      </section>

      <section className={styles.photoSection} aria-label="Roller derby photos">
        <div className={styles.photoGrid}>
          <div className={styles.photoFrame}>
            <Image
              src={assetPath("/images/aasapride.jpg")}
              alt="Roller derby jam på banen"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div className={styles.photoFrame}>
            <Image
              src={assetPath("/images/bteamgame.jpg")}
              alt="Roller derby spiller klar til trening"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqContent}>
          <p className={styles.kicker}>{faqSubtitle}</p>
          <h2>{faqTitle}</h2>
          <div className={styles.accordion}>
            {faqs.map((item) => (
              <details className={styles.faqItem} key={item.question}>
                <summary>{item.question}</summary>
                <div className={styles.faqAnswer}>{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} style={ctaStyle}>
        <div className={styles.finalCtaContent}>
          <h2>{finalCtaTitle}</h2>
          <a
            className={styles.secondaryButton}
            href={links.signUpForm}
            rel="noopener noreferrer"
            target="_blank"
          >
            {finalCtaButtonText}
          </a>
        </div>
      </section>
    </div>
  );
}
