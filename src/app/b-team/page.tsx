import type { Metadata } from "next";
import { UnderConstructionSection } from "@/components/UnderConstructionSection/UnderConstructionSection";

export const metadata: Metadata = {
  title: "B-team | Oslo Roller Derby",
  description: "B-team page for Oslo Roller Derby.",
};

export default function BTeam() {
  return (
    <UnderConstructionSection
      eyebrow="Oslo Roller Derby"
      title="B-laget"
      body={[
        "Denne siden er under arbeid. Snart finner du mer informasjon om B-teamet, kamper og hvordan laget jobber.",
      ]}
      image={{ priority: true }}
    />
  );
}
