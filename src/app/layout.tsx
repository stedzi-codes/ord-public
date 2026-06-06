import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "./globals.scss";

const oswald = localFont({
  src: [
    { path: "./fonts/oswald-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/oswald-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/oswald-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/oswald-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

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
    <html lang="en" className={oswald.variable}>
      <body suppressHydrationWarning>
        <Header />
        <main className="site-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
