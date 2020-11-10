import React from 'react';

import RecommendedVideos from './RecommendedVideos';

import { Grid } from '@material-ui/core';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) => <RecommendedVideos onVideoSelect={onVideoSelect} key={id} video={video} />)
    return (
        <Grid container spacing={5}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;
