// schema.org structured data shared by the pages. Every value here must match
// text that is visible on the site, so search engines and AI tools can trust it.
import { alvasEvents, alvasFoundation, alvasPu, alvasSchool, guideUpdatedISO } from "./alvas";
import { site } from "./site";

const id = (name: string) => `${site.url}/#${name}`;

const moodbidriAddress = {
  "@type": "PostalAddress",
  addressLocality: alvasSchool.address.locality,
  addressRegion: alvasSchool.address.region,
  postalCode: alvasSchool.address.postalCode,
  addressCountry: "IN",
};

export const organization = {
  "@type": "Organization",
  "@id": id("organization"),
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
};

export const website = {
  "@type": "WebSite",
  "@id": id("website"),
  name: site.name,
  url: site.url,
  inLanguage: "en-IN",
  publisher: { "@id": id("organization") },
};

export const school = {
  "@type": "HighSchool",
  "@id": id("alvas-high-school"),
  name: alvasSchool.name,
  alternateName: ["Alva's High School", "Alva's School Moodbidri"],
  url: alvasSchool.website,
  sameAs: [alvasSchool.website],
  telephone: alvasSchool.phone,
  email: alvasSchool.email,
  foundingDate: String(alvasSchool.started),
  address: { ...moodbidriAddress, streetAddress: alvasSchool.address.street },
  parentOrganization: { "@id": id("alvas-foundation") },
};

export const foundation = {
  "@type": "EducationalOrganization",
  "@id": id("alvas-foundation"),
  name: alvasFoundation.name,
  url: alvasFoundation.website,
  sameAs: [alvasFoundation.website],
  foundingDate: String(alvasFoundation.founded),
  founder: { "@id": id("mohan-alva") },
  address: moodbidriAddress,
  subOrganization: [
    { "@id": id("alvas-high-school") },
    { "@type": "EducationalOrganization", name: alvasPu.name, url: alvasPu.website },
  ],
};

export const founder = {
  "@type": "Person",
  "@id": id("mohan-alva"),
  name: alvasFoundation.founder,
  description: "Physician and philanthropist; founder and chairman of Alva's Education Foundation, Moodbidri.",
  award: ["FRAV Fellowship, Rashtriya Ayurveda Vidyapeeth (2026)", "Yakshadhruva Mahaposaka Award (2026)"],
  worksFor: { "@id": id("alvas-foundation") },
};

export const events = alvasEvents.map((e) => ({
  "@type": "Event",
  name: e.name,
  description: e.description,
  startDate: e.startDate,
  endDate: e.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  ...(e.free ? { isAccessibleForFree: true } : {}),
  location: { "@type": "Place", name: e.venue, address: moodbidriAddress },
  organizer: { "@id": id("alvas-foundation") },
  url: e.source,
}));

/** The web page node: tells search engines what a page is about and when it changed. */
export function webPage(path: string, name: string, description: string) {
  return {
    "@type": "WebPage",
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    inLanguage: "en-IN",
    dateModified: guideUpdatedISO,
    isPartOf: { "@id": id("website") },
    about: [{ "@id": id("alvas-high-school") }, { "@id": id("alvas-foundation") }],
    publisher: { "@id": id("organization") },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
