export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'upcoming' | 'news' | 'update';
  description: string;
  fullDescription?: string;
  link?: string;
  projectId?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "manosphere-2026",
    title: "Manosphere - New Creation with Jos Baker",
    date: "2026-05-01",
    category: "upcoming",
    description: "A new collaborative creation investigating online male culture and its intersection with ancient storytelling.",
    fullDescription: `Manosphere is a project that investigates the world of online male culture and the ways in which that can slip into misogyny and political extremism while tying this in to ancient storytelling. This is an extremely important topic as we see the rise of extreme right-wing politics.

The show will have elements of humour and magic, but ultimately dive into some dark narratives that weave an old story into our modern world. The narrative unfolds through character-driven spoken word, movement, and illusion, exploring both the internal lives of the characters and the online world they spend time in.

This project follows on from Strangers in the Night, combining physical and image-based storytelling with scripted theatre.

TEAM:
Conceived, written and directed by Jos Baker
Co-created and performed by Jos Baker, Linus Jansner
Outside eye and Dramaturg: Antonello Tudisco
Music and sound design: Chris Parapagidis
Producer: Katrien Dubois

Co-produced with Interon5Danza • Residency May 2026`
  },
  {
    id: "balance-in-rovereto-march",
    title: "Balance In - Informal Showing at Rovereto",
    date: "2026-03-20",
    category: "upcoming",
    description: "Informal showing of Balance In at Abbondanza/Bertoni, Rovereto.",
    projectId: "balance-in"
  },
  {
    id: "balance-in-trento",
    title: "Balance In - Trento Presentation",
    date: "2026-04-16",
    category: "upcoming",
    description: "Balance In presented in Trento, Italy.",
    projectId: "balance-in"
  },
  {
    id: "balance-in-premiere-pergine",
    title: "Balance In - Premiere at Pergine Festival",
    date: "2026-06-28",
    category: "upcoming",
    description: "World premiere of Balance In at Pergine Festival, Italy. A duet with live classical guitar exploring the architecture of passion.",
    projectId: "balance-in"
  },
  {
    id: "balance-in-premiere-rovereto",
    title: "Balance In - Premiere at Rovereto",
    date: "2026-09-23",
    category: "upcoming",
    description: "Balance In premiere at Abbondanza/Bertoni, Rovereto.",
    projectId: "balance-in"
  },
  {
    id: "body-as-border-raid",
    title: "The Body as Border - RAID Festival Premiere",
    date: "2026-10-03",
    category: "upcoming",
    description: "Avant-première of the new solo work created with Antonello Tudisco at RAID Festival.",
    projectId: "the-body-as-border"
  },
  {
    id: "body-as-border-napoli-residency",
    title: "The Body as Border - Residency at TAN Naples",
    date: "2026-05-01",
    category: "upcoming",
    description: "Residency at Teatro Area Nord (TAN), Naples. Origin: artistic encounter during Body.light at Museo e Real Bosco di Capodimonte.",
    projectId: "the-body-as-border"
  },
  {
    id: "liminal-phantoms-graz",
    title: "Liminal Phantoms - Evening of Wonders, Graz",
    date: "2026-03-10",
    category: "upcoming",
    description: "Liminal Phantoms presented at Evening of Wonders in Graz, Austria.",
    projectId: "liminal-phantoms"
  },
  {
    id: "wfdal-tour-2027",
    title: "What Falls Doesn't Always Land - Upcoming Tour 2027",
    date: "2027-01-01",
    category: "upcoming",
    description: "The acclaimed duet with Yamuna Huygen announces an upcoming tour in 2027. Dates to be confirmed.",
    projectId: "what-falls-doesnt-always-land"
  },
  {
    id: "noise-without-silence-valencia",
    title: "Noise Without Silence - Valencia 2026",
    date: "2026-09-01",
    category: "upcoming",
    description: "Noise Without Silence will be presented in Valencia, Spain in September 2026.",
    projectId: "noise-without-silence"
  },
  {
    id: "wfdal-tour-2025",
    title: "What Falls Doesn't Always Land - Tour 2025",
    date: "2025-09-10",
    category: "upcoming",
    description: "The acclaimed duet with Yamuna Huygen continues its international tour across Canada and Europe, including Festival Quartiers Danses in Montreal.",
    link: "https://www.youtube.com/watch?v=QFRiAeixpYk",
    projectId: "what-falls-doesnt-always-land"
  },
  {
    id: "strangers-italy-tour",
    title: "Strangers in the Night - Italy Tour Continues",
    date: "2025-03-01",
    category: "news",
    description: "The tragicomic metatheatre work with Jos Baker and Carlo Massari continues touring major Italian theatres.",
    projectId: "strangers-in-the-night"
  },
  {
    id: "liminal-phantoms-awards",
    title: "Liminal Phantoms - Award-Winning Solo",
    date: "2024-10-01",
    category: "news",
    description: "The solo performance continues to receive international recognition, including 1st place at Frankfurt Fringe Festival and audience awards across Europe.",
    fullDescription: `Liminal Phantoms has received multiple awards throughout its touring history:

• Fringe Festival Winner 1st Place - Frankfurt, Germany
• Raw and Polished Audience Award Winner - Nuremberg, Germany
• In:vzbl Festival Cultural Award Winner - Timisoara, Romania

The work has been presented across Europe, North America, and Asia, including festivals in Las Palmas, Montreal, Berlin, Tenerife, Linz, Munich, and Bangalore.`,
    projectId: "liminal-phantoms"
  },
  {
    id: "fika-korea",
    title: "FIKA Travels to South Korea",
    date: "2024-11-01",
    category: "news",
    description: "The interactive performance FIKA expands its research to include Korean cultural perspectives on human connection.",
    projectId: "fika"
  }
];

export const getUpcomingEvents = () => newsItems.filter(item => item.category === 'upcoming').sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
export const getLatestNews = () => newsItems.filter(item => item.category === 'news');
