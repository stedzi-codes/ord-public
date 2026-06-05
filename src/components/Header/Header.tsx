import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/" aria-label="Oslo Roller Derby home">
        <Image
          className={styles.logo}
          src="/images/ordLogo.svg"
          alt="Oslo Roller Derby"
          width={72}
          height={70}
          priority
        />
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        <Link href="/#about">About</Link>
        <Link href="/#join">Join</Link>
      </nav>
    </header>
  );
}
