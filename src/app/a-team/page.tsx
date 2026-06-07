import type { Metadata } from "next";
import { TeamPage } from "@/views/TeamPage/TeamPage";

export const metadata: Metadata = {
  title: "A-team | Oslo Roller Derby",
  description: "A-team page for Oslo Roller Derby.",
};

const aTeamRoster = [
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

export default function ATeam() {
  return (
    <TeamPage
      leagueTitle="Oslo Roller Derby"
      teamTitle="WFTDA Charter"
      teamLabel="A-laget Spring Roster 2026"
      roster={aTeamRoster}
      teamPhoto={{
        src: "/images/teampicture.jpg",
        alt: "Oslo Roller Derby A-team group photo",
      }}
    />
  );
}
