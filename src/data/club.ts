export type Track =
  "Hackathons" | "Pitching" | "Competitive Programming" | "CTF";

export interface TrackInfo {
  id: Track;
  summary: string;
  focus: string;
  accent: "green" | "red";
}

export interface CompetitionImage {
  src: string;
  label: string;
  caption?: string;
}

export interface CompetitionWin {
  id: string;
  competition: string;
  semester: string;
  track: Track;
  placement: string;
  winnings?: string;
  tier: "gold" | "podium" | "finalist";
  description: string;
  teams: string;
  images: CompetitionImage[];
}

export interface InternshipRecord {
  id: string;
  member: string;
  role: string;
  company: string;
  term: string;
  track: Track;
  location: string;
}

export const CLUB_INFO = {
  name: "UPsolve",
  tagline: "Build. Compete. Pitch. Solve.",
  description:
    "A student collective focused on shipping products under pressure, pitching ideas that hold up, solving algorithmic problems, and breaking systems in CTFs.",
  email: "hello@upsolve.org",
  github: "https://github.com/upsolve-org",
};

export const TRACKS: TrackInfo[] = [
  {
    id: "Hackathons",
    summary: "24 to 48 hour product sprints from blank repo to live demo.",
    focus: "Full-stack prototyping, AI tooling, civic & campus software.",
    accent: "green",
  },
  {
    id: "Pitching",
    summary: "Turning technical prototypes into clear, defensible ventures.",
    focus: "Problem framing, unit economics, crisp stage storytelling.",
    accent: "red",
  },
  {
    id: "Competitive Programming",
    summary: "ICPC-style algorithmic problem solving against the clock.",
    focus: "Graphs, dynamic programming, number theory, speed.",
    accent: "green",
  },
  {
    id: "CTF",
    summary: "Offensive and defensive security through Capture the Flag.",
    focus: "Web exploitation, binary pwn, cryptography, reverse engineering.",
    accent: "red",
  },
];

export const COMPETITION_WINS: CompetitionWin[] = [
  {
    id: "enactus-philippines-2026",
    competition:
      "Enactus Philippines National Competition & Innovation Summit 2026",
    semester: "1st Sem · AY 2026–2027",
    track: "Pitching",
    placement: "2nd Runner-Up (Top 4 Championship)",
    winnings: "₱100,000",
    tier: "gold",
    description:
      "Clinched 2nd Runner-Up in the Top 4 Championship of the Khan Academy Education Impact Challenge during the Philippine Youth Innovation Summit 2026, earning a ₱100,000 grant to scale educational impact.",
    teams:
      "UP Baguio — Jasper Wayne Molitas Bides, Jasper Kurt Benitez Corsal, Makki Bileg Kanani",
    images: [
      {
        src: "/competitions/enactus-champion.jpg",
        label: "Enactus Champion",
      },
    ],
  },
  {
    id: "dost-cordi-inspire-2026",
    competition:
      "DOST Cordi Inspire: Smart City & Governance Innovation Challenge",
    semester: "1st Sem · AY 2026–2027",
    track: "Pitching",
    placement: "2× 2nd Place & 3rd Place",
    winnings: "₱13,000 total",
    tier: "gold",
    description:
      "Three UPsolve teams swept podium finishes across the Smart Governance and Smart DRR & Climate Change Adaptation tracks at DOST Baguio-Benguet's Cordi Inspire competition.",
    teams:
      "UPSolve (2nd, Smart DRR & CCA · ₱5,000), The New Bugs (2nd, Smart Governance · ₱5,000), Team Tanaw (3rd, Smart Governance · ₱3,000), Spaghetti Coders (Participant, Smart Governance)",
    images: [
      {
        src: "/competitions/dost-upsolve.jpg",
        label: "UPSolve · 2nd Place (DRR & CCA)",
      },
      {
        src: "/competitions/dost-new-bugs.jpg",
        label: "The New Bugs · 2nd Place (Governance)",
      },
      {
        src: "/competitions/dost-tanaw.jpg",
        label: "Team Tanaw · 3rd Place (Governance)",
      },
      {
        src: "/competitions/dost-spaghetti-coders.jpg",
        label: "Spaghetti Coders · Participant (Governance) ",
      },
    ],
  },
  {
    id: "pldt-ai-30-hours-2026",
    competition: "PLDT AI in 30 Hours",
    semester: "1st Sem · AY 2026–2027",
    track: "Hackathons",
    placement: "Top 10 Finalist",
    tier: "podium",
    description:
      "Built and pitched working AI prototypes in a 30-hour sprint hosted by PLDT Enterprise, PLDT Innolab, and ePLDT, placing two UP teams in the Top 10 national finalists.",
    teams: "Team UP Solve & Team Manipulatorz",
    images: [
      {
        src: "/competitions/pldt-ai-30h.jpg",
        label: "Top 10 Finalists",
      },
    ],
  },
  {
    id: "asean-ai-hackathon-2026",
    competition: "ASEAN AI Hackathon 2026",
    semester: "1st Sem · AY 2026–2027",
    track: "Hackathons",
    placement: "Top 40 Finalist",
    tier: "finalist",
    description:
      "Represented the University of the Philippines in the Smart City track, advancing to the Top 40 teams across Southeast Asia.",
    teams: "Team UP-FLOW (Smart City Track)",
    images: [
      {
        src: "/competitions/asean-ai-top40.jpg",
        label: "Top 40 Announcement",
      },
    ],
  },
];

// Replace these sample entries with your members' real internships and roles.
export const INTERNSHIPS: InternshipRecord[] = [
  {
    id: "int-1",
    member: "M. Santos",
    role: "Software Engineering Intern",
    company: "Stripe",
    term: "Summer 2026",
    track: "Hackathons",
    location: "Singapore",
  },
  {
    id: "int-2",
    member: "K. Villanueva",
    role: "Quantitative Developer Intern",
    company: "Jane Street",
    term: "Summer 2026",
    track: "Competitive Programming",
    location: "Hong Kong",
  },
  {
    id: "int-3",
    member: "N. Bautista",
    role: "Security Engineering Intern",
    company: "Cloudflare",
    term: "Summer 2026",
    track: "CTF",
    location: "Remote",
  },
  {
    id: "int-4",
    member: "C. Reyes",
    role: "Product Management Intern",
    company: "Grab",
    term: "Midyear 2025",
    track: "Pitching",
    location: "Manila",
  },
  {
    id: "int-5",
    member: "R. Dela Cruz",
    role: "Frontend Engineering Intern",
    company: "Vercel",
    term: "Summer 2025",
    track: "Hackathons",
    location: "Remote",
  },
  {
    id: "int-6",
    member: "T. Ocampo",
    role: "AppSec Research Intern",
    company: "Shopify",
    term: "Summer 2025",
    track: "CTF",
    location: "Remote",
  },
];
