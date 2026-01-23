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
  "Eduardo Torroja",
  "Jos Baker"
];

// Only bold/selected professional experiences from CV
export const selectedProfessionalExperience: CVExperience[] = [
  { year: "2025", production: "Liminal Phantoms", location: "Canada / Europe tour", company: "Chaotic Kitchen" },
  { year: "2025", production: "What Falls Doesn't Always Land", location: "Canada / Europe tour", company: "Chaotic Kitchen" },
  { year: "2025", production: "Strangers in the Night", location: "Italy tour", company: "Co-creator Jos Baker, Carlo Massari" },
  { year: "2025", production: "Balance In", location: "Italy", company: "Chaotic Kitchen / Abbondanza–Bertoni" },
  { year: "2024", production: "White Out", location: "Central Europe tour", company: "Piergiorgio Milano" },
  { year: "2024", production: "Empty Phantoms", location: "Canada", company: "Chaotic Kitchen" },
  { year: "2024", production: "FIKA", location: "Sweden / Germany / South Korea", company: "Minjoung Jang" },
  { year: "2024", production: "Liminal Phantoms", location: "Central Europe tour", company: "Chaotic Kitchen" }
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

export const coProducingPartners = [
  "Oriente Occidente (Italy) - National Dance Foundation",
  "ATER Balletto (Italy) - National Ballet Organisation",
  "Transart Festival (Italy)",
  "ERT Emilia-Romagna Teatro / Teatro Nazionale - focus CARNE",
  "Associazione Culturale SPaCCa (Production Company)",
  "MIC - Ministero della Cultura (Italian Ministry of Culture)",
  "Assessorato alla Cultura - Regione Emilia Romagna"
];

export const producingPartners = [
  "Oriente Occidente (IT)",
  "ATER Balletto (IT)",
  "Transart Festival (IT)",
  "RedSapata Tanzfabrik (AT)",
  "Tanzfabrik Berlin (DE)"
];

export const productionCompany = "Compagnia Abbondanza/Bertoni";

export const supportedBy = [
  "Zerogrammi – Permutazioni 2025",
  "Il Vaporetto dell'Immaginario - Venice"
];

export const presentations2024 = [
  { date: "October 2024", venue: "Rome - Teatro India" },
  { date: "November 2024", venue: "Bologna - Teatro delle Moline" },
  { date: "December 2024", venue: "Turin - Teatro Astra" },
  { date: "December 2024", venue: "Milan - Teatro Out Off" }
];

export const presentations2025 = [
  { date: "01-03-2025", venue: "Perugia - Teatro Morlacchi" },
  { date: "14-03-2025", venue: "Modena - Teatro delle Passioni" },
  { date: "15-03-2025", venue: "Modena - Teatro delle Passioni" },
  { date: "13-04-2025", venue: "Pergine Valsugana - Teatro Comunale" },
  { date: "10-05-2025", venue: "Napoli - TAN Teatro Area Nord" },
  { date: "01-06-2025", venue: "Bari - Nuovo Teatro Abeliano" },
  { date: "04-09-2025", venue: "Venezia - Forte Marghera Venezia Mestre" },
  { date: "19-09-2025", venue: "Bolzano - Teatro Cristallo" },
  { date: "20-09-2025", venue: "Florence - Teatro Cantiere Florida" },
  { date: "25-10-2025", venue: "Palermo - Teatro Biondo" },
  { date: "15-11-2025", venue: "Genova - Teatro Akropolis" },
  { date: "08-12-2025", venue: "Trieste - Teatro Miela" }
];

// External links
export const cvLink = "https://drive.google.com/file/d/11dBAB3KyaApD3EC7a7JXdmv4B72vAjfK/view?usp=drive_link";
export const shortBioLink = "https://drive.google.com/file/d/1jbV78fdZ8sjtwtCcpJpFhtjc-KdP9Oro/view?usp=sharing";
