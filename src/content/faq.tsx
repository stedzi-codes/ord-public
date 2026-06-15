import type { ReactNode } from "react";
import { links } from "@/content/links";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export const faqs: FaqItem[] = [
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
];
