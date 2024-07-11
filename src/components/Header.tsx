import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Tg from "../public/telegram-icon.png";
import Mail from "../public/mail-icon.jpg";
import Git from "../public/github-icon.png";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftLinks}>
          <Link href="/" passHref>
            <a className={styles.logo}>
              <span className={styles.innopolis}>Innopolis</span>{" "}
              <span className={styles.university}>University</span>
            </a>
          </Link>
          <Link href="/comic" passHref>
            <a className={styles.comicLink}>XKCD Comic</a>
          </Link>
        </div>
        <nav>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="mailto:v.galkin@innopolis.university"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Mail} alt="Mail" width="24" height="24" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/legend_ku"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Tg} alt="Telegram" width="24" height="24" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/LegendIU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={Git} alt="GitHub" width="24" height="24" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
