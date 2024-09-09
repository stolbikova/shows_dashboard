import Image from "next/image";

import { Episode } from "@/types";

import styles from "./EpisodeDetails.module.css";

interface EpisodeDetailsProps {
  episode: Episode;
}

const EpisodeDetails = ({ episode }: EpisodeDetailsProps) => {
  return (
    <div className={styles.episodeContainer}>
      <div className={styles.episodeHeader}>
        <h1 className={styles.episodeTitle}>{episode.name}</h1>
        <p className={styles.episodeAirDate}>Aired on: {episode.airdate}</p>
      </div>
      <div className={styles.episodeContent}>
        <div className={styles.episodeImageWrapper}>
          {episode.image?.medium ? (
            <Image
              src={episode.image.medium}
              alt={episode.name}
              width={500}
              height={450}
              layout="responsive"
              className={styles.episodeImage}
              priority={true}
            />
          ) : null}
        </div>
        <div
          className={styles.episodeSummary}
          dangerouslySetInnerHTML={{
            __html: episode.summary || "No summary available.",
          }}
        />
      </div>
    </div>
  );
};

export default EpisodeDetails;
