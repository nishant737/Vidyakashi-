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

/** Dated news and milestones for the "Alva's in 2026" timeline. Newest first. */
export const alvasNews = [
  {
    date: "25-26 Nov 2026",
    title: "Ninasam theatre festival at Alva's",
    text: "Alva's Rangadhyayana Kendra hosts two evenings of Kannada theatre at the V.S. Acharya Auditorium, 6:45 pm, with free entry: Paduka Kireeti on 25 November and Kola on 26 November.",
    source: { label: "Pingara", url: "https://pingara.com/kannada-news/neenasam-theatre-festival-at-alvas-on-nov-25-and-26/" },
    upcoming: true,
  },
  {
    date: "6-10 Jan 2027",
    title: "Alva's Nudisiri-Virasat comes to Moodbidri",
    text: "The 17th Nudisiri and 31st Virasat run together for five days, with a students' day on 8 January.",
    source: { label: "Daijiworld", url: "https://daijiworld.com/news/newsDisplay?newsID=1328964" },
    upcoming: true,
  },
  {
    date: "Sep 2026",
    title: "26 medals at the South Zone Junior Athletics",
    text: "Alva's athletes won 26 medals and set five meet records at the championship in Puducherry.",
    source: { label: "Udayavani", url: "https://udayavani.com/karnataka/alvas-athletes-win-26-medals-set-five-new-meet-records-466181?lang=en" },
  },
  {
    date: "Aug 2026",
    title: "Alva's Pragati 2026 job fair: 2,394 on-the-spot offers",
    text: "The 16th edition of the free two-day job fair at the Vidyagiri campus drew 15,539 job seekers and 332 companies.",
    source: { label: "Vaibhav News", url: "https://www.vaibhavnews.com/2026/08/2026-15539-2394.html" },
  },
  {
    date: "Jul 2026",
    title: "150 MBBS seats approved for a new Alva's medical college",
    text: "The National Medical Commission approved 150 MBBS seats from 2026-27 for Alva's Institute of Medical Sciences and Research Center on the Mijar campus.",
    source: { label: "Mega Media News", url: "https://megamedianews.com/milestone-achievement-national-medical-commission-approves-150-mbbs-seats-for-alvas-medical-college-moodbidri-from-academic-year-2026-27/" },
  },
  {
    date: "May 2026",
    title: "Yakshadhruva Mahaposaka Award for Dr. M. Mohan Alva",
    text: "Udayavani reported the award to the founder, with Polya receiving the Yakshadhruva Patla Award.",
    source: { label: "Udayavani", url: "https://udayavani.com/karnataka/dr-mohan-alva-conferred-yakshadhruva-mahaposaka-award-polya-honoured-with-yakshadhruva-patla-award-572892?lang=en" },
  },
  {
    date: "Apr 2026",
    title: "622/625 in SSLC, and Moodabidri tops the district",
    text: "Shadhvi P V of Alva's School scored 622, as Dakshina Kannada ranked first in Karnataka.",
    source: { label: "Mangalore Today", url: "https://www.mangaloretoday.com/main/SSLC-2026-results-Dakshina-Kannada-tops-Karnataka-with-98-40-Udupi-student-scores-perfect-625.html" },
  },
  {
    date: "Apr 2026",
    title: "II PUC state first rank in Commerce",
    text: "Disha of Alva's College, Moodbidri scored a perfect 600 out of 600.",
    source: { label: "Daijiworld", url: "https://www.daijiworld.com/news/newsDisplay?newsID=1311438" },
  },
  {
    date: "Mar 2026",
    title: "FRAV Fellowship for Dr. M. Mohan Alva",
    text: "The Rashtriya Ayurveda Vidyapeeth, under the Ministry of AYUSH, honoured his work in Ayurveda at its convocation at Banaras Hindu University.",
    source: { label: "The Hans India", url: "https://www.thehansindia.com/karnataka/ayurveda-educationist-conferred-frav-fellowship-1058113" },
  },
];

export const guideUpdated = "23 November 2026";
/** Same date in ISO format, for structured data and the sitemap. Update both together. */
export const guideUpdatedISO = "2026-11-23";

/** Upcoming events, described as schema.org Events. Remove or update them once they have passed. */
export const alvasEvents = [
  {
    name: "Ninasam Theatre Festival at Alva's",
    description: "Two evenings of Kannada theatre hosted by Alva's Rangadhyayana Kendra: Paduka Kireeti on 25 November and Kola on 26 November.",
    startDate: "2026-11-25T18:45:00+05:30",
    endDate: "2026-11-26",
    venue: "V.S. Acharya Auditorium, Alva's campus",
    free: true,
    source: "https://pingara.com/kannada-news/neenasam-theatre-festival-at-alvas-on-nov-25-and-26/",
  },
  {
    name: "Alva's Nudisiri-Virasat 2027",
    description: "The 17th Alva's Nudisiri literary festival and 31st Alva's Virasat cultural festival, held together on the theme 'Kannada Manassu: Bhavishyada Kanasu'.",
    startDate: "2027-01-06",
    endDate: "2027-01-10",
    venue: "Moodbidri",
    source: "https://daijiworld.com/news/newsDisplay?newsID=1328964",
  },
];
