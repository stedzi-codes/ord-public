import Link from "next/link";
import type { EventData } from "@/content/events";
import styles from "./EventCard.module.scss";

type EventCardProps = {
  event: EventData;
};

function formatTagLabel(tag: string) {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}

export function EventCard({ event }: EventCardProps) {
  const cardContent = (
    <>
      <div className={styles.meta}>
        <span>{event.eventDate}</span>
        <span>{event.eventTime}</span>
        {event.link ? <span className={styles.link}>{event.link.title}</span> : null}
      </div>

      <h2>{event.eventTitle}</h2>

      <div className={styles.footer}>
        <ul className={styles.tags} aria-label="Event tags">
          {event.tags.map((tag) => (
            <li key={tag}>{formatTagLabel(tag)}</li>
          ))}
        </ul>
      </div>
    </>
  );

  if (!event.link) {
    return <article className={styles.card}>{cardContent}</article>;
  }

  if (event.link.href.startsWith("http")) {
    return (
      <a
        aria-label={`${event.eventTitle}: ${event.link.title}`}
        className={styles.card}
        href={event.link.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      aria-label={`${event.eventTitle}: ${event.link.title}`}
      className={styles.card}
      href={event.link.href}
    >
      {cardContent}
    </Link>
  );
}
