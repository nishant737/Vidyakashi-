import Image from "next/image";
import Link from "next/link";
import { alvasFoundation, alvasPu, alvasSchool } from "@/data/alvas";
import { site } from "@/data/site";

const guideLinks = [
  { href: "/#overview", label: "At a glance" },
  { href: "/#academics", label: "Academics & results" },
  { href: "/#sports", label: "Sports" },
  { href: "/#culture", label: "Culture" },
  { href: "/#founder", label: "The founder" },
  { href: "/#admissions", label: "Admissions" },
  { href: "/alvas-school-faq", label: "Alva's School FAQ" },
  ...(site.contactEnabled ? [{ href: "/#contact", label: "Contact Us" }] : []),
];

const officialLinks = [
  { href: alvasSchool.website, label: alvasSchool.name },
  { href: alvasPu.website, label: alvasPu.name },
  { href: alvasFoundation.website, label: alvasFoundation.name },
  { href: "https://karresults.nic.in", label: "Karnataka exam results" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-8">
        <div className="grid gap-12 pb-14 text-center lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-16 lg:text-left">
          {/* Brand */}
          <div className="mx-auto max-w-sm lg:mx-0">
            <Link href="/" className="inline-block rounded-2xl bg-cream px-4 py-3">
              <Image src="/logo.png" alt="Vidyakashi" width={421} height={283} className="h-14 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              A parent&rsquo;s guide to Alva&rsquo;s English Medium High School, Moodbidri, drawn from
              official school records and published news reports.
            </p>
            <p className="mt-3 text-xs text-white/50">Last reviewed: November 2026</p>
            {site.contactEnabled && (
              <ul className="mt-5 flex flex-col gap-2 text-sm text-white/80">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-sun">{site.email}</a>
                </li>
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-sun">{site.phone}</a>
                </li>
              </ul>
            )}
          </div>

          <FooterColumn title="In this guide">
            {guideLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-sun">{l.label}</Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Official links">
            {officialLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener" className="hover:text-sun">{l.label}</a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 py-6 text-center text-xs text-white/50 lg:justify-between lg:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Fees, results and admission rules change. Always confirm with the school.</p>
        </div>
      </div>
    </footer>
  );
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
