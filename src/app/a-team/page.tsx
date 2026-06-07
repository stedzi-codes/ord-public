import type { Metadata } from "next";
import { ATeamPage } from "@/views/ATeamPage/ATeamPage";

export const metadata: Metadata = {
  title: "A-team | Oslo Roller Derby",
  description: "A-team page for Oslo Roller Derby.",
};

export default function ATeam() {
  return <ATeamPage />;
}
