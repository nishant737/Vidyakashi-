// Top schools listing. Official websites checked Oct 2026.
// The first school is shown as the large "Editor's pick" card.

export type School = {
  name: string;
  place: string;
  board?: string;
  website: string;
};

export const schools: School[] = [
  { name: "Alva's Central School", place: "Moodbidri", board: "CBSE", website: "https://alvascentralschool.com" },
  { name: "Lourdes Central School", place: "Bejai, Mangaluru", board: "CBSE", website: "https://lourdescentralschool.com" },
  { name: "Manipal School", place: "Mangaluru", board: "CBSE", website: "https://manipalschool.edu.in" },
  { name: "Kendriya Vidyalaya No. 1", place: "Mangaluru", board: "CBSE", website: "https://no1mangalore.kvs.ac.in" },
  { name: "Silas International School", place: "Udupi", website: "https://silasinternationalschool.com" },
  { name: "Bishop Cotton Boys' School", place: "Bengaluru", website: "https://www.bishopcottonboysschool.edu.in" },
  { name: "St Joseph's Boys' High School", place: "Bengaluru", website: "https://sjbhs.edu.in" },
  { name: "National Public School, Indiranagar", place: "Bengaluru", website: "https://www.npsinr.com" },
  { name: "Mallya Aditi International School", place: "Bengaluru", website: "https://www.aditi.edu.in" },
];

/** Karnataka II PUC 2026 — state toppers reported by Daijiworld (9 April 2026). */
export const puc2026 = {
  passPercentage: "86.48%",
  topDistricts: [
    { name: "Udupi", pass: "93.90%" },
    { name: "Dakshina Kannada", pass: "93.57%" },
  ],
  statsSource: "https://news.careers360.com/karnataka-2nd-puc-toppers-list-2026-kseab-udupi-dakshina-kannada-highest-yadgir-lowest-science-commerce-arts-karresults-nic-in",
  toppersSource: "https://www.daijiworld.com/news/newsDisplay?newsID=1311438",
  toppers: [
    { names: "Disha", college: "Alva's College, Moodbidri", stream: "Commerce", score: "600 / 600", note: "State 1st rank" },
    { names: "Samanyu S Shetty & Nandan Nayak", college: "Expert College, Mangaluru", stream: "Science", score: "99.67%", note: "Topped the state" },
    { names: "Prerana Ramachandra Hegde", college: "Creative College, Karkala", stream: "Commerce", score: "598 / 600", note: "" },
    { names: "Chaithrika Chaudhary", college: "Jnanasudha PU College, Karkala", stream: "Science", score: "597 / 600", note: "" },
    { names: "Prajwal Shetty & Shrima Devadiga", college: "Christ King PU College, Karkala", stream: "Commerce", score: "596 / 600", note: "State 4th rank" },
  ],
};
