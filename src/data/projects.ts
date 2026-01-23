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
  };
  videoLinks?: VideoLink[];
  imageUrl?: string;
  galleryImages?: string[];
  type: 'performance' | 'film';
}

export const projects: Project[] = [
  {
    id: "balance-in",
    title: "Balance In",
    subtitle: "Duet with Live Guitar",
    year: "2025",
    description: "An intimate and atmospheric encounter between movement and sound—a duet in which contemporary dance and live classical guitar breathe, collide, and reshape each other in real time.",
    fullDescription: `Balance In is an intimate and atmospheric encounter between movement and sound—a duet in which contemporary dance and live classical guitar breathe, collide, and reshape each other in real time.

The work explores balance as a living negotiation: between two bodies, between human and instrument, between discipline and instinct, between structure and spontaneity. The performers oscillate between harmony and rupture, revealing how passion can both stabilise and destabilise the very things it fuels.

The performance exists in a space between musical recital, choreography, and narrative. The guitar becomes an extension of the body; the dancer becomes a resonating chamber. Every pluck, slide, and vibration shifts the physical score. Every gesture influences music. The two disciplines compose each other: movement writes rhythm, music sculpts space.

Rooted in improvisational research and the parallel creation of a movement score, musical score, and dramaturgical score, the piece investigates the architecture of passion shaped by emotions — its weight, its tenderness, its unpredictability. Passion is treated as a force that can steady, break, and transform.

The work is also conceived as site-responsive, consciously shaped by the architectural character of each venue. A theatre becomes an intimate stage; a gallery becomes a chamber of resonance; A courtyard becomes an echoing body. Each performance is subtly rewritten by the acoustics, light and the audience's presence and feelings.

Balance In invites viewers to enter a fragile, profound environment where silence carries tension and every movement is part of a negotiation: with gravity, with sound, with another human being. It is a reflection of the impulse to create — the desire to push, to reach, to fall, and to regain balance.`,
    details: {
      duration: "30-45 minutes",
      choreography: "Linus Jansner & Emily Heather Manica",
      performers: "Linus Jansner & Emily Heather Manica",
      music: "Emily Heather Manica (Original, live)",
      premiere: "October 21, 2025",
      production: "Compagnia Abbondanza/Bertoni",
      credits: "Supported by: Zerogrammi – Permutazioni 2025, Il Vaporetto dell'Immaginario - Venice. Photography: Stefano Manica, Matteo Rioda",
      presentations: [
        "Il Vaporetto dell'Immaginario, Venice — April 2025",
        "Teatro Alla Cartiera with Abbondanza/Bertoni, Rovereto — July 2025 + Feb & March 2026",
        "Finalist, Zerogrammi Permutazioni 2025, Casa Luft, Turin — Public showing October 2025"
      ]
    },
    videoLinks: [
      { title: "Trailer", url: "https://youtu.be/CSraERodfm4", type: "trailer" },
      { title: "Performance", url: "https://youtu.be/w-kWC1IbUhE", type: "performance" }
    ],
    type: 'performance'
  },
  {
    id: "the-body-as-border",
    title: "The Body as Border",
    subtitle: "Solo Work",
    year: "2026",
    description: "A solo that moves through the body as an unstable territory—an open threshold where identity does not settle but happens.",
    fullDescription: `The Body as Border is conceived as a spin-off of the performance Body.light and takes the form of a solo that moves through the body as an unstable territory—an open threshold where identity does not settle but happens. 

A male body that explores its own ambiguity, or vice versa, exposes itself as sensitive matter, crossed by opposing forces: control and release, resistance and vulnerability, desire and self-affirmation. The body becomes a plastic surface, both object and subject of the gaze, a place where identity is constructed and dissolves in the time of the action, shaping an intimate discourse that passes not through words but through presence.`,
    details: {
      choreography: "Linus Jansner & Antonello Tudisco",
      performers: "Linus Jansner",
      premiere: "RAID Festival — Oct 3–4, 2026",
      themes: ["Identity", "Vulnerability", "Control", "Release"]
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=N6AhdyXQatE", type: "trailer" },
      { title: "Performance", url: "https://youtu.be/BcfKNi4RRtA", type: "performance" },
      { title: "Development", url: "https://youtu.be/elnVH_UjGCU", type: "other" }
    ],
    type: 'performance'
  },
  {
    id: "strangers-in-the-night",
    title: "Strangers in the Night",
    subtitle: "Theatre Performance",
    year: "2025",
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
      location: "Italy tour"
    },
    videoLinks: [
      { title: "Trailer (Vimeo)", url: "https://vimeo.com/1038511084", type: "trailer" },
      { title: "Trailer (YouTube)", url: "https://www.youtube.com/watch?v=Ib9Ci7ij2pE", type: "trailer" },
      { title: "Performance", url: "https://www.youtube.com/watch?v=CvlPeHTxUSo", type: "performance" }
    ],
    type: 'performance'
  },
  {
    id: "what-falls-doesnt-always-land",
    title: "What Falls Doesn't Always Land",
    subtitle: "Duet with Handpan",
    year: "2024",
    description: "A poetic and visceral duet exploring displacement, trust, and the struggle for survival.",
    fullDescription: `This is a poetic and visceral duet that explores the emotional weight of displacement, trust, and the struggle for survival. Two bodies fall, catch, and merge, echoing themes of forced migration and emotional resilience. It's an intimate reflection on how physical closeness can still feel distant when the world around you is unstable. 

This piece is a sculptural and bodily exploration of identity, grief, and the silent negotiations in every partnership, especially those navigating trauma. It questions: What do we hold onto when everything else collapses? What falls… doesn't always land.`,
    details: {
      duration: "Approx. 20min",
      choreography: "Linus Jansner, Yamuna Huygen",
      performers: "Linus Jansner, Yamuna Huygen",
      premiere: "2024",
      presentations: [
        "Linz, Austria – RedSapata, 20.12.2024",
        "Eslöv, Sweden – 05.05.2025",
        "Mannheim, Germany – 28.06.2025",
        "Montreal, Canada – Festival Quartiers Danses, 10.09.2025"
      ]
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=JcDAF7e63A8", type: "trailer" },
      { title: "Performance", url: "https://www.youtube.com/watch?v=L33j9ULOvUU", type: "performance" },
      { title: "Outside Version", url: "https://youtu.be/HmtfQQG1c6U", type: "other" }
    ],
    type: 'performance'
  },
  {
    id: "fika",
    title: "FIKA",
    subtitle: "Interactive Performance",
    year: "2024",
    description: "An interactive performance transforming the everyday ritual of sharing a coffee break into an exploration of human connection.",
    fullDescription: `FIKA is a dance-theatre event that investigates how cultural rituals shape the way we relate to one another. Inspired by the Swedish tradition of fika—a communal coffee break that emphasizes conversation and pause—the piece expands beyond Sweden, incorporating research from Korean, German, and other cultural perspectives to examine how different societies create space for connection. 

Developed through public space observations, interviews, and studio research, FIKA dissects the micro-gestures and subconscious behaviors that occur during moments of social exchange. What happens in silence? How do we express warmth, distance, or hesitation through small movements? And how can we become more aware of the ways we interact with others?`,
    details: {
      duration: "1.5h",
      choreography: "Linus Jansner, Geosmin Yang",
      performers: "Geosmin Yang, Seam Yun, Ben Banc, Chetan Yeragera",
      premiere: "February 20, 2024"
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=tRPiVkCgVzQ", type: "trailer" },
      { title: "Video Performance", url: "https://www.youtube.com/watch?v=jhYf1n0j5Ss", type: "performance" },
      { title: "Full Performance", url: "https://www.youtube.com/watch?v=daxFDvaNRc4", type: "performance" }
    ],
    type: 'performance'
  },
  {
    id: "liminal-phantoms",
    title: "Liminal Phantoms",
    subtitle: "Solo Performance",
    year: "2023",
    description: "Exploring the fragile boundaries between self-perception and societal expectations.",
    fullDescription: `Liminal Phantoms is a solo performance that investigates the liminal spaces we inhabit between different states of being. The work explores how we construct and deconstruct our identities in response to external pressures and internal desires, navigating the threshold between who we are and who we are expected to be.

The piece is a growth for each year, presenting a new solo adaptation.`,
    details: {
      choreography: "Linus Jansner",
      premiere: "March 5, 2023",
      location: "Canada / Europe tour"
    },
    videoLinks: [
      { title: "Version 3 (Latest)", url: "https://www.youtube.com/watch?v=pAaMhpiGI2U", type: "performance" },
      { title: "Version 2", url: "https://youtu.be/AAJyXjCLzYI", type: "performance" },
      { title: "Version 1 (Original)", url: "https://www.youtube.com/watch?v=OtBTy0RnkXs", type: "performance" },
      { title: "Trailer", url: "https://www.youtube.com/watch?v=gQ70bPP7rMo", type: "trailer" }
    ],
    type: 'performance'
  },
  {
    id: "noise-without-silence",
    title: "Noise Without Silence",
    subtitle: "Solo Work",
    year: "2022",
    description: "A powerful solo exploring the cacophony of modern existence and the search for stillness.",
    fullDescription: "Noise Without Silence is a solo work that delves into the relentless noise of contemporary life—both external and internal. The piece examines how we navigate a world filled with constant stimulation and the rare moments of peace we find within the chaos.",
    details: {
      choreography: "Linus Jansner",
      performers: "Linus Jansner"
    },
    videoLinks: [
      { title: "Performance", url: "https://www.youtube.com/watch?v=Los37YIz-V8", type: "performance" },
      { title: "Trailer", url: "https://www.youtube.com/watch?v=jpjV4yIv1ow", type: "trailer" }
    ],
    type: 'performance'
  },
  {
    id: "rorschach",
    title: "The Live Rorschach",
    subtitle: "Immersive Experience",
    year: "2020",
    description: "An interactive performance designed to explore perception and reality.",
    fullDescription: `The Live Rorschach is an immersive performance experience that transforms the audience into active participants in a living psychological test. The work challenges viewers to confront their own perceptions and biases, revealing how subjective interpretation shapes our understanding of reality.`,
    details: {
      choreography: "Linus Jansner",
      premiere: "September 22, 2020"
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=-kAOIJwe2GE", type: "trailer" },
      { title: "Performance", url: "https://youtu.be/L2E3BGXpFQo", type: "performance" }
    ],
    type: 'performance'
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
      location: "SEAD Josef Echart Theatre",
      music: "Linus Jansner (Sound Edit)"
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=qAgHOvPABGo", type: "trailer" }
    ],
    type: 'performance'
  },
  {
    id: "gloom",
    title: "Gloom",
    subtitle: "Physical Theatre",
    year: "2021",
    description: "An intense piece delving into the psychological captivity of the human mind.",
    fullDescription: `Gloom is an intense physical theatre dance piece that delves into the psychological captivity of the human mind. Through the story of three dancers experiencing trauma, the piece explores themes of isolation, mental health, and the raw emotional struggles that accompany human existence. 

The work reflects the fine line between love and anger, creation and destruction, and community versus isolation. The narrative is told through a unique combination of movement, sound, and lighting, using symbolism and metaphors to explore themes such as time, trauma, and the forbidden.`,
    details: {
      duration: "40 minutes",
      choreography: "Linus Jansner",
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
    type: 'performance'
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
      credits: "Dramaturg: Carla Piris",
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
    type: 'performance'
  },
  {
    id: "through-the-looking-glass",
    title: "Through the Looking Glass",
    subtitle: "Dance Performance",
    year: "2019",
    description: "Exploring how modern distractions create bewilderment and disconnection.",
    fullDescription: `Through the Looking Glass is a dance performance that examines our relationship with reflection, perception, and the distorted realities we create for ourselves. The work explores how modern life and its constant distractions can lead to bewilderment and a sense of disconnection from our authentic selves.`,
    details: {
      choreography: "Linus Jansner",
      premiere: "November 9, 2019"
    },
    videoLinks: [
      { title: "Trailer", url: "https://www.youtube.com/watch?v=ovfFnAsv1vw", type: "trailer" }
    ],
    type: 'performance'
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
      performers: "Six Dancers",
      premiere: "March 10, 2016 – Winner of LDMG Choreographic Competition",
      music: "Yosi Horikawa"
    },
    videoLinks: [
      { title: "Trailer 1", url: "https://www.youtube.com/watch?v=j7zOkrLJZHE", type: "trailer" },
      { title: "Trailer 2", url: "https://www.youtube.com/watch?v=Mu1HUHUZ7tw", type: "trailer" }
    ],
    type: 'performance'
  },
  {
    id: "beneath",
    title: "Beneath",
    subtitle: "Trio Work",
    year: "2025",
    description: "A collaborative trio work exploring what lies beneath the surface of human interaction.",
    fullDescription: "Beneath is a trio work created in collaboration with Charlotte Fenn, exploring the hidden layers of human connection and what exists below the surface of our everyday interactions.",
    details: {
      choreography: "Linus Jansner & Charlotte Fenn",
      premiere: "March 17, 2025"
    },
    videoLinks: [
      { title: "Performance", url: "https://youtu.be/Mdpd_sueJUo", type: "performance" }
    ],
    type: 'performance'
  },
  {
    id: "vicious-cycle",
    title: "Vicious Cycle",
    subtitle: "Solo with Paul Blackman",
    year: "2021",
    description: "A gripping dance piece delving into the relentless loop of human suffering and repetition.",
    fullDescription: "Vicious Cycle is a dance piece created with Paul Blackman that explores the cyclical nature of human suffering and our tendency to repeat patterns even when we know they cause us harm. The work captures the visceral struggle of breaking free from destructive cycles.",
    details: {
      choreography: "Paul Blackman & Linus Jansner",
      performers: "Linus Jansner"
    },
    videoLinks: [
      { title: "Performance", url: "https://www.youtube.com/watch?v=nLjXaUn2QJ4", type: "performance" },
      { title: "Trailer", url: "https://www.youtube.com/watch?v=ZNndYB23vHo", type: "trailer" }
    ],
    type: 'performance'
  }
];

