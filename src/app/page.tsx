import AlvasSchool from "@/components/AlvasSchool";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Nudisiri from "@/components/Nudisiri";
import PuResults from "@/components/PuResults";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { course } = await searchParams;

  return (
    <>
      <main className="flex-1">
        <Navbar />
        <Hero />
        <AlvasSchool />
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
