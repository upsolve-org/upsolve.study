export type Track =
  | "Hackathons"
  | "Pitching"
  | "Competitive Programming"
  | "CTF";

export interface TrackInfo {
  id: Track;
  summary: string;
  focus: string;
  accent: "green" | "red";
}
