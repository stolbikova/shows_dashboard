import axios from "axios";

import ShowDetails from "@/components/ShowDetails/ShowDetails";
import EpisodeList from "@/components/EpisodeList/EpisodeList";
import { Show, Episode } from "@/types";
import { GET_EPISODES_API, GET_SHOW_DETAILS_API } from "@/constants";

import styles from "./page.module.css";

const defaultShowId = "6771";

interface ShowPageProps {
  params: { id: string };
}

export default async function ShowPage(props: ShowPageProps) {
  const {
    params: { id },
  } = props;

  const showDetailsApi = GET_SHOW_DETAILS_API(id);
  const episodesApi = GET_EPISODES_API(id);

  // Fetch data on the server
  const showResponse = await axios.get(showDetailsApi);
  const episodesResponse = await axios.get(episodesApi);

  const show = showResponse.data as Show;
  const episodes = episodesResponse.data as Episode[];

  return (
    <div className={styles.pageContainer}>
      <ShowDetails show={show} />
      <h2 className={styles.episodeHeader}>Episodes</h2>

      <EpisodeList episodes={episodes} />
    </div>
  );
}
