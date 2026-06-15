"use client";

import Image from "next/image";
import Link from "next/link";
import type { FocusEvent } from "react";
import { useState } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./Header.module.scss";

export function Header() {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isJoinMenuOpen, setIsJoinMenuOpen] = useState(false);

  function closeMenu() {
    setIsAboutMenuOpen(false);
    setIsJoinMenuOpen(false);
  }

  function handleMenuBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeMenu();
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
          className={`${styles.navItem} ${isAboutMenuOpen ? styles.navItemOpen : ""}`}
          onBlur={handleMenuBlur}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") {
              setIsAboutMenuOpen(true);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") {
              closeMenu();
            }
          }}
        >
          <button
            className={styles.navLink}
            type="button"
            aria-expanded={isAboutMenuOpen}
            aria-haspopup="true"
            onClick={() => setIsAboutMenuOpen((isOpen) => !isOpen)}
          >
            Om Oss
          </button>
          <div
            className={styles.dropdownMenu}
            aria-hidden={!isAboutMenuOpen}
            aria-label="Om oss sider"
          >
            <Link href="/about" onClick={closeMenu}>
              Om klubben
            </Link>
            <Link href="/a-team" onClick={closeMenu}>
              A-team
            </Link>
            <Link href="/b-team" onClick={closeMenu}>
              B-team
            </Link>
            <Link href="/officials" onClick={closeMenu}>
              Officials
            </Link>
          </div>
        </div>
        <div></div>
        <div
          className={`${styles.navItem} ${isJoinMenuOpen ? styles.navItemOpen : ""}`}
          onBlur={handleMenuBlur}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") {
              setIsJoinMenuOpen(true);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") {
              closeMenu();
            }
          }}
        >
          <button
            className={styles.navLink}
            type="button"
            aria-expanded={isJoinMenuOpen}
            aria-haspopup="true"
            onClick={() => setIsJoinMenuOpen((isOpen) => !isOpen)}
          >
            Bli Med
          </button>
          <div
            className={styles.dropdownMenu}
            aria-hidden={!isJoinMenuOpen}
            aria-label="Bli med sider"
          >
            <Link className={styles.navLink} href="/join" onClick={closeMenu}>
              Bli Med
            </Link>
            <Link className={styles.navLink} href="/calender" onClick={closeMenu}>
              Kalender
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
