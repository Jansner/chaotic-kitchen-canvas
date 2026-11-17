export interface Reference {
  id: string;
  projectId: string | null;
  work: string;
  title: string;
  source: string;
  note: string;
  url: string;
  kind: "review" | "programme";
  /** ISO date (year-month) used only for ordering; shown as year/month. */
  date: string;
}

/** Independent writing and public records naming Linus Jansner / Chaotic Kitchen. */
export const references: Reference[] = [
  // Reviews and responses
  { id: "exibart-oo-2024", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "Oriente Occidente Dance Festival 2024", source: "Exibart", note: "Describes Linus Jansner as Jos Baker's shadow or double in the performance.", url: "https://www.exibart.com/progetti-e-iniziative/oriente-occidente-dance-festival-2024-continua-a-rovereto-la-riscoperta-delle-identita/", kind: "review", date: "2024-09" },
  { id: "teatroecritica-2025", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "“It looks like I'm acting, but I'm not”", source: "Teatro e Critica", note: "Perugia review discussing Jansner's movement and stage role directly.", url: "https://www.teatroecritica.net/2025/03/it-looks-like-im-acting-but-im-not-strangers-in-the-night-di-cc-company/", kind: "review", date: "2025-03" },
  { id: "frammenti-2025", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "“Strangers in the night cancella e ridisegna il confine tra realtà e finzione”", source: "Frammenti Rivista", note: "A response to the work naming Jansner among its performers.", url: "https://www.frammentirivista.it/strangers-night-massari-teatro/", kind: "review", date: "2025-04" },
  { id: "klpteatro-2025", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "“Dalla parte di Carlo Massari”", source: "KLP Teatro", note: "Discusses Jansner's character and the section moving through the darkened audience at Kilowatt Festival.", url: "https://www.klpteatro.it/strangers-in-the-night-carlo-massari", kind: "review", date: "2025-07" },
  { id: "artribune-2025", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "Teatro Akropolis festival report", source: "Artribune", note: "Assessment of the Genova presentation at Testimonianze Ricerca Azioni.", url: "https://www.artribune.com/arti-performative/teatro-danza/2025/11/festival-testimonianze-ricerca-azioni-teatro-akropolis-genova/", kind: "review", date: "2025-11" },
  { id: "tanznetz-2023", projectId: null, work: "100.80.40 – rats in the living room (Micha Purucker)", title: "“Kosmos der Gefühle”", source: "Tanznetz", note: "Review at Schwere Reiter, Munich, crediting Jansner as dancer alongside Aurora Bonetti and Polina Sonis.", url: "https://www.tanznetz.de/de/article/2023/purucker-schwere-reiter", kind: "review", date: "2023-01" },
  { id: "medium-fika", projectId: "fika", work: "Fika", title: "“Fika” — an experimental interactive performance, Berlin", source: "Miyeon Choi (Medium)", note: "First-person response identifying Linus Jansner and Geosmin Yang as performers.", url: "https://medium.com/@miyeontheplant/fika-an-experimental-interactive-performance-berlin-9b897728f37a", kind: "review", date: "2023-06" },
  { id: "surlespas-2025", projectId: "liminal-phantoms", work: "Empty Phantoms (Liminal Phantoms)", title: "Festival Quartiers Danses — 11 September", source: "Sur les pas du spectateur", note: "Montreal spectator review of the solo, describing its physical, percussive and acrobatic elements (scroll to 11 September).", url: "https://surlespasduspectateur.blogspot.com/2025/09/", kind: "review", date: "2025-09" },

  // Festival programmes & production pages
  { id: "oo-strangers", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "World premiere", source: "Oriente Occidente", note: "Festival page; co-created and performed by Jos Baker, Linus Jansner and Carlo Massari.", url: "https://www.orienteoccidente.it/en/people/events/strangers-in-the-night", kind: "programme", date: "2024-09" },
  { id: "kilowatt-strangers", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "Kilowatt Festival 2025", source: "Kilowatt Festival", note: "Festival programme listing.", url: "https://www.kilowattfestival.it/en/contenuto/strangers-in-the-night-kwt2025-danza/", kind: "programme", date: "2025-07" },
  { id: "ert-strangers", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "Production page", source: "Emilia Romagna Teatro (ERT)", note: "Production credits.", url: "https://emiliaromagnateatro.com/production/strangers-in-the-night/", kind: "programme", date: "2025-01" },
  { id: "akropolis-strangers", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "Testimonianze Ricerca Azioni 2025", source: "Teatro Akropolis", note: "Genova presentation listing.", url: "https://www.teatroakropolis.com/evento/tra2025-massari/", kind: "programme", date: "2025-10" },
  { id: "cec-strangers", projectId: "strangers-in-the-night", work: "Strangers in the Night", title: "Company page", source: "C&C Company", note: "Production page on the C&C Company website.", url: "https://www.ceccompany.org/copia-di-as-a-dead-weight", kind: "programme", date: "2024-08" },
  { id: "masdanza-lp", projectId: "liminal-phantoms", work: "Liminal Phantoms", title: "28 MASDANZA programme", source: "MASDANZA", note: "Official festival programme (PDF).", url: "https://www.masdanza.com/wp-content/uploads/2023/10/05-28MASDANZA-PROGRAMA-RESUMEN-SUMMARY-PROGRAM.pdf", kind: "programme", date: "2023-10" },
  { id: "laspalmas-lp", projectId: "liminal-phantoms", work: "Liminal Phantoms", title: "Teatro Pérez Galdós hosts the MASDANZA competition", source: "Ayuntamiento de Las Palmas", note: "City press announcement.", url: "https://www.laspalmasgc.es/es/ayuntamiento/prensa-y-comunicacion/notas-de-prensa/nota-de-prensa/El-Teatro-Perez-Galdos-acoge-el-certamen-oficial-de-MASDANZA/", kind: "programme", date: "2023-10" },
  { id: "victoria-lp", projectId: "liminal-phantoms", work: "Liminal Phantoms", title: "28 MASDANZA Tenerife", source: "Teatro Victoria", note: "Tenerife presentation listing.", url: "https://elteatrovictoria.com/portfolio/28masdanza-tenerife/", kind: "programme", date: "2023-10" },
  { id: "solocoreografico-lp", projectId: "liminal-phantoms", work: "Liminal Phantoms", title: "Program Frankfurt 2024", source: "Solocoreografico", note: "Festival programme.", url: "https://www.solocoreografico.com/program-frankfurt-2024", kind: "programme", date: "2024-03" },
  { id: "timisoara-lp", projectId: "liminal-phantoms", work: "Liminal Phantoms", title: "Opening of In:vzbl festival 2023", source: "Timișoara 2023", note: "Festival listing.", url: "https://timisoara2023.eu/ro/evenimente/deschiderea-festivalului-in-v-z-b-l-2023/", kind: "programme", date: "2023-05" },
  { id: "operaplus-lp", projectId: "liminal-phantoms", work: "Liminal Phantoms", title: "Tanečno 2025 festival report", source: "OperaPlus", note: "Report including a photograph captioned with Jansner's name and the work.", url: "https://operaplus.cz/reportaz-festival-tanecno-aneb-utopie-v-casech-krize-slovenskeho-umeni/", kind: "programme", date: "2025-08" },
  { id: "fqd-archive", projectId: "liminal-phantoms", work: "Liminal Phantoms · What Falls Doesn't Always Land", title: "Festival archive", source: "Festival Quartiers Danses", note: "Archive listing the Montréal presentations.", url: "https://quartiersdanses.com/en/archives-fqd/", kind: "programme", date: "2025-09" },
  { id: "fqd-2025-wfdal", projectId: "what-falls-doesnt-always-land", work: "What Falls Doesn't Always Land", title: "FQD unveils the indoor programming of its 23rd edition", source: "Festival Quartiers Danses", note: "2025 programme announcement.", url: "https://quartiersdanses.com/en/festival-quartiers-danses-fqd-unveils-the-indoor-programming-for-its-23rd-edition/", kind: "programme", date: "2025-08" },
  { id: "sonnenstein-wfdal", projectId: "what-falls-doesnt-always-land", work: "What Falls Doesn't Always Land", title: "Studio showing & artist talk", source: "Sonnenstein Loft", note: "Residency showing with artist talk, Linz.", url: "https://www.sonnensteinloft.at/events/studio-showing-presents-what-falls-doesnt-always-land-with-linus-jansner-artist-talk", kind: "programme", date: "2025-04" },
  { id: "pergine-bi", projectId: "balance-in", work: "Balance In", title: "Pergine Festival premiere", source: "Pergine Festival", note: "Premiere listing.", url: "https://perginefestival.it/en/attivita/2026/balance-in-2/", kind: "programme", date: "2026-07" },
  { id: "abbondanza-bi", projectId: "balance-in", work: "Balance In", title: "Full credits", source: "Compagnia Abbondanza/Bertoni", note: "Most precise separation of choreography, live music, Chaotic Kitchen project credit and production.", url: "https://www.abbondanzabertoni.it/24_127/BalanceIndiEmilyHeatherManicaeLinusJansner.html", kind: "programme", date: "2026-02" },
  { id: "teatropergine-bi", projectId: "balance-in", work: "Balance In", title: "Studio showing — Rami Festival Bellandi 2026", source: "Teatro di Pergine", note: "Theatre studio showing.", url: "https://www.teatrodipergine.it/archivio-2025-2026/109-teatro-2025-2026/2826-balance-in-rami-festival-bellandi-2026", kind: "programme", date: "2026-03" },
  { id: "nonaddomesticabili-bi", projectId: "balance-in", work: "Balance In", title: "Heather Manica & Jansner win Non Addomesticabili 2026", source: "Pergine Festival", note: "Award announcement.", url: "https://perginefestival.it/en/heather-manica-jansner-win-non-addomesticabili-2026/", kind: "programme", date: "2026-01" },
  { id: "movimentale-dyh", projectId: "capodimonte-site-specific", work: "Don't You Hear?", title: "Festival programme 2026", source: "Movimentale", note: "Festival programme listing.", url: "https://www.movimentale.com/program26", kind: "programme", date: "2026-07" },
  { id: "capodimonte-dyh", projectId: "capodimonte-site-specific", work: "Don't You Hear?", title: "23–24 July: art and dance meet at Festival Movimentale", source: "Museo e Real Bosco di Capodimonte", note: "Museum announcement naming Linus Jansner and Chaotic Kitchen.", url: "https://capodimonte.cultura.gov.it/23-e-24-luglio-prosegue-lincontro-tra-arte-e-danza-con-il-festival-movimentale-e-le-aperture-serali/", kind: "programme", date: "2026-07" },
  { id: "raid-intimate", projectId: null, work: "Intimate Speech (Antonello Tudisco)", title: "RA.I.D. Festivals, Solofra", source: "GiornaleNews", note: "Performer and creative collaborator; concept and choreography by Antonello Tudisco.", url: "https://giornalenews.it/ra-i-d-festivals-il-3-e-4-ottobre-a-solofra-quattro-appuntamenti-tra-ricerca-corpo-e-nuovi-linguaggi/", kind: "programme", date: "2026-10" },
  { id: "korper-intimate", projectId: null, work: "Intimate Speech (Antonello Tudisco)", title: "30 November 2026 — Sala Assoli Moscato", source: "Körper", note: "Upcoming performance listing.", url: "https://www.korper.it/event-details/intimate-speech-into-me-korperformer-sala-assoli-moscato", kind: "programme", date: "2026-11" },
  { id: "zenith-sfu", projectId: "zenith", work: "Zenith", title: "Film entry", source: "Slovak Film Institute", note: "György Kristóf's dance film, choreographed by Anton Lachky; lists Jansner in the cast.", url: "https://sfu.sk/en/films/zenith/", kind: "programme", date: "2024-06" },
  { id: "zenith-artfilm", projectId: "zenith", work: "Zenith", title: "Art Film festival catalogue 2024", source: "Art Film Fest", note: "Festival catalogue (PDF).", url: "https://iffartfilm.com/wp-content/uploads/2024/06/AFF-katalog-2024-pages.pdf", kind: "programme", date: "2024-06" },
];

export const getReferencesForProject = (projectId: string) =>
  references.filter((r) => r.projectId === projectId);

export const referencesNewestFirst = () =>
  [...references].sort((a, b) => b.date.localeCompare(a.date));

export const formatRefDate = (d: string) => {
  const [y, m] = d.split("-").map(Number);
  return new Date(y, (m || 1) - 1).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
};
