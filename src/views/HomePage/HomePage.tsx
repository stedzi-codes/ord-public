import Image from "next/image";
import styles from "./HomePage.module.scss";

const logoSponsors = [
  {
    name: "Deng",
    image: "/images/deng.png",
    width: 486,
    height: 270,
    href: "https://example.com",
  },
  {
    name: "Wicked",
    image: "/images/wicked.png",
    width: 360,
    height: 217,
  },
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
            {logoSponsors.map((sponsor) => {
              const sponsorContent = (
                <Image
                  className={styles.sponsorLogo}
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              );

              return sponsor.href ? (
                <a
                  className={styles.sponsorCard}
                  href={sponsor.href}
                  key={sponsor.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.name}`}
                >
                  {sponsorContent}
                </a>
              ) : (
                <div className={styles.sponsorCard} key={sponsor.name}>
                  {sponsorContent}
                </div>
              );
            })}

            <div className={`${styles.sponsorCard} ${styles.grasrotCard}`}>
              <Image
                className={styles.grasrotImage}
                src="/images/grasrot.png"
                alt="Grasrotandelen QR code"
                width={115}
                height={123}
              />
              <div className={styles.sponsorText}>
                <h3>Support us with your grasrotandel</h3>
                <p>
                  You can donate through all Norsk Tippings channels by sending
                  an SMS to &quot;Grasrotandelen 997500000&quot; to 60000
                </p>
              </div>
            </div>

            <div className={`${styles.sponsorCard} ${styles.textSponsorCard}`}>
              <div className={styles.sponsorText}>
                <h3>Do you want to be a sponsor?</h3>
                <p>
                  If you wish to support the club and get your logo out for our
                  events then send an email to{" "}
                  <a href="mailto:spons@oslorollerderby.no">
                    spons@oslorollerderby.no
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
