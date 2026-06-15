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
    eventTitle: "Panel: Finding your body",
    eventDate: "Tirsdag 23. juni",
    eventTime: "Kl. 15:30",
    tags: ["pride", "panel"],
    link: {
      href: "https://www.oslopride.no/events/ph26-findingyourbody",
      title: "Pride House",
    },
  },
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
    eventTitle: "Clinic with Abi Black and Penny Block (Rainy City)",
    eventDate: "Lørdag 5 - søndag 6. september",
    eventTime: "Kl. 10:00 - 17:00",
    tags: ["bootcamp", "trening"],
    link: {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdxTTRBRw-O_TQ1J1AFADqZ3d2nZBzXbH7YD-fLq1TKb2fnsw/viewform?usp=send_form",
      title: "Apalløkka flerbrukshall",
    },
  },
];
