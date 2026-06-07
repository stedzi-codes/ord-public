import type { Metadata } from "next";
import { bTeamData } from "@/app/content/teams";
import { TeamPage } from "@/views/TeamPage/TeamPage";

export const metadata: Metadata = {
  title: "B-team | Oslo Roller Derby",
  description: "B-team page for Oslo Roller Derby.",
};

export default function BTeam() {
  return <TeamPage {...bTeamData} />;
}
