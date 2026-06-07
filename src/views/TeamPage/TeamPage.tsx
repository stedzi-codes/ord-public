import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import styles from "./TeamPage.module.scss";

export type TeamRosterPlayer = {
  number: string;
  name: string;
};

export type TeamPageProps = {
  leagueTitle: string;
  teamTitle: string;
  teamLabel: string;
  roster: TeamRosterPlayer[];
  teamPhoto: {
    src: `/${string}`;
    alt: string;
  };
};

function splitRosterIntoColumns(roster: TeamRosterPlayer[]) {
  const columnBreak = Math.ceil(roster.length / 2);

  return {
    columnBreak,
    columns: [roster.slice(0, columnBreak), roster.slice(columnBreak)],
  };
}

export function TeamPage({
  leagueTitle,
  teamTitle,
  teamLabel,
  roster,
  teamPhoto,
}: TeamPageProps) {
  const { columnBreak, columns } = splitRosterIntoColumns(roster);

  return (
    <div className={styles.page}>
      <section className={styles.rosterSection}>
        <div className={styles.tigerFrame} aria-hidden="true">
          <Image
            className={styles.tiger}
            src={assetPath("/images/tiger.png")}
            alt=""
            width={742}
            height={884}
            priority
          />
        </div>

        <div className={styles.rosterContent}>
          <p className={styles.eyebrow}>{leagueTitle}</p>
          <h1>{teamTitle}</h1>
          <p className={styles.seasonLabel}>{teamLabel}</p>

          <div className={styles.rosterCard}>
            <div className={styles.rosterColumns} aria-label={`${teamTitle} roster`}>
              {columns.map((column, columnIndex) => (
                <ol
                  className={styles.rosterList}
                  key={`roster-column-${columnIndex}`}
                  start={columnIndex === 0 ? 1 : columnBreak + 1}
                >
                  {column.map((player) => (
                    <li key={`${player.number}-${player.name}`}>
                      <span className={styles.playerNumber}>{player.number}</span>
                      <span className={styles.playerName}>{player.name}</span>
                    </li>
                  ))}
                </ol>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.teamPhotoSection}>
        <div className={styles.teamPhotoFrame}>
          <Image
            className={styles.teamPhoto}
            src={assetPath(teamPhoto.src)}
            alt={teamPhoto.alt}
            fill
            sizes="(max-width: 900px) 100vw, 1120px"
          />
        </div>
      </section>
    </div>
  );
}
