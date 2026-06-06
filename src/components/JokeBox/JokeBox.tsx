"use client";

import { useState } from "react";
import styles from "./JokeBox.module.scss";

const jokes = [
  {
    question: "How much does a chimney cost?",
    answer: "Nothing, it's on the house.",
    revealButtonText: "Tell Me",
    nextButtonText: "Tell me another!",
  },
  {
    question: "How does Moses make coffee?",
    answer: "Hebrews it",
    revealButtonText: "How?",
    nextButtonText: "Tell me another!",
  },
  {
    question: "What do Japenese cannibals eat?",
    answer: "Ramen",
    revealButtonText: "What?",
    nextButtonText: "Tell me another!",
  },
    {
    question: "Did you know that if your canoe flips over in the water, you can wear it on your head?",
    answer: "Because then it's cap-sized!",
    revealButtonText: ". . .",
    nextButtonText: "Tell me another!",
  },
    {
    question: "What would a house wear to a party?",
    answer: "A dress!",
    revealButtonText: "What?",
    nextButtonText: "Tell me another!",
  },
    {
    question: "What did the beaver say when it slipped into the water?",
    answer: "What?",
    revealButtonText: "Damn it",
    nextButtonText: "Tell me another!",
  },
  {
    question: "How does a non-binary samuari kill people?",
    answer: "They/them",
    revealButtonText: "How?",
    nextButtonText: "Tell me another!",
  },

] as const;

const playableJokes = jokes.filter(
  (joke) => joke.question.trim() && joke.answer.trim(),
);

type JokeBoxProps = {
  onAnswerReveal?: () => void;
};

function getRandomJokeIndex(currentIndex: number) {
  if (playableJokes.length <= 1) {
    return 0;
  }

  const nextOffset = Math.floor(Math.random() * (playableJokes.length - 1)) + 1;
  return (currentIndex + nextOffset) % playableJokes.length;
}

export function JokeBox({ onAnswerReveal }: JokeBoxProps) {
  const [activeJokeIndex, setActiveJokeIndex] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const activeJoke = playableJokes[activeJokeIndex];

  function handleButtonClick() {
    if (!isAnswerVisible) {
      setIsAnswerVisible(true);
      onAnswerReveal?.();
      return;
    }

    setActiveJokeIndex(getRandomJokeIndex);
    setIsAnswerVisible(false);
  }

  return (
    <article className={styles.box}>
      <p className={styles.jokeText} aria-live="polite">
        {isAnswerVisible ? activeJoke.answer : activeJoke.question}
      </p>
      <button className={styles.button} type="button" onClick={handleButtonClick}>
        {isAnswerVisible
          ? activeJoke.nextButtonText
          : activeJoke.revealButtonText}
      </button>
    </article>
  );
}
