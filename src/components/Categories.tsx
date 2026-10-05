import { courses } from "@/data/colleges";
import CollegeFinder from "./CollegeFinder";

export default function Categories({ course }: { course?: string }) {
  // Links like "/?course=Engineering#categories" pre-select a course.
  const initialCourse = courses.find((c) => c === course) ?? "All";

  return (
    <section id="categories" className="scroll-mt-24 bg-cream pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            Categories
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Find colleges by course &amp; location
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Pick a course and a city to see matching colleges across
            Karnataka. Click any college to visit its official website.
          </p>
        </div>

        <div className="mt-10">
          <CollegeFinder key={initialCourse} initialCourse={initialCourse} />
        </div>
      </div>
    </section>
  );
}
