/** Brand, team and competition metadata. Edit here, not in components. */

export const site = {
  name: "Formosa Works",
  wordmark: { serif: "Formosa", mono: "WORKS" },
  tagline: "Health innovation, engineered with Taiwan.",
  framing:
    "Seven health-technology concepts built around Taiwan Excellence-certified products and manufacturing partners, submitted to Go Healthy with Taiwan 2026.",
  marquee: [
    "Seven concepts",
    "One Taiwan supply chain",
    "Cycling",
    "Sportech",
    "Smart Healthcare",
    "Fitness",
    "Health Check-ups",
    "Aesthetic Services",
  ],
  about: {
    lead: "Formosa Works is a student team from FEU Institute of Technology in Manila, working in software engineering.",
    body: [
      "We build health-technology concepts that start from a Taiwan Excellence-certified product rather than ending with one. Every entry here names the specific manufacturers, research institutes and award-listed products it depends on, because a concept that cannot be built with real components is not a concept — it is a mood board.",
      "The seven proposals span the competition’s health verticals: cycling and sportech, smart healthcare, fitness, health check-ups and aesthetic services. Three of them share a single underlying method — cross-sensor phase correlation — applied to entirely different physiological signal bands, which is the closest thing this portfolio has to a thesis.",
    ],
    affiliation: {
      organisation: "FEU Institute of Technology",
      url: "https://www.feutech.edu.ph/",
      location: "Sampaloc, Manila, Philippines",
    },
    /** Where the studio name comes from. */
    note: {
      label: "Why “Formosa”?",
      term: "Ilha Formosa",
      meaning: "beautiful island",
      body: "Portuguese sailors are said to have given Taiwan that name on first sighting it in the 1540s. It outlasted them by four centuries — and every concept on this page begins on that island.",
    },
  },
  team: [
    { name: "Lana Huertas", role: "Main contact", email: "lrhuertas@fit.edu.ph" },
    { name: "Judea Tablate", role: "Team member", email: "jctablate@fit.edu.ph" },
  ],
  competition: {
    name: "Go Healthy with Taiwan 2026",
    organiser: "Taiwan Excellence / StartUp Village",
    url: "https://www.taiwanexcellence.org/en/",
    deadline: "1 August 2026",
  },
  disclaimer:
    "This is a portfolio page presenting our concepts. It is not the official competition submission, which is made through the organiser’s own form.",
};

/** Industries used by the entry filter, in competition-taxonomy order. */
export const industries = [
  "Cycling",
  "Sportech",
  "Smart Healthcare",
  "Fitness",
  "Health Check-ups",
  "Aesthetic Services",
];
