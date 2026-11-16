import { schools } from "@/data/schools";
import { SectionHeader } from "./ui";

export default function OtherSchools() {
  return (
    <section id="other-schools" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Compare"
          title="Other schools to consider"
          intro="Comparing a few schools helps you judge fit. These are well-regarded options in coastal Karnataka and Bengaluru, linked to their official websites."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((s) => (
            <li key={s.name}>
              <a
                href={s.website}
                target="_blank"
                rel="noopener"
                className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-navy/5 transition hover:-translate-y-0.5 hover:ring-orange/40"
              >
                <span className="min-w-0">
                  <span className="block font-display font-semibold text-navy group-hover:text-orange-deep">{s.name}</span>
                  <span className="mt-0.5 block text-sm text-navy/60">
                    {s.place}
                    {s.board && ` · ${s.board}`}
                  </span>
                </span>
                <span className="text-orange-deep" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
