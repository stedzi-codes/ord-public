import Image from "next/image";
import type { CSSProperties } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./JoinPage.module.scss";

const faqItems = [
  {
    question: "Må jeg kunne stå på rulleskøyter fra før?",
    answer:
      "Nei. Nybegynnerkurset vårt er laget for deg som er helt fersk, deg som har skøytet litt før, og deg som bare er nysgjerrig på sporten.",
  },
  {
    question: "Hva trenger jeg av utstyr?",
    answer:
      "Dette er foreløpig plassholdertekst. Her kan vi forklare hva klubben kan låne ut, hva du bør kjøpe selv, og hva som er lurt å ha på første trening.",
  },
  {
    question: "Kan jeg bli med uten å ville spille kamper?",
    answer:
      "Dette er foreløpig plassholdertekst. Her kan vi skrive om rekreasjon, frivillige roller, dommere, NSO-er og at det finnes flere måter å være med på.",
  },
  {
    question: "Når starter neste nybegynnerkurs?",
    answer:
      "Dette er foreløpig plassholdertekst. Her kan vi legge inn informasjon om vår- og høstkurs, påmelding og hvordan man får beskjed om datoer.",
  },
  {
    question: "Hvem kan bli medlem?",
    answer:
      "Dette er foreløpig plassholdertekst. Her kan vi beskrive aldersgrenser, inkludering, forventninger og hvordan klubben tar imot nye medlemmer.",
  },
];

export function JoinPage() {
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
            <p>Bli med</p>
            <h1>Finn din plass på banen</h1>
          </div>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <article className={styles.introText}>
            <p className={styles.kicker}>Nybegynnerkurs</p>
            <h2>Start din derbyreise</h2>
            <p>
              Du trenger ikke erfaring med rulleskøyter for å bli med i Oslo
              Roller Derby. Nybegynnerkurset vårt er for alle som har lyst til å
              prøve sporten, enten du drømmer om å spille kamper, bli dommer,
              bidra som funksjonær, eller bare vil finne et nytt fellesskap på
              hjul.
            </p>
            <p>
              Vi går gjennom grunnleggende skøyteferdigheter, trygghet på banen,
              regler og roller i sporten. Du får lære i ditt eget tempo sammen
              med trenere og klubbmedlemmer som husker veldig godt hvordan det
              var å være ny.
            </p>
            <a className={styles.primaryButton} href="/https://docs.google.com/forms/d/e/1FAIpQLSfo_yl6a7eFS5-CxaAAfN3Y9EVAsY3uAS5Sa8h_uQxjjBhEXw/viewform">
              Meld deg på
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
          <p className={styles.kicker}>Spørsmål og svar</p>
          <h2>Ofte stilte spørsmål</h2>
          <div className={styles.accordion}>
            {faqItems.map((item) => (
              <details className={styles.faqItem} key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} style={ctaStyle}>
        <div className={styles.finalCtaContent}>
          <h2>Vil du bli en av oss, eller bare lære deg å stå på rulleskøyter?</h2>
          <a className={styles.secondaryButton} href="/https://docs.google.com/forms/d/e/1FAIpQLSfo_yl6a7eFS5-CxaAAfN3Y9EVAsY3uAS5Sa8h_uQxjjBhEXw/viewform">
            Bli medlem
          </a>
        </div>
      </section>
    </div>
  );
}
