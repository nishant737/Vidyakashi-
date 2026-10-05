const faqs = [
  {
    q: "How do I choose the right college for my course in Karnataka?",
    a: "Start with the course, not the college name. Use the filters above to list colleges that offer your course in your preferred city, then compare placements, faculty, fees, accreditation and hostel facilities before you apply.",
  },
  {
    q: "What is KCET and who should write it?",
    a: "KCET (Karnataka Common Entrance Test) is conducted by the Karnataka Examinations Authority (KEA) for government-quota seats in engineering, pharmacy and several other professional courses. For engineering, the rank is based on both your CET score and your 2nd PU marks in the core subjects.",
  },
  {
    q: "What is COMEDK UGET?",
    a: "COMEDK UGET is an entrance exam for admission to private and minority engineering colleges in Karnataka. Many students write both KCET and COMEDK to keep more options open.",
  },
  {
    q: "How do admissions to MBBS and Ayurveda (BAMS) work?",
    a: "Both MBBS and BAMS admissions are through NEET UG. Karnataka state-quota seats are allotted through KEA counselling, while all-India quota seats have separate national counselling.",
  },
  {
    q: "Which PU stream should I choose — Science, Commerce or Arts?",
    a: "Choose Science (PCMB/PCMC) if you are aiming for engineering, medicine or pure sciences; Commerce for B.Com, CA, finance and business; and Arts for humanities, law, journalism and civil services. Pick the stream that matches your interest and long-term goal.",
  },
  {
    q: "Can I study hotel management after PU?",
    a: "Yes. Most B.Sc Hotel Management programmes accept students from any PU stream. Some institutes, such as the Institutes of Hotel Management, admit students through the NCHM JEE entrance exam.",
  },
  {
    q: "Why is Alva's featured on Vidyakashi?",
    a: "Alva's Education Foundation in Moodbidri runs institutions from school and PU right up to degree, engineering, Ayurveda, nursing, pharmacy and hotel management on one campus — so it appears in almost every category for students in Mangaluru and Udupi.",
  },
  {
    q: "Are the college links official websites?",
    a: "Yes. Every “Visit website” button opens the college's official website, so you can check the latest admission details, fees and deadlines directly with the institution.",
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
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Questions students &amp; parents ask
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Quick answers about admissions, entrance exams and choosing the
            right course in Karnataka.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-orange-deep hover:underline"
          >
            Still have a question? Contact us →
          </a>
        </div>

        <div className="space-y-3">
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
