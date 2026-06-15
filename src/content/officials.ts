import type { TeamPageProps } from "@/views/TeamPage/TeamPage";

export const officialsData = {
  leagueTitle: "Oslo Roller Derby",
  teamTitle: "Officials",
  teamLabel: "Zebra Crew 2026",
  variant: "officials",
  mascot: {
    src: "/images/ord_zebra.png",
    alt: "",
    width: 800,
    height: 770,
  },
  teamPhoto: {
    src: "/images/zebras.jpg",
    alt: "Oslo Roller Derby officials crew",
  },
  roster: [
    { name: "Boolean" },
    { name: "Buzzkill" },
    { name: "Denial" },
    { name: "Kalle" },
    { name: "Ref'Irene" },
    { name: "Refraction" },
    { name: "Stefferee" },
  ],
} satisfies TeamPageProps;
