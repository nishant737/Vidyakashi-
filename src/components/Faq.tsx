const faqs = [
  {
    q: "Where is Alva's English Medium High School?",
    a: "Alva's English Medium High School is in Moodubidire (Moodbidri), Dakshina Kannada, Karnataka – 574227. It is run by Alva's Education Foundation, about 35 km from Mangaluru.",
  },
  {
    q: "Which syllabus does Alva's English Medium High School follow?",
    a: "The school follows the NCERT syllabus with English as the medium of instruction. Classes are kept to a maximum of 35 students, and the school offers regular IIT coaching and extra support for slow learners.",
  },
  {
    q: "How are the SSLC results at Alva's High School?",
    a: "The school recorded 100% SSLC results in each of its first five batches (2011–12 to 2015–16), with top scores of 618 out of 625. For the latest year's results, check with the school office or the official school website.",
  },
  {
    q: "Does Alva's High School have a sports quota?",
    a: "Yes. Students of classes 8 to 10 can apply under the sports quota for athletics (boys and girls) and basketball (girls). Notifications are published in March and April, followed by a 20-day selection camp. Selected students get free hostel, food and coaching.",
  },
  {
    q: "How do I apply for admission to Alva's English Medium High School?",
    a: "Contact the school office on +91 77602 72525 or ao-schools@alvas.org, or use the enquiry option on the official school website, alvasschools.com.",
  },
  {
    q: "What can students study after class 10 at Alva's?",
    a: "Students can continue at Alva's Pre-University College in Moodbidri in the Science, Commerce or Arts streams. In the 2026 II PUC exam, Alva's student Disha secured the state first rank in Commerce with 600 out of 600.",
  },
  {
    q: "What is Alva's Nudisiri?",
    a: "Alva's Nudisiri is the Kannada literary and cultural festival organised by Alva's Education Foundation in Moodbidri. In 2027 it is being held together with Alva's Virasat as 'Alva's Nudisiri-Virasat' from 6 to 10 January 2027.",
  },
  {
    q: "Are the links on Vidyakashi official websites?",
    a: "Yes. Every \u201cVisit website\u201d button opens the institution's official website, so you can confirm the latest admission details, fees and dates directly with the school or college.",
  },
];

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="text-center lg:sticky lg:top-24 lg:self-start lg:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Alva&rsquo;s High School — questions parents ask
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Quick answers about Alva&rsquo;s English Medium High School, admissions,
            results and life at Alva&rsquo;s in Moodbidri.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-orange-deep hover:underline"
          >
            Still have a question? Contact us →
          </a>
        </div>

        <div className="space-y-3 text-left">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              open={i === 0}
              className="group rounded-2xl bg-cream ring-1 ring-navy/5 transition open:bg-white open:shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)] open:ring-sun"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-navy ring-1 ring-navy/10 transition group-open:rotate-45 group-open:bg-orange group-open:text-white group-open:ring-orange">
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-navy/75 sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
