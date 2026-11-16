// Facts about Alva's institutions, taken from official / news sources (checked Oct 2026).
// Keep these accurate and update when new results are announced.

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

export const alvasPu = {
  name: "Alva's Pre-University College",
  website: "https://alvaspucollege.org",
};

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

export const alvasFoundation = {
  name: "Alva's Education Foundation",
  website: "https://alvas.org",
  founded: 1995,
  founder: "Dr. M. Mohan Alva",
  /** Groups the foundation says receive free education with boarding and lodging. */
  adoptionScheme: [
    "Meritorious students",
    "Physically challenged students",
    "Students with cultural or sports talent",
    "Students from the Koraga and other selected tribes",
    "Students from Mijar village and the local area",
  ],
  artsCentres: [
    { name: "Deemkita Yakshagana Adhyayana Kendra", focus: "Yakshagana, the folk theatre of coastal Karnataka" },
    { name: "Lalithakala Adhyayana Kendra", focus: "Bharatanatyam, Carnatic music and painting" },
    { name: "Ranga Adhyayana Kendra", focus: "Drama and theatre" },
  ],
  visionSource: "https://alvascollege.org/about/foundation/vision/",
  aboutSource: "https://alvasschools.com/about/",
};

/** Olympians linked to Alva's, as reported by The Tribune (19 July 2021). */
export const alvasOlympians = {
  source: "https://www.tribuneindia.com/news/schools/from-atlanta-to-tokyo-this-karnataka-institute-has-sent-7-olympians-285380",
  athletes: [
    { name: "Satheesha Rai", sport: "Weightlifting", games: "Atlanta 1996" },
    { name: "MR Poovamma", sport: "Athletics", games: "Beijing 2008, Rio 2016" },
    { name: "Dharun", sport: "Athletics", games: "Rio 2016" },
    { name: "Mohan Kumar", sport: "Athletics", games: "Rio 2016" },
    { name: "Ashwini Akkunji", sport: "Athletics", games: "Rio 2016" },
    { name: "Shubha Venkateshan", sport: "Athletics", games: "Tokyo 2020" },
    { name: "Dhanalakshmi Shekar", sport: "Athletics", games: "Tokyo 2020" },
  ],
};

/** SSLC highlights for Alva's schools, from news reports. */
export const alvasSslc = {
  /** Karnataka SSLC 2026, results announced 23 April 2026 (Mangalore Today, 24 April 2026). */
  y2026: {
    statePass: "94.1%",
    dkPass: "98.40%",
    alvasTopper: { name: "Shadhvi P V", school: "Alva's School, Moodbidri", marks: 622 },
    source: "https://www.mangaloretoday.com/main/SSLC-2026-results-Dakshina-Kannada-tops-Karnataka-with-98-40-Udupi-student-scores-perfect-625.html",
    taluk: "https://newskarnataka.com/mangaluru/moodabidri-tops-dakshina-kannada-in-sslc-2026-sullia-second/26042026",
  },
  /** SSLC 2018 (Daijiworld, 9 May 2018). */
  y2018: {
    topper: { name: "Pranshula Prashanth", school: "Alva's English Medium School", marks: 624, rank: "State 2nd rank, district 1st" },
    above600: 46,
    combinedPass: "98.66%",
    source: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=508753",
  },
};

/** SSLC results of the high school's first five batches, from the school website. */
export const sslcFirstBatches = [
  { year: "2011-12", students: 8, pass: "100%", top: "574" },
  { year: "2012-13", students: 39, pass: "100%", top: "612" },
  { year: "2013-14", students: 69, pass: "100%", top: "612" },
  { year: "2014-15", students: 136, pass: "100%", top: "618" },
  { year: "2015-16", students: 251, pass: "100%", top: "618" },
];

/** Alva's II PUC state rank holders in 2025 (Alva's PU College). */
export const pu2025RankHolders = {
  source: "https://alvaspucollege.org/blog/who-secured-the-top-ranks-in-karnataka-2nd-puc-2025/",
  students: [
    { name: "Bindu Navale", stream: "Science", marks: 598 },
    { name: "Vijet G Gowda", stream: "Science", marks: 598 },
    { name: "Raja Yadu V Yadav", stream: "Science", marks: 598 },
    { name: "Pranay B. Alagouda", stream: "Commerce", marks: 597 },
  ],
};
