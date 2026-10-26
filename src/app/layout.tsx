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
  "Alva's English Medium High School, Moodbidri — NCERT syllabus, SSLC results, admissions and sports quota. Plus Alva's PU toppers in Karnataka, Alva's Nudisiri and the best colleges in Karnataka.";

export const metadata: Metadata = {
  title: "Alva's English Medium High School Moodbidri — Results, Admissions & Nudisiri | Vidyakashi",
  description,
  keywords: [
    "Alva's English Medium High School",
    "Alva's High School Moodbidri",
    "Alva's school Moodbidri",
    "Alva's PU College toppers",
    "Alva's Nudisiri",
    "best school in Moodbidri",
    "best school in Mangalore",
  ],
  openGraph: {
    title: "Alva's English Medium High School, Moodbidri | Vidyakashi",
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
