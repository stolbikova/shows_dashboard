import Image from "next/image";

import { Show } from "@/types";

import styles from "./ShowDetails.module.css";

interface ShowDetailsProps {
  show: Show;
}

const ShowDetails = ({ show }: ShowDetailsProps) => {
  return (
    <div className={styles.showContainer}>
      <div className={styles.showImageWrapper}>
        <Image
          src={show.image.medium}
          alt={show.name}
          width={500}
          height={450}
          className={styles.showImage}
          layout="responsive"
          priority={true}
        />
      </div>
      <div className={styles.showInfo}>
        <h1 className={styles.showTitle}>{show.name}</h1>
        <div
          className={styles.showSummary}
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />
      </div>
    </div>
  );
};

export default ShowDetails;
