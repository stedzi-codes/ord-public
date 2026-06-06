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
              Roller Derby er en fullkontaktsport på rulleskjøyter, og vi er hovedstadens klubb. 
              Vi har nybegynnerskurs og en plass til alle. Om du vil væare spiller, dommer med eller
              uten hjul.<br/><br/>
              Bli med oss da vel!
            </p>
            <a className={styles.primaryButton} href="#join">
              Bli med oss!
            </a>
          </div>
        </div>
      </section>

      <section className={styles.infoSection} id="about">
        <div className={styles.infoContent}>
          <article className={`${styles.infoBlock} ${styles.infoBlockOrange}`}>
            <h2>Oslo Roller Derby</h2>
            <p>
              Klubben Oslo Roller Derby ble stiftet 19.10.2011 og har ca 60 medlemmer fordelt på spillere,
              dommere, non-skating officials (NSO/funksjonærer), og frivillige. ORD er medlem av Women&apos;s Flat Track Roller Derby Association (WFTDA),
              Norges Idrettsforbund og Norges Skøyteforbund.<br/><br/>

              Roller Derby er en kontaktsport på rulleskøyter. På en oval, flat bane kjemper to lag om å ha den kjappeste poengsankeren og de beste blokkerne. Roller derby er beinhard idrett og underholdning på en gang. Og det er nesten like moro å se på som det er å spille.<br/><br/>

              ORD har to konkurrerende lag; Oslo Roller Derby (A-lag) og Tiger City Beasts (B-lag). Begge lag spiller kamper og turneringer på både nasjonalt og internasjonalt nivå.


            </p>
          </article>

          <div
            className={styles.teamPhotoFrame}
            aria-label="Oslo Roller Derby team photo"
          >
            <Image
              className={styles.teamPhoto}
              src="/images/teampicture.jpg"
              alt="Oslo Roller Derby team"
              width={2500}
              height={1877}
              sizes="(max-width: 640px) 100vw, 896px"
            />
          </div>

          <article
            className={`${styles.infoBlock} ${styles.infoBlockYellow}`}
            id="join"
          >
            <h2>Bli med</h2>
            <p>
                Oslo Roller Derby ønsker alle ferdighetsnivåer og bakgrunner velkommen. Treningssesjonene våre fokuserer på å bygge grunnleggende skøyteferdigheter, spillstrategi og lagånd i et støttende miljø. Vi trener to ganger i uken og konkurrerer i nasjonale og internasjonale turneringer gjennom hele året. Utover sporten er vi et tett sammensveiset fellesskap som verdsetter vennskap, myndiggjøring og å ha det gøy. Ingen tidligere skøyterfaring er nødvendig – bare ta med entusiasmen din, så lærer vi deg resten!
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
