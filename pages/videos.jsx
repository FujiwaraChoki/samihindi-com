import VideoCard from '../components/VideoCard';
import { getVideos } from './api/videos'
import styles from '../styles/ProjectsPage.module.css';
import { useEffect } from 'react';

const VideosPage = ({ videos }) => {
    return (
        <>
            <h3>My Videos (Rumble & YouTube)</h3>
            <div className={styles.container}>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </>
    );
};

export async function getStaticProps() {
    const videos = await getVideos();

    return {
        props: { title: 'Videos', videos },
    };
}

export default VideosPage;
