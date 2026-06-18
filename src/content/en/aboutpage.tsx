import type { AboutPageProps } from "@/views/AboutPage/AboutPage";

export const aboutPageData = {
  heroTitle: "More than just a fitness club",
  heroText: (
    <>
      <p>
        Our club consists of roller derby players, referees, officials and other volunteers. There
        are a lot of roles to fill when it comes to putting on a roller derby game! We have
        beginner&apos;s courses for those that are new and want to learn how to skate. There you
        will learn about the sport, in addition to skating skills, and you can decide later if you
        would like to become a player or a referee. Typically, our beginner course starts once in
        the fall and spring.
      </p>
      <p>
        Do you want to be a volunteer or official without skating? Read more about the NSO role
        below!
      </p>
    </>
  ),
  aboutSections: [
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
        "Our referees and NSOs are an important part of the crew that makes roller derby possible. The referees are on roller skates and have control over the rules of the game, scorekeeping and making sure the games are conducted according to WFTDA rules and guidelines. As a referee you need mostly the same equipment as the players, but you do not need a mouthguard, and inline skates are also allowed.",
        "NSO stands for Non-Skating Official, and as the name implies, our NSOs work without roller skates. They do a crucial job during games and scrimmages by starting and stopping jams and periods, noting points, timing the penalty box, keeping track of which players are on the track, and other crucial details that keep the game flowing.",
        <>
          As a referee or NSO you get a unique insight into roller derby as a sport, and you become
          an important part of the community around the team. Without officials there is no roller
          derby. Oslo Roller Derby is always looking for more referees and NSOs, whether you can
          already skate or want to contribute without skates. If you want to become a referee, NSO,
          or just want to know more, you can contact us at{" "}
          <a href="https://example.com">info@oslorollerderby.no</a>
        </>,
      ],
    },
    {
      title: "Players",
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
        "Roller derby is a physically demanding sport combined with strategy and teamwork. By joining our new beginner's course, you will learn the basic skating and game skills necessary to play roller derby.",
        "Our training is structured to be flexible and inclusive so that progression can vary and is up to the individual. Our tips on how to accelerate your derby career, no matter what the level, is to make it to as many trainings as possible.",
      ],
    },
    {
      title: "Volunteers",
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
        "There are many different roles to fill when arranging a roller derby game. We deeply appreciate all of our volunteers who put in their time to make these games possible. We have track ninjas that reapply tape to the track during games, announcers, people working the merch and ticket stands, photographers and more.",
      ],
    },
  ],
} satisfies AboutPageProps;
