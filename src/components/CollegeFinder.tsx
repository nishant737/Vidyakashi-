"use client";

import { useMemo, useRef, useState } from "react";
import {
  colleges,
  courses,
  inLocation,
  locations,
  sortFeaturedFirst,
  type College,
  type CollegeType,
  type Course,
} from "@/data/colleges";

type Filter<T extends string> = T | "All";

const PAGE_SIZE = 6;

const field =
  "block h-12 w-full rounded-2xl border border-navy/10 bg-cream px-4 text-sm text-navy shadow-none outline-none transition hover:border-navy/25 focus:border-orange focus:bg-white focus:ring-4 focus:ring-orange/15";

export default function CollegeFinder({ initialCourse }: { initialCourse: Filter<Course> }) {
  const [course, setCourse] = useState(initialCourse);
  const [location, setLocation] = useState<Filter<string>>("All");
  const [type, setType] = useState<Filter<CollegeType>>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortFeaturedFirst(
      colleges.filter(
        (c) =>
          (course === "All" || c.courses.includes(course)) &&
          (location === "All" || inLocation(c, location)) &&
          (type === "All" || c.type === type) &&
          (q === "" || c.name.toLowerCase().includes(q)),
      ),
    );
  }, [course, location, type, query]);

  // Page resets to 1 whenever any filter changes.
  const filterKey = [course, location, type, query].join("|");
  const [pageState, setPageState] = useState({ key: filterKey, page: 1 });
  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = pageState.key === filterKey ? Math.min(pageState.page, pageCount) : 1;
  const start = (page - 1) * PAGE_SIZE;
  const end = Math.min(start + PAGE_SIZE, results.length);

  const resultsRef = useRef<HTMLDivElement>(null);
  function goToPage(next: number) {
    setPageState({ key: filterKey, page: next });
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const isFiltered =
    course !== "All" || location !== "All" || type !== "All" || query !== "";

  function reset() {
    setCourse("All");
    setLocation("All");
    setType("All");
    setQuery("");
  }

  return (
    <div>
      {/* Filters */}
      <div className="rounded-3xl bg-white p-5 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.2)] ring-1 ring-navy/5 sm:p-7">
        <div>
          <p className="font-display text-sm font-semibold text-navy">Course</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["All", ...courses] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCourse(c)}
                aria-pressed={course === c}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  course === c
                    ? "bg-gradient-to-r from-orange to-orange-deep text-white shadow-md shadow-orange/30"
                    : "border border-navy/10 bg-cream text-navy hover:border-orange"
                }`}
              >
                {c === "All" ? "All courses" : c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <label className="block">
            <span className="font-display text-sm font-semibold text-navy">Location</span>
            <div className="relative mt-2">
              <PinIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/50" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`${field} cursor-pointer appearance-none pl-11 pr-11 font-medium`}
              >
                <option value="All">All of Karnataka</option>
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <svg viewBox="0 0 20 20" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/60" fill="currentColor" aria-hidden="true">
                <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
              </svg>
            </div>
          </label>

          <div>
            <span className="font-display text-sm font-semibold text-navy">Type</span>
            <div className="mt-2 grid h-12 grid-cols-3 gap-1 rounded-2xl border border-navy/10 bg-cream p-1">
              {(["All", "Government", "Private"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  aria-pressed={type === t}
                  className={`rounded-xl text-sm font-medium transition ${
                    type === t ? "bg-navy text-white shadow" : "text-navy hover:bg-white"
                  }`}
                >
                  {t === "Government" ? "Govt" : t}
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="font-display text-sm font-semibold text-navy">Search</span>
            <div className="relative mt-2">
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/50" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                inputMode="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="College name…"
                className={`${field} appearance-none pl-11 placeholder:text-navy/40`}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Result summary */}
      <div ref={resultsRef} className="mt-8 flex scroll-mt-28 items-center justify-between gap-4">
        <p className="text-sm text-navy/70" aria-live="polite">
          Showing{" "}
          {results.length > PAGE_SIZE && (
            <>
              <strong className="text-navy">
                {start + 1}–{end}
              </strong>{" "}
              of{" "}
            </>
          )}
          <strong className="text-navy">{results.length}</strong>{" "}
          {results.length === 1 ? "college" : "colleges"}
          {course !== "All" && (
            <>
              {" "}for <strong className="text-navy">{course}</strong>
            </>
          )}
          {location !== "All" && (
            <>
              {" "}in <strong className="text-navy">{location}</strong>
            </>
          )}
        </p>
        {isFiltered && (
          <button
            type="button"
            onClick={reset}
            className="text-sm font-semibold text-orange hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Every result stays in the HTML (so all links are crawlable);
              only the current page is shown. */}
          {results.map((c, i) => (
            <li key={c.name} className={i >= start && i < end ? "animate-card-in" : "hidden"}>
              <CollegeCard college={c} highlight={course} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 rounded-3xl border-2 border-dashed border-navy/10 px-6 py-14 text-center">
          <p className="font-display text-lg font-semibold text-navy">
            No colleges match these filters
          </p>
          <p className="mt-1 text-sm text-navy/60">
            Try another location or course.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
          >
            Clear filters
          </button>
        </div>
      )}

      {pageCount > 1 && (
        <Pagination page={page} pageCount={pageCount} onChange={goToPage} />
      )}
    </div>
  );
}

function Pagination({
  page,
  pageCount,
  onChange,
}: {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}) {
  const arrow =
    "inline-flex h-11 items-center gap-1.5 rounded-full border border-navy/10 bg-white px-4 text-sm font-semibold text-navy transition hover:border-orange hover:text-orange-deep disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav aria-label="College results pages" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button type="button" onClick={() => onChange(page - 1)} disabled={page === 1} className={arrow}>
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M12.7 4.3a1 1 0 0 1 0 1.4L8.4 10l4.3 4.3a1 1 0 0 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0Z" />
        </svg>
        <span className="hidden sm:inline">Prev</span>
      </button>

      {pageItems(page, pageCount).map((item, i) =>
        item === "…" ? (
          <span key={`gap-${i}`} className="px-1 text-sm text-navy/40">…</span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-current={item === page ? "page" : undefined}
            aria-label={`Page ${item}`}
            className={`h-11 min-w-11 rounded-full px-3 text-sm font-semibold transition ${
              item === page
                ? "bg-gradient-to-r from-orange to-orange-deep text-white shadow-md shadow-orange/30"
                : "border border-navy/10 bg-white text-navy hover:border-orange"
            }`}
          >
            {item}
          </button>
        ),
      )}

      <button type="button" onClick={() => onChange(page + 1)} disabled={page === pageCount} className={arrow}>
        <span className="hidden sm:inline">Next</span>
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M7.3 15.7a1 1 0 0 1 0-1.4L11.6 10 7.3 5.7a1 1 0 0 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0Z" />
        </svg>
      </button>
    </nav>
  );
}

/** Page numbers with ellipses, e.g. 1 … 4 5 6 … 12 */
function pageItems(page: number, pageCount: number): (number | "…")[] {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);
  const items: (number | "…")[] = [1];
  const from = Math.max(2, page - 1);
  const to = Math.min(pageCount - 1, page + 1);
  if (from > 2) items.push("…");
  for (let p = from; p <= to; p++) items.push(p);
  if (to < pageCount - 1) items.push("…");
  items.push(pageCount);
  return items;
}

function CollegeCard({ college, highlight }: { college: College; highlight: string }) {
  const initials = college.name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <a
      href={college.website}
      target="_blank"
      rel="noopener"
      className={`group relative flex h-full flex-col rounded-3xl bg-white p-6 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.2)] transition hover:-translate-y-1 ${
        college.featured ? "ring-2 ring-sun" : "ring-1 ring-navy/5 hover:ring-orange/40"
      }`}
    >
      {college.featured && (
        <span className="absolute -top-3 right-5 rounded-full bg-sun px-3 py-1 font-display text-xs font-bold text-navy shadow">
          ★ Featured
        </span>
      )}
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sun/30 font-display text-sm font-bold text-navy">
          {initials}
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold leading-snug text-navy group-hover:text-orange-deep">
            {college.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-navy/60">
            <PinIcon className="h-4 w-4 shrink-0" />
            {college.area ? `${college.area}, ${college.city}` : college.city}
          </p>
        </div>
      </div>

      {college.programs && (
        <p className="mt-4 text-sm font-medium text-navy/80">{college.programs}</p>
      )}

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {college.courses.map((c) => (
          <li
            key={c}
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              c === highlight ? "bg-orange text-white" : "bg-cream text-navy/80 ring-1 ring-navy/10"
            }`}
          >
            {c}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-6">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            college.type === "Government" ? "bg-navy/10 text-navy" : "bg-sun/30 text-navy"
          }`}
        >
          {college.type}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-deep">
          Visit website
          <svg viewBox="0 0 20 20" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="currentColor" aria-hidden="true">
            <path d="M6 4a1 1 0 0 0 0 2h6.6l-8.3 8.3a1 1 0 1 0 1.4 1.4L14 7.4V14a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H6Z" />
          </svg>
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </div>
    </a>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" strokeLinejoin="round" />
    </svg>
  );
}
