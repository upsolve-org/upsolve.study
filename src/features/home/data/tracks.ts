import type { TrackInfo } from "../domain/track";

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
