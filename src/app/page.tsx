import type { Metadata } from "next";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Nudisiri from "@/components/Nudisiri";
import PuResults from "@/components/PuResults";
import TopSchools from "@/components/TopSchools";
import { site } from "@/data/site";

// Course filter links (/?course=...) all point search engines to the main page.
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

export default async function Home({ searchParams }: PageProps<"/">) {
  const { course } = await searchParams;

  return (
    <>
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <Hero />
        <TopSchools />
        <PuResults />
        <Nudisiri />
        <Categories course={typeof course === "string" ? course : undefined} />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
