import About from "@/components/About";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { course } = await searchParams;

  return (
    <>
      <main className="flex-1">
        <Navbar />
        <Hero />
        <About />
        <Categories course={typeof course === "string" ? course : undefined} />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
