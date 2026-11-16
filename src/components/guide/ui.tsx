import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
      <p className={`font-display text-sm font-semibold uppercase tracking-[0.18em] ${dark ? "text-sun" : "text-orange"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px] ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-navy/75"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Sources({ links, dark = false }: { links: { label: string; url: string }[]; dark?: boolean }) {
  return (
    <p className={`text-center text-xs lg:text-left ${dark ? "text-white/50" : "text-navy/50"}`}>
      Sources:{" "}
      {links.map((l, i) => (
        <span key={l.url}>
          {i > 0 && ", "}
          <a href={l.url} target="_blank" rel="noopener" className={`underline ${dark ? "hover:text-sun" : "hover:text-orange-deep"}`}>
            {l.label}
          </a>
        </span>
      ))}
    </p>
  );
}

export function Bullet({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className="flex gap-2.5">
      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dark ? "bg-sun" : "bg-orange"}`} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export const card = "rounded-[2rem] bg-white p-6 shadow-[0_10px_40px_-15px_rgba(27,31,94,0.25)] ring-1 ring-navy/5 sm:p-8";
