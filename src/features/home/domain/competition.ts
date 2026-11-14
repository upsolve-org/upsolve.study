import type { Track } from "./track";

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

export type TrackFilter = "All" | Track;

export interface LightboxImage {
  src: string;
  label: string;
  competition: string;
}
