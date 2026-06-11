import type { HomePageProps } from "@/views/HomePage/HomePage";

export const homePageData = {
  heroText: (
    <>
      Roller Derby er en fullkontaktsport på rulleskøyter, og vi er hovedstadens klubb. Vi har
      nybegynnerkurs og en plass til alle. Om du vil være spiller, dommer med eller uten hjul.
      <br />
      <br />
      Bli med oss da vel!
    </>
  ),
  heroButton: {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfo_yl6a7eFS5-CxaAAfN3Y9EVAsY3uAS5Sa8h_uQxjjBhEXw/viewform",
    text: "Bli med oss!",
  },
  firstArticleTitle: "Oslo Roller Derby",
  firstArticleText: (
    <>
      Klubben Oslo Roller Derby ble stiftet 19.10.2011 og har ca 60 medlemmer fordelt på spillere,
      dommere, non-skating officials (NSO/funksjonærer), og frivillige. ORD er medlem av{" "}
      <a href="https://wftda.com/" rel="noopener noreferrer" target="_blank">
        Women&apos;s Flat Track Roller Derby Association
      </a>{" "}
      (WFTDA),{" "}
      <a href="https://www.idrettsforbundet.no/" rel="noopener noreferrer" target="_blank">
        Norges Idrettsforbund
      </a>{" "}
      og{" "}
      <a href="https://www.skoyteforbundet.no/" rel="noopener noreferrer" target="_blank">
        Norges Skøyteforbund.
      </a>
      <br />
      <br />
      Roller Derby er en kontaktsport på rulleskøyter. På en oval, flat bane kjemper to lag om å ha
      den kjappeste poengsankeren og de beste blokkerne. Roller derby er beinhard idrett og
      underholdning på en gang. Og det er nesten like moro å se på som det er å spille.
      <br />
      <br />
      ORD har to konkurrerende lag; Oslo Roller Derby (A-lag) og Tiger City Beasts (B-lag). Begge
      lag spiller kamper og turneringer på både nasjonalt og internasjonalt nivå.
    </>
  ),
  secondArticleTitle: "Bli med",
  secondArticleText:
    "Oslo Roller Derby ønsker alle ferdighetsnivåer og bakgrunner velkommen. Treningssesjonene våre fokuserer på å bygge grunnleggende skøyteferdigheter, spillstrategi og lagånd i et støttende miljø. Vi trener to ganger i uken og konkurrerer i nasjonale og internasjonale turneringer gjennom hele året. Utover sporten er vi et tett sammensveiset fellesskap som verdsetter vennskap, myndiggjøring og å ha det gøy. Ingen tidligere skøyterfaring er nødvendig – bare ta med entusiasmen din, så lærer vi deg resten!",
  logoSponsors: [
    {
      name: "Deng",
      image: "/images/deng.png",
      width: 486,
      height: 270,
      href: "https://www.deng.no/",
    },
    {
      name: "Wicked",
      image: "/images/wicked.png",
      width: 360,
      height: 217,
      href: "https://wickedskatewear.com/",
    },
  ],
} satisfies HomePageProps;
