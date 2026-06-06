import Image from "next/image";
import styles from "./JoinPage.module.scss";

export function JoinPage() {
  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Oslo Roller Derby</p>
        <h1>Under konstruksjon</h1>
        <p className={styles.copy}>
          Denne siden er på vei. Snart finner du informasjon om nybegynnerkurs,
          treninger og hvordan du kan bli med i tigerflokken.
        </p>
      </div>

      <div className={styles.tigerFrame} aria-hidden="true">
        <Image
          className={styles.tiger}
          src="/images/tiger.png"
          alt=""
          width={742}
          height={884}
          priority
        />
      </div>
    </section>
  );
}
