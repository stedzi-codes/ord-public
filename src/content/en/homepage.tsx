import type { HomePageProps } from "@/views/HomePage/HomePage";
import { links } from "@/content/links";

export const homePageData = {
  heroTitle: {
    firstLine: "Rå",
    accentLine: "Inkluderende",
    lastLine: "Velorganiserte",
  },
  heroText: (
    <>
      Roller Derby is a full contact sport on roller skates, and we are the capital city&apos;s
      club. We have beginner courses and a place for everyone whether you want to be a player,
      official or volunteer.
      <br />
      <br />
      Join our community!
    </>
  ),
  heroButton: {
    href: links.signUpForm,
    text: "Join Us",
  },
  firstArticleTitle: "Oslo Roller Derby",
  firstArticleText: (
    <>
      Oslo Roller Derby club was founded in 19.10.2011 and has about 60 members divided into
      players, referees, non-skating officials (NSO/officials), and volunteers. ORD is a member of{" "}
      <a href="https://wftda.com/" rel="noopener noreferrer" target="_blank">
        Women&apos;s Flat Track Roller Derby Association
      </a>{" "}
      (WFTDA),{" "}
      <a href="https://www.idrettsforbundet.no/" rel="noopener noreferrer" target="_blank">
        Norges Idrettsforbund
      </a>{" "}
      and{" "}
      <a href="https://www.skoyteforbundet.no/" rel="noopener noreferrer" target="_blank">
        Norges Skøyteforbund.
      </a>
      <br />
      <br />
      Roller Derby is a contact sport on roller skates. On an oval, flat track, two teams compete to
      have the fastest jammer and the best blockers. Roller derby is a tough, demanding and
      exhilarating sport. It is as equally fun to watch as to play.
      <br />
      <br />
      ORD has two competitive teams; Oslo Roller Derby (A-team) and Tiger City Beasts (B-team). Both
      teams play matches and tournaments on both national and international level.
    </>
  ),
  secondArticleTitle: "Welcome to the track",
  secondArticleText:
    "Oslo Roller Derby welcomes all skill levels and backgrounds. Our training sessions focus on building fundamental skating skills, game strategy, and team camaraderie in a supportive environment. We train twice a week and compete in national and international tournaments throughout the year. Beyond the sport, we are a tight-knit community that values friendship, empowerment, and having fun. No previous skating experience is necessary – just bring your enthusiasm, and we will teach you the rest!",
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
      href: "https://www.wickedskates.com/",
    },
  ],
} satisfies HomePageProps;
