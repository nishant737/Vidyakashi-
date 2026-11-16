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
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function Home() {

  return (
    <>
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <Hero />
        <Overview />
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
