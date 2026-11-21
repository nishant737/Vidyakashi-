import { alvasOlympians, alvasSchool } from "@/data/alvas";
import { Bullet, SectionHeader, Sources } from "./ui";

const facilities = [
  "Playground with a 400 m synthetic track",
  "Separate coaches for different events",
  "24×7 medical facility on campus",
];

const quota = [
  "Open to students in classes 8 to 10",
  "Athletics for boys and girls, basketball for girls",
  "Notifications published in March and April",
  "Selection through a 20-day camp at the foundation",
  "Selected students receive free hostel, food and coaching",
];

export default function Sports() {
  return (
    <section id="sports" className="relative scroll-mt-24 overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-orange/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          dark
          eyebrow="Sports"
          title="Where talent is coached, not just encouraged"
          intro="Alva's runs structured coaching alongside school. A 2021 report said the foundation had adopted more than 5,000 sportspersons, and in September 2026 its athletes won 26 medals and set five meet records at the South Zone Junior Athletics Championship."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold lg:text-left">Facilities</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-white/80">
              {facilities.map((f) => (
                <Bullet key={f} dark>
                  {f}
                </Bullet>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
            <h3 className="text-center font-display text-xl font-semibold lg:text-left">The free sports quota</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-white/80">
              {quota.map((q) => (
                <Bullet key={q} dark>
                  {q}
                </Bullet>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-white p-6 text-navy sm:p-8">
          <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <h3 className="font-display text-xl font-semibold">Olympians linked to Alva&rsquo;s</h3>
            <p className="font-display text-sm font-semibold text-orange-deep">
              {alvasOlympians.athletes.length} athletes, Atlanta 1996 to Tokyo 2020
            </p>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {alvasOlympians.athletes.map((a) => (
              <li key={a.name} className="rounded-2xl bg-cream px-4 py-3 text-center lg:text-left">
                <p className="font-semibold">{a.name}</p>
                <p className="text-xs text-navy/60">
                  {a.sport} · {a.games}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Sources
            dark
            links={[
              { label: "school website", url: alvasSchool.website },
              { label: "The Tribune, July 2021", url: alvasOlympians.source },
              { label: "Udayavani, September 2026", url: "https://udayavani.com/karnataka/alvas-athletes-win-26-medals-set-five-new-meet-records-466181?lang=en" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
