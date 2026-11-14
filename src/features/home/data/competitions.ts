import type { CompetitionWin } from "../domain/competition";

export const COMPETITION_WINS: CompetitionWin[] = [
  {
    id: "enactus-philippines-2026",
    competition: "Enactus Philippines National Competition & Innovation Summit 2026",
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
    competition: "DOST Cordi Inspire: Smart City & Governance Innovation Challenge",
    semester: "1st Sem · AY 2026–2027",
    track: "Pitching",
    placement: "2× 2nd Place & 3rd Place",
    winnings: "₱13,000 total",
    tier: "gold",
    description:
      "Three UPsolve teams swept podium finishes across the Smart Governance and Smart DRR & Climate Change Adaptation tracks at DOST Baguio-Benguet's Cordi Inspire competition.",
    teams:
      "UPSolve (2nd, Smart DRR & CCA · ₱5,000), The New Bugs (2nd, Smart Governance · ₱5,000), Team Tanaw (3rd, Smart Governance · ₱3,000)",
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
