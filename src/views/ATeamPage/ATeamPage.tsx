import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import styles from "./ATeamPage.module.scss";

const charterRoster = [
  { number: "108", name: "Kiki Longskates" },
  { number: "1312", name: "Pikante" },
  { number: "16", name: "Hell" },
  { number: "2", name: "Feline" },
  { number: "242", name: "Winter Wolf" },
  { number: "37", name: "Bosies" },
  { number: "412", name: "Raine Check" },
  { number: "42", name: "Panserbinna" },
  { number: "455", name: "Rosie the Ruiner" },
  { number: "46", name: "Darkmess" },
  { number: "51", name: "Ally McWheel" },
  { number: "59", name: "Katla Nightmar" },
  { number: "6", name: "Just Jeff" },
  { number: "64", name: "Jenny Vidi Vici" },
  { number: "73", name: "Hey Doodle" },
  { number: "79", name: "Torture" },
  { number: "82", name: "Bloody L" },
  { number: "911", name: "Moxie Fire" },
  { number: "933", name: "Killer Rosenkål" },
];

const rosterColumnBreak = Math.ceil(charterRoster.length / 2);
const rosterColumns = [
  charterRoster.slice(0, rosterColumnBreak),
  charterRoster.slice(rosterColumnBreak),
];

export function ATeamPage() {
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
          <p className={styles.eyebrow}>Oslo Roller Derby</p>
          <h1>A-laget</h1>
          <p className={styles.seasonLabel}>WFTDA Charter Spring 2026</p>

          <div className={styles.rosterCard}>
            <div className={styles.rosterColumns} aria-label="A-team roster">
              {rosterColumns.map((column, columnIndex) => (
                <ol
                  className={styles.rosterList}
                  key={`roster-column-${columnIndex}`}
                  start={columnIndex === 0 ? 1 : rosterColumnBreak + 1}
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
            src={assetPath("/images/teampicture.jpg")}
            alt="Oslo Roller Derby A-team group photo"
            fill
            sizes="(max-width: 900px) 100vw, 1120px"
          />
        </div>
      </section>
    </div>
  );
}
