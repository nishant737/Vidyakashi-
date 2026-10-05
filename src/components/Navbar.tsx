import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home", active: true },
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-display text-sm font-semibold transition-colors ${
                  link.active
                    ? "relative text-orange after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-orange"
                    : "text-navy hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange to-orange-deep px-4 py-2 font-display text-sm sm:px-5 sm:py-2.5 font-semibold text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange/40"
        >
          Get guidance
          <Arrow />
        </Link>
      </nav>
    </header>
  );
}

export function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M11.3 4.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L14.6 11H3a1 1 0 1 1 0-2h11.6l-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}
