import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Academics from "@/components/guide/Academics";
import Admissions from "@/components/guide/Admissions";
import Culture from "@/components/guide/Culture";
import Founder from "@/components/guide/Founder";
import OtherSchools from "@/components/guide/OtherSchools";
import Overview from "@/components/guide/Overview";
import Sports from "@/components/guide/Sports";
import News from "@/components/guide/News";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { events, foundation, founder, graph, organization, school, webPage, website } from "@/data/schema";
import { home, site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = graph(
  organization,
  website,
  webPage("/", home.title, home.description),
  school,
  foundation,
  founder,
  ...events,
);

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <Hero />
        <Overview />
        <News />
        <Academics />
        <Sports />
        <Culture />
        <Founder />
        <Admissions />
        <OtherSchools />
        <Faq />
        {site.contactEnabled && <Contact />}
      </main>
      <Footer />
    </>
  );
}
