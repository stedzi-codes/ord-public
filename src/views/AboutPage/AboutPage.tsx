import Image from "next/image";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./AboutPage.module.scss";

type AboutSection = {
  title: string;
  variant: "plain" | "callout";
  columns: 2 | 3;
  images: {
    src: `/${string}`;
    alt: string;
    crop?: "lower" | "mobileTop";
  }[];
  paragraphs: ReactNode[];
};

export type AboutPageProps = {
  heroTitle: string;
  heroText: ReactNode;
  aboutSections: AboutSection[];
};

export function AboutPage({ heroTitle, heroText, aboutSections }: AboutPageProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Oslo Roller Derby team">
        <Image
          className={styles.heroImage}
          src={assetPath("/images/pridegroup.jpg")}
          alt="Oslo Roller Derby team"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1>{heroTitle}</h1>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          <article className={styles.aboutBlock}>{heroText}</article>

          {aboutSections.map((section) => (
            <article
              className={`${styles.aboutBlock} ${
                section.variant === "callout" ? styles.calloutBlock : ""
              }`}
              key={section.title}
            >
              <h2>{section.title}</h2>
              <div
                className={`${styles.imageGrid} ${
                  section.columns === 2 ? styles.twoColumnGrid : ""
                }`}
              >
                {section.images.map((image) => (
                  <div className={styles.imageFrame} key={image.src}>
                    <Image
                      className={[
                        image.crop === "lower" ? styles.lowerImageCrop : "",
                        image.crop === "mobileTop" ? styles.mobileTopImageCrop : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      src={assetPath(image.src)}
                      alt={image.alt}
                      fill
                      sizes={
                        section.columns === 2
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "(max-width: 768px) 100vw, 33vw"
                      }
                    />
                  </div>
                ))}
              </div>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.title}-${index}`}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
