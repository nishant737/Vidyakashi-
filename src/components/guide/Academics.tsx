import { alvasPu, alvasSchool, alvasSslc, pu2025RankHolders, sslcFirstBatches } from "@/data/alvas";
import { puc2026 } from "@/data/schools";
import { Bullet, card, SectionHeader, Sources } from "./ui";

const milestones = [
  { year: "2012", title: "State 1st, Kannada medium SSLC", text: "Prajwal S of Alva's High School scored 613 marks." },
  {
    year: "2018",
    title: "State 2nd rank in SSLC",
    text: `${alvasSslc.y2018.topper.name} of ${alvasSslc.y2018.topper.school} scored ${alvasSslc.y2018.topper.marks}/625. ${alvasSslc.y2018.above600} Alva's students scored above 600.`,
  },
  {
    year: "2026",
    title: `${alvasSslc.y2026.alvasTopper.marks}/625 in SSLC`,
    text: `${alvasSslc.y2026.alvasTopper.name} of ${alvasSslc.y2026.alvasTopper.school}, in the year Moodabidri was Dakshina Kannada's top taluk.`,
  },
];

const support = [
  `${alvasSchool.syllabus} syllabus taught in English, with at most ${alvasSchool.maxClassSize} students per class`,
  "Regular IIT coaching by experienced teachers",
  "Special coaching and counselling for slow learners",
  "A vacation crash course for students promoted to class 9",
];

export default function Academics() {
  const disha = puc2026.toppers[0];

  return (
    <section id="academics" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Academics & results"
          title="A consistent SSLC record, and a clear path to PU"
          intro="The high school's results go back to its first batch in 2011-12. Students can continue to Alva's Pre-University College in Moodbidri, and from 2026-27 the foundation's new Alva's Institute of Medical Sciences and Research Center has 150 MBBS seats approved by the National Medical Commission."
        />

        {/* Milestones */}
        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {milestones.map((m) => (
            <li key={m.year} className={`${card} text-center lg:text-left`}>
              <p className="font-display text-4xl font-bold text-orange-deep">{m.year}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{m.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* First five batches */}
          <div className={`${card} min-w-0`}>
            <h3 className="text-center font-display text-xl font-semibold text-navy lg:text-left">
              100% SSLC pass rate in the first five batches
            </h3>
            <table className="mt-5 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-navy/10 text-xs uppercase tracking-wider text-navy/50">
                  <th className="py-3 pr-3 font-semibold">Year</th>
                  <th className="py-3 pr-3 font-semibold">Students</th>
                  <th className="py-3 pr-3 font-semibold">Pass</th>
                  <th className="py-3 font-semibold">Top / 625</th>
                </tr>
              </thead>
              <tbody>
                {sslcFirstBatches.map((r) => (
                  <tr key={r.year} className="border-b border-navy/5 last:border-0">
                    <td className="whitespace-nowrap py-3 pr-3 font-semibold text-navy">{r.year}</td>
                    <td className="py-3 pr-3 text-navy/75">{r.students}</td>
                    <td className="py-3 pr-3">
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-800">{r.pass}</span>
                    </td>
                    <td className="py-3 font-semibold text-navy">{r.top}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Teaching support */}
          <div className={`${card} min-w-0`}>
            <h3 className="text-center font-display text-xl font-semibold text-navy lg:text-left">How students are supported</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-navy/80">
              {support.map((s) => (
                <Bullet key={s}>{s}</Bullet>
              ))}
            </ul>
          </div>
        </div>

        {/* PU path */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-center text-white sm:p-10 lg:text-left">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sun/25 blur-2xl" />
            <p className="relative inline-flex rounded-full bg-sun px-3 py-1 font-display text-xs font-bold text-navy">
              II PUC 2026 · Commerce · State 1st rank
            </p>
            <p className="relative mt-6 font-display text-6xl font-bold sm:text-7xl">
              600<span className="text-3xl text-white/60 sm:text-4xl">/600</span>
            </p>
            <h3 className="relative mt-4 font-display text-2xl font-semibold">{disha.names}</h3>
            <p className="relative mt-1 text-white/70">{disha.college}</p>
          </div>

          <div className={card}>
            <h3 className="text-center font-display text-xl font-semibold text-navy lg:text-left">
              II PUC 2025: four state 2nd rank holders
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {pu2025RankHolders.students.map((s) => (
                <li key={s.name} className="rounded-2xl bg-cream p-4 text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-navy">
                    {s.marks}
                    <span className="text-sm text-navy/50">/600</span>
                  </p>
                  <p className="mt-1 font-semibold text-navy">{s.name}</p>
                  <p className="text-sm text-navy/60">{s.stream}</p>
                </li>
              ))}
            </ul>
            <a
              href={alvasPu.website}
              target="_blank"
              rel="noopener"
              className="mt-5 block text-center font-display text-sm font-semibold text-orange-deep hover:underline lg:text-left"
            >
              Visit {alvasPu.name} →
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Sources
            links={[
              { label: "school website", url: alvasSchool.website },
              { label: "Daijiworld 2012", url: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=138204" },
              { label: "Daijiworld 2018", url: alvasSslc.y2018.source },
              { label: "Mangalore Today 2026", url: alvasSslc.y2026.source },
              { label: "Daijiworld 2026", url: puc2026.toppersSource },
              { label: "Alva's PU College", url: pu2025RankHolders.source },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
