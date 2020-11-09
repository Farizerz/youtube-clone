import React from 'react';

import RecommendedVideos from './RecommendedVideos.js';

const videoList = ({videos}) => {
    const listOfVideos = videos.map((video, id) => <RecommendedVideos key={id} video={video} />)
    return listOfVideos;
}

export default videoList;