// Short films data
export const shortFilms: Project[] = [
  {
    id: "zenith",
    title: "Zenith",
    subtitle: "Short Film",
    year: "2023",
    description: "An experimental short film exploring the peak of human experience and emotion.",
    fullDescription: "Zenith is an experimental short film that captures moments at the peak of human experience. A creative exploration through movement and visual storytelling.",
    details: {
      credits: "Editing, filming, and production by Linus Jansner"
    },
    videoLinks: [
      { title: "Watch", url: "https://www.youtube.com/watch?v=h6F0nAI-J0s", type: "performance" }
    ],
    type: 'film'
  },
  {
    id: "jokers-joke",
    title: "Joker's Joke",
    subtitle: "Short Film",
    year: "2022",
    description: "A playful short film exploring humor and mischief through movement.",
    fullDescription: "Joker's Joke is a short film that blends humor and movement in a playful exploration of mischief and the unexpected. A fun creative outlet beyond the stage.",
    details: {
      credits: "Editing, filming, and production by Linus Jansner"
    },
    videoLinks: [
      { title: "Watch", url: "https://www.youtube.com/watch?v=cD2xklDfGrY", type: "performance" }
    ],
    type: 'film'
  },
  {
    id: "trixie",
    title: "Trixie",
    subtitle: "Short Film",
    year: "2021",
    description: "A creative short film exploring character and movement.",
    fullDescription: "Trixie is an experimental short film exploring character development through movement and visual storytelling.",
    details: {
      credits: "Editing, filming, and production by Linus Jansner"
    },
    videoLinks: [
      { title: "Watch", url: "https://youtu.be/zJuDFyENBN4", type: "performance" }
    ],
    type: 'film'
  },
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

// Music Videos
export const musicVideos: Project[] = [
  {
    id: "lsd-berlin",
    title: "LSD Berlin",
    subtitle: "Music Video",
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
    subtitle: "Music Video",
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

export const getAllWorks = () => [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year));
export const getAllFilms = () => [...shortFilms, ...musicVideos].sort((a, b) => parseInt(b.year) - parseInt(a.year));
