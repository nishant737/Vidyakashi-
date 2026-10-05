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
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vidyakashi — Education for a Brighter Future",
  description:
    "Find and compare the best colleges in Karnataka by course and location — engineering, medical, PU, Ayurveda, hotel management and more.",
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
