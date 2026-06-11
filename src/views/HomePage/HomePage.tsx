import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./HomePage.module.scss";

export type HomePageProps = {
  heroText: ReactNode;
  heroButton: {
    href: string;
    text: string;
  };
  firstArticleTitle: string;
  firstArticleText: ReactNode;
  secondArticleTitle: string;
  secondArticleText: ReactNode;
  logoSponsors: {
    name: string;
    image: `/${string}`;
    width: number;
    height: number;
    href: string;
  }[];
};

export function HomePage({
  heroText,
  heroButton,
  firstArticleText,
  firstArticleTitle,
  secondArticleText,
  secondArticleTitle,
  logoSponsors,
}: HomePageProps) {
  const heroStyle = {
    "--hero-stripes-image": `url("${assetPath("/images/tigerstriper.png")}")`,
  } as CSSProperties;

  return (
    <div className={styles.page}>
      <section className={styles.hero} style={heroStyle}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            RÅ
            <br />
            <span>INKLUDERENDE</span>
            <br />
            VELORGANISERTE
          </h1>

          <div className={styles.heroFooter}>
            <p className={styles.heroText}>{heroText}</p>
            <a className={styles.primaryButton} target="_blank" href={heroButton.href}>
              {heroButton.text}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.infoSection} id="about">
        <div className={styles.infoContent}>
          <article className={`${styles.infoBlock} ${styles.infoBlockOrange}`}>
            <h2>{firstArticleTitle}</h2>
            <p>{firstArticleText}</p>
          </article>

          <div className={styles.teamPhotoFrame} aria-label="Oslo Roller Derby team photo">
            <Image
              className={styles.teamPhoto}
              src={assetPath("/images/torture.jpg")}
              alt="Oslo Roller Derby team photo"
              width={2500}
              height={1877}
              sizes="(max-width: 640px) 100vw, 896px"
            />
          </div>

          <article className={`${styles.infoBlock} ${styles.infoBlockYellow}`} id="join">
            <h2>{secondArticleTitle}</h2>
            <p>{secondArticleText}</p>
          </article>
        </div>
      </section>

      <section className={styles.sponsorsSection} id="sponsors">
        <div className={styles.sponsorsContent}>
          <h2>Our Sponsors</h2>
          <div className={styles.sponsorGrid}>
            {logoSponsors.map((sponsor) => {
              const sponsorContent = (
                <Image
                  className={styles.sponsorLogo}
                  src={assetPath(sponsor.image)}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              );

              return sponsor.href ? (
                <a
                  className={styles.sponsorCard}
                  href={sponsor.href}
                  key={sponsor.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  {sponsorContent}
                </a>
              ) : (
                <div className={styles.sponsorCard} key={sponsor.name}>
                  {sponsorContent}
                </div>
              );
            })}

            <div className={`${styles.sponsorCard} ${styles.grasrotCard}`}>
              <Image
                className={styles.grasrotImage}
                src={assetPath("/images/grasrot.png")}
                alt="Grasrotandelen QR code"
                width={115}
                height={123}
              />
              <div className={styles.sponsorText}>
                <h3>Støtt oss med din grasrotandel</h3>
                <p>
                  Du kan bli grasrotgiver i alle Norsk Tippings kanaler eller ved å sende en SMS
                  &quot;Grasrotandelen 997503465&quot; til 60000
                </p>
              </div>
            </div>

            <div className={`${styles.sponsorCard} ${styles.textSponsorCard}`}>
              <div className={styles.sponsorText}>
                <h3>Vil du bli sponsor?</h3>
                <p>
                  Ønsker du å støtte klubben og samtidig få med logo på kamper og andre
                  arrangementer? Send oss en mail til{" "}
                  <a href="mailto:spons@oslorollerderby.no">spons@oslorollerderby.no</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
