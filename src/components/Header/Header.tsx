import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/" aria-label="Oslo Roller Derby home">
        <Image
          className={styles.logo}
          src={assetPath("/images/rainbowlogo-transparent.png")}
          alt="Oslo Roller Derby"
          width={1955}
          height={1955}
          priority
        />
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        <Link href="/about">Om Oss</Link>
        <Link href="/join">Bli Med</Link>
      </nav>
    </header>
  );
}
