import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Navbar";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[640px] overflow-hidden bg-cream pt-20 lg:min-h-[720px]">
      {/* Photo on the right, faded into the cream background on the left */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[68%]">
        <Image
          src="/hero-india.jpg"
          alt="Schoolgirl in uniform with classmates in an Indian classroom"
          fill
          priority
          sizes="(min-width: 1024px) 68vw, 100vw"
          className="object-cover object-[45%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/70 to-transparent lg:via-cream/30" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        <div className="absolute inset-0 bg-cream/60 lg:hidden" />
      </div>

      {/* Soft yellow glow, bottom-left */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-80 w-80 rounded-full bg-sun/50 blur-3xl" />

      <div className="mx-auto flex max-w-7xl items-center px-4 py-24 sm:px-8 lg:py-36">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Education for a{" "}
            <span className="relative inline-block">
              Brighter
              <Swoosh />
            </span>{" "}
            Future
          </h1>

          <p className="mt-6 max-w-md text-base text-navy/75 sm:text-lg">
            Discover the best colleges in Karnataka for your course —
            engineering, medical, PU, Ayurveda, hotel management and more — all in one place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
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
