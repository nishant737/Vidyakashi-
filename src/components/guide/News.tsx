import { alvasNews, guideUpdated } from "@/data/alvas";
import { SectionHeader } from "./ui";

export default function News() {
  return (
    <section id="news" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Latest"
            title="Alva's in 2026: news and milestones"
            intro="Results, sports, new courses and honours from the past year, each linked to the original report."
          />
          <p className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy/70 ring-1 ring-navy/10">
            Updated {guideUpdated}
          </p>
        </div>

        <ol className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {alvasNews.map((n) => (
            <li
              key={n.title}
              className={`flex flex-col rounded-[2rem] p-6 text-center lg:text-left ${
                n.upcoming ? "bg-navy text-white md:col-span-2 lg:col-span-1" : "bg-white ring-1 ring-navy/5"
              }`}
            >
              <p className={`font-display text-sm font-bold uppercase tracking-[0.12em] ${n.upcoming ? "text-sun" : "text-orange-deep"}`}>
                {n.upcoming ? `Coming up · ${n.date}` : n.date}
              </p>
              <h3 className={`mt-2 font-display text-lg font-semibold ${n.upcoming ? "text-white" : "text-navy"}`}>{n.title}</h3>
              <p className={`mt-2 flex-1 text-sm leading-relaxed ${n.upcoming ? "text-white/75" : "text-navy/70"}`}>{n.text}</p>
              <a
                href={n.source.url}
                target="_blank"
                rel="noopener"
                className={`mt-4 text-xs underline ${n.upcoming ? "text-white/50 hover:text-sun" : "text-navy/50 hover:text-orange-deep"}`}
              >
                Source: {n.source.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
