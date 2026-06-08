import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./JoinPage.module.scss";

const signUpFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfo_yl6a7eFS5-CxaAAfN3Y9EVAsY3uAS5Sa8h_uQxjjBhEXw/viewform";

const instagramUrl = "https://www.instagram.com/oslorollerderby/";

const faqItems: { question: string; answer: ReactNode }[] = [
  {
    question: "Må jeg kunne stå på rulleskøyter fra før?",
    answer:
      "Nei. Nybegynnerkurset vårt er laget for deg som er helt fersk, deg som har skøytet litt før, og deg som bare er nysgjerrig på sporten.",
  },
  {
    question: "Hva trenger jeg av utstyr?",
    answer:
      "For å spille roller derby og delta på det nye nybegynnerkurset trenger du: hjelm, knebeskyttere, albuebeskyttere, håndleddsbeskyttere, tannbeskytter og rulleskøyter.",
  },
  {
    question: "Kan jeg bli med uten å ville spille kamper?",
    answer:
      "Absolutt! Det er plass til alle i roller derby. Du kan lære reglene og skøyteferdighetene som trengs for å bli dommer, eller bli en ikke-skøytende funksjonær dersom du ikke foretrekker hjul under føttene. Det finnes også speakerroller, fotografer, kampdagsansvarlige, billett- og merch-selgere og andre frivillige verv som vi alltid er på utkikk etter å fylle.",
  },
  {
    question: "Når starter neste nybegynnerkurs?",
    answer: (
      <>
        Det neste nybegynnerkurset vil sannsynligvis starte i september. Meld deg på
        e-postlisten vår{" "}
        <a href={signUpFormUrl} rel="noopener noreferrer" target="_blank">
          her
        </a>{" "}
        for å holde deg oppdatert, eller følg oss på{" "}
        <a href={instagramUrl} rel="noopener noreferrer" target="_blank">
          Instagram
        </a>
        , hvor vi jevnlig legger ut informasjon om pågående og kommende arrangementer.
      </>
    ),
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
              Du trenger ikke erfaring med rulleskøyter for å bli med i Oslo Roller Derby.
              Nybegynnerkurset vårt er for alle som har lyst til å prøve sporten, enten du drømmer
              om å spille kamper, bli dommer, bidra som funksjonær, eller bare vil finne et nytt
              fellesskap på hjul.
            </p>
            <p>
              Vi går gjennom grunnleggende skøyteferdigheter, trygghet på banen, regler og roller i
              sporten. Du får lære i ditt eget tempo sammen med trenere og klubbmedlemmer som husker
              veldig godt hvordan det var å være ny.
            </p>
            <a
              className={styles.primaryButton}
              href={signUpFormUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
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
          <a
            className={styles.secondaryButton}
            href={signUpFormUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Bli medlem
          </a>
        </div>
      </section>
    </div>
  );
}
