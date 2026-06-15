import type { Metadata } from "next";
import { CalenderPage } from "@/views/CalenderPage/CalenderPage";

export const metadata: Metadata = {
  title: "Kalender | Oslo Roller Derby",
  description: "Kalender side for Oslo Roller Derby.",
};

export default function Calender() {
  return <CalenderPage />;
}
