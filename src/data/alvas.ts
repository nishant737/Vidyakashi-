// Facts about Alva's institutions, taken from official / news sources (checked Oct 2026).
// Keep these accurate — update when new results are announced.

export const alvasSchool = {
  name: "Alva's English Medium High School",
  shortName: "Alva's High School",
  place: "Moodubidire (Moodbidri), Dakshina Kannada",
  website: "https://alvasschools.com/alvas-english-medium-high-school/",
  address: {
    street: "Vivekanandanagara, Puthige Sampige Post",
    locality: "Moodubidire",
    region: "Karnataka",
    postalCode: "574227",
  },
  phone: "+91 77602 72525",
  email: "ao-schools@alvas.org",
  syllabus: "NCERT",
  started: 2011,
  students: "2,500",
  teachers: "85",
  maxClassSize: 35,
  timings: "9:00 AM – 4:00 PM",
};

/** SSLC results of the first five batches, as published on the school website. */
export const sslcResults = [
  { year: "2011–12", students: 8, distinction: 2, pass: "100%", top: "574 (91.84%)" },
  { year: "2012–13", students: 39, distinction: 18, pass: "100%", top: "612 (97.92%)" },
  { year: "2013–14", students: 69, distinction: 41, pass: "100%", top: "612 (97.92%)" },
  { year: "2014–15", students: 136, distinction: 74, pass: "100%", top: "618 (98.88%)" },
  { year: "2015–16", students: 251, distinction: 124, pass: "100%", top: "618 (98.88%)" },
];

export const alvasPu = {
  name: "Alva's Pre-University College",
  website: "https://alvaspucollege.org",
};

/** Karnataka II PUC state rank holders from Alva's. */
export const puToppers = [
  { year: 2026, name: "Disha", stream: "Commerce", marks: 600, rank: "State 1st rank", source: "https://www.daijiworld.com/news/newsDisplay?newsID=1311438" },
  { year: 2025, name: "Bindu Navale", stream: "Science", marks: 598, rank: "State 2nd rank", source: "https://alvaspucollege.org/blog/who-secured-the-top-ranks-in-karnataka-2nd-puc-2025/" },
  { year: 2025, name: "Vijet G Gowda", stream: "Science", marks: 598, rank: "State 2nd rank", source: "https://alvaspucollege.org/blog/who-secured-the-top-ranks-in-karnataka-2nd-puc-2025/" },
  { year: 2025, name: "Raja Yadu V Yadav", stream: "Science", marks: 598, rank: "State 2nd rank", source: "https://alvaspucollege.org/blog/who-secured-the-top-ranks-in-karnataka-2nd-puc-2025/" },
  { year: 2025, name: "Pranay B. Alagouda", stream: "Commerce", marks: 597, rank: "State 2nd rank", source: "https://alvaspucollege.org/blog/who-secured-the-top-ranks-in-karnataka-2nd-puc-2025/" },
];

export const nudisiri = {
  name: "Alva's Nudisiri",
  combinedName: "Alva's Nudisiri-Virasat",
  dates: "6 – 10 January 2027",
  place: "Moodbidri",
  nudisiriEdition: "17th",
  virasatEdition: "31st",
  theme: "Kannada Manassu: Bhavishyada Kanasu",
  website: "https://alvas.org",
  source: "https://newskarnataka.com/mangaluru/alvas-nudisiri-virasat-to-be-held-in-moodbidri-from-january-6-to-10/09102026/",
};
