"use client";

import { useEffect, useRef, useState } from "react";
import { JokeBox } from "@/components/JokeBox/JokeBox";
import { RacoonFace } from "@/components/RacoonFace/RacoonFace";
import styles from "./JokesPage.module.scss";

const racoonTiles = Array.from({ length: 96 }, (_, index) => index);

export function JokesPage() {
  const [isLaughing, setIsLaughing] = useState(false);
  const laughTimeoutRef = useRef<number | null>(null);
  const laughFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (laughTimeoutRef.current) {
        window.clearTimeout(laughTimeoutRef.current);
      }

      if (laughFrameRef.current) {
        window.cancelAnimationFrame(laughFrameRef.current);
      }
    };
  }, []);

  function triggerRacoonLaugh() {
    if (laughTimeoutRef.current) {
      window.clearTimeout(laughTimeoutRef.current);
    }

    if (laughFrameRef.current) {
      window.cancelAnimationFrame(laughFrameRef.current);
    }

    setIsLaughing(false);
    laughFrameRef.current = window.requestAnimationFrame(() => {
      setIsLaughing(true);
      laughTimeoutRef.current = window.setTimeout(() => {
        setIsLaughing(false);
      }, 2800);
    });
  }

  return (
    <section className={styles.page} aria-label="Hidden jokes page">
      <h1 className={styles.srOnly}>Jokes</h1>
      <div
        className={`${styles.pattern} ${isLaughing ? styles.patternLaughing : ""}`}
        aria-hidden="true"
      >
        {racoonTiles.map((tile) => (
          <RacoonFace className={styles.racoonFace} key={tile} />
        ))}
      </div>
      <div className={styles.jokeShell}>
        <JokeBox onAnswerReveal={triggerRacoonLaugh} />
      </div>
    </section>
  );
}
