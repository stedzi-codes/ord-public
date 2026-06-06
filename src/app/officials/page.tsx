import type { Metadata } from "next";
import { UnderConstructionSection } from "@/components/UnderConstructionSection/UnderConstructionSection";

export const metadata: Metadata = {
  title: "Officials | Oslo Roller Derby",
  description: "Officials page for Oslo Roller Derby.",
};

export default function Officials() {
  return (
    <UnderConstructionSection
      eyebrow="Oslo Roller Derby"
      title="Officials"
      body={[
        "Denne siden er under arbeid. Snart finner du mer informasjon om dommere, NSO-er og hvordan du kan bli med i funksjonærcrewet.",
      ]}
      image={{ priority: true }}
    />
  );
}
