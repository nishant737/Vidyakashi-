import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Splash from "@/components/Splash";
import { home, site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const description = home.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: home.title,
  description,
  openGraph: {
    title: "Alva's School Moodbidri: A Parent's Guide | Vidyakashi",
    description,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: ["/hero-india.jpg"],
  },
};

// Runs before first paint so returning pages in a visit never flash the splash.
const splashOncePerVisit = `try{if(sessionStorage.getItem("splash-seen"))document.documentElement.classList.add("no-splash");sessionStorage.setItem("splash-seen","1")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: splashOncePerVisit }} />
        <Splash />
        <div className="site-enter flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
