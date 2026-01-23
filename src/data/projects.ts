export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  fullDescription?: string;
  details?: {
    duration?: string;
    premiere?: string;
    location?: string;
    performers?: string;
    choreography?: string;
    music?: string;
    themes?: string[];
  };
  videoLinks?: string[];
  type: 'performance' | 'film';
}

export const projects: Project[] = [
  {
    id: "balance-in",
    title: "Balance In",
    subtitle: "New Creation",
    year: "2026",
    description: "An upcoming work exploring equilibrium between chaos and control.",
    fullDescription: "Balance In is a new creation that explores the delicate equilibrium between chaos and control, stillness and movement. This work investigates how we navigate the constant negotiations between opposing forces in our lives and bodies.",
    details: {
      choreography: "Linus Jansner",
      premiere: "October 21, 2025",
      location: "Italy - Chaotic Kitchen / Abbondanza–Bertoni"
    },
    type: 'performance'
  },
  {
    id: "intimate-speech",
    title: "Intimate Speech",
    subtitle: "Work in Progress",
    year: "2026",
    description: "A solo that moves through the body as an unstable territory—an open threshold where identity does not settle but happens.",
    fullDescription: "Intimate Speech is conceived as a spin-off of the performance Body.light and takes the form of a solo that moves through the body as an unstable territory—an open threshold where identity does not settle but happens. A male body that explores its own ambiguity, or vice versa, exposes itself as sensitive matter, crossed by opposing forces: control and release, resistance and vulnerability, desire and self-affirmation. The body becomes a plastic surface, both object and subject of the gaze, a place where identity is constructed and dissolves in the time of the action, shaping an intimate discourse that passes not through words but through presence.",
    details: {
      choreography: "Antonello Tudisco",
      performers: "Linus Jansner",
      premiere: "RAID Festival — Oct 3–4, 2026",
      themes: ["Identity", "Vulnerability", "Control", "Release"]
    },
    type: 'performance'
  },
  {
    id: "strangers-in-the-night",
    title: "Strangers in the Night",
    subtitle: "Theatre Performance",
    year: "2025",
    description: "A haunting exploration of connection and isolation in the modern world.",
    fullDescription: "Strangers in the Night is a collaborative theatre performance that delves into the ephemeral nature of human connections. Created in collaboration with Jos Baker and Carlo Massari, the work explores how strangers can share profound moments of intimacy before returning to their separate worlds.",
    details: {
      choreography: "Co-creators: Jos Baker, Carlo Massari, Linus Jansner",
      premiere: "August 30, 2024",
      location: "Italy tour"
    },
    type: 'performance'
  },
  {
    id: "what-falls-doesnt-always-land",
    title: "What Falls Doesn't Always Land",
    subtitle: "Duet Performance",
    year: "2024",
    description: "A poetic and visceral duet exploring displacement, trust, and the struggle for survival.",
    fullDescription: "This is a poetic and visceral duet that explores the emotional weight of displacement, trust, and the struggle for survival. Two bodies fall, catch, and merge, echoing themes of forced migration and emotional resilience. It's an intimate reflection on how physical closeness can still feel distant when the world around you is unstable. This piece is a sculptural and bodily exploration of identity, grief, and the silent negotiations in every partnership, especially those navigating trauma. It questions: What do we hold onto when everything else collapses? What falls… doesn't always land.",
    details: {
      duration: "Approx. 20min",
      choreography: "Linus Jansner, Yamuna Huygen",
      performers: "Linus Jansner, Yamuna Huygen",
      premiere: "2024",
      location: "RedSapata Linz, Festival Quartiers Danses Canada, Raw & Polished Festival Germany"
    },
    videoLinks: ["https://youtu.be/L33j9ULOvUU", "https://www.youtube.com/watch?v=HmtfQQG1c6U"],
    type: 'performance'
  },
  {
    id: "fika",
    title: "FIKA",
    subtitle: "Interactive Performance",
    year: "2024",
    description: "An interactive performance transforming the everyday ritual of sharing a coffee break into an exploration of human connection.",
    fullDescription: "FIKA is a dance-theatre event that investigates how cultural rituals shape the way we relate to one another. Inspired by the Swedish tradition of fika—a communal coffee break that emphasizes conversation and pause—the piece expands beyond Sweden, incorporating research from Korean, German, and other cultural perspectives to examine how different societies create space for connection. Developed through public space observations, interviews, and studio research, FIKA dissects the micro-gestures and subconscious behaviors that occur during moments of social exchange. What happens in silence? How do we express warmth, distance, or hesitation through small movements? And how can we become more aware of the ways we interact with others?",
    details: {
      duration: "1.5h",
      choreography: "Linus Jansner, Geosmin Yang",
      performers: "Geosmin Yang, Seam Yun, Ben Banc, Chetan Yeragera",
      premiere: "February 20, 2024"
    },
    videoLinks: ["https://youtu.be/tRPiVkCgVzQ", "https://youtu.be/daxFDvaNRc4"],
    type: 'performance'
  },
  {
    id: "liminal-phantoms",
    title: "Liminal Phantoms",
    subtitle: "Solo Performance",
    year: "2023",
    description: "Exploring the fragile boundaries between self-perception and societal expectations.",
    fullDescription: "Liminal Phantoms is a solo performance that investigates the liminal spaces we inhabit between different states of being. The work explores how we construct and deconstruct our identities in response to external pressures and internal desires, navigating the threshold between who we are and who we are expected to be.",
    details: {
      choreography: "Linus Jansner",
      premiere: "March 5, 2023",
      location: "Canada / Europe tour"
    },
    type: 'performance'
  },
  {
    id: "rorschach",
    title: "The Live Rorschach",
    subtitle: "Immersive Experience",
    year: "2020",
    description: "An interactive performance designed to explore perception and reality.",
    fullDescription: "The Live Rorschach is an immersive performance experience that transforms the audience into active participants in a living psychological test. The work challenges viewers to confront their own perceptions and biases, revealing how subjective interpretation shapes our understanding of reality.",
    details: {
      choreography: "Linus Jansner",
      premiere: "September 22, 2020"
    },
    type: 'performance'
  },
  {
    id: "imburte-union",
    title: "Imbrute Union",
    subtitle: "Ensemble Performance",
    year: "2021",
    description: "Exploring the delicate balance between love and anger, creation and destruction, in a dystopian world.",
    fullDescription: "Imbrute Union explores the delicate balance between love and anger, creation and destruction, and the role of community in shaping individual identity. Set in a dystopian world, this performance delves into the dehumanization present within society and the justice system. Through movement, imagery, and provocative narrative, the piece questions how far society is willing to accept and justify the erosion of moral values. The performance centers around a large community struggling with the ethical implications of their actions toward those considered 'different' within their society.",
    details: {
      choreography: "Linus Jansner",
      performers: "Kevin Au, Camille Cibort, Hobie Schuppe, Chetan Yeragera, Valeria Saija, Alexandros Kyriazis, Tereza Krejcová, Arianna Berton, Linus Jansner",
      premiere: "July 2, 2021",
      location: "SEAD Josef Echart Theatre",
      music: "Linus Jansner (Sound Edit)"
    },
    type: 'performance'
  },
  {
    id: "gloom",
    title: "Gloom",
    subtitle: "Physical Theatre",
    year: "2021",
    description: "An intense piece delving into the psychological captivity of the human mind.",
    fullDescription: "Gloom is an intense physical theatre dance piece that delves into the psychological captivity of the human mind. Through the story of three dancers experiencing trauma, the piece explores themes of isolation, mental health, and the raw emotional struggles that accompany human existence. The work reflects the fine line between love and anger, creation and destruction, and community versus isolation. The narrative is told through a unique combination of movement, sound, and lighting, using symbolism and metaphors to explore themes such as time, trauma, and the forbidden.",
    details: {
      duration: "40 minutes",
      choreography: "Linus Jansner",
      performers: "Kevin Au, Camille Cibort, Geosmin Yang",
      premiere: "March 5, 2021",
      location: "SEAD Josef Echart Theatre",
      music: "Cristobal Tapia De Veer, Lady Vengeance OST, Two Steps from Hell",
      themes: ["Memory & Trauma", "Isolation & Community", "The Struggle for Identity", "Hope, Despair, and Rebirth"]
    },
    type: 'performance'
  },
  {
    id: "just-like-old-days",
    title: "Just Like Old Days",
    subtitle: "Comedic Duet",
    year: "2021",
    description: "A comedic duet reimagining contemporary life through the lens of Chaplin and Keaton.",
    fullDescription: "Just Like Old Days is a comedic duet that reimagines contemporary life, drawing inspiration from the film Limelight and the enduring legacies of Charlie Chaplin and Buster Keaton. This piece explores how we view life through the lens of humor and tragedy, taking us on a journey to view the challenges of today's world with a fresh perspective. Through dance, acrobatics, classic comedy, stunt work, and multimedia, it invites audiences to see life more lightly and highlights the importance of living in harmony with one another.",
    details: {
      choreography: "Linus Jansner",
      performers: "Chetan Yeragera, Linus Jansner",
      premiere: "February 30, 2021"
    },
    type: 'performance'
  },
  {
    id: "haitun",
    title: "海豚 (Hǎitún)",
    subtitle: "Solo Performance",
    year: "2021",
    description: "A striking solo exploring captivity, restriction, and the fragile illusion of control.",
    fullDescription: "海豚 (Hǎitún) is a striking solo performance that explores the theme of captivity, restriction, and the fragile illusion of control. Set within a confined square, meticulously taped around the dancer's body, the piece unravels the psychological and physical tension of being trapped—both literally and metaphorically. The performance begins with the dancer restrained within this marked boundary, a blue balloon held in his mouth, acting as a vital yet delicate extension of his breath. The balloon becomes a symbol of survival, dependency, and fragility—a force that sustains him but simultaneously limits his ability to act freely.",
    details: {
      duration: "10 minutes",
      choreography: "Mengxi Chen (Beijing) & Linus Jansner",
      performers: "Linus Jansner",
      themes: ["Captivity", "Breath", "Restriction", "Transformation"]
    },
    type: 'performance'
  },
  {
    id: "through-the-looking-glass",
    title: "Through the Looking Glass",
    subtitle: "Dance Performance",
    year: "2019",
    description: "Exploring how modern distractions create bewilderment and disconnection.",
    fullDescription: "Through the Looking Glass is a dance performance that examines our relationship with reflection, perception, and the distorted realities we create for ourselves. The work explores how modern life and its constant distractions can lead to bewilderment and a sense of disconnection from our authentic selves.",
    details: {
      choreography: "Linus Jansner",
      premiere: "November 9, 2019"
    },
    type: 'performance'
  },
  {
    id: "stor-fagel",
    title: "Stor Fågel",
    subtitle: "Ensemble Piece",
    year: "2016",
    description: "A visually striking ensemble piece exploring the interdependence of individuals within a collective.",
    fullDescription: "Stor Fågel is a visually striking and emotionally charged ensemble piece that explores the interdependence of individuals within a collective. Performed by six dancers, the work takes inspiration from the image of a great bird in flight, where every feather, every movement, is essential to its survival. At the heart of the piece is a large-scale, living puzzle—hands and feet painted as fragmented pieces of the bird's form. As the dancers move, separate, and reconnect, the image constantly shifts between unity and disarray, mirroring the delicate balance required for both flight and human connection.",
    details: {
      duration: "6 minutes",
      choreography: "Linus Jansner",
      performers: "Six Dancers",
      premiere: "March 10, 2016 – Winner of LDMG Choreographic Competition",
      music: "Yosi Horikawa"
    },
    type: 'performance'
  }
];

// Short films data
export const shortFilms: Project[] = [
  {
    id: "vicious-cycle",
    title: "Vicious Cycle",
    subtitle: "Dance Film",
    year: "2021",
    description: "A gripping dance film delving into the relentless loop of human suffering and repetition.",
    fullDescription: "Vicious Cycle is a dance film that explores the cyclical nature of human suffering and our tendency to repeat patterns even when we know they cause us harm. The work captures the visceral struggle of breaking free from destructive cycles.",
    type: 'film'
  },
  {
    id: "empty-phantoms",
    title: "Empty Phantoms",
    subtitle: "Dance Film",
    year: "2024",
    description: "A haunting dance film exploring absence and presence, memory and forgetting.",
    fullDescription: "Empty Phantoms is a cinematic exploration of the spaces left behind by those who have gone. Winner at Festival Quartiers Danses, the film captures the ghostly presence of memory and the weight of absence.",
    details: {
      premiere: "October 13, 2024",
      location: "Canada"
    },
    type: 'film'
  }
];

export const getAllWorks = () => [...projects, ...shortFilms].sort((a, b) => parseInt(b.year) - parseInt(a.year));
