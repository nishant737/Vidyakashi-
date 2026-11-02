// FAQ content. Every answer here must also be visible on a page: Google requires
// FAQ structured data to match on-page text, so never add hidden-only entries.
// `home: true` also shows the question in the homepage FAQ section.

export type Faq = { q: string; a: string; home?: boolean };

const generalFaqs: Faq[] = [
  {
    q: "How do I choose the right school for my child in Karnataka?",
    a: "Look at the board (State, CBSE, ICSE or NCERT-based), board exam results, class sizes, teaching support, sports and co-curricular activities, transport and fees. Visit the campus and speak to the school office before applying.",
  },
  {
    q: "Which are some of the top schools in Mangaluru, Udupi and Moodbidri?",
    a: "Well-regarded options include Alva's English Medium High School and Alva's Central School in Moodbidri, Lourdes Central School, Manipal School and Kendriya Vidyalaya No. 1 in Mangaluru, and Silas International School in Udupi. See the schools section above for links to their official websites.",
  },
  {
    q: "Who topped the Karnataka II PUC exam in 2026?",
    a: "In Commerce, Disha of Alva's College, Moodbidri secured the state first rank with a perfect 600 out of 600. In Science, Samanyu S Shetty and Nandan Nayak of Expert College topped the state with 99.67%. Udupi and Dakshina Kannada recorded the highest district pass percentages.",
  },
  {
    q: "Which PU stream should I choose: Science, Commerce or Arts?",
    a: "Choose Science (PCMB/PCMC) for engineering, medicine or pure sciences; Commerce for B.Com, CA, finance and business; and Arts for humanities, law, journalism and civil services. Pick the stream that matches your interests and long-term goals.",
  },
  {
    q: "Which entrance exams are needed for engineering and medical courses in Karnataka?",
    a: "KCET (conducted by KEA) and COMEDK UGET are used for engineering admissions, while MBBS and BAMS admissions are through NEET UG, with state-quota seats allotted through KEA counselling.",
  },
  {
    q: "Are the links on Vidyakashi official websites?",
    a: "Yes. Every school and college link opens the institution's official website, so you can confirm the latest admission details, fees and dates directly with them.",
  },
];

