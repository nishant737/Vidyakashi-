import { alvasFoundation, nudisiri } from "@/data/alvas";
import { Bullet, card, SectionHeader, Sources } from "./ui";

const schoolActivities = [
  "Classical and folk art forms",
  "Dance and music, vocal and instrumental",
  "Scouts and Guides",
  "Yoga, drawing and abacus classes",
];

const festival = [
  { day: "6 Jan", text: "Virasat opens with a cultural procession and Ganga Aarti" },
  { day: "8 Jan", text: "Alva's Vidyarthisiri, a dedicated day for students" },
  { day: "9 Jan", text: "Alva's Yuvasiri, a day for young people" },
  { day: "6-10 Jan", text: "Literary sessions, Virasat Awards, a Scouts and Guides Jamboree and five exhibitions" },
];

export default function Culture() {
  return (
    <section id="culture" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeader
          eyebrow="Culture"
          title="Arts and heritage taught with the same structure as academics"
          intro="The foundation's stated aim is to give students a strong cultural identity, and it runs dedicated training centres for traditional and classical arts."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {alvasFoundation.artsCentres.map((c) => (
            <article key={c.name} className="rounded-[2rem] bg-cream p-6 text-center ring-1 ring-navy/5 lg:text-left">
              <h3 className="font-display text-lg font-semibold text-navy">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{c.focus}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className={card}>
            <h3 className="text-center font-display text-xl font-semibold text-navy lg:text-left">In school</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-navy/80">
              {schoolActivities.map((a) => (
                <Bullet key={a}>{a}</Bullet>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-navy p-6 text-white sm:p-8">
            <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-sun lg:text-left">
              Coming up · {nudisiri.place}
            </p>
            <h3 className="mt-2 text-center font-display text-2xl font-bold lg:text-left">
              {nudisiri.combinedName}, {nudisiri.dates}
            </h3>
            <p className="mt-2 text-center text-sm text-white/70 lg:text-left">
              The {nudisiri.nudisiriEdition} Nudisiri literary festival and {nudisiri.virasatEdition} Virasat cultural
              festival, held together on the theme &ldquo;{nudisiri.theme}&rdquo;. The foundation says Nudisiri has
              grown from about 4,000 to about 9,000 delegates a year, with free board and lodging.
            </p>
            <ul className="mt-5 flex flex-col divide-y divide-white/10">
              {festival.map((f) => (
                <li key={f.day} className="flex gap-4 py-3 text-sm">
                  <span className="w-20 shrink-0 font-display font-bold text-sun">{f.day}</span>
                  <span className="text-white/85">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Sources
            links={[
              { label: "about Alva's Schools", url: alvasFoundation.aboutSource },
              { label: "foundation vision", url: alvasFoundation.visionSource },
              { label: "Daijiworld, October 2026", url: "https://daijiworld.com/news/newsDisplay?newsID=1328964" },
              { label: "Alva's Nudisiri", url: "https://alvas.org/alvas-celebrations/alvas-nudisiri/" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
