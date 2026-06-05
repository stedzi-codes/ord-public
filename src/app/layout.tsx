import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Oslo Roller Derby",
  description: "Static website for Oslo Roller Derby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="site-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
