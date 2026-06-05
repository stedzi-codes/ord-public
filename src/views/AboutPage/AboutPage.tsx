import Image from "next/image";
import styles from "./AboutPage.module.scss";

const aboutSections = [
  {
    title: "Skating Officials",
    variant: "plain",
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
        src: "/images/penaltybox2.jpg",
        alt: "Officials at work",
      },
    ],
    paragraphs: [
      "Our skating officials are the backbone of every bout, ensuring fair play and safety on the track. These dedicated individuals undergo rigorous training to master the complex rules of roller derby and maintain the integrity of the game. From referees who make split-second calls during high-speed action to non-skating officials who track penalties and manage the scoreboard, each role is crucial to the sport.",
      "We're always looking for new officials to join our crew. Whether you want to skate as a referee or contribute as a non-skating official, we provide comprehensive training and mentorship. Being an official offers a unique perspective on the game and a vital role in our community.",
    ],
  },
  {
    title: "Players",
    variant: "callout",
    columns: 3,
    images: [
      {
        src: "/images/aboutPlayers.png",
        alt: "Roller derby players in action",
      },
      {
        src: "/images/prideord.jpg",
        alt: "Team playing together",
      },
      {
        src: "/images/deng.png",
        alt: "Player in motion",
      },
    ],
    paragraphs: [
      "The Oslo Tigers are fierce competitors who bring passion, skill, and determination to every bout. Our players range from seasoned athletes with years of derby experience to fresh meat just learning to skate. What unites us is our love for the sport and our commitment to teamwork. We train hard, play harder, and support each other both on and off the track.",
      "New to skating? No problem! We welcome players of all skill levels and provide the training you need to succeed. Our experienced skaters and coaches will help you develop your skills, build confidence, and find your place on the track. Whether you dream of being a jammer, blocker, or pivot, there's a position for you with the Tigers.",
    ],
  },
  {
    title: "Volunteers",
    variant: "plain",
    columns: 2,
    images: [
      {
        src: "/images/aboutVolunteers.png",
        alt: "Team volunteers",
      },
      {
        src: "/images/refsandnsos.jpg",
        alt: "Volunteers helping",
      },
    ],
    paragraphs: [
      "Behind every successful bout is an army of dedicated volunteers who make it all possible. From setting up the track and managing the door to running merch tables and coordinating events, our volunteers are essential to Oslo Roller Derby's success. They're the unsung heroes who work tirelessly to create an amazing experience for players and fans alike.",
      "Want to be part of the action without lacing up skates? We're always looking for enthusiastic volunteers to join our team. Whether you can commit to regular help or just want to pitch in at events, your contribution makes a real difference. Plus, it's a great way to meet people, learn about the sport, and become part of our tight-knit community.",
    ],
  },
];

export function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Oslo Roller Derby team">
        <Image
          className={styles.heroImage}
          src="/images/prideord.jpg"
          alt="Oslo Roller Derby team"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
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
                      src={image.src}
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
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
