import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { alvasSchool } from "@/data/alvas";
import { alvasFaqs, faqSources } from "@/data/faqs";

const title = "Alva's School Moodbidri FAQ: Fees, Hostel, Results";
const description =
  "Answers to common questions about Alva's School, Moodbidri: boards, fees, hostels, results, sports quota, free education, culture and Dr. M. Mohan Alva.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/alvas-school-faq" },
  openGraph: { title, description, type: "article", url: "/alvas-school-faq", images: ["/hero-india.jpg"] },
};

export default function AlvasSchoolFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: alvasFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <main className="flex-1 bg-cream">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-8">
          <Logo />
        </div>

        <article className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-8">
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
            Alva&rsquo;s School, Moodbidri: questions parents ask
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy/75">
            Answers about Alva&rsquo;s Schools and Alva&rsquo;s Education Foundation, based on official
            and news sources. Fees, results and admission rules change, so confirm the details
            with the{" "}
            <a href={alvasSchool.website} target="_blank" rel="noopener" className="font-semibold text-orange-deep underline">
              official school website
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-navy/50">Last reviewed: November 2026</p>

          <div className="mt-10 flex flex-col gap-8">
            {alvasFaqs.map((f) => (
              <section key={f.q}>
                <h2 className="font-display text-lg font-semibold text-navy sm:text-xl">{f.q}</h2>
                <p className="mt-2 text-base leading-relaxed text-navy/75">{f.a}</p>
              </section>
            ))}
          </div>

          <section className="mt-12 border-t border-navy/10 pt-8">
            <h2 className="font-display text-lg font-semibold text-navy">Sources</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {faqSources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener" className="text-navy/70 underline hover:text-orange-deep">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <Link href="/" className="mt-10 inline-block font-display text-sm font-semibold text-orange-deep hover:underline">
            ← Back to Vidyakashi
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
