export type EventData = {
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  tags: string[];
  link?: {
    href: string;
    title: string;
  };
};

export const events: EventData[] = [
  {
    eventTitle: "ORD at Pride Park",
    eventDate: "Onsdag 24. juni",
    eventTime: "Kl. 19:00 - 21:00",
    tags: ["pride"],
    link: {
      href: "https://www.oslopride.no/events/roller",
      title: "Pride Park",
    },
  },
  {
    eventTitle: "Pride Parade",
    eventDate: "Lørdag 27. juni",
    eventTime: "Kl. 11:00",
    tags: ["pride"],
    link: {
      href: "https://www.oslopride.no/p/prideparade",
      title: "Pride Parade",
    },
  },
  {
    eventTitle: "Open training",
    eventDate: "Torsdag 3. september",
    eventTime: "Kl. 20:00",
    tags: ["open-training", "recruitment"],
    link: {
      href: "https://linktr.ee/oslorollerderby",
      title: "Apalløkka flerbrukshall",
    },
  },
  {
    eventTitle: "Clinic with Abi Black and Penny Block (Rainy City)",
    eventDate: "Lørdag 5 - søndag 6. september",
    eventTime: "Kl. 10:00 - 17:00",
    tags: ["bootcamp", "trening"],
    link: {
      href: "https://billetto.no/e/season-kickoff-clinic-with-abi-black-penny-block-billetter-1953063",
      title: "Apalløkka flerbrukshall",
    },
  },
];
