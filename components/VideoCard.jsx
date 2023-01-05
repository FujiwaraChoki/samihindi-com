import Image from "next/image";
import styles from "../styles/VideoCard.module.css";

const VideoCard = ({ video }) => {
  return (
    <div className={styles.card}>
      <Image src={video.thumbnail_url} height={300} width={600} alt={video.name} />
      <div className={styles.content}>
        <h3>{video.title}</h3>
        <div className={styles.cta}>
          <a
            href={`https://rumble.com/${video.rumble_url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Watch on Rumble
          </a>
          <a
            href={video.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
