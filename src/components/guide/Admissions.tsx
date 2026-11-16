import Link from "next/link";
import { alvasSchool } from "@/data/alvas";
import { Arrow } from "../Navbar";
import { Bullet, card, SectionHeader } from "./ui";

const steps = [
  { title: "Contact the admissions office", text: "Ask about seats for your child's class, the board, and the full cost including hostel and food." },
  { title: "Visit the campus", text: "See the classrooms, hostel and sports facilities, and ask about supervision and visiting rules." },
  { title: "Apply for the sports quota if relevant", text: "For classes 8 to 10, watch for notifications in March and April and prepare for the 20-day selection camp." },
];

const askAbout = [
  "Current fees, as these are not published online",
  "The latest SSLC results for the high school",
  "Which board applies to your child's class",
  "Hostel supervision, phone contact and visiting days",
];

export default function Admissions() {
  return (
    <section id="admissions" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Admissions"
          title="How to apply to Alva's School"
          intro="Admissions are handled directly by the school office. These steps help you prepare."
        />

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className={`${card} text-center lg:text-left`}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun font-display font-bold text-navy">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={card}>
            <h3 className="text-center font-display text-xl font-semibold text-navy lg:text-left">Questions to ask</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-navy/80">
              {askAbout.map((a) => (
                <Bullet key={a}>{a}</Bullet>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-[2rem] bg-navy p-6 text-white sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold lg:text-left">School office</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li>
                <a href={`tel:${alvasSchool.phone.replace(/\s/g, "")}`} className="block rounded-2xl bg-white/5 px-4 py-3 font-semibold ring-1 ring-white/10 transition hover:bg-white/10">
                  {alvasSchool.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${alvasSchool.email}`} className="block break-all rounded-2xl bg-white/5 px-4 py-3 font-semibold ring-1 ring-white/10 transition hover:bg-white/10">
                  {alvasSchool.email}
                </a>
              </li>
              <li className="rounded-2xl bg-white/5 px-4 py-3 text-white/85 ring-1 ring-white/10">
                {alvasSchool.address.street}, {alvasSchool.address.locality} {alvasSchool.address.postalCode},
                Dakshina Kannada, Karnataka
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={alvasSchool.website}
                target="_blank"
                rel="noopener"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-5 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5"
              >
                Official school website
                <Arrow />
              </a>
              <Link
                href="/alvas-school-faq"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-white/25 px-5 py-3.5 font-display text-sm font-semibold transition hover:bg-white hover:text-navy"
              >
                Read the full FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
