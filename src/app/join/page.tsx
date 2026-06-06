import type { Metadata } from "next";
import { JoinPage } from "@/views/JoinPage/JoinPage";

export const metadata: Metadata = {
  title: "Join | Oslo Roller Derby",
  description: "Join Oslo Roller Derby.",
};

export default function Join() {
  return <JoinPage />;
}
