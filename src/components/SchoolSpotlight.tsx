import Link from "next/link";
import { alvasFoundation, alvasOlympians, alvasPu, alvasSchool, nudisiri } from "@/data/alvas";

const pillars = [
  {
    title: "Academics",
    stat: "100%",
    statLabel: "SSLC pass rate in the first five batches",
    points: [
      `${alvasSchool.syllabus} syllabus with classes of no more than ${alvasSchool.maxClassSize} students`,
      "Regular IIT coaching, plus extra coaching and counselling for slow learners",
      "Top SSLC score of 618 out of 625 in 2014-15 and 2015-16",
      "Prajwal S of Alva's High School placed first in the state's Kannada medium SSLC in 2012",
      `Students can continue to ${alvasPu.name}, whose student Disha was the 2026 II PUC state topper in Commerce`,
    ],
  },
  {
    title: "Sports",
    stat: String(alvasOlympians.athletes.length),
    statLabel: "Olympians linked to Alva's (2021 report)",
    points: [
      "Playground with a 400 m synthetic track and separate coaches for different events",
      "Sports quota for classes 8 to 10 in athletics (boys and girls) and basketball (girls)",
      "Sports-quota students receive free hostel, food and coaching",
      "A 2021 report said the foundation had adopted more than 5,000 sportspersons",
    ],
  },
  {
    title: "Culture",
    stat: String(alvasFoundation.artsCentres.length),
    statLabel: "dedicated centres for the arts",
    points: [
      ...alvasFoundation.artsCentres.map((c) => `${c.name}: ${c.focus}`),
      `Home of ${nudisiri.combinedName}, the foundation's literary and cultural festival`,
      "School activities include music, dance, folk arts, Scouts and Guides, yoga and drawing",
    ],
  },
];

const goodToKnow = [
  "It is a large residential campus, so it suits children who are ready for hostel life.",
  "Fees are not published online. Ask the admissions office for the full cost, including hostel and food.",
  "The group runs schools on different boards, so confirm the board for your child's class.",
  "Visit the campus and hostel before deciding, as you would for any residential school.",
];

export default function SchoolSpotlight() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: alvasFoundation.name,
    url: alvasFoundation.website,
    foundingDate: String(alvasFoundation.founded),
    founder: { "@type": "Person", name: alvasFoundation.founder },
    address: {
      "@type": "PostalAddress",
      addressLocality: alvasSchool.address.locality,
      addressRegion: alvasSchool.address.region,
      postalCode: alvasSchool.address.postalCode,
      addressCountry: "IN",
    },
    subOrganization: [
      { "@type": "HighSchool", name: alvasSchool.name, url: alvasSchool.website },
      { "@type": "EducationalOrganization", name: alvasPu.name, url: alvasPu.website },
    ],
  };

  return (
    <section id="spotlight" className="relative scroll-mt-24 bg-cream py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            School spotlight
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Inside Alva&rsquo;s, Moodbidri: academics, sports and culture
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Alva&rsquo;s English Medium High School is part of {alvasFoundation.name}, which began in{" "}
            {alvasFoundation.founded}. It gives sports and the arts the same structure as academics,
            with dedicated coaches and training centres. Here is what the record shows.
          </p>
        </div>

        {/* Three pillars */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-[2rem] bg-white p-7 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)] ring-1 ring-navy/5"
            >
              <h3 className="text-center font-display text-sm font-bold uppercase tracking-[0.15em] text-orange-deep sm:text-left">
                {p.title}
              </h3>
              <p className="mt-4 text-center font-display text-5xl font-bold text-navy sm:text-left">{p.stat}</p>
              <p className="mt-1 text-center text-sm font-medium text-navy/60 sm:text-left">{p.statLabel}</p>
              <ul className="mt-6 flex flex-col gap-3 border-t border-navy/10 pt-6 text-sm leading-relaxed text-navy/80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Olympians */}
        <div className="mt-6 rounded-[2rem] bg-white p-6 ring-1 ring-navy/5 sm:p-8">
          <h3 className="text-center font-display text-lg font-semibold text-navy sm:text-left">
            Olympians linked to Alva&rsquo;s
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {alvasOlympians.athletes.map((a) => (
              <li key={a.name} className="rounded-2xl bg-cream px-4 py-3 text-center sm:text-left">
                <p className="font-semibold text-navy">{a.name}</p>
                <p className="text-xs text-navy/60">
                  {a.sport} · {a.games}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-navy/50 sm:text-left">
            Source:{" "}
            <a href={alvasOlympians.source} target="_blank" rel="noopener" className="underline hover:text-orange-deep">
              The Tribune, July 2021
            </a>
          </p>
        </div>

        {/* Founder + good to know */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] bg-navy p-7 text-white sm:p-10">
            <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-sun sm:text-left">
              The founder
            </p>
            <h3 className="mt-3 text-center font-display text-2xl font-bold sm:text-left sm:text-3xl">
              {alvasFoundation.founder}
            </h3>
            <p className="mt-4 leading-relaxed text-white/75">
              A physician and philanthropist, {alvasFoundation.founder} founded {alvasFoundation.name} in
              Moodbidri, which began in {alvasFoundation.founded}. The foundation&rsquo;s stated vision is to
              give students a strong cultural identity, on the belief that young people rooted in their
              culture can drive social growth. It also hosts the Alva&rsquo;s Virasat and Nudisiri festivals.
            </p>
            <p className="mt-6 font-semibold text-sun">Free education through the adoption scheme</p>
            <p className="mt-1 text-sm text-white/70">
              The foundation says these students receive free education with boarding and lodging:
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-white/85 sm:grid-cols-2">
              {alvasFoundation.adoptionScheme.map((g) => (
                <li key={g} className="flex gap-2">
                  <span className="text-sun" aria-hidden="true">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </article>

          <aside className="flex flex-col rounded-[2rem] bg-white p-7 ring-1 ring-navy/5 sm:p-8">
            <h3 className="text-center font-display text-lg font-semibold text-navy sm:text-left">
              Good to know before you apply
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-navy/75">
              {goodToKnow.map((g) => (
                <li key={g} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy/40" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
            <Link
              href="/alvas-school-faq"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-5 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5"
            >
              Read the full Alva&rsquo;s School FAQ →
            </Link>
            <p className="mt-4 text-center text-xs text-navy/50">
              Sources:{" "}
              <a href={alvasSchool.website} target="_blank" rel="noopener" className="underline hover:text-orange-deep">
                school website
              </a>
              ,{" "}
              <a href={alvasFoundation.aboutSource} target="_blank" rel="noopener" className="underline hover:text-orange-deep">
                about Alva&rsquo;s Schools
              </a>
              ,{" "}
              <a href={alvasFoundation.visionSource} target="_blank" rel="noopener" className="underline hover:text-orange-deep">
                foundation vision
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
