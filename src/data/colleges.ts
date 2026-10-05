export const courses = [
  "Engineering",
  "Medical",
  "Ayurveda",
  "High School",
  "PU College",
  "B.Sc",
  "Commerce",
  "Arts",
  "Hotel Management",
] as const;

export type Course = (typeof courses)[number];
export type CollegeType = "Government" | "Private";

export type College = {
  name: string;
  /** Used by the location filter */
  city: string;
  /** Extra locations this college should also appear under */
  alsoIn?: string[];
  /** Optional locality shown on the card, e.g. "Surathkal" */
  area?: string;
  type: CollegeType;
  courses: Course[];
  /** Short line of programs shown on the card */
  programs?: string;
  website: string;
  /** Featured colleges are always listed first */
  featured?: boolean;
};

// Location filter order — coastal Karnataka first.
export const locations = [
  "Mangaluru",
  "Udupi",
  "Bengaluru",
  "Mysuru",
  "Hubballi–Dharwad",
  "Belagavi",
  "Davanagere",
  "Tumakuru",
  "Hassan",
];

const alvas: Pick<College, "city" | "alsoIn" | "area" | "type" | "featured"> = {
  city: "Mangaluru",
  alsoIn: ["Udupi"],
  area: "Moodbidri",
  type: "Private",
  featured: true,
};

