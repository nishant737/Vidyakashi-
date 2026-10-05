import { site } from "@/data/site";
import ContactForm, { WhatsAppIcon } from "./ContactForm";

const details = [
  {
    label: "Call us",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" strokeLinejoin="round" />,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <path d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" strokeLinejoin="round" />,
  },
  {
    label: "Location",
    value: site.address,
    icon: <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" strokeLinejoin="round" />,
  },
  {
    label: "Hours",
    value: site.hours,
    icon: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-sun/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-orange">
            Contact us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[44px]">
            Confused about which college to pick?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/75 sm:text-lg">
            Talk to us. Share your course, marks and preferred city — we&rsquo;ll
            help you compare colleges and understand the admission process.
          </p>

          <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {details.map((d) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sun/30 text-navy">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      {d.icon}
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-navy/50">
                      {d.label}
                    </span>
                    <span className="mt-0.5 block break-words text-sm font-semibold text-navy">
                      {d.value}
                    </span>
                  </span>
                </>
              );
              const cls =
                "flex h-full items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-navy/5";
              return (
                <li key={d.label}>
                  {d.href ? (
                    <a href={d.href} className={`${cls} transition hover:ring-orange/40`}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
