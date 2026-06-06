import type { Metadata } from "next";
import { JoinPage } from "@/views/JoinPage/JoinPage";

export const metadata: Metadata = {
  title: "Bli Med | Oslo Roller Derby",
  description: "Finn ut hvordan du kan bli med i Oslo Roller Derby.",
};

export default function Join() {
  return <JoinPage />;
}
