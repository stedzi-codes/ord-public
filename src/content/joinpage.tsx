import { links } from "@/content/links";
import type { JoinPageProps } from "@/views/JoinPage/JoinPage";

export const joinPageData = {
  heroTitle: "Finn din plass på banen",
  heroSubtitle: "Bli med",
  introSubtitle: "Nybegynnerkurs",
  introTitle: "Start din derbyreise",
  introText: (
    <>
      <p>
        Du trenger ikke erfaring med rulleskøyter for å bli med i Oslo Roller Derby.
        Nybegynnerkurset vårt er for alle som har lyst til å prøve sporten, enten du drømmer om å
        spille kamper, bli dommer, bidra som funksjonær, eller bare vil finne et nytt fellesskap på
        hjul.
      </p>
      <p>
        Vi går gjennom grunnleggende skøyteferdigheter, trygghet på banen, regler og roller i
        sporten. Du får lære i ditt eget tempo sammen med trenere og klubbmedlemmer som husker
        veldig godt hvordan det var å være ny.
      </p>
    </>
  ),
  introCtaButtonText: "Meld deg på",
  faqTitle: "Ofte stilte spørsmål",
  faqSubtitle: "Spørsmål og svar",
  faqs: [
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
          Det neste nybegynnerkurset vil sannsynligvis starte i september. Meld deg på e-postlisten
          vår{" "}
          <a href={links.signUpForm} rel="noopener noreferrer" target="_blank">
            her
          </a>{" "}
          for å holde deg oppdatert, eller følg oss på{" "}
          <a href={links.instagram} rel="noopener noreferrer" target="_blank">
            Instagram
          </a>
          , hvor vi jevnlig legger ut informasjon om pågående og kommende arrangementer.
        </>
      ),
    },
  ],
  finalCtaTitle: "Vil du bli en av oss, eller bare lære deg å stå på rulleskøyter?",
  finalCtaButtonText: "Bli medlem",
} satisfies JoinPageProps;
