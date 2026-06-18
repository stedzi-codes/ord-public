"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FocusEvent } from "react";
import { useState } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./Header.module.scss";

const englishReadyRoutes = new Set(["/", "/about", "/a-team", "/b-team", "/officials"]);

function localizeHref(href: string, isEnglishPage: boolean) {
  if (!isEnglishPage) {
    return href;
  }

  return englishReadyRoutes.has(href) ? (href === "/" ? "/en" : `/en${href}`) : href;
}

function normalizePathname(pathname: string) {
  if (pathname.length <= 1) {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function getLanguageSwitchHref(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);
  const isEnglishPage =
    normalizedPathname === "/en" || normalizedPathname.startsWith("/en/");
  const pathWithoutLocale = isEnglishPage
    ? normalizePathname(normalizedPathname.replace(/^\/en/, "") || "/")
    : normalizedPathname;

  if (isEnglishPage) {
    return pathWithoutLocale;
  }

  if (englishReadyRoutes.has(pathWithoutLocale)) {
    return pathWithoutLocale === "/" ? "/en" : `/en${pathWithoutLocale}`;
  }

  return "/en";
}

export function Header() {
  const pathname = usePathname();
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isJoinMenuOpen, setIsJoinMenuOpen] = useState(false);
  const normalizedPathname = normalizePathname(pathname);
  const isEnglishPage =
    normalizedPathname === "/en" || normalizedPathname.startsWith("/en/");
  const languageSwitchHref = getLanguageSwitchHref(pathname);
  const languageSwitchLabel = isEnglishPage ? "NO" : "EN";
  const navLabels = isEnglishPage
    ? {
        about: "About",
        aboutClub: "About ORD",
        join: "Join",
        calendar: "Calendar",
      }
    : {
        about: "Om Oss",
        aboutClub: "Om klubben",
        join: "Bli Med",
        calendar: "Kalender",
      };

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
      <Link
        className={styles.logoLink}
        href={isEnglishPage ? "/en" : "/"}
        aria-label="Oslo Roller Derby home"
      >
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
            {navLabels.about}
          </button>
          <div
            className={styles.dropdownMenu}
            aria-hidden={!isAboutMenuOpen}
            aria-label="Om oss sider"
          >
            <Link href={localizeHref("/about", isEnglishPage)} onClick={closeMenu}>
              {navLabels.aboutClub}
            </Link>
            <Link href={localizeHref("/a-team", isEnglishPage)} onClick={closeMenu}>
              A-team
            </Link>
            <Link href={localizeHref("/b-team", isEnglishPage)} onClick={closeMenu}>
              B-team
            </Link>
            <Link href={localizeHref("/officials", isEnglishPage)} onClick={closeMenu}>
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
            {navLabels.join}
          </button>
          <div
            className={styles.dropdownMenu}
            aria-hidden={!isJoinMenuOpen}
            aria-label="Bli med sider"
          >
            <Link
              className={styles.navLink}
              href={localizeHref("/join", isEnglishPage)}
              onClick={closeMenu}
            >
              {navLabels.join}
            </Link>
            <Link
              className={styles.navLink}
              href={localizeHref("/calender", isEnglishPage)}
              onClick={closeMenu}
            >
              {navLabels.calendar}
            </Link>
          </div>
        </div>

        <Link
          className={styles.languageLink}
          href={languageSwitchHref}
          aria-label={`Switch language to ${isEnglishPage ? "Norwegian" : "English"}`}
          onClick={closeMenu}
        >
          {languageSwitchLabel}
        </Link>
      </nav>
    </header>
  );
}
