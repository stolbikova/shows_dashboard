import axios from "axios";
import { notFound } from "next/navigation";

import { GET_EPISODE_DETAILS_API } from "@/constants";

import EpisodeDetails from "@/components/EpisodeDetails/EpisodeDetails";

interface EpisodePageProps {
  params: { id: string };
}

const EpisodePage = async (props: EpisodePageProps) => {
  const {
    params: { id },
  } = props;

  const getEpisodeApi = GET_EPISODE_DETAILS_API(id);

  try {
    const res = await axios.get(getEpisodeApi);
    console.log("DATAAAA", res);
    const episode = res.data;
    return <EpisodeDetails episode={episode} />;
  } catch (error) {
    return notFound();
  }
};

export default EpisodePage;
