import styles from "./HomePage.module.scss";

const sponsorPlaceholders = [
  "Sponsor Logo 1",
  "Sponsor Logo 2",
  "Sponsor Logo 3",
  "Sponsor Logo 4",
];

export function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            RÅ
            <br />
            <span>INKLUDERENDE</span>
            <br />
            VELORGANISERTE
          </h1>

          <div className={styles.heroFooter}>
            <p className={styles.heroText}>
              Norway&apos;s capital city&apos;s premier roller derby team.
              Whether you&apos;re a complete beginner or an experienced skater,
              everyone is welcome to join our fierce and friendly community.
              Come skate with the tigers!
            </p>
            <a className={styles.primaryButton} href="#join">
              Join The Team
            </a>
          </div>
        </div>
      </section>

      <section className={styles.infoSection} id="about">
        <div className={styles.infoContent}>
          <article className={`${styles.infoBlock} ${styles.infoBlockOrange}`}>
            <h2>Oslo Roller Derby</h2>
            <p>
              Roller derby is a high-energy, full-contact sport played on quad
              roller skates. Two teams race around a track, with each
              team&apos;s &quot;jammer&quot; trying to lap members of the
              opposing team to score points. It&apos;s a strategic, fast-paced
              game that requires athleticism, teamwork, and determination.
              Founded in the early 2000s, modern roller derby has grown into a
              global phenomenon with thousands of teams worldwide, emphasizing
              inclusivity, athleticism, and community spirit.
            </p>
          </article>

          <article
            className={`${styles.infoBlock} ${styles.infoBlockYellow}`}
            id="join"
          >
            <h2>Join Us</h2>
            <p>
              Oslo Roller Derby welcomes all skill levels and backgrounds. Our
              training sessions focus on building skating fundamentals, game
              strategy, and team cohesion in a supportive environment. We
              practice twice a week and compete in national and international
              tournaments throughout the year. Beyond the sport, we&apos;re a
              tight-knit community that values friendship, empowerment, and
              having fun. No prior skating experience is required - just bring
              your enthusiasm and we&apos;ll teach you the rest!
            </p>
          </article>
        </div>
      </section>

      <section className={styles.sponsorsSection} id="sponsors">
        <div className={styles.sponsorsContent}>
          <h2>Our Sponsors</h2>
          <div className={styles.sponsorGrid}>
            {sponsorPlaceholders.map((sponsor) => (
              <div className={styles.sponsorCard} key={sponsor}>
                <span>{sponsor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
