const BASE_API = "https://api.tvmaze.com/";

export const GET_SHOW_DETAILS_API = (showId: string) =>
  `${BASE_API}shows/${showId}`;

export const GET_EPISODES_API = (showId: string) =>
  `${BASE_API}shows/${showId}/episodes`;

export const GET_SEARCH = (q: string) => `${BASE_API}search/shows?q=${q}`;

export const GET_EPISODE_DETAILS_API = (episodeId: string) =>
  `${BASE_API}episodes/${episodeId}`;
