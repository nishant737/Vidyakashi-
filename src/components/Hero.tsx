import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Navbar";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream pt-24 lg:min-h-[720px] lg:pt-20">
      {/* Desktop: photo on the right, faded into the cream background */}
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[68%] lg:block">
        <Image
          src="/hero-india.jpg"
          alt="Schoolgirl in uniform with classmates in an Indian classroom"
          fill
          priority
          sizes="(min-width: 1024px) 68vw, 1px"
          className="object-cover object-[45%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </div>

      {/* Soft yellow glow, bottom-left */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-sun/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-8 lg:flex lg:items-center lg:py-36">
        <div className="max-w-xl">
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Education for a{" "}
            <span className="relative inline-block">
              Brighter
              <Swoosh />
            </span>{" "}
            Future
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-navy/75 sm:text-lg">
            Discover the best colleges in Karnataka for your course —
            engineering, medical, PU, Ayurveda, hotel management and more — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-9">
            <Link
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-8 py-4 font-display text-sm font-semibold text-white shadow-xl shadow-orange/30 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange/40"
            >
              Find your college
              <Arrow />
            </Link>
            <Link
              href="#about"
              className="font-display text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Mobile & tablet: photo as a rounded card below the text */}
        <div className="relative mt-10 lg:hidden">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-sun/40 blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_-20px_rgba(27,31,94,0.35)] ring-4 ring-white sm:aspect-[16/9]">
            <Image
              src="/hero-india.jpg"
              alt="Schoolgirl in uniform with classmates in an Indian classroom"
              fill
              priority
              sizes="(min-width: 1024px) 1px, 100vw"
              className="object-cover object-[50%_35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Swoosh() {
  return (
    <svg
      viewBox="0 0 220 18"
      preserveAspectRatio="none"
      className="absolute -bottom-2 -left-3 h-3 w-[110%] text-sun"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 13C50 5 120 2 217 6"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
