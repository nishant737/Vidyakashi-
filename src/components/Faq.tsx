import { site } from "@/data/site";
import { homeFaqs as faqs } from "@/data/faqs";

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
          {site.contactEnabled && (
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-orange-deep hover:underline"
            >
              Still have a question? Contact us →
            </a>
          )}
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
