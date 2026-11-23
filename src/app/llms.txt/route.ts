import {
  alvasFoundation,
  alvasNews,
  alvasOlympians,
  alvasPu,
  alvasSchool,
  alvasSslc,
  guideUpdated,
  nudisiri,
  pu2025RankHolders,
  sslcFirstBatches,
} from "@/data/alvas";
import { alvasFaqs, faqSources } from "@/data/faqs";
import { home, site } from "@/data/site";

// Plain-text summary of the site for AI tools (https://llmstxt.org).
// Built from the same data as the pages, so it never drifts from them.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}: Alva's School, Moodbidri`,
    "",
    `> ${home.description} Last reviewed: ${guideUpdated}.`,
    "",
    "## Pages",
    `- [Alva's School Moodbidri guide](${site.url}/): overview, 2026 news, academics and results, sports, culture, the founder and admissions`,
    `- [Alva's School FAQ](${site.url}/alvas-school-faq): ${alvasFaqs.length} answered questions on boards, fees, hostels, results, sports, culture and free education`,
    "",
    "## Key facts",
    `- ${alvasSchool.name} is in ${alvasSchool.place}, Karnataka ${alvasSchool.address.postalCode}, run by ${alvasFoundation.name}.`,
    `- The foundation began in ${alvasFoundation.founded}; the high school began in ${alvasSchool.started} with 99 students and 7 teachers.`,
    `- It has around ${alvasSchool.students} students and ${alvasSchool.teachers} teachers, follows the ${alvasSchool.syllabus} syllabus, and keeps classes to a maximum of ${alvasSchool.maxClassSize} students.`,
    `- Admissions: ${alvasSchool.phone}, ${alvasSchool.email}, ${alvasSchool.website}`,
    "",
    "## Results",
    `- SSLC: 100% pass rate in each of the first ${sslcFirstBatches.length} batches (2011-12 to 2015-16).`,
    "- SSLC 2012: Prajwal S of Alva's High School placed first in the state's Kannada medium category with 613 marks.",
    `- SSLC 2018: ${alvasSslc.y2018.topper.name} of ${alvasSslc.y2018.topper.school} scored ${alvasSslc.y2018.topper.marks}/625 (${alvasSslc.y2018.topper.rank}); ${alvasSslc.y2018.above600} Alva's students scored above 600.`,
    `- SSLC 2026: ${alvasSslc.y2026.alvasTopper.name} of ${alvasSslc.y2026.alvasTopper.school} scored ${alvasSslc.y2026.alvasTopper.marks}/625; Dakshina Kannada ranked first in Karnataka (${alvasSslc.y2026.dkPass}) and Moodabidri was the district's top taluk.`,
    `- II PUC 2026: Disha of Alva's College, Moodbidri was the state first rank in Commerce with 600/600.`,
    `- II PUC 2025: ${pu2025RankHolders.students.map((s) => `${s.name} (${s.stream}, ${s.marks})`).join(", ")} were state 2nd rank holders at ${alvasPu.name}.`,
    "",
    "## Sports",
    "- Playground with a 400 m synthetic track and separate coaches for different events.",
    "- Sports quota for classes 8 to 10 (athletics for boys and girls, basketball for girls) with free hostel, food and coaching; notifications in March and April, then a 20-day selection camp.",
    `- Olympians linked to Alva's (The Tribune, 2021): ${alvasOlympians.athletes.map((a) => a.name).join(", ")}.`,
    "",
    "## Culture",
    ...alvasFoundation.artsCentres.map((c) => `- ${c.name}: ${c.focus}.`),
    `- ${nudisiri.combinedName}: ${nudisiri.dates} in ${nudisiri.place}, the ${nudisiri.nudisiriEdition} Nudisiri and ${nudisiri.virasatEdition} Virasat, on the theme "${nudisiri.theme}".`,
    "",
    "## Founder",
    `- ${alvasFoundation.founder} is a physician and philanthropist who founded ${alvasFoundation.name}.`,
    "- 2026 honours: FRAV Fellowship from the Rashtriya Ayurveda Vidyapeeth (Ministry of AYUSH) and the Yakshadhruva Mahaposaka Award.",
    `- Free education with boarding and lodging (adoption scheme): ${alvasFoundation.adoptionScheme.join("; ")}.`,
    "",
    "## News and milestones",
    ...alvasNews.map((n) => `- ${n.date}: ${n.title}. ${n.text} Source: ${n.source.url}`),
    "",
    "## Frequently asked questions",
    ...alvasFaqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "## Sources",
    ...faqSources.map((s) => `- [${s.label}](${s.url})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
