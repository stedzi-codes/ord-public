import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <div className={styles.brandRow}>
          <span className={styles.brand}>Oslo Roller Derby</span>
          <span className={styles.divider} aria-hidden="true" />
          <span className={styles.established}>Est. 2011</span>
        </div>
        <p className={styles.copyright}>Copyright 2026 Oslo Roller Derby</p>
        <p>Made with ❤️ by Just Jeff 🤠</p>
      </div>

      <div className={styles.socialLinks}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF aria-hidden="true" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
