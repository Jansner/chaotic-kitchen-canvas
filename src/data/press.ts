export interface PublishedReview {
  id: string;
  project: string;
  language: string;
  quote: string;
  translation?: string;
  publication: string;
  author: string;
  date: string;
  url: string;
}

export interface PressText {
  id: string;
  project: string;
  language: string;
  short: string;
  long: string;
  projectId: string;
}

export const publishedReviews: PublishedReview[] = [
  {
    id: "strangers-teatro-e-critica",
    project: "Strangers in the Night",
    language: "Italiano",
    quote: "La ricerca coreografica riesce a ibridare senza timore i registri – balletto, breakdance, metateatro, tragicommedia – e sembra tentare, con successo, di sospingere l'idea dell'umano oltre i confini della regola e dello stupore.",
    translation: "The choreographic research fearlessly combines ballet, breakdance, metatheatre and tragicomedy, successfully pushing the idea of the human beyond convention and wonder.",
    publication: "Teatro e Critica",
    author: "Ilaria Rossini",
    date: "20 March 2025",
    url: "https://www.teatroecritica.net/2025/03/it-looks-like-im-acting-but-im-not-strangers-in-the-night-di-cc-company/"
  },
  {
    id: "strangers-frammenti",
    project: "Strangers in the Night",
    language: "Italiano",
    quote: "Strangers in the night è un esempio brillante di ricerca meta-teatrale. Intrattiene, diverte, fa riflettere e disorienta (il giusto).",
    translation: "Strangers in the Night is a brilliant example of metatheatrical research. It entertains, amuses, prompts reflection and disorients—just the right amount.",
    publication: "Frammenti Rivista",
    author: "Rebecca Sivieri",
    date: "17 April 2025",
    url: "https://www.frammentirivista.it/strangers-night-massari-teatro/"
  },
  {
    id: "strangers-juliet",
    project: "Strangers in the Night",
    language: "Italiano",
    quote: "L'alienazione definitiva è scongiurata dal poetico humor nero della pièce e dalla bellezza dei movimenti sincronizzati dei corpi.",
    translation: "Final alienation is averted by the piece's poetic black humour and the beauty of the performers' synchronised movements.",
    publication: "Juliet Art Magazine",
    author: "Emanuela Zanon",
    date: "17 March 2025",
    url: "https://www.juliet-artmagazine.com/strangers-in-the-night-di-jos-baker-linus-jansner-carlo-massari-al-teatro-delle-passioni-di-modena/"
  }
];

export const pressTexts: PressText[] = [
  {
    id: "strangers-italian-press-text",
    project: "Strangers in the Night",
    language: "Italiano",
    short: "Una tragicommedia fisica e metateatrale che confonde con precisione il confine tra realtà, finzione e manipolazione.",
    long: "Strangers in the Night attraversa teatro fisico, danza e parola per costruire un gioco scenico instabile, ironico e profondamente umano. Tre interpreti abitano ruoli contraddittori e trasformano intimità, crudeltà e fallimento in una continua negoziazione con il pubblico. Il lavoro affronta la difficoltà di distinguere verità e finzione senza rinunciare all'umorismo nero, alla vulnerabilità e alla forza visiva dei corpi.",
    projectId: "strangers-in-the-night"
  },
  {
    id: "liminal-english-press-text",
    project: "Liminal Phantoms",
    language: "English",
    short: "A shape-shifting solo about identity, expectation and the uncertain space between who we are and who we perform ourselves to be.",
    long: "Liminal Phantoms places the body inside a continuous process of becoming. Through physical transformation and shifting theatrical images, Linus Jansner moves between resistance and exposure, asking what remains when familiar versions of the self begin to dissolve. The solo is intimate yet expansive: a precise, visceral encounter with the identities we inherit, construct and leave behind.",
    projectId: "liminal-phantoms"
  },
  {
    id: "liminal-german-press-text",
    project: "Liminal Phantoms",
    language: "Deutsch",
    short: "Ein wandlungsfähiges Solo über Identität, Erwartung und den unsicheren Raum zwischen Sein und Selbstdarstellung.",
    long: "Liminal Phantoms begreift den Körper als einen Ort ständiger Verwandlung. Durch physische Transformation und wechselnde theatrale Bilder bewegt sich Linus Jansner zwischen Widerstand und Offenheit. Das Solo fragt, was bleibt, wenn vertraute Selbstbilder sich auflösen: eine präzise und unmittelbare Begegnung mit den Identitäten, die wir übernehmen, erschaffen und zurücklassen.",
    projectId: "liminal-phantoms"
  },
  {
    id: "wfdal-canada-press-text",
    project: "What Falls Doesn't Always Land",
    language: "English / Français",
    short: "A visceral duet in which falling becomes a negotiation of trust, displacement and survival. / Un duo viscéral où la chute devient une négociation de la confiance, du déplacement et de la survie.",
    long: "Two bodies fall, catch and carry one another through a landscape shaped by instability. What Falls Doesn't Always Land turns weight and proximity into a quiet study of displacement, grief and resilience. With the handpan as a resonant third presence, Linus Jansner and Yamuna Huygen create a sculptural duet about what we hold onto when certainty gives way.\n\nDeux corps chutent, se rattrapent et se portent dans un paysage marqué par l'instabilité. What Falls Doesn't Always Land transforme le poids et la proximité en une étude sensible du déplacement, du deuil et de la résilience. Avec le handpan comme troisième présence résonnante, Linus Jansner et Yamuna Huygen composent un duo sculptural sur ce qui nous retient lorsque les certitudes cèdent.",
    projectId: "what-falls-doesnt-always-land"
  }
];