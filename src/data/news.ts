export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'upcoming' | 'news' | 'update';
  description: string;
  fullDescription?: string;
  dateLabel?: string;
  link?: string;
  projectId?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "body-as-border-sweden-2027",
    title: "The Body as Border — Sweden, 28 February 2027",
    date: "2027-02-28",
    category: "upcoming",
    description: "The Body as Border will be presented in Sweden on 28 February 2027.",
    fullDescription: `The Body as Border continues its development and presentation journey with a performance in Sweden on 28 February 2027.

Venue details will be announced when confirmed.`,
    projectId: "the-body-as-border"
  },
  {
    id: "wfdal-wiesbaden-2026",
    title: "What Falls Doesn't Always Land — Wiesbaden, Germany",
    date: "2026-10-01",
    dateLabel: "October 2026",
    category: "upcoming",
    description: "What Falls Doesn't Always Land travels to Wiesbaden, Germany, in October 2026.",
    fullDescription: `What Falls Doesn't Always Land continues its international tour in Wiesbaden, Germany, in October 2026.

The precise performance date and venue will be announced when confirmed.`,
    projectId: "what-falls-doesnt-always-land"
  },
  {
    id: "capodimonte-movimentale-2026",
    title: "Don’t You Hear? — Festival Movimentale at Capodimonte, Napoli",
    date: "2026-07-23",
    category: "upcoming",
    description: "Don’t You Hear? will be presented on 23–24 July 2026 for Festival Movimentale’s twentieth-anniversary edition in Napoli.",
    fullDescription: `Don’t You Hear? is a site-specific performance created for Festival Movimentale’s twentieth-anniversary edition at Museo e Real Bosco di Capodimonte in Napoli.

Developed in dialogue with Jusepe de Ribera’s Apollo and Marsyas and Capodimonte’s Belvedere courtyard, the work examines violence, hierarchy, silence, complicity, and the collective decision not to see.

Presented 23–24 July 2026 at Museo e Real Bosco di Capodimonte, Napoli, Italy.`,
    projectId: "capodimonte-site-specific"
  },
  {
    id: "liminal-phantoms-romania-2026",
    title: "Liminal Phantoms — Romania, 15–22 June",
    date: "2026-06-15",
    category: "upcoming",
    description: "Liminal Phantoms continues its international journey with new dates in Romania from 15–22 June 2026.",
    fullDescription: `Liminal Phantoms continues its international journey with new dates in Romania from 15–22 June.

The solo performance by Linus Jansner investigates identity, transformation, self-perception, and the fragile space between who we are and who we are expected to become.

More details will be announced soon.

Dates: 15–22 June 2026.
Location: Romania.
Status: Upcoming.`,
    projectId: "liminal-phantoms"
  },
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
  },
  {
    id: "nipai-acting-award-2024",
    title: "Linus Jansner Wins Best Theatrical Acting Performance — NIPAI",
    date: "2024-05-10",
    category: "news",
    description: "Linus Jansner won the theatre competition of the New International Performing Arts Institute (NIPAI) for Best Theatrical Acting Performance.",
    fullDescription: `On 10 May 2024, Linus Jansner won the theatre competition of the New International Performing Arts Institute (NIPAI) in the category Best Theatrical Acting Performance.

NIPAI is an international institute for performing arts training, working with theatre directors, choreographers, and performers from more than 25 countries.`,
    link: "https://www.nipai.org/"
  }
];

const byNewestFirst = (a: NewsItem, b: NewsItem) => new Date(b.date).getTime() - new Date(a.date).getTime();

export const getUpcomingEvents = () => newsItems.filter(item => item.category === 'upcoming').sort(byNewestFirst);
export const getLatestNews = () => newsItems.filter(item => item.category === 'news').sort(byNewestFirst);
