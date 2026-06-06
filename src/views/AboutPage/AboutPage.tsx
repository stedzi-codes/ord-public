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

const aboutSections: AboutSection[] = [
  {
    title: "Skating Officials",
    variant: "callout",
    columns: 3,
    images: [
      {
        src: "/images/refirene.jpg",
        alt: "Skating official",
      },
      {
        src: "/images/refsandnsos.jpg",
        alt: "Skating officials group",
      },
      {
        src: "/images/moreNsos.jpg",
        alt: "Officials at work",
      },
    ],
    paragraphs: [
      "Dommerne og NSO-ene våre er en viktig del av funksjonærcrewet som gjør roller derby mulig. Dommerne står på rulleskøyter og har kontroll på spillets regler, poengtaking og at kampene gjennomføres etter WFTDAs regler og retningslinjer. Som dommer trenger du stort sett det samme utstyret som spillerne, men du trenger ikke tannbeskytter, og inlineskøyter er også tillatt.",
      "NSO betyr Non-Skating Official, og som navnet tilsier jobber NSO-ene uten rulleskøyter. De gjør en avgjørende jobb under kamper og treningskamper ved å starte og stoppe jams og omganger, notere poeng, ta tiden i straffeboksen, registrere hvilke spillere som er på banen, og holde oversikt over mange av detaljene som får kampen til å flyte.",
      <>
        Som dommer eller NSO får du et unikt innblikk i roller derby som sport,
        og du blir en viktig del av miljøet rundt laget. Uten funksjonærer blir
        det ingen roller derby. Oslo Roller Derby er stadig på utkikk etter
        flere dommere og NSO-er, enten du allerede kan stå på rulleskøyter eller
        ønsker å bidra uten skøyter. Hvis du vil bli dommer, NSO, eller bare
        vite mer, kan du kontakte oss på{" "}
        <a href="https://example.com">officials@oslorollerderby.no</a>.
      </>,
    ],
  },
  {
    title: "Spillere",
    variant: "plain",
    columns: 3,
    images: [
      {
        src: "/images/pikajump.jpg",
        alt: "Roller derby players in action",
        crop: "mobileTop",
      },
      {
        src: "/images/jam2picture.jpg",
        alt: "Team playing together",
      },
      {
        src: "/images/blockerme.jpg",
        alt: "Player in motion",
        crop: "mobileTop",
      },
    ],
    paragraphs: [
      "Roller derby er en fysisk krevende sport kombinert med taktikk. Ved å gå vårt nybegynnerkurs vil du lære de grunnleggende ferdighetene som trengs for å være en trygg spiller.", 
      "ORDs nybegynnerkurs er lagt opp slik at man kan ta den tiden man trenger for å fullføre. Vårt heteste tips for å ha god progresjon, uansett nivå, er å møte på så mange treninger som mulig.",
    ],
  },
  {
    title: "Frivillige",
    variant: "callout",
    columns: 2,
    images: [
      {
        src: "/images/volunteers2.jpg",
        alt: "Team volunteers",
      },
      {
        src: "/images/trackninja2.jpg",
        alt: "Volunteers helping",
        crop: "lower",
      },
    ],
    paragraphs: [
      "Det er mange roller som skal fylles når det spilles kamp. Og vi setter utrolig pris på alle de frivillige som stiller opp for å gjøre det mulig. Vi har track-ninjaer som passer på at banen alltid er teipet slik den skal, billett og loddselgere, merch selgere osv. ",
    ],
  },
];

export function AboutPage() {
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
            <h1>Mer enn bare en trimgruppe</h1>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          <article className={styles.aboutBlock}>
            <p>
              Vi er en klubb bestående av roller derby spillere, dommere,
              funksjonærer og andre frivillige. Det er mange roller som må på
              plass når det skal spilles en roller derby kamp. Vi har
              nybegynnerkurs for de som vil stå på skøyter. Der lærer man om
              sporten og bestemmer selv om målet skal være spiller eller dommer.
              Vi har nybegynnerkurs på starten av vår og høst.
            </p>
            <p>
              Har du lyst til å være frivillig eller funksjonær uten skøyter?
              Les mer om NSO rollen nedenfor!
            </p>
          </article>

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
                        image.crop === "mobileTop"
                          ? styles.mobileTopImageCrop
                          : "",
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
