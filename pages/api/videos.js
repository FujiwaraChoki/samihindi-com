// Import process, to get the environment variables
import process from 'process';

// Import the YouTube API key
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

async function getYoutubeUrl(channelId, title) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=id&type=video&channelId=${channelId}&q=${title}&maxResults=1&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    // If there is no video, return null
    if (data.items.length === 0) {
        return null;
    }

    // Now, return the video url
    return `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`;
  }


export async function getVideos() {
    let videos = [];

    const url = "https://rumble.com/user/SamiHindi";
    try {
        const response = await fetch(url);
        const body = await response.text();

        const lines = body.split('\n');
        for (let line of lines) {
            if (line.includes('video-listing-entry"><article class=video-item><h3 class=video-item--title>')) {
                // Get title
                const title = line.split('video-listing-entry"><article class=video-item><h3 class=video-item--title>')[1].split('</h3>')[0];
                // Get video url, it is the first href and ends with a .html
                const videoUrl = line.split('href=')[1].split('.html')[0] + '.html';
                // Get thumbnail url
                const thumbnailUrl = line.split('src=')[1].split(' alt=')[0];

                // Get YouTube video url
                const youtubeVideoUrl = await getYoutubeUrl('UC1ghEiTed2YQhLY1YNouzfQ', title);

                // Add to videos array
                videos.push({
                    title: title,
                    rumble_url: videoUrl,
                    youtube_url: youtubeVideoUrl,
                    thumbnail_url: thumbnailUrl
                });
            }
        }
    } catch (error) {
        console.error(error);
    }

    return videos;
}