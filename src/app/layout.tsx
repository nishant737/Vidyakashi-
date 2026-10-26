import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Splash from "@/components/Splash";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const description =
  "Find the best schools and colleges in Karnataka — top high schools like Alva's English Medium High School, Moodbidri, II PUC 2026 toppers, PU and degree colleges, and events like Alva's Nudisiri.";

export const metadata: Metadata = {
  title: "Best Schools & Colleges in Karnataka — Mangaluru, Udupi & Moodbidri | Vidyakashi",
  description,
  keywords: [
    "best schools in Karnataka",
    "best schools in Mangalore",
    "best schools in Udupi",
    "Karnataka II PUC toppers 2026",
    "Alva's English Medium High School",
    "Alva's High School Moodbidri",
    "Alva's school Moodbidri",
    "Alva's PU College toppers",
    "Alva's Nudisiri",
    "best school in Moodbidri",
  ],
  openGraph: {
    title: "Best Schools & Colleges in Karnataka | Vidyakashi",
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Vidyakashi",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Splash />
        <div className="site-enter flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
