export interface ShowImage {
  medium: string;
  original: string;
}

export interface Show {
  id: number;
  name: string;
  summary: string;
  image: ShowImage;
}

export interface Episode {
  id: number;
  name: string;
  summary: string;
  image: ShowImage;
  season: number;
  number: number;
  airdate: string;
}
