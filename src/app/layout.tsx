import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import favicon from "./favicon.png";
import "@/styles/tokens.css";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leeydia's Floating Island",
  description:
    "An interactive 2.5D portfolio exploring Leeydia Lau's work, experiences, and curiosity.",
  icons: {
    icon: {
      url: favicon.src,
      type: "image/png",
      sizes: "512x512",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
