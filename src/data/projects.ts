export interface VideoLink {
  title: string;
  url: string;
  type: 'trailer' | 'performance' | 'other';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  fullDescription?: string;
  synopsis?: string;
  quote?: {
    text: string;
    author: string;
  };
  dossierLink?: string;
  details?: {
    duration?: string;
    premiere?: string;
    location?: string;
    performers?: string;
    choreography?: string;
    music?: string;
    themes?: string[];
    credits?: string;
    production?: string;
    presentations?: string[];
    dramaturg?: string;
    costumeDesign?: string;
    awards?: string[];
    scenography?: string;
    lightingDesign?: string;
    soundDesign?: string;
    residencies?: string[];
    keyThemes?: string[];
  };
  videoLinks?: VideoLink[];
  imageUrl?: string;
  galleryImages?: string[];
  type: 'performance' | 'film';
  order?: number; // For custom ordering
}

export const projects: Project[] = [
  {
    id: "balance-in",
    title: "Balance In",
    subtitle: "Duet with Live Guitar",
    year: "2026",
    description: "An intimate duet where contemporary dance and live classical guitar breathe, collide, and reshape each other in real time.",
    fullDescription: `Balance In explores balance as a living negotiation: between two bodies, between human and instrument, between discipline and instinct, between structure and spontaneity. The performers oscillate between harmony and rupture, revealing how passion can both stabilise and destabilise.

The guitar becomes an extension of the body; the dancer becomes a resonating chamber. Every pluck, slide, and vibration shifts the physical score. Every gesture influences music. The two disciplines compose each other.

Rooted in improvisational research and the parallel creation of movement, musical, and dramaturgical scores, the piece investigates the architecture of passion—its weight, tenderness, and unpredictability.

The work is site-responsive, shaped by each venue's architectural character. A theatre becomes an intimate stage; a gallery becomes a chamber of resonance. Each performance is subtly rewritten by acoustics, light, and the audience's presence.`,
    quote: {
      text: "You have to find a balance between the rigour of the score and the freedom of the body's own expression. The passion is in that negotiation.",
      author: "Anne Teresa De Keersmaeker"
    },
    dossierLink: "https://drive.google.com/file/d/1J74j57lBwxKl-jsATKhjb4J2LMMm6sCI/view?usp=sharing",
    details: {
      duration: "30-45 minutes",
      choreography: "Linus Jansner & Emily Heather Manica",
      performers: "Linus Jansner & Emily Heather Manica",
      music: "Emily Heather Manica (Original, live)",
      premiere: "June 28, 2026 — Pergine Festival, Italy",
      production: "Compagnia Abbondanza/Bertoni",
      credits: "Supported by: Zerogrammi – Permutazioni 2025, Il Vaporetto dell'Immaginario - Venice. Photography: Stefano Manica, Matteo Rioda",
      presentations: [
        "March 20, 2026 — Rovereto, Abbondanza/Bertoni Informal Showing",
        "April 16, 2026 — Trento, Italy",
        "June 28, 2026 — Pergine Festival, Italy (Premiere)",
        "September 23, 2026 — Rovereto, Abbondanza/Bertoni (Premiere)",
        "Il Vaporetto dell'Immaginario, Venice — April 2025",
        "Teatro Alla Cartiera with Abbondanza/Bertoni, Rovereto — July 2025 + Feb & March 2026",
        "Finalist, Zerogrammi Permutazioni 2025, Casa Luft, Turin — Public showing October 2025"
      ]
    },
    videoLinks: [
      { title: "Trailer", url: "https://youtu.be/CSraERodfm4", type: "trailer" },
      { title: "Performance", url: "https://youtu.be/w-kWC1IbUhE", type: "performance" }
    ],
    type: 'performance',
    order: 1
  },
  {
    id: "strangers-in-the-night",
    title: "Strangers in the Night",
    subtitle: "Theatre Performance",
    year: "2024",
    description: `"The old world is dying. The new one is slow to appear. And in this interregnum, a great variety of morbid symptoms appear." — Antonio Gramsci`,
    fullDescription: `Immersed in a world of tragicomic metatheatre and movement, Strangers in the Night confronts lies, manipulation, deceit, and personal trauma with a striking mix of absurdity, virtuosity, and humor.

The performance draws heavily on Freud's approach to the unconscious and the notion of the divided self — id, ego, and superego. It also incorporates influences from Brecht's epic theatre, with its critical and detached gaze upon social reality; from the Beckettian absurd, which transforms emptiness and waiting into existential experience; and from Gondry's dreamlike, surreal visions, capable of merging poetry and visual estrangement.

The creative process began with Kafka's Metamorphosis, and as it evolved, other influences and personal experiences intertwined within the work.

From these sources emerges a performance that questions the very nature of theatre itself: metatheatre becomes a tool for inquiry and unmasking; the boundary between stage and reality begins to fracture; fiction reveals itself as a space of power and manipulation.

The body on stage becomes a living, unstable language: it twists, breaks, and multiplies into contradictory roles, exposing inner tensions that echo the repressed, defensive, and instinctual forces of a divided psyche. Words do not explain—they disturb. Gestures do not decorate—they reveal.

Moments of intimacy transform into cruelty; irony suddenly collapses into tragedy. The performance shifts rapidly between performative languages, leaving the spectator with a sense of precarious balance — fragile, on the verge of collapse.

Dreamlike yet politically charged, Strangers in the Night fuses social realism with tragicomic writing, rejecting both pathos and aesthetic self-indulgence. Through sharp irony, abrupt tonal shifts, and direct incursions into the audience, the piece becomes a ruthless yet captivating game.

Its composition adopts the language of defeat to speak of hope: every fall opens the possibility of rebirth; every decay carries within it the promise of transformation. The spectator's experience unfolds within this unstable space of constant reversals — where violence coexists with irony, vulnerability with cruelty, and reality with its own representation.

Strangers in the Night is thus an investigation into the chiaroscuro of contemporary existence: into the impossibility of fully distinguishing truth from fiction, and into the power of performance art to inhabit that ambiguous space and transform it into a shared, collective experience.`,
    details: {
      choreography: "Jos Baker, Linus Jansner, Carlo Massari",
      performers: "Jos Baker, Linus Jansner, Carlo Massari",
      credits: "Script: Jos Baker. Idea: Carlo Massari. In collaboration with: Martina La Ragione, Chiara Osella. Original music and sound composition: Andreas Moulin. Technical direction: Francesco Massari. Costumes: Chiara Defant",
      premiere: "August 30, 2024",
      location: "Italy tour",
      presentations: [
        "August 30, 2024 — Italy Premiere",
        "October 2024 — Rome, Teatro India",
        "November 2024 — Bologna, Teatro delle Moline",
        "December 2024 — Turin, Teatro Astra",
        "December 2024 — Milan, Teatro Out Off",
        "March 1, 2025 — Perugia, Teatro Morlacchi",
        "March 14-15, 2025 — Modena, Teatro delle Passioni",
        "April 13, 2025 — Pergine Valsugana, Teatro Comunale",
        "May 10, 2025 — Napoli, TAN Teatro Area Nord",
        "June 1, 2025 — Bari, Nuovo Teatro Abeliano",
        "September 4, 2025 — Venezia, Forte Marghera",
        "September 19, 2025 — Bolzano, Teatro Cristallo",
        "September 20, 2025 — Florence, Teatro Cantiere Florida",
        "October 25, 2025 — Palermo, Teatro Biondo",
        "November 15, 2025 — Genova, Teatro Akropolis",
        "December 8, 2025 — Trieste, Teatro Miela"
      ]
    },
    videoLinks: [
      { title: "Trailer (Vimeo)", url: "https://vimeo.com/1038511084", type: "trailer" },
      { title: "Trailer (YouTube)", url: "https://www.youtube.com/watch?v=Ib9Ci7ij2pE", type: "trailer" },
      { title: "Performance", url: "https://www.youtube.com/watch?v=CvlPeHTxUSo", type: "performance" }
    ],
    type: 'performance',
    order: 2
  },
  {
    id: "what-falls-doesnt-always-land",
    title: "What Falls Doesn't Always Land",
    subtitle: "Duet with Handpan",
    year: "2024",
    description: "A poetic and visceral duet exploring displacement, trust, and the struggle for survival.",
    fullDescription: `This is a poetic and visceral duet that explores the emotional weight of displacement, trust, and the struggle for survival. Two bodies fall, catch, and merge, echoing themes of forced migration and emotional resilience. It's an intimate reflection on how physical closeness can still feel distant when the world around you is unstable. 

This piece is a sculptural and bodily exploration of identity, grief, and the silent negotiations in every partnership, especially those navigating trauma. It questions: What do we hold onto when everything else collapses? What falls… doesn't always land.`,
    dossierLink: "https://drive.google.com/file/d/1GEbxfblf9x-SghfxaCBxTUqnOnnEezl8/view?usp=sharing",
    details: {
      duration: "Approx. 20min",
      choreography: "Linus Jansner, Yamuna Huygen",
      performers: "Linus Jansner, Yamuna Huygen",
      premiere: "December 2024 — RedSapata, Linz, Austria",
      location: "Austria / Canada",
      presentations: [
        "December 20, 2024 — RedSapata, Linz, Austria (Premiere)",
        "May 5, 2025 — Eslöv, Sweden",
        "September 10, 2025 — Festival Quartiers Danses, Montreal, Canada"
      ]
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=JcDAF7e63A8", type: "trailer" },
      { title: "Performance", url: "https://www.youtube.com/watch?v=L33j9ULOvUU", type: "performance" },
      { title: "Outside Version", url: "https://youtu.be/HmtfQQG1c6U", type: "other" }
    ],
    type: 'performance',
    order: 3
  },
  {
    id: "noise-without-silence",
    title: "Noise Without Silence",
    subtitle: "Solo Work",
    year: "2025",
    description: "A powerful solo exploring the cacophony of modern existence and the search for stillness.",
    fullDescription: "Noise Without Silence is a solo work developed together with Charlotte Fenn and Vladimir Staicu that delves into the relentless noise of contemporary life—both external and internal. The piece examines how we navigate a world filled with constant stimulation and the rare moments of peace we find within the chaos.",
    dossierLink: "https://drive.google.com/file/d/1V-_bGLG5ceK1FM12hkml64q8EBBzAeb0/view?usp=sharing",
    details: {
      choreography: "Linus Jansner",
      performers: "Linus Jansner",
      premiere: "2025",
      location: "Mannheim",
      credits: "Developed together with Charlotte Fenn and Vladimir Staicu"
    },
    videoLinks: [
      { title: "Performance", url: "https://youtu.be/Los37YIz-V8", type: "performance" },
      { title: "Trailer", url: "https://www.youtube.com/watch?v=jpjV4yIv1ow", type: "trailer" }
    ],
    type: 'performance',
    order: 4
  },
  {
    id: "the-body-as-border",
    title: "The Body as Border",
    subtitle: "Solo Work",
    year: "2026",
    description: "A solo that moves through the body as an unstable territory—an open threshold where identity does not settle but happens.",
    fullDescription: `The Body as Border is conceived as a spin-off of the performance Body.light and takes the form of a solo that moves through the body as an unstable territory—an open threshold where identity does not settle but happens. 

A male body that explores its own ambiguity, or vice versa, exposes itself as sensitive matter, crossed by opposing forces: control and release, resistance and vulnerability, desire and self-affirmation. The body becomes a plastic surface, both object and subject of the gaze, a place where identity is constructed and dissolves in the time of the action, shaping an intimate discourse that passes not through words but through presence.`,
    dossierLink: "https://drive.google.com/file/d/1cNMFnNZU30tWBwXGwML-gRB5BptS7urL/view?usp=sharing",
    details: {
      choreography: "Linus Jansner & Antonello Tudisco",
      performers: "Linus Jansner",
      premiere: "October 3-4, 2026 — RAID Festival",
      themes: ["Identity", "Vulnerability", "Control", "Release"],
      presentations: [
        "October 3-4, 2026 — RAID Festival (Avant-première)"
      ]
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=N6AhdyXQatE", type: "trailer" },
      { title: "The Body as Border (Original Version)", url: "https://youtu.be/BcfKNi4RRtA", type: "performance" },
      { title: "New Version / Development", url: "https://youtu.be/elnVH_UjGCU", type: "other" }
    ],
    type: 'performance',
    order: 5
  },
  {
    id: "beneath",
    title: "Beneath",
    subtitle: "Trio Work",
    year: "2025",
    description: "A collaborative trio work exploring what lies beneath the surface of human interaction.",
    fullDescription: `Beneath is a trio work created in collaboration with Charlotte Fenn, exploring the hidden layers of human connection and what exists below the surface of our everyday interactions. The piece delves into the unspoken dynamics between individuals, examining the currents of emotion, memory, and desire that flow beneath our conscious awareness.

Created as an investigation into the spaces between people—the gaps, silences, and tensions that define our relationships—Beneath invites audiences to consider what remains unseen in their own connections with others.`,
    details: {
      choreography: "Linus Jansner & Charlotte Fenn",
      premiere: "March 17, 2025",
      location: "Mannheim"
    },
    videoLinks: [
      { title: "Performance", url: "https://youtu.be/Mdpd_sueJUo", type: "performance" }
    ],
    type: 'performance',
    order: 6
  },
  {
    id: "liminal-phantoms",
    title: "Liminal Phantoms",
    subtitle: "Solo Performance",
    year: "2023",
    description: "Exploring the fragile boundaries between self-perception and societal expectations.",
    synopsis: `Liminal Phantoms delves into the fragile boundaries between self-perception and societal expectations. The piece captures the fleeting, often haunting moments of transition—those "liminal spaces" where identities are questioned, transformed, or lost in the search for authenticity. It reflects the emotional turbulence of breaking free from imposed constraints while unravelling the layers of one's identity.`,
    fullDescription: `Liminal Phantoms is a solo performance that investigates the liminal spaces we inhabit between different states of being. The work explores how we construct and deconstruct our identities in response to external pressures and internal desires, navigating the threshold between who we are and who we are expected to be.

The piece is a growth for each year, presenting a new solo adaptation.

This work invites the audience to confront their hidden phantoms—the expectations they carry and the fragments they leave behind. It is a poetic reflection on what it means to exist between what is expected and what is truly felt.`,
    dossierLink: "https://drive.google.com/file/d/1qNkbLoJMkAOuCzzS24n5RYsvm-8aHDML/view?usp=sharing",
    details: {
      duration: "35 minutes",
      choreography: "Linus Jansner",
      performers: "Linus Jansner",
      dramaturg: "Linus Jansner & Carla Piris (supported)",
      costumeDesign: "Christina Bengtsson",
      premiere: "March 5, 2023",
      location: "Canada / Europe tour",
      keyThemes: [
        "Liminality: Exploring transitional phases where the past dissolves and the future is uncertain",
        "Phantom Self: A metaphor for the personas we adopt to fit societal expectations, often leaving behind traces of our true selves"
      ],
      awards: [
        "Fringe Festival Winner 1st: Frankfurt, Germany",
        "Raw and Polished Audience Award Winner: Nuremberg, Germany",
        "In:vzbl Festival Cultural Award Winner: Timisoara, Romania"
      ],
      presentations: [
        "Las Palmas, Canary Islands — Tanesco",
        "Montreal, Canada — Festival Quartiers Danses",
        "Berlin, Germany — Bethanien Creative Quarter",
        "Tenerife, Spain — MasDanza",
        "Linz, Austria — RedSapata",
        "Munich, Germany — TanzFabrik",
        "Bangalore, India — Beu Festival",
        "Frankfurt, Germany — Fringe Festival (1st Place Winner)",
        "Nuremberg, Germany — Raw and Polished (Audience Award Winner)",
        "Timisoara, Romania — In:vzbl Festival (Cultural Award Winner)",
        "Victoria Teatro"
      ]
    },
    videoLinks: [
      { title: "Version 3 (Latest)", url: "https://www.youtube.com/watch?v=pAaMhpiGI2U", type: "performance" },
      { title: "Version 2", url: "https://youtu.be/AAJyXjCLzYI", type: "performance" },
      { title: "Version 1 (Original)", url: "https://www.youtube.com/watch?v=OtBTy0RnkXs", type: "performance" },
      { title: "Trailer", url: "https://www.youtube.com/watch?v=gQ70bPP7rMo", type: "trailer" }
    ],
    type: 'performance',
    order: 7
  },
  {
    id: "fika",
    title: "FIKA",
    subtitle: "Interactive Performance",
    year: "2024",
    description: "An interactive performance transforming the everyday ritual of sharing a coffee break into an exploration of human connection.",
    synopsis: `FIKA is an interactive performance that transforms the everyday ritual of sharing a coffee break into an exploration of human connection, cultural habits, and subconscious gestures. Blurring the line between audience and performer, the piece invites participants to engage in small yet profound exchanges that highlight the invisible language of social interaction.`,
    fullDescription: `FIKA is a dance-theatre event that investigates how cultural rituals shape the way we relate to one another. Inspired by the Swedish tradition of fika—a communal coffee break that emphasizes conversation and pause—the piece expands beyond Sweden, incorporating research from Korean, German, and other cultural perspectives to examine how different societies create space for connection. 

Developed through public space observations, interviews, and studio research, FIKA dissects the micro-gestures and subconscious behaviors that occur during moments of social exchange. What happens in silence? How do we express warmth, distance, or hesitation through small movements? And how can we become more aware of the ways we interact with others?`,
    details: {
      duration: "1.5h",
      choreography: "Linus Jansner, Geosmin Yang",
      performers: "Geosmin Yang, Linus Jansner, Seam Yun",
      premiere: "February 20, 2024",
      residencies: [
        "January-February 2024 — Residency & Performance at Tanzfabrik, Munich, Germany. Intensive choreographic and artistic research under the guidance of Micha Purucker, focusing on cultural gestures, human interaction, and the subconscious in social contexts.",
        "March 2024 — Collaboration & Performance at RegnbogeFabrik, Berlin",
        "November 2024 — Residency & Performance at Berlin Mitte Theaterhouse",
        "November 10, 2024 — Workshop in Berlin"
      ]
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=tRPiVkCgVzQ", type: "trailer" },
      { title: "Video Performance", url: "https://www.youtube.com/watch?v=jhYf1n0j5Ss", type: "performance" },
      { title: "Full Performance", url: "https://www.youtube.com/watch?v=daxFDvaNRc4", type: "performance" }
    ],
    type: 'performance',
    order: 8
  },
  {
    id: "rorschach",
    title: "The Live Rorschach",
    subtitle: "Immersive Experience",
    year: "2020",
    description: "An interactive performance designed to explore perception and reality.",
    fullDescription: `Perception shapes reality. We all see the world through the unique lens of our experiences, emotions, and subconscious. The Live Rorschach is an immersive, interactive performance designed to expose and explore the mind's instinct to impose meaning onto abstract images, much like the psychological Rorschach inkblot test.

Originally developed during the pandemic with limitations on audience interaction, the project now aims to fully engage multiple senses—including touch, smell, and taste—to heighten immersion. The work plays with sensory manipulation to shift emotional and psychological states, using scent to transport, sound to unsettle, and textures to distort the body's relation to space.

At its core, The Live Rorschach is about perception, distortion, and the fragility of reality. What we see, hear, and feel is never objective—it is shaped by everything we have been, everything we fear, and everything we hope to be. The piece invites audiences to step into a world where meaning is fleeting, reality is unstable, and the mind is both the observer and the creator.

Is what you see real—or is your mind simply trying to make sense of the unknown?`,
    details: {
      choreography: "Linus Jansner",
      performers: "Cast of 6 performers",
      premiere: "September 22, 2020"
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=-kAOIJwe2GE", type: "trailer" },
      { title: "Performance", url: "https://youtu.be/L2E3BGXpFQo", type: "performance" }
    ],
    type: 'performance',
    order: 9
  },
  {
    id: "imburte-union",
    title: "Imbrute Union",
    subtitle: "Ensemble Performance",
    year: "2021",
    description: "Exploring the delicate balance between love and anger, creation and destruction, in a dystopian world.",
    fullDescription: `Imbrute Union explores the delicate balance between love and anger, creation and destruction, and the role of community in shaping individual identity. Set in a dystopian world, this performance delves into the dehumanization present within society and the justice system. 

Through movement, imagery, and provocative narrative, the piece questions how far society is willing to accept and justify the erosion of moral values. The performance centers around a large community struggling with the ethical implications of their actions toward those considered 'different' within their society.`,
    details: {
      choreography: "Linus Jansner",
      performers: "Kevin Au, Camille Cibort, Hobie Schuppe, Chetan Yeragera, Valeria Saija, Alexandros Kyriazis, Tereza Krejcová, Arianna Berton, Linus Jansner",
      premiere: "July 2, 2021",
      location: "SEAD Josef Echart Theatre, Austria",
      music: "Linus Jansner (Sound Edit)"
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=qAgHOvPABGo", type: "trailer" }
    ],
    type: 'performance',
    order: 10
  },
  {
    id: "gloom",
    title: "Gloom",
    subtitle: "Physical Theatre",
    year: "2021",
    description: "An intense piece delving into the psychological captivity of the human mind.",
    synopsis: `In a world where emotional and mental constraints define the boundaries of survival, Gloom invites the audience to witness a struggle against time and personal demons, ultimately questioning whether it's ever too late to restart the journey. The piece highlights the dystopian isolation of individuals trapped in their subconscious, seeking dreams and hope, yet finding only despair.`,
    fullDescription: `Gloom is an intense physical theatre dance piece that delves into the psychological captivity of the human mind. Through the story of three dancers experiencing trauma, the piece explores themes of isolation, mental health, and the raw emotional struggles that accompany human existence. 

The work reflects the fine line between love and anger, creation and destruction, and community versus isolation. The narrative is told through a unique combination of movement, sound, and lighting, using symbolism and metaphors to explore themes such as time, trauma, and the forbidden.`,
    details: {
      duration: "40 minutes",
      choreography: "Linus Jansner",
      scenography: "Linus Jansner",
      lightingDesign: "Linus Jansner",
      performers: "Kevin Au, Camille Cibort, Geosmin Yang",
      premiere: "March 5, 2021",
      location: "SEAD Josef Echart Theatre",
      music: "Cristobal Tapia De Veer, Lady Vengeance OST, Two Steps from Hell",
      themes: ["Memory & Trauma", "Isolation & Community", "The Struggle for Identity", "Hope, Despair, and Rebirth"]
    },
    videoLinks: [
      { title: "Trailer", url: "https://youtu.be/ABTQTlkvWJY", type: "trailer" },
      { title: "Performance", url: "https://youtu.be/l1RJqr9Sy5U", type: "performance" }
    ],
    type: 'performance',
    order: 11
  },
  {
    id: "just-like-old-days",
    title: "Just Like Old Days",
    subtitle: "Comedic Duet",
    year: "2021",
    description: "A comedic duet reimagining contemporary life through the lens of Chaplin and Keaton.",
    fullDescription: `Just Like Old Days is a comedic duet that reimagines contemporary life, drawing inspiration from the film Limelight and the enduring legacies of Charlie Chaplin and Buster Keaton. This piece explores how we view life through the lens of humor and tragedy, taking us on a journey to view the challenges of today's world with a fresh perspective. 

Through dance, acrobatics, classic comedy, stunt work, and multimedia, it invites audiences to see life more lightly and highlights the importance of living in harmony with one another.`,
    details: {
      choreography: "Linus Jansner & Chetan Yeragera",
      performers: "Chetan Yeragera, Linus Jansner",
      dramaturg: "Carla Piris",
      premiere: "February 2021",
      location: "SEAD, Austria"
    },
    videoLinks: [
      { title: "Performance", url: "https://youtu.be/06X8F6FuvMc", type: "performance" },
      { title: "Extracts", url: "https://youtu.be/jZRIjlUs97A", type: "other" }
    ],
    type: 'performance',
    order: 12
  },
  {
    id: "haitun",
    title: "海豚 (Hǎitún)",
    subtitle: "Solo Performance",
    year: "2021",
    description: "A striking solo exploring captivity, restriction, and the fragile illusion of control.",
    fullDescription: `海豚 (Hǎitún) is a striking solo performance that explores the theme of captivity, restriction, and the fragile illusion of control. Set within a confined square, meticulously taped around the dancer's body, the piece unravels the psychological and physical tension of being trapped—both literally and metaphorically. 

The performance begins with the dancer restrained within this marked boundary, a blue balloon held in his mouth, acting as a vital yet delicate extension of his breath. The balloon becomes a symbol of survival, dependency, and fragility—a force that sustains him but simultaneously limits his ability to act freely.`,
    details: {
      duration: "10 minutes",
      choreography: "Mengxi Chen (Beijing) & Linus Jansner",
      performers: "Linus Jansner",
      themes: ["Captivity", "Breath", "Restriction", "Transformation"]
    },
    videoLinks: [
      { title: "Performance", url: "https://www.youtube.com/watch?v=z1K72NAMmdY", type: "performance" }
    ],
    type: 'performance',
    order: 13
  },
  {
    id: "stor-fagel",
    title: "Stor Fågel",
    subtitle: "Ensemble Piece",
    year: "2016",
    description: "A visually striking ensemble piece exploring the interdependence of individuals within a collective.",
    fullDescription: `Stor Fågel is a visually striking and emotionally charged ensemble piece that explores the interdependence of individuals within a collective. Performed by six dancers, the work takes inspiration from the image of a great bird in flight, where every feather, every movement, is essential to its survival. 

At the heart of the piece is a large-scale, living puzzle—hands and feet painted as fragmented pieces of the bird's form. As the dancers move, separate, and reconnect, the image constantly shifts between unity and disarray, mirroring the delicate balance required for both flight and human connection.`,
    details: {
      duration: "6 minutes",
      choreography: "Linus Jansner",
      scenography: "Linus Jansner",
      performers: "Six Dancers",
      premiere: "March 10, 2016 — Winner of LDMG Choreographic Competition",
      music: "Yosi Horikawa",
      soundDesign: "Yosi Horikawa"
    },
    videoLinks: [
      { title: "Trailer 1", url: "https://www.youtube.com/watch?v=j7zOkrLJZHE", type: "trailer" },
      { title: "Trailer 2", url: "https://www.youtube.com/watch?v=Mu1HUHUZ7tw", type: "trailer" }
    ],
    type: 'performance',
    order: 14
  },
  {
    id: "through-the-looking-glass",
    title: "Through the Looking Glass",
    subtitle: "Dance Performance",
    year: "2019",
    description: "Exploring how modern distractions create bewilderment and disconnection.",
    synopsis: `The characters in Through the Looking Glass unknowingly travel down paths that seem full of promise but ultimately lead them further away from their true desires. Guided by oblivion, they live between reality and the imagined, caught in a web of distractions. The piece creates a dark, comedic atmosphere, using a unique movement language and striking imagery to highlight the absurdity of our disconnection in a digitally dominated world. Through this exploration, the piece invites the audience to reflect on the impact of modern distractions on their own lives and relationships.`,
    fullDescription: `Through the Looking Glass is a dance performance that examines our relationship with reflection, perception, and the distorted realities we create for ourselves. The work explores how modern life and its constant distractions can lead to bewilderment and a sense of disconnection from our authentic selves.`,
    details: {
      duration: "8 minutes",
      choreography: "Linus Jansner",
      premiere: "November 9, 2019",
      location: "SEAD Josef Echart Theatre",
      keyThemes: [
        "Disconnection in Relationships",
        "The Impact of Technology on Human Interaction",
        "Denial and the Craving for Attention",
        "Bewilderment and its Effect on Mental Health",
        "The Journey Between Reality and the Imagined"
      ]
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=ovfFnAsv1vw", type: "trailer" }
    ],
    type: 'performance',
    order: 15
  },
  {
    id: "vicious-cycle",
    title: "Vicious Cycle",
    subtitle: "Solo with Paul Blackman",
    year: "2021",
    description: "A gripping dance piece delving into the relentless loop of human suffering and repetition.",
    quote: {
      text: "Trapped in repetition. Searching for escape. But what happens when the cycle becomes the only thing we know?",
      author: ""
    },
    fullDescription: "Vicious Cycle is a dance piece created with Paul Blackman that explores the cyclical nature of human suffering and our tendency to repeat patterns even when we know they cause us harm. The work captures the visceral struggle of breaking free from destructive cycles.",
    details: {
      duration: "15 minutes",
      choreography: "Paul Blackman & Linus Jansner",
      performers: "Linus Jansner",
      lightingDesign: "Paul Blackman",
      soundDesign: "Paul Blackman",
      music: "Jonny Greenwood - Able Bodied Seamen",
      premiere: "June 20, 2021"
    },
    videoLinks: [
      { title: "Performance", url: "https://www.youtube.com/watch?v=nLjXaUn2QJ4", type: "performance" },
      { title: "Trailer", url: "https://www.youtube.com/watch?v=ZNndYB23vHo", type: "trailer" }
    ],
    type: 'performance',
    order: 16
  }
];

