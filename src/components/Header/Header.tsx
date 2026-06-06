"use client";

import Image from "next/image";
import Link from "next/link";
import type { FocusEvent } from "react";
import { useState } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./Header.module.scss";

export function Header() {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  function closeAboutMenu() {
    setIsAboutMenuOpen(false);
  }

  function handleAboutMenuBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeAboutMenu();
    }
  }

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
        <div
          className={`${styles.navItem} ${
            isAboutMenuOpen ? styles.navItemOpen : ""
          }`}
          onBlur={handleAboutMenuBlur}
          onFocus={() => setIsAboutMenuOpen(true)}
          onMouseEnter={() => setIsAboutMenuOpen(true)}
          onMouseLeave={closeAboutMenu}
        >
          <Link
            className={styles.navLink}
            href="/about"
            aria-expanded={isAboutMenuOpen}
            aria-haspopup="true"
            onClick={closeAboutMenu}
          >
            Om Oss
          </Link>
          <div
            className={styles.dropdownMenu}
            aria-hidden={!isAboutMenuOpen}
            aria-label="Om oss sider"
          >
            <Link href="/about" onClick={closeAboutMenu}>
              Om klubben
            </Link>
            <Link href="/a-team" onClick={closeAboutMenu}>
              A-team
            </Link>
            <Link href="/b-team" onClick={closeAboutMenu}>
              B-team
            </Link>
            <Link href="/officials" onClick={closeAboutMenu}>
              Officials
            </Link>
          </div>
        </div>
        <Link className={styles.navLink} href="/join">Bli Med</Link>
      </nav>
    </header>
  );
}
