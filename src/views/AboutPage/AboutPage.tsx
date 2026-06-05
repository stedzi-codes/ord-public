import Image from "next/image";
import styles from "./AboutPage.module.scss";

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
          <article className={styles.textBlock}>
            <h2>Our Story</h2>
            <p>
              Oslo Roller Derby was founded in 2010 by a group of passionate
              skaters who wanted to bring the excitement of roller derby to
              Norway&apos;s capital. What started as a small gathering of
              enthusiasts has grown into one of Scandinavia&apos;s most
              competitive and welcoming roller derby teams. We&apos;ve competed
              in tournaments across Europe, building a reputation for our fierce
              playing style and unwavering team spirit. Our team embodies the
              tiger - powerful, strategic, and ready to pounce on any
              opportunity.
            </p>
          </article>

          <article className={`${styles.calloutBlock} ${styles.calloutYellow}`}>
            <h2>Our Values</h2>
            <p>
              At Oslo Roller Derby, we believe in creating an inclusive
              environment where everyone can thrive. We&apos;re committed to
              fostering a culture of respect, empowerment, and mutual support.
              Our team is more than just athletes - we&apos;re a family. We
              celebrate diversity, encourage personal growth, and stand together
              both on and off the track. Whether you&apos;re here to compete at
              the highest level or simply want to be part of an amazing
              community, you&apos;ll find your place with us.
            </p>
          </article>

          <article className={styles.textBlock}>
            <h2>Training &amp; Competition</h2>
            <p>
              We train twice weekly at our home venue in Oslo, with sessions
              designed to accommodate all skill levels. Our experienced coaching
              staff provides personalized guidance to help each skater reach
              their potential. Throughout the season, we compete in both
              national Norwegian championships and international tournaments,
              facing teams from across Europe. Our competitive roster, known as
              the &quot;Oslo Tigers,&quot; has earned podium finishes in
              several major tournaments, while our recreational team offers a
              more relaxed environment for those focused on fun and fitness.
            </p>
          </article>

          <article className={`${styles.calloutBlock} ${styles.calloutOrange}`}>
            <h2>Community Impact</h2>
            <p>
              Beyond the track, Oslo Roller Derby is deeply committed to giving
              back to our community. We regularly host charity events,
              participate in local festivals, and run youth skating programs to
              introduce the next generation to our sport. We partner with local
              organizations to promote physical activity, mental health
              awareness, and social inclusion. Our annual &quot;Skate for a
              Cause&quot; event has raised thousands of kroner for various
              charities, proving that roller derby is about more than just the
              game - it&apos;s about making a positive impact.
            </p>
          </article>

          <article className={styles.textBlock}>
            <h2>Join Our Pack</h2>
            <p>
              Ready to become part of the Oslo Roller Derby family? We welcome
              new members year-round and provide all the equipment you need to
              get started. No skating experience is necessary - just bring your
              enthusiasm and willingness to learn. Contact us through our social
              media channels or come watch one of our practice sessions to see
              what we&apos;re all about. We can&apos;t wait to meet you and see
              you on the track. Remember: you don&apos;t have to be fierce to
              start, but you&apos;ll be fierce when you finish!
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
