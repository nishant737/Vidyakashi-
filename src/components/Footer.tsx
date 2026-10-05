import Image from "next/image";
import Link from "next/link";
import { courses, locations } from "@/data/colleges";
import { featuredPartner, site } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#categories", label: "Find colleges" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-8">
        {/* Featured partner strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-3xl bg-white/5 px-6 py-5 text-center ring-1 ring-white/10 lg:justify-between lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/80 lg:justify-start">
            <span className="inline-flex items-center rounded-full bg-sun px-3 py-1 font-display text-xs font-bold text-navy">
              ★ Featured
            </span>
            <span>
              <a href={featuredPartner.website} target="_blank" rel="noopener" className="font-semibold text-white hover:text-sun">
                {featuredPartner.name}
              </a>
              <span className="text-white/60"> — {featuredPartner.place}</span>
            </span>
          </div>
          <a
            href={featuredPartner.website}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 whitespace-nowrap font-display text-sm font-semibold text-sun hover:underline"
          >
            Visit Alva&rsquo;s →
          </a>
        </div>

        <div className="grid gap-12 py-14 text-center lg:grid-cols-[1fr_2fr] lg:gap-16 lg:text-left">
          {/* Brand */}
          <div className="mx-auto max-w-sm lg:mx-0">
            <Link href="/" className="inline-block rounded-2xl bg-cream px-4 py-3">
              <Image src="/logo.png" alt="Vidyakashi" width={421} height={283} className="h-14 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Your guide to the best colleges in Karnataka — compare by course
              and location, and go straight to each college&rsquo;s official website.
            </p>
            <ul className="mt-5 flex flex-col gap-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-sun">{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-sun">{site.phone}</a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            <FooterColumn title="Quick links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-sun">{l.label}</Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Courses">
              {courses.map((c) => (
                <li key={c}>
                  <Link href={`/?course=${encodeURIComponent(c)}#categories`} className="hover:text-sun">
                    {courseLabel(c)}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Locations">
              {locations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 py-6 text-center text-xs text-white/50 lg:justify-between lg:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>College details are for guidance — always confirm with the official college website.</p>
        </div>
      </div>
    </footer>
  );
}

function courseLabel(course: string) {
  if (course === "High School") return "High schools";
  if (course === "PU College") return "PU colleges";
  return `${course} colleges`;
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-sun">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/75">{children}</ul>
    </div>
  );
}
