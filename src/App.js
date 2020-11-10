import React from 'react';

import { Grid } from '@material-ui/core';

import {SearchBar, Video, VideoList } from './components/';

import youtube from './api/youtube.js';

class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.handleSubmit('Za warudo');
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {     
            params: {
                part: 'snippet',
                maxResults: 5,
                q: searchTerm,
                type: "video",
                key: 'AIzaSyDF_FQRXTDmNtX7M7YAtYxUsMjtqkZcJJg',
            },
        });
        
        this.setState({ video: response.data.items, selectedVideo: response.data.items[0] });
        console.log(response);
    }

    render() {
        const { selectedVideo } = this.state;
        const { video } = this.state;
        return (
            <div>
               <Grid justify="center" container spacing={10}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>

                            <Grid item xs={12}>
                                <SearchBar onFormSubmit={this.handleSubmit} />
                            </Grid>

                            <Grid item xs={8}>
                                <Video videoData={selectedVideo} />
                            </Grid>

                            <Grid item xs={4}>
                                <VideoList videos = {video} onVideoSelect = {this.onVideoSelect} />
                            </Grid>

                        </Grid>
                    </Grid>
               </Grid>
            </div>
        )
    }
}

export default App;
