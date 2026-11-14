import type { Track } from "./track";

export interface InternshipRecord {
  id: string;
  member: string;
  role: string;
  company: string;
  term: string;
  track: Track;
  location: string;
}
