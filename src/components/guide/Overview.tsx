import { alvasFoundation, alvasSchool } from "@/data/alvas";
import { SectionHeader } from "./ui";

const facts = [
  { label: "Foundation began", value: String(alvasFoundation.founded) },
  { label: "High school since", value: String(alvasSchool.started) },
  { label: "Students", value: `${alvasSchool.students}+` },
  { label: "Teachers", value: alvasSchool.teachers },
  { label: "Syllabus", value: alvasSchool.syllabus },
  { label: "Class size", value: `Max ${alvasSchool.maxClassSize}` },
];

const sections = [
  { href: "#news", title: "Alva's in 2026", text: "The latest results, medals, new courses and honours." },
  { href: "#academics", title: "Academics & results", text: "SSLC and II PUC records, teaching support and the path to PU." },
  { href: "#sports", title: "Sports", text: "Facilities, the free sports quota and Olympians linked to Alva's." },
  { href: "#culture", title: "Culture", text: "Yakshagana, dance, music, drama and the Nudisiri-Virasat festival." },
  { href: "#founder", title: "The founder", text: "Dr. M. Mohan Alva, the foundation's vision and free education." },
  { href: "#admissions", title: "Admissions", text: "How to apply, the sports-quota timeline and what to ask." },
];

export default function Overview() {
  return (
    <section id="overview" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="At a glance"
            title={<>Alva&rsquo;s English Medium High School, Moodbidri</>}
            intro={
              <>
                Run by {alvasFoundation.name} in {alvasSchool.place}, the school began in{" "}
                {alvasSchool.started} with 99 students and 7 teachers. It now has around {alvasSchool.students}{" "}
                students and {alvasSchool.teachers} teachers, with structured coaching in sports and the arts
                alongside the classroom.
              </>
            }
          />
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl bg-cream px-5 py-4 text-center ring-1 ring-navy/5 lg:text-left">
                <dt className="text-xs font-semibold uppercase tracking-wider text-navy/50">{f.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <nav aria-label="In this guide" className="rounded-[2rem] bg-navy p-6 text-white sm:p-8">
          <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-sun lg:text-left">
            In this guide
          </p>
          <ol className="mt-5 flex flex-col divide-y divide-white/10">
            {sections.map((s, i) => (
              <li key={s.href}>
                <a href={s.href} className="group flex items-start gap-4 py-4 transition hover:text-sun">
                  <span className="font-display text-sm font-bold text-sun">0{i + 1}</span>
                  <span>
                    <span className="block font-display font-semibold group-hover:text-sun">{s.title}</span>
                    <span className="mt-0.5 block text-sm text-white/65">{s.text}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
