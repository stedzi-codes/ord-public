import type { Metadata } from "next";
import { UnderConstructionSection } from "@/components/UnderConstructionSection/UnderConstructionSection";

export const metadata: Metadata = {
  title: "A-team | Oslo Roller Derby",
  description: "A-team page for Oslo Roller Derby.",
};

export default function ATeam() {
  return (
    <UnderConstructionSection
      eyebrow="Oslo Roller Derby"
      title="A-laget"
      body={[
        "Denne siden er under arbeid. Snart finner du mer informasjon om A-teamet, kamper og spillerne våre.",
      ]}
      image={{ priority: true }}
    />
  );
}