export const alvasFaqs: Faq[] = [
  {
    q: "Is Alva's School Moodbidri a good school for my child?",
    a: "It is a strong option for families who want academics alongside sports and culture. Alva's English Medium High School follows the NCERT syllabus, limits classes to 35 students, offers IIT coaching and extra support for slow learners, and recorded 100% SSLC results in its first five batches. Visit the campus to judge whether it suits your child.",
    home: true,
  },
  {
    q: "Which is the best residential school in Karnataka for my child?",
    a: "No single school is best for every child. Compare board, results, hostel supervision, medical care, activities and total cost. Alva's Education Foundation in Moodbidri is a well-known choice for families who want a large residential campus with strong sports and cultural programmes.",
  },
  {
    q: "Which are the best residential schools near Mangalore and Udupi?",
    a: "Alva's Education Foundation in Moodbidri, about 35 km from Mangaluru, is one of the best-known residential options in the region. Shortlist two or three schools, then visit each one to compare hostels, supervision and results.",
  },
  {
    q: "What makes Alva's Schools different from other residential schools in Karnataka?",
    a: "Alva's combines schooling with structured sports coaching and cultural training. Its campus includes a 400 m synthetic track, and it runs dedicated centres for drama, Yakshagana, music, dance and painting. Students can also continue to PU, degree and professional courses within the same foundation.",
  },
  {
    q: "Does Alva's School offer CBSE, ICSE and State Board education?",
    a: "The group runs several schools, including Alva's English Medium High School (NCERT syllabus), Alva's Central School (CBSE), Alva's ICSE School and Kannada medium schools. The foundation states it has CBSE and Karnataka state board affiliations. Confirm the board for your child's class with the admissions office.",
  },
  {
    q: "What are the fees for Alva's residential school, including hostel, food and other expenses?",
    a: "We could not find an official published fee schedule, and figures on third-party listing sites are dated and conflicting, so we do not quote one here. Ask the admissions office for the current total, including hostel, food, uniform and other expenses. Call +91 77602 72525 or email ao-schools@alvas.org.",
  },
  {
    q: "How good are the hostel facilities at Alva's Schools for boys and girls?",
    a: "The school website mentions separate hostels for boys and girls for sports-quota students, and a 2021 news report said about 18,000 of the foundation's roughly 20,000 students lived in residential hostels. Visit the hostel before admission to check rooms, food and supervision.",
  },
  {
    q: "Is Alva's residential school safe for children staying away from their parents?",
    a: "The school lists a 24×7 medical facility and separate hostels for boys and girls under its sports quota. Published information on supervision is limited, so ask about wardens, visiting rules, phone contact and emergency procedures during a campus visit.",
  },
  {
    q: "How good are Alva's Schools academically and what are their board exam results?",
    a: "Alva's English Medium High School recorded 100% SSLC results in each of its first five batches, from 2011-12 to 2015-16, with a top score of 618 out of 625. Those are the figures published on its website, so ask the school for its latest results.",
  },
  {
    q: "Has Alva's produced state toppers or rank holders in SSLC, CBSE or ICSE examinations?",
    a: "Yes, in SSLC. Prajwal S of Alva's High School, Moodbidri placed first in the state's Kannada medium category in 2012 with 613 marks (98.09%). We could not confirm CBSE or ICSE rank holders. At PU level, Disha of Alva's College was the 2026 state first rank in Commerce.",
  },
  {
    q: "Which school in Karnataka is best for students who want both academics and sports?",
    a: "Look for a school with qualified coaches, proper facilities and a timetable that protects study time. Alva's in Moodbidri is a strong option, with a 400 m synthetic track, separate coaches for different events and a sports quota for classes 8 to 10.",
  },
  {
    q: "What sports facilities and professional coaching are available at Alva's Schools?",
    a: "The school lists a playground with a 400 m synthetic track and separate coaches for different events. Its sports quota covers athletics for boys and girls and basketball for girls.",
  },
  {
    q: "Can a talented athlete get free education or a sports scholarship at Alva's?",
    a: "Yes. Students in classes 8 to 10 can apply under the sports quota for athletics (boys and girls) or basketball (girls). Notifications come out in March and April, followed by a 20-day selection camp. Selected students receive free hostel, food and coaching.",
    home: true,
  },
  {
    q: "Which famous athletes or national and international sportspersons have studied or trained at Alva's?",
    a: "A 2021 Tribune report linked seven Olympians to Alva's: Satheesha Rai, MR Poovamma, Dharun, Mohan Kumar, Ashwini Akkunji, Shubha Venkateshan and Dhanalakshmi Shekar.",
  },
  {
    q: "How much importance does Alva's give to Indian culture, traditions and values?",
    a: "Culture is central to the foundation's stated vision of giving students a strong cultural identity. It runs training in classical and folk arts, and hosts annual programmes such as Alva's Virasat and Alva's Nudisiri.",
  },
  {
    q: "Does Alva's teach Yakshagana, Bharatanatyam, music, theatre and other cultural activities?",
    a: "Yes. The foundation runs Deemkita Yakshagana Adhyayana Kendra for Yakshagana, Lalithakala Adhyayana Kendra for Bharatanatyam, Carnatic music and painting, and Ranga Adhyayana Kendra for drama. Ask the school which of these are open to your child's class.",
  },
  {
    q: "What are Alva's Virasat and Alva's Nudisiri, and do school students participate in them?",
    a: "Virasat is a national-level classical music and dance festival, and Nudisiri is a Kannada literary and cultural festival, both organised by Alva's Education Foundation in Moodbidri. They run together as Alva's Nudisiri-Virasat from 6 to 10 January 2027, with Vidyarthisiri on 8 January as a dedicated students' day.",
    home: true,
  },
  {
    q: "Who is Dr. M. Mohan Alva and why did he start Alva's Education Foundation?",
    a: "Dr. M. Mohan Alva is a physician and philanthropist who founded Alva's Education Foundation in Moodbidri, which began in 1995. The foundation's stated aim is to provide quality education while anchoring young people in cultural values and patriotism.",
  },
  {
    q: "What is Dr. Mohan Alva's philosophy on education, discipline, sports and culture?",
    a: "The foundation's published vision is that young people rooted in their culture can drive social growth and reach the wider world. It describes itself as synonymous with discipline, punctuality, humility and fulfilment, and treats sports and culture as part of education.",
  },
  {
    q: "Does Alva's provide scholarships or free education for academically, culturally or economically deserving students?",
    a: "Yes. The foundation says its adoption scheme gives free education with boarding and lodging to meritorious students, physically challenged students, students with cultural or sports talent, students from the Koraga and other selected tribes, and students from Mijar village and the local area.",
  },
  {
    q: "How does Alva's balance academics, competitive exams, sports and extracurricular activities for residential students?",
    a: "The school pairs the NCERT syllabus with regular IIT coaching and support for slow learners, alongside sports coaching and activities such as yoga, drawing, Scouts and Guides, music and dance. Ask how the timetable works for your child's class.",
  },
  {
    q: "Should I send my child to Alva's residential school? What are the advantages and disadvantages?",
    a: "Advantages include strong sports and cultural programmes and a clear path to PU and degree study within one foundation. Possible drawbacks are time away from family and the adjustment to a very large campus. Choose it if your child is ready for hostel life, and visit before deciding.",
  },
];

export const homeFaqs: Faq[] = [...generalFaqs, ...alvasFaqs.filter((f) => f.home)];

export const faqSources = [
  { label: "Alva's English Medium High School", url: "https://alvasschools.com/alvas-english-medium-high-school/" },
  { label: "About Alva's Schools", url: "https://alvasschools.com/about/" },
  { label: "Alva's Education Foundation vision", url: "https://alvascollege.org/about/foundation/vision/" },
  { label: "The Tribune, July 2021", url: "https://www.tribuneindia.com/news/schools/from-atlanta-to-tokyo-this-karnataka-institute-has-sent-7-olympians-285380" },
  { label: "Daijiworld, May 2012", url: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=138204" },
  { label: "Daijiworld, April 2026", url: "https://www.daijiworld.com/news/newsDisplay?newsID=1311438" },
  { label: "News Karnataka, October 2026", url: "https://newskarnataka.com/mangaluru/alvas-nudisiri-virasat-to-be-held-in-moodbidri-from-january-6-to-10/09102026/" },
];
