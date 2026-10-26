import { nudisiri } from "@/data/alvas";
import { Arrow } from "./Navbar";

const highlights = [
  { title: "Nudisiri literary meet", body: "Kannada literary sessions, talks and the Nudisiri convention." },
  { title: "Virasat cultural evenings", body: "Classical and folk performances, a cultural procession and the Virasat Awards." },
  { title: "Vidyarthisiri & Yuvasiri", body: "Dedicated days for students (8 Jan) and youth (9 Jan)." },
  { title: "Scouts & Guides Jamboree", body: "A state-level jamboree with over 5,000 expected participants." },
  { title: "Five exhibitions", body: "Agriculture, science, food, literature and art." },
  { title: "Hasiru Samvada", body: "A green initiative on conserving coastal rivers across 50 villages." },
];

export default function Nudisiri() {
  return (
    <section id="nudisiri" className="relative scroll-mt-24 overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-sun/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-sun">
            Events · Coming up
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            {nudisiri.name}: Moodbidri&rsquo;s festival of Kannada literature &amp; culture
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            Alva&rsquo;s Nudisiri is the Kannada literary and cultural festival organised by Alva&rsquo;s
            Education Foundation in Moodbidri. In 2027 it joins the Alva&rsquo;s Virasat cultural festival as{" "}
            <strong className="text-white">{nudisiri.combinedName}</strong>, the {nudisiri.nudisiriEdition} Nudisiri
            and {nudisiri.virasatEdition} Virasat.
          </p>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 lg:mx-0">
            <div className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Dates</p>
              <p className="mt-1 font-display text-lg font-semibold text-sun">{nudisiri.dates}</p>
            </div>
            <div className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Venue</p>
              <p className="mt-1 font-display text-lg font-semibold text-sun">{nudisiri.place}</p>
            </div>
            <div className="col-span-2 rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">Theme</p>
              <p className="mt-1 font-display text-lg font-semibold text-sun">&ldquo;{nudisiri.theme}&rdquo;</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            <a
              href={nudisiri.website}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5"
            >
              Visit Alva&rsquo;s Education Foundation
              <Arrow />
            </a>
            <a href={nudisiri.source} target="_blank" rel="noopener" className="text-xs text-white/50 underline hover:text-sun">
              Source: News Karnataka
            </a>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <li
              key={h.title}
              className="rounded-3xl bg-white/5 p-6 text-center ring-1 ring-white/10 transition hover:bg-white/10 sm:text-left"
            >
              <span className="font-display text-sm font-bold text-sun">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/70">{h.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
