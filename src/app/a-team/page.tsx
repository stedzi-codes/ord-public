import type { Metadata } from "next";
import { aTeamData } from "@/app/content/teams";
import { TeamPage } from "@/views/TeamPage/TeamPage";

export const metadata: Metadata = {
  title: "A-team | Oslo Roller Derby",
  description: "A-team page for Oslo Roller Derby.",
};

export default function ATeam() {
  return <TeamPage {...aTeamData} />;
}
