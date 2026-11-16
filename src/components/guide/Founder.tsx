import { alvasFoundation } from "@/data/alvas";
import { SectionHeader, Sources } from "./ui";

export default function Founder() {
  return (
    <section id="founder" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="The founder"
            title={alvasFoundation.founder}
            intro={
              <>
                A physician and philanthropist, {alvasFoundation.founder} founded {alvasFoundation.name} in
                Moodbidri, which began in {alvasFoundation.founded}. The foundation describes itself as built on
                discipline, punctuality, humility and fulfilment.
              </>
            }
          />
          <blockquote className="mt-8 border-l-4 border-sun pl-5 text-left text-lg leading-relaxed text-navy/80">
            The foundation&rsquo;s stated vision: young people rooted in their culture can drive social
            growth and reach the wider world.
          </blockquote>
          <div className="mt-8">
            <Sources
              links={[
                { label: "about Alva's Schools", url: alvasFoundation.aboutSource },
                { label: "foundation vision", url: alvasFoundation.visionSource },
              ]}
            />
          </div>
        </div>

        <div className="rounded-[2rem] bg-navy p-6 text-white sm:p-8">
          <h3 className="text-center font-display text-xl font-semibold lg:text-left">
            Free education through the adoption scheme
          </h3>
          <p className="mt-2 text-center text-sm text-white/70 lg:text-left">
            The foundation says these students receive free education with boarding and lodging:
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {alvasFoundation.adoptionScheme.map((g) => (
              <li key={g} className="flex items-start gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10">
                <span className="text-sun" aria-hidden="true">✓</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
