import type { Metadata } from "next";
import { officialsData } from "@/content/officials";
import { TeamPage } from "@/views/TeamPage/TeamPage";

export const metadata: Metadata = {
  title: "Officials | Oslo Roller Derby",
  description: "Officials page for Oslo Roller Derby.",
};

export default function Officials() {
  return <TeamPage {...officialsData} />;
}
