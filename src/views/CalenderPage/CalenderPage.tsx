import type { CSSProperties } from "react";
import { EventCard } from "@/components/EventCard/EventCard";
import { events } from "@/content/events";
import { assetPath } from "@/lib/assetPath";
import styles from "./CalenderPage.module.scss";

export function CalenderPage() {
  const pageStyle = {
    "--calendar-stripes-image": `url("${assetPath("/images/tigerstriper.png")}")`,
  } as CSSProperties;

  return (
    <div className={styles.page} style={pageStyle}>
      <main className={styles.content}>
        <h1 className={styles.title}>Kalender</h1>

        <div className={styles.eventList}>
          {events.map((event) => (
            <EventCard event={event} key={`${event.eventDate}-${event.eventTitle}`} />
          ))}
        </div>
      </main>
    </div>
  );
}
