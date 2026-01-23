export interface CVExperience {
  year: string;
  production: string;
  location: string;
  company: string;
}

export interface CVEducation {
  years: string;
  institution: string;
  major: string;
}

export interface CVChoreography {
  title: string;
  date: string;
  details?: string;
}

export const mentors = [
  "Sidi Larbi Cherkaoui",
  "Sharon Eyal",
  "Yoann Bourgeois",
  "Michèle Anne de Mey",
  "Julyen Hamilton",
  "James Thierrée",
  "Micha Purucker",
  "Anton Lachky",
  "Paul Blackman",
  "Eduardo Torroja"
];

export const professionalExperience: CVExperience[] = [
  { year: "2025", production: "Liminal Phantoms", location: "Canada / Europe tour", company: "Chaotic Kitchen" },
  { year: "2025", production: "What Falls Doesn't Always Land", location: "Canada / Europe tour", company: "Chaotic Kitchen" },
  { year: "2025", production: "Strangers in the Night", location: "Italy tour", company: "Co-creator Jos Baker, Carlo Massari" },
  { year: "2025", production: "Balance In", location: "Italy", company: "Chaotic Kitchen / Abbondanza–Bertoni" },
  { year: "2025", production: "Capodimonte", location: "Italy", company: "Antonello Tudisco" },
  { year: "2025", production: "Ministry of Red Carpets", location: "Belgium", company: "Silvia Pezzarossi" },
  { year: "2025", production: "Bolero / Assistant", location: "Germany", company: "Nationaltheater Mannheim (NTM)" },
  { year: "2024", production: "White Out", location: "Central Europe tour", company: "Piergiorgio Milano" },
  { year: "2024", production: "Empty Phantoms", location: "Canada", company: "Chaotic Kitchen" },
  { year: "2024", production: "FIKA", location: "Sweden / Germany / South Korea", company: "Minjoung Jang" },
  { year: "2024", production: "Liminal Phantoms", location: "Central Europe tour", company: "Chaotic Kitchen" },
  { year: "2024", production: "100.80.40", location: "Germany", company: "Micha Purucker" }
];

export const choreographies: CVChoreography[] = [
  { title: "Balance In", date: "21/10/2025" },
  { title: "Beneath", date: "17/03/2025" },
  { title: "Empty Phantoms", date: "13/10/2024", details: "Winner" },
  { title: "What Falls Doesn't Land", date: "14/12/2024" },
  { title: "Strangers in the Night", date: "30/08/2024" },
  { title: "Fika", date: "20/02/2024" },
  { title: "Liminal Phantoms", date: "05/03/2023" },
  { title: "Kladd", date: "20/09/2022" },
  { title: "Imburte Union", date: "02/07/2021" },
  { title: "Gloom", date: "05/03/2021" },
  { title: "Just Like Old Days", date: "30/02/2021" },
  { title: "Rorschach", date: "22/09/2020" },
  { title: "Through Looking Glass", date: "09/11/2019" },
  { title: "Insomnia", date: "16/02/2018" },
  { title: "Stor Fågel", date: "10/03/2016", details: "Winner" }
];

export const education: CVEducation[] = [
  { years: "2017–2021", institution: "Salzburg Experimental Academy of Dance", major: "Dance Major" },
  { years: "2019–2021", institution: "Salzburg Experimental Academy of Dance", major: "Choreographic Major" },
  { years: "2016–2017", institution: "Iwanson International School of Contemporary Dance", major: "Dance Major" },
  { years: "2013–2016", institution: "Lunds Dans & Musikal Gymnasium", major: "Dance Degree" },
  { years: "2015", institution: "GK SALTO", major: "Gymnastics Teacher Certificate" },
  { years: "2014", institution: "Söderskogs IF", major: "Parkour Teacher Certificate" }
];

export const skills = [
  "Contemporary Dance",
  "Urban Dance / Breaking",
  "Partnering & Contact Work",
  "Improvisation & Composition",
  "Theatre & Acting",
  "Ballet",
  "Circus",
  "Modern"
];

export const languages = [
  { language: "English", level: "fluent" },
  { language: "Swedish", level: "native" },
  { language: "German", level: "working knowledge" }
];