// Short films data
export const shortFilms: Project[] = [
  {
    id: "why-not-me",
    title: "Why Not Me?",
    subtitle: "Short Film Series",
    year: "2021",
    description: "A multi-part short film series exploring personal questions and identity.",
    fullDescription: "Why Not Me? is a multi-part short film series that delves into questions of identity, purpose, and personal expression. Each part explores different facets of the central theme.",
    details: {
      credits: "Editing, filming, and production by Linus Jansner"
    },
    videoLinks: [
      { title: "Part 1", url: "https://youtu.be/wvLPhbMnizQ", type: "performance" },
      { title: "Part 2", url: "https://youtu.be/V2EOyQXH42s", type: "performance" },
      { title: "Part 3", url: "https://youtu.be/yKQ6pqXU0Tc", type: "performance" },
      { title: "Part 4", url: "https://youtu.be/QFRiAeixpYk", type: "performance" },
      { title: "Part 5", url: "https://youtu.be/6_ebeENp9Ps", type: "performance" }
    ],
    type: 'film',
    order: 1
  },
  {
    id: "zenith",
    title: "ZENITH",
    subtitle: "Feature Film",
    year: "2022",
    description: "Lead actor role as 'Hungry' in the feature film directed by György Kristof.",
    fullDescription: "ZENITH is an international feature film in which Linus Jansner plays the lead role of 'Hungry'. Directed by György Kristof with choreography by Anton Lachky.",
    details: {
      credits: "Director: György Kristof. Choreography: Anton Lachky. Lead Actor: Linus Jansner as 'Hungry'"
    },
    videoLinks: [
      { title: "Watch", url: "https://youtu.be/h6F0nAI-J0s", type: "performance" }
    ],
    type: 'film',
    order: 2
  }
];

