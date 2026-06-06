import type { Metadata } from "next";
import { JokesPage } from "@/views/JokesPage/JokesPage";

export const metadata: Metadata = {
  title: "Jokes | Oslo Roller Derby",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Jokes() {
  return <JokesPage />;
}
