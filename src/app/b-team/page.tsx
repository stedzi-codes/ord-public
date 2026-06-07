import type { Metadata } from "next";
import { TeamPage } from "@/views/TeamPage/TeamPage";

export const metadata: Metadata = {
  title: "B-team | Oslo Roller Derby",
  description: "B-team page for Oslo Roller Derby.",
};

const bTeamRoster = [
  { number: "0", name: "Ninni" },
  { number: "1", name: "Toget" },
  { number: "10", name: "Mighty Tor" },
  { number: "16", name: "Hell" },
  { number: "21", name: "Miss Chief" },
  { number: "222", name: "Good Run" },
  { number: "412", name: "Raine Check" },
  { number: "5", name: "Princess" },
  { number: "51", name: "Ally McWheel" },
  { number: "64", name: "Jenny Vidi Vici" },
  { number: "830", name: "Pondscum" },
  { number: "84", name: "Creek" },
  { number: "9", name: "Lola Pistola" },
  { number: "99", name: "Zigzag" },
  { number: "942", name: "Nightmaier" },
  
];

export default function BTeam() {
  return (
    <TeamPage
      leagueTitle="Oslo Roller Derby"
      teamTitle="Tiger City Beasts"
      teamLabel="B-laget Spring Roster 2026"
      roster={bTeamRoster}
      teamPhoto={{
        src: "/images/bteamgroup.jpeg",
        alt: "Oslo Roller Derby B-team group photo",
      }}
    />
  );
}
