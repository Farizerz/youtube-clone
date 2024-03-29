import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const Video = ({videoData}) => {
    if(!videoData) {
        return (
            <div>Loading...</div>
        )
    }

    const videoSrc = `https://www.youtube.com/embed/${videoData.id.videoId}`;

    console.log(videoSrc);

    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: "70%"}}>
                <iframe frameBorder="0" height="100%" width="100%" tile="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant="h4">
                    {videoData.snippet.title} - {videoData.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle1">
                    {videoData.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                    {videoData.snippet.description}
                </Typography>                
            </Paper>
        </React.Fragment>
    )
}

export default Video;