// Official websites checked October 2026.
// Add, remove or edit colleges here; filters update automatically.
export const colleges: College[] = [
  // ── Featured: Alva's Education Foundation, Moodbidri ──
  { ...alvas, name: "Alva's Institute of Engineering & Technology", courses: ["Engineering"], programs: "B.E. / B.Tech · M.Tech · MBA", website: "https://www.aiet.org.in" },
  { ...alvas, name: "Alva's Pre-University College", courses: ["PU College"], programs: "Science · Commerce · Arts", website: "https://alvaspucollege.org" },
  { ...alvas, name: "Alva's Schools", courses: ["High School"], programs: "Residential high school", website: "https://alvasschools.com" },
  { ...alvas, name: "Alva's Central School", courses: ["High School"], programs: "CBSE school", website: "https://alvascentralschool.com" },
  { ...alvas, name: "Alva's Degree College", courses: ["B.Sc", "Commerce", "Arts"], programs: "B.Sc · B.Com · BA · BSW · BVA", website: "https://alvas.org/institutions/alvas-degree-college/" },
  { ...alvas, name: "Alva's Ayurveda Medical College", courses: ["Ayurveda"], programs: "BAMS", website: "https://alvas.org/institutions/alvas-ayurveda-medical-college/" },
  { ...alvas, name: "Alva's College – Hospitality Science", courses: ["Hotel Management"], programs: "B.Sc Hotel Management", website: "https://alvascollege.com/department/ug/hospitality-science/" },
  { ...alvas, name: "Alva's College of Nursing", courses: ["Medical"], programs: "Nursing", website: "https://alvas.org/institutions/alvas-college-of-nursing/" },
  { ...alvas, name: "Alva's College of Pharmacy", courses: ["Medical"], programs: "Pharmacy", website: "https://alvas.org/institutions/alvas-college-of-pharmacy/" },
  { ...alvas, name: "Alva's College of Naturopathy & Yogic Sciences", courses: ["Medical"], programs: "Naturopathy & Yoga (BNYS)", website: "https://alvas.org/institutions/alvas-college-of-naturopathy-yogic-sciences/" },

  // ── Mangaluru & Dakshina Kannada ──
  { name: "NIT Karnataka", city: "Mangaluru", area: "Surathkal", type: "Government", courses: ["Engineering"], website: "https://www.nitk.ac.in" },
  { name: "St Joseph Engineering College", city: "Mangaluru", type: "Private", courses: ["Engineering"], website: "https://sjec.ac.in" },
  { name: "Sahyadri College of Engineering & Management", city: "Mangaluru", type: "Private", courses: ["Engineering"], website: "https://www.sahyadri.edu.in" },
  { name: "Canara Engineering College", city: "Mangaluru", type: "Private", courses: ["Engineering"], website: "https://cec.edu.in" },
  { name: "Mangalore Institute of Technology & Engineering", city: "Mangaluru", area: "Moodbidri", type: "Private", courses: ["Engineering"], website: "https://mite.ac.in" },
  { name: "Kasturba Medical College, Mangalore", city: "Mangaluru", type: "Private", courses: ["Medical"], programs: "MBBS", website: "https://www.manipal.edu/kmc-mangalore.html" },
  { name: "Nitte (Deemed to be University)", city: "Mangaluru", area: "Deralakatte", type: "Private", courses: ["Medical"], programs: "MBBS · Nursing · Pharmacy", website: "https://nitte.edu.in" },
  { name: "Yenepoya (Deemed to be University)", city: "Mangaluru", area: "Deralakatte", type: "Private", courses: ["Medical"], programs: "MBBS · Nursing · Pharmacy", website: "https://www.yenepoya.edu.in" },
  { name: "Father Muller Medical College", city: "Mangaluru", type: "Private", courses: ["Medical"], programs: "MBBS · Nursing", website: "https://www.fathermuller.edu.in" },
  { name: "Lourdes Central School", city: "Mangaluru", area: "Bejai", type: "Private", courses: ["High School"], programs: "CBSE school", website: "https://lourdescentralschool.com" },
  { name: "Expert PU College", city: "Mangaluru", type: "Private", courses: ["PU College"], website: "https://www.expertpucollege.com" },
  { name: "Excel PU College", city: "Mangaluru", area: "Guruvayanakere", type: "Private", courses: ["PU College"], website: "https://excelpucollege.org" },
  { name: "St Aloysius (Deemed to be University)", city: "Mangaluru", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://staloysius.edu.in" },
  { name: "Govinda Dasa College", city: "Mangaluru", area: "Surathkal", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://govindadasacollege.edu.in" },
  { name: "SDM College", city: "Mangaluru", area: "Ujire", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://www.sdmcujire.in" },
  { name: "St Philomena College", city: "Mangaluru", area: "Puttur", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://spcputtur.ac.in" },
  { name: "Srinivas University", city: "Mangaluru", type: "Private", courses: ["Hotel Management"], programs: "Hotel Management & Culinary Arts", website: "https://srinivasuniversity.edu.in" },

  // ── Udupi & Manipal ──
  { name: "Manipal Institute of Technology", city: "Udupi", area: "Manipal", type: "Private", courses: ["Engineering"], website: "https://www.manipal.edu/mit.html" },
  { name: "Kasturba Medical College, Manipal", city: "Udupi", area: "Manipal", type: "Private", courses: ["Medical"], programs: "MBBS", website: "https://www.manipal.edu/kmc-manipal.html" },
  { name: "SDM College of Ayurveda", city: "Udupi", area: "Kuthpady", type: "Private", courses: ["Ayurveda"], programs: "BAMS · MD/MS (Ayurveda)", website: "https://sdmayurvedacollegeudupi.in" },
  { name: "Muniyal Institute of Ayurveda Medical Sciences", city: "Udupi", area: "Manipal", type: "Private", courses: ["Ayurveda"], programs: "BAMS", website: "https://muniyalayurveda.com" },
  { name: "Vidyodaya PU College", city: "Udupi", type: "Private", courses: ["PU College"], website: "https://www.vidyodayapucollege.com" },
  { name: "Poornaprajna College", city: "Udupi", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://www.ppc.ac.in" },
  { name: "Welcomgroup Graduate School of Hotel Administration (WGSHA)", city: "Udupi", area: "Manipal", type: "Private", courses: ["Hotel Management"], website: "https://www.manipal.edu/wgsha.html" },

  // ── Bengaluru ──
  { name: "RV College of Engineering", city: "Bengaluru", type: "Private", courses: ["Engineering"], website: "https://rvce.edu.in" },
  { name: "B.M.S. College of Engineering", city: "Bengaluru", type: "Private", courses: ["Engineering"], website: "https://bmsce.ac.in" },
  { name: "Ramaiah Institute of Technology", city: "Bengaluru", type: "Private", courses: ["Engineering"], website: "https://msrit.edu" },
  { name: "PES University", city: "Bengaluru", type: "Private", courses: ["Engineering", "Commerce"], website: "https://pes.edu" },
  { name: "University Visvesvaraya College of Engineering (UVCE)", city: "Bengaluru", type: "Government", courses: ["Engineering"], website: "https://uvce.ac.in" },
  { name: "Dayananda Sagar College of Engineering", city: "Bengaluru", type: "Private", courses: ["Engineering"], website: "https://www.dsce.edu.in" },
  { name: "St. John's Medical College", city: "Bengaluru", type: "Private", courses: ["Medical"], programs: "MBBS · Nursing", website: "https://www.stjohns.in" },
  { name: "Ramaiah Medical College", city: "Bengaluru", type: "Private", courses: ["Medical"], programs: "MBBS", website: "https://www.msrmc.ac.in" },
  { name: "Sri Kalabyraveshwara Swamy Ayurvedic Medical College", city: "Bengaluru", type: "Private", courses: ["Ayurveda"], programs: "BAMS", website: "https://www.skamch.org" },
  { name: "Adichunchanagiri Ayurvedic Medical College", city: "Bengaluru", type: "Private", courses: ["Ayurveda"], programs: "BAMS", website: "https://www.acamc.org" },
  { name: "Bishop Cotton Boys' School", city: "Bengaluru", type: "Private", courses: ["High School"], website: "https://www.bishopcottonboysschool.edu.in" },
  { name: "St Joseph's Boys' High School", city: "Bengaluru", type: "Private", courses: ["High School"], website: "https://sjbhs.edu.in" },
  { name: "National Public School, Indiranagar", city: "Bengaluru", type: "Private", courses: ["High School"], website: "https://www.npsinr.com" },
  { name: "Mallya Aditi International School", city: "Bengaluru", type: "Private", courses: ["High School"], website: "https://www.aditi.edu.in" },
  { name: "Sophia High School", city: "Bengaluru", type: "Private", courses: ["High School"], website: "https://sophiahighschool.org" },
  { name: "Christ Junior College", city: "Bengaluru", type: "Private", courses: ["PU College"], website: "https://www.christjuniorcollege.in" },
  { name: "JAIN PU College", city: "Bengaluru", type: "Private", courses: ["PU College"], website: "https://www.jaincollege.ac.in" },
  { name: "St. Joseph's Pre-University College", city: "Bengaluru", type: "Private", courses: ["PU College"], website: "https://sjpuc.edu.in" },
  { name: "Christ University", city: "Bengaluru", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://christuniversity.in" },
  { name: "St Joseph's University", city: "Bengaluru", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://www.sju.edu.in" },
  { name: "Mount Carmel College", city: "Bengaluru", type: "Private", courses: ["B.Sc", "Commerce", "Arts"], website: "https://mccblr.edu.in" },
  { name: "JAIN (Deemed-to-be University)", city: "Bengaluru", type: "Private", courses: ["Engineering", "B.Sc", "Commerce"], website: "https://www.jainuniversity.ac.in" },
  { name: "Indian Institute of Science (IISc)", city: "Bengaluru", type: "Government", courses: ["B.Sc"], programs: "B.Sc (Research)", website: "https://www.iisc.ac.in" },
  { name: "IIHM Bengaluru", city: "Bengaluru", type: "Private", courses: ["Hotel Management"], website: "https://iihm.ac.in/bangalore-campus" },

  // ── Mysuru ──
  { name: "JSS Science and Technology University (SJCE)", city: "Mysuru", type: "Private", courses: ["Engineering"], website: "https://jssstuniv.in" },
  { name: "The National Institute of Engineering (NIE)", city: "Mysuru", type: "Private", courses: ["Engineering"], website: "https://nie.ac.in" },
  { name: "JSS Academy of Higher Education & Research", city: "Mysuru", type: "Private", courses: ["Medical"], programs: "MBBS · Pharmacy", website: "https://jssuni.edu.in" },
  { name: "Mysore Medical College & Research Institute", city: "Mysuru", type: "Government", courses: ["Medical"], programs: "MBBS", website: "https://mmcri.karnataka.gov.in" },
  { name: "JSS Ayurveda Medical College", city: "Mysuru", type: "Private", courses: ["Ayurveda"], programs: "BAMS", website: "https://jssayurvedacollege.org" },

  // ── North & Central Karnataka ──
  { name: "KLE Technological University", city: "Hubballi–Dharwad", type: "Private", courses: ["Engineering"], website: "https://www.kletech.ac.in" },
  { name: "KLS Gogte Institute of Technology", city: "Belagavi", type: "Private", courses: ["Engineering"], website: "https://www.git.edu" },
  { name: "KLE Academy of Higher Education & Research (KAHER)", city: "Belagavi", type: "Private", courses: ["Medical", "Ayurveda"], programs: "MBBS · Nursing · Pharmacy · BAMS", website: "https://kaher.edu.in" },
  { name: "Bapuji Institute of Engineering & Technology", city: "Davanagere", type: "Private", courses: ["Engineering"], website: "https://www.bietdvg.edu" },
  { name: "Siddaganga Institute of Technology", city: "Tumakuru", type: "Private", courses: ["Engineering"], website: "https://sit.ac.in" },
  { name: "SDM College of Ayurveda, Hassan", city: "Hassan", type: "Private", courses: ["Ayurveda"], programs: "BAMS", website: "https://sdmcahhassan.org" },
];

export function inLocation(college: College, location: string) {
  return college.city === location || college.alsoIn?.includes(location) === true;
}

/** Featured colleges first, then the order above. */
export function sortFeaturedFirst(list: College[]) {
  return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
}
