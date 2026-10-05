import Link from "next/link";
import { courses, locations } from "@/data/colleges";
import { Arrow } from "./Navbar";


const features = [
  {
    title: "Course-first comparisons",
    body: "Tell us what you want to study — we show which Karnataka colleges are strongest for that specific course, not just overall rankings.",
    icon: (
      <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Admission made simple",
    body: "Clear guides to KCET, COMEDK, NEET counselling and PGCET — cut-offs, seat matrices, documents and key dates.",
    icon: (
      <path d="M9 12l2 2 4-4M7 3h10a2 2 0 0 1 2 2v14l-7-3-7 3V5a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Honest, student-first reviews",
    body: "Real insights on faculty, campus life, hostels and placements — so you know what a college is actually like before you join.",
    icon: (
      <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Every corner of Karnataka",
    body: "From Bengaluru's tech campuses to colleges in coastal and North Karnataka — we cover the whole state, not just the big names.",
    icon: (
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" strokeLinejoin="round" />
    ),
  },
];

const criteria = [
  "Placements & salary trends",
  "Faculty & teaching quality",
  "Fees & scholarships",
  "NAAC / NBA accreditation",
  "Infrastructure & labs",
  "Hostel & campus life",
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: story */}
          <div className="text-center lg:text-left">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
              About Vidyakashi
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
              Find the right Karnataka college for{" "}
              <span className="relative isolate inline-block">
                your course
                <span className="absolute -bottom-1 left-0 -z-10 h-2.5 w-full rounded-full bg-sun/60" aria-hidden="true" />
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy/75 sm:text-lg">
              Vidyakashi is a guide to higher education in Karnataka. Choosing
              a college is one of the biggest decisions a family makes — and
              the &ldquo;best&rdquo; college overall isn&rsquo;t always the best
              one for <em>your</em> course.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
              We research institutions across the state and compare them course
              by course, so students and parents can see clearly which college
              fits their goals, budget and city.
            </p>

            <div className="mt-8">
              <p className="font-display text-sm font-semibold text-navy">
                Explore by course
              </p>
              <ul className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
                {courses.map((course) => (
                  <li key={course}>
                    <Link
                      href={`/?course=${encodeURIComponent(course)}#categories`}
                      className="inline-block rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-orange hover:bg-orange hover:text-white"
                    >
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#categories"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-7 py-3.5 font-display text-sm font-semibold text-white shadow-xl shadow-orange/30 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange/40"
            >
              Compare colleges
              <Arrow />
            </Link>
          </div>

          {/* Right: feature cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`rounded-3xl bg-white p-7 text-center shadow-[0_10px_40px_-15px_rgba(27,31,94,0.2)] ring-1 ring-navy/5 transition hover:-translate-y-1 sm:text-left ${
                  i % 2 === 1 ? "sm:translate-y-8 sm:hover:translate-y-7" : ""
                }`}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sun/30 text-navy sm:mx-0">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How we compare */}
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-navy px-6 py-10 text-white sm:px-12 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                How we compare colleges
              </h3>
              <p className="mt-3 text-white/70">
                Every comparison looks at the things that actually matter when
                you pick a college for a particular course.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {criteria.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun text-navy">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun">
              Colleges across Karnataka
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80 lg:justify-start">
              {locations.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
