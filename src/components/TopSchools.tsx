import { alvasSchool } from "@/data/alvas";
import { schools } from "@/data/schools";
import { Arrow } from "./Navbar";

const featuredPoints = [
  `${alvasSchool.syllabus} syllabus, English medium`,
  `Max ${alvasSchool.maxClassSize} students per class`,
  "100% SSLC results in its first five batches",
  "400 m synthetic track & sports quota",
  "IIT coaching & support for slow learners",
  "Music, dance, folk arts, Scouts & Guides",
];

export default function TopSchools() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top schools in Karnataka",
    itemListElement: [
      { name: alvasSchool.name, url: alvasSchool.website },
      ...schools.map((s) => ({ name: s.name, url: s.website })),
    ].map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "School", name: s.name, url: s.url },
    })),
  };

  return (
    <section id="schools" className="relative scroll-mt-24 bg-white py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            Schools
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Top schools in{" "}
            <span className="relative isolate inline-block">
              Karnataka
              <span className="absolute -bottom-1 left-0 -z-10 h-2.5 w-full rounded-full bg-sun/60" aria-hidden="true" />
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Well-regarded high schools in Mangaluru, Udupi, Moodbidri and Bengaluru —
            with links to each school&rsquo;s official website.
          </p>
        </div>

        {/* Editor's pick */}
        <article className="relative mt-12 overflow-hidden rounded-[2rem] bg-cream ring-2 ring-sun lg:grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6 text-center sm:p-10 lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 font-display text-xs font-bold text-navy">
              ★ Editor&rsquo;s pick
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-navy sm:text-3xl">
              {alvasSchool.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-navy/60">{alvasSchool.place}</p>
            <p className="mt-4 text-base leading-relaxed text-navy/75">
              Run by Alva&rsquo;s Education Foundation, the school began in {alvasSchool.started} with 99
              students and has grown to around {alvasSchool.students} students and {alvasSchool.teachers}{" "}
              teachers — combining academics with sports and culture.
            </p>
            <ul className="mt-6 grid gap-2.5 text-left text-sm text-navy/80 sm:grid-cols-2">
              {featuredPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun text-navy">
                    <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              <a
                href={alvasSchool.website}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5"
              >
                Visit school website
                <Arrow />
              </a>
              <a href={`tel:${alvasSchool.phone.replace(/\s/g, "")}`} className="font-display text-sm font-semibold text-navy hover:text-orange-deep">
                Admissions: {alvasSchool.phone}
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px bg-sun/40 lg:grid-cols-1">
            {[
              { label: "Started", value: String(alvasSchool.started) },
              { label: "Students", value: `${alvasSchool.students}+` },
              { label: "Syllabus", value: alvasSchool.syllabus },
              { label: "SSLC (first 5 batches)", value: "100%" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col justify-center bg-white/70 px-6 py-5 text-center lg:px-10 lg:text-left">
                <dt className="text-xs font-semibold uppercase tracking-wider text-navy/50">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-navy">{s.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        {/* Other schools */}
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((s) => (
            <li key={s.name}>
              <a
                href={s.website}
                target="_blank"
                rel="noopener"
                className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-[0_10px_40px_-20px_rgba(27,31,94,0.3)] ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:ring-orange/40"
              >
                <span className="min-w-0">
                  <span className="block font-display font-semibold text-navy group-hover:text-orange-deep">{s.name}</span>
                  <span className="mt-0.5 block text-sm text-navy/60">
                    {s.place}
                    {s.board && ` · ${s.board}`}
                  </span>
                </span>
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-orange-deep transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="currentColor" aria-hidden="true">
                  <path d="M6 4a1 1 0 0 0 0 2h6.6l-8.3 8.3a1 1 0 1 0 1.4 1.4L14 7.4V14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H6Z" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
