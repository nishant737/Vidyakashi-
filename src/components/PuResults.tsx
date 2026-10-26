import { alvasPu } from "@/data/alvas";
import { puc2026 } from "@/data/schools";

export default function PuResults() {
  const [headline, ...rest] = puc2026.toppers;

  return (
    <section id="results" className="relative scroll-mt-24 overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-sun/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            Results
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Karnataka II PUC 2026 toppers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            The state recorded a {puc2026.passPercentage} pass percentage, with coastal Karnataka
            leading the way:{" "}
            {puc2026.topDistricts.map((d, i) => (
              <span key={d.name}>
                {i > 0 && " and "}
                <strong className="text-navy">{d.name}</strong> ({d.pass})
              </span>
            ))}
            .
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* State topper */}
          <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-center text-white sm:p-10 lg:text-left">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sun/25 blur-2xl" />
            <p className="relative inline-flex rounded-full bg-sun px-3 py-1 font-display text-xs font-bold text-navy">
              {headline.stream} · {headline.note}
            </p>
            <p className="relative mt-6 font-display text-6xl font-bold sm:text-7xl">
              600<span className="text-3xl text-white/60 sm:text-4xl">/600</span>
            </p>
            <h3 className="relative mt-4 font-display text-2xl font-semibold">{headline.names}</h3>
            <p className="relative mt-1 text-white/70">{headline.college}</p>
            <p className="relative mt-4 text-sm leading-relaxed text-white/70">
              A perfect score and the state&rsquo;s first rank in Commerce. {alvasPu.name} also had
              four state 2nd rank holders in 2025.
            </p>
            <a
              href={alvasPu.website}
              target="_blank"
              rel="noopener"
              className="relative mt-5 inline-block font-display text-sm font-semibold text-sun hover:underline"
            >
              Visit Alva&rsquo;s PU College →
            </a>
          </div>

          {/* Other toppers */}
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)] ring-1 ring-navy/5 sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold text-navy sm:text-left">
              More top scorers across Karnataka
            </h3>
            <ul className="mt-6 flex flex-col divide-y divide-navy/5">
              {rest.map((t) => (
                <li key={t.names} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4">
                  <div className="min-w-0">
                    <p className="font-semibold text-navy">{t.names}</p>
                    <p className="text-sm text-navy/60">
                      {t.college} · {t.stream}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-bold text-navy">{t.score}</p>
                    {t.note && <p className="text-xs font-semibold text-orange-deep">{t.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-navy/50">
              Sources:{" "}
              <a href={puc2026.toppersSource} target="_blank" rel="noopener" className="underline hover:text-orange-deep">
                Daijiworld
              </a>
              ,{" "}
              <a href={puc2026.statsSource} target="_blank" rel="noopener" className="underline hover:text-orange-deep">
                Careers360
              </a>
              . Official results: karresults.nic.in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
