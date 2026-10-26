import { alvasSchool, sslcResults } from "@/data/alvas";
import { Arrow } from "./Navbar";

const stats = [
  { value: String(alvasSchool.started), label: "Started" },
  { value: `${alvasSchool.students}+`, label: "Students" },
  { value: `Max ${alvasSchool.maxClassSize}`, label: "Students per class" },
  { value: alvasSchool.syllabus, label: "Syllabus" },
];

const highlights = [
  {
    title: "Strong academics",
    points: [
      "NCERT syllabus taught in English",
      "Regular IIT coaching by experienced teachers",
      "Special coaching & counselling for slow learners",
      "Vacation crash course for students promoted to IX",
    ],
    icon: <path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5M4 19.5A1.5 1.5 0 0 0 5.5 21H20M4 19.5A1.5 1.5 0 0 1 5.5 18H20M8 8h8M8 12h5" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Sports & fitness",
    points: [
      "Playground with a 400 m synthetic track",
      "Separate coaches for different events",
      "Sports quota for athletics & girls' basketball",
      "Free hostel, food & coaching for sports-quota students",
    ],
    icon: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9m0-18C9.5 5.4 8.2 8.4 8.2 12s1.3 6.6 3.8 9M3.5 9h17M3.5 15h17" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Culture & activities",
    points: [
      "Classical & folk art forms, dance and music",
      "Scouts & Guides",
      "Yoga, drawing and abacus classes",
      "Moodbidri hosts the Alva's Nudisiri & Virasat festivals",
    ],
    icon: <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Care & campus",
    points: [
      "24×7 medical facility",
      "Transport available",
      `School hours ${alvasSchool.timings}`,
      "Special fee concession for local students",
    ],
    icon: <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" strokeLinejoin="round" />,
  },
];

export default function AlvasSchool() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HighSchool",
    name: alvasSchool.name,
    url: alvasSchool.website,
    telephone: alvasSchool.phone,
    email: alvasSchool.email,
    foundingDate: String(alvasSchool.started),
    address: {
      "@type": "PostalAddress",
      streetAddress: alvasSchool.address.street,
      addressLocality: alvasSchool.address.locality,
      addressRegion: alvasSchool.address.region,
      postalCode: alvasSchool.address.postalCode,
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "Alva's Education Foundation",
      url: "https://alvas.org",
    },
  };

  return (
    <section id="alvas-school" className="relative scroll-mt-24 bg-white py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-sun/30 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.15em] text-navy">
              ★ Featured school
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[46px]">
              Alva&rsquo;s English Medium High School,{" "}
              <span className="relative isolate inline-block">
                Moodbidri
                <span className="absolute -bottom-1 left-0 -z-10 h-2.5 w-full rounded-full bg-sun/60" aria-hidden="true" />
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-navy/75 sm:text-lg">
              Alva&rsquo;s English Medium High School is the secondary school of{" "}
              <strong className="font-semibold text-navy">Alva&rsquo;s Education Foundation</strong> in
              Moodubidire, Dakshina Kannada. It began in {alvasSchool.started} with just 99 students and
              7 teachers, and has grown to around {alvasSchool.students} students and {alvasSchool.teachers}{" "}
              teachers — with academics, sports and culture growing side by side.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-cream px-5 py-4 text-center ring-1 ring-navy/5 lg:text-left">
                <dt className="text-xs font-semibold uppercase tracking-wider text-navy/50">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-navy">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-3xl bg-cream p-6 ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  {h.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{h.title}</h3>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-navy/75">
                {h.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SSLC record + admissions */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="min-w-0 rounded-3xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)] ring-1 ring-navy/5 sm:p-8">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-xl font-semibold text-navy sm:text-2xl">
                SSLC results — 100% in the first five batches
              </h3>
              <p className="mt-1 text-sm text-navy/60">
                Every student passed in each of the school&rsquo;s first five SSLC batches.
              </p>
            </div>
            <div className="-mx-2 mt-6 overflow-x-auto px-2">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-navy/10 text-xs uppercase tracking-wider text-navy/50">
                    <th className="py-3 pr-3 font-semibold sm:pr-4">Year</th>
                    <th className="py-3 pr-3 font-semibold sm:pr-4">Students</th>
                    <th className="hidden py-3 pr-4 font-semibold sm:table-cell">Distinctions</th>
                    <th className="py-3 pr-3 font-semibold sm:pr-4">Pass</th>
                    <th className="py-3 font-semibold">Top / 625</th>
                  </tr>
                </thead>
                <tbody>
                  {sslcResults.map((r) => (
                    <tr key={r.year} className="border-b border-navy/5 last:border-0">
                      <td className="whitespace-nowrap py-3 pr-3 font-semibold text-navy sm:pr-4">{r.year}</td>
                      <td className="py-3 pr-3 text-navy/75 sm:pr-4">{r.students}</td>
                      <td className="hidden py-3 pr-4 text-navy/75 sm:table-cell">{r.distinction}</td>
                      <td className="py-3 pr-3 sm:pr-4">
                        <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-800">{r.pass}</span>
                      </td>
                      <td className="py-3 font-semibold text-navy">{r.top}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-navy/50">
              Source:{" "}
              <a href={alvasSchool.website} target="_blank" rel="noopener" className="underline hover:text-orange-deep">
                official school website
              </a>
              . For the latest SSLC results, check with the school.
            </p>
          </div>

          <div className="flex min-w-0 flex-col rounded-3xl bg-navy p-6 text-white sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold sm:text-left sm:text-2xl">Admissions</h3>
            <p className="mt-2 text-center text-sm leading-relaxed text-white/70 sm:text-left">
              Contact the school office for admissions. Sports-quota notifications (classes 8–10) are
              published in March and April, followed by a 20-day selection camp.
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li>
                <a href={`tel:${alvasSchool.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/10">
                  <span className="text-sun">☎</span>
                  <span className="font-semibold">{alvasSchool.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${alvasSchool.email}`} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 transition hover:bg-white/10">
                  <span className="text-sun">✉</span>
                  <span className="break-all font-semibold">{alvasSchool.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <span className="text-sun">⌖</span>
                <span className="text-white/85">
                  {alvasSchool.address.street}, {alvasSchool.address.locality} – {alvasSchool.address.postalCode},
                  Dakshina Kannada
                </span>
              </li>
            </ul>
            <a
              href={alvasSchool.website}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5"
            >
              Visit Alva&rsquo;s High School website
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
