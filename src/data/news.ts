export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'upcoming' | 'news' | 'update';
  description: string;
  link?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "balance-in-2026",
    title: "Balance In - World Premiere",
    date: "2026-10-21",
    category: "upcoming",
    description: "New creation premiering in Italy in collaboration with Abbondanza–Bertoni. An exploration of equilibrium between chaos and control."
  },
  {
    id: "intimate-speech-2026",
    title: "Intimate Speech at RAID Festival",
    date: "2026-10-03",
    category: "upcoming",
    description: "Avant-première of the new solo work created with Antonello Tudisco at RAID Festival."
  },
  {
    id: "wdfal-tour-2025",
    title: "What Falls Doesn't Always Land - Canada/Europe Tour",
    date: "2025-03-01",
    category: "upcoming",
    description: "The acclaimed duet with Yamuna Huygen continues its international tour across Canada and Europe."
  },
  {
    id: "empty-phantoms-win",
    title: "Empty Phantoms Wins at Festival Quartiers Danses",
    date: "2024-10-13",
    category: "news",
    description: "The dance film Empty Phantoms receives recognition at Festival Quartiers Danses in Canada."
  },
  {
    id: "fika-korea",
    title: "FIKA Travels to South Korea",
    date: "2024-11-01",
    category: "news",
    description: "The interactive performance FIKA expands its research to include Korean cultural perspectives on human connection."
  },
  {
    id: "liminal-phantoms-tour",
    title: "Liminal Phantoms Central Europe Tour",
    date: "2024-06-01",
    category: "update",
    description: "Solo performance tours through Central Europe, exploring identity and societal expectations."
  }
];

export const getUpcomingEvents = () => newsItems.filter(item => item.category === 'upcoming');
export const getLatestNews = () => newsItems.filter(item => item.category === 'news');
