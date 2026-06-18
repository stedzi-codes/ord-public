import type { Metadata } from "next";
import { aboutPageData } from "@/content/en/aboutpage";
import { AboutPage } from "@/views/AboutPage/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Oslo Roller Derby",
  description: "Learn about Oslo Roller Derby, our story, values, and community.",
};

export default function About() {
  return <AboutPage {...aboutPageData} />;
}
