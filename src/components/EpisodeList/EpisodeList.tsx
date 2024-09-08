"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import { Episode } from "@/types";
import styles from "./EpisodeList.module.css";

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList = ({ episodes }: EpisodeListProps) => {
  const [expandedSeason, setExpandedSeason] = useState<number | null>(null);

  // Group episodes by season
  const episodesBySeason = useMemo(() => {
    return episodes.reduce((acc: Record<number, Episode[]>, episode) => {
      if (!acc[episode.season]) {
        acc[episode.season] = [];
      }
      acc[episode.season].push(episode);
      return acc;
    }, {});
  }, [episodes]);

  // Toggle the visibility of episodes for a season
  const toggleSeason = (season: number) => {
    setExpandedSeason(expandedSeason === season ? null : season);
  };

  return (
    <div>
      {Object.keys(episodesBySeason).map((season) => (
        <div key={season} className={styles.seasonContainer}>
          <div
            className={styles.seasonHeader}
            onClick={() => toggleSeason(Number(season))}
          >
            <h3>Season {season}</h3>
            <span>{expandedSeason === Number(season) ? "-" : "+"}</span>
          </div>

          {/* Episodes for the selected season */}
          {expandedSeason === Number(season) && (
            <ul className={styles.episodeList}>
              {episodesBySeason[Number(season)].map((episode) => (
                <li key={episode.id} className={styles.episodeItem}>
                  <div className={styles.episodeTitle}>
                    <Link href={`/episode/${episode.id}`}>{episode.name}</Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