// Music Videos - now called Drone Music Videos
export const musicVideos: Project[] = [
  {
    id: "lsd-berlin",
    title: "LSD Berlin",
    subtitle: "Drone Music Video",
    year: "2022",
    description: "A dynamic music video collaboration bringing movement to music.",
    details: {
      credits: "Editing, filming, and production by Linus Jansner"
    },
    videoLinks: [
      { title: "Watch", url: "https://youtu.be/tcsesFunz7I", type: "performance" }
    ],
    type: 'film'
  },
  {
    id: "heading-my-way-amsterdam",
    title: "Heading My Way Amsterdam",
    subtitle: "Drone Music Video",
    year: "2022",
    description: "A visual journey through Amsterdam captured through dance.",
    details: {
      credits: "Editing, filming, and production by Linus Jansner"
    },
    videoLinks: [
      { title: "Watch", url: "https://youtu.be/b0kFEYK8Xx8", type: "performance" }
    ],
    type: 'film'
  }
];

// Custom sort function to respect the order property
export const getAllWorks = () => [...projects].sort((a, b) => {
  if (a.order !== undefined && b.order !== undefined) {
    return a.order - b.order;
  }
  return parseInt(b.year) - parseInt(a.year);
});

export const getAllFilms = () => [...shortFilms].sort((a, b) => {
  if (a.order !== undefined && b.order !== undefined) {
    return a.order - b.order;
  }
  return parseInt(b.year) - parseInt(a.year);
});
