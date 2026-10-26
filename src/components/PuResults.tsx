import { alvasPu, puToppers } from "@/data/alvas";
import { Arrow } from "./Navbar";

export default function PuResults() {
  const [headline, ...rest] = puToppers;

  return (
    <section id="results" className="relative scroll-mt-24 overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-sun/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            After high school · Alva&rsquo;s PU College
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Alva&rsquo;s PU toppers in Karnataka
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            After class 10, students can continue at {alvasPu.name} in Moodbidri — whose
            students regularly feature among Karnataka&rsquo;s II PUC state rank holders.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* 2026 state topper */}
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-center text-white sm:p-10 lg:text-left">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sun/25 blur-2xl" />
            <p className="relative inline-flex rounded-full bg-sun px-3 py-1 font-display text-xs font-bold text-navy">
              II PUC {headline.year} · {headline.rank}
            </p>
            <p className="relative mt-6 font-display text-6xl font-bold sm:text-7xl">
              {headline.marks}
              <span className="text-3xl text-white/60 sm:text-4xl">/600</span>
            </p>
            <h3 className="relative mt-4 font-display text-2xl font-semibold">
              {headline.name} — {headline.stream}
            </h3>
            <p className="relative mt-2 text-white/70">
              A perfect score and the first rank in Karnataka in the {headline.stream} stream.
            </p>
            <a
              href={headline.source}
              target="_blank"
              rel="noopener"
              className="relative mt-4 inline-block text-xs text-white/50 underline hover:text-sun"
            >
              Source: Daijiworld, 9 April {headline.year}
            </a>
          </div>

          {/* 2025 rank holders */}
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)] ring-1 ring-navy/5 sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold text-navy sm:text-left">
              II PUC {rest[0].year} — four state 2nd rank holders
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {rest.map((t) => (
                <li key={t.name} className="rounded-2xl bg-cream p-5 ring-1 ring-navy/5">
                  <p className="font-display text-3xl font-bold text-navy">
                    {t.marks}
                    <span className="text-base text-navy/50">/600</span>
                  </p>
                  <p className="mt-2 font-semibold text-navy">{t.name}</p>
                  <p className="text-sm text-navy/60">
                    {t.stream} · {t.rank}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-between">
              <a
                href={rest[0].source}
                target="_blank"
                rel="noopener"
                className="text-xs text-navy/50 underline hover:text-orange-deep"
              >
                Source: Alva&rsquo;s PU College
              </a>
              <a
                href={alvasPu.website}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-5 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5"
              >
                Visit Alva&rsquo;s PU College
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
