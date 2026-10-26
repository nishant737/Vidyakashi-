const faqs = [
  {
    q: "How do I choose the right school for my child in Karnataka?",
    a: "Look at the board (State, CBSE, ICSE or NCERT-based), board exam results, class sizes, teaching support, sports and co-curricular activities, transport and fees. Visit the campus and speak to the school office before applying.",
  },
  {
    q: "Which are some of the top schools in Mangaluru, Udupi and Moodbidri?",
    a: "Well-regarded options include Alva's English Medium High School and Alva's Central School in Moodbidri, Lourdes Central School, Manipal School and Kendriya Vidyalaya No. 1 in Mangaluru, and Silas International School in Udupi. See the schools section above for links to their official websites.",
  },
  {
    q: "Where is Alva's English Medium High School and which syllabus does it follow?",
    a: "Alva's English Medium High School is in Moodubidire (Moodbidri), Dakshina Kannada – 574227, and is run by Alva's Education Foundation. It follows the NCERT syllabus, keeps classes to a maximum of 35 students and recorded 100% SSLC results in its first five batches. For admissions, call +91 77602 72525 or email ao-schools@alvas.org.",
  },
  {
    q: "Who topped the Karnataka II PUC exam in 2026?",
    a: "In Commerce, Disha of Alva's College, Moodbidri secured the state first rank with a perfect 600 out of 600. In Science, Samanyu S Shetty and Nandan Nayak of Expert College topped the state with 99.67%. Udupi and Dakshina Kannada recorded the highest district pass percentages.",
  },
  {
    q: "Which PU stream should I choose — Science, Commerce or Arts?",
    a: "Choose Science (PCMB/PCMC) for engineering, medicine or pure sciences; Commerce for B.Com, CA, finance and business; and Arts for humanities, law, journalism and civil services. Pick the stream that matches your interests and long-term goals.",
  },
  {
    q: "Which entrance exams are needed for engineering and medical courses in Karnataka?",
    a: "KCET (conducted by KEA) and COMEDK UGET are used for engineering admissions, while MBBS and BAMS admissions are through NEET UG, with state-quota seats allotted through KEA counselling.",
  },
  {
    q: "What is Alva's Nudisiri?",
    a: "Alva's Nudisiri is the Kannada literary and cultural festival organised by Alva's Education Foundation in Moodbidri. In 2027 it is being held together with Alva's Virasat as 'Alva's Nudisiri-Virasat' from 6 to 10 January 2027.",
  },
  {
    q: "Are the links on Vidyakashi official websites?",
    a: "Yes. Every school and college link opens the institution's official website, so you can confirm the latest admission details, fees and dates directly with them.",
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
            Questions students &amp; parents ask
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Quick answers about schools, admissions, results and entrance exams
            in Karnataka.
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
