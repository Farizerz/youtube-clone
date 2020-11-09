import React from 'react';

import { Grid } from '@material-ui/core';

import {SearchBar, Video, RecommendedVideos } from './components/';

import youtube from './api/youtube.js';

class App extends React.Component {
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

        console.log(response);
    }

    render() {
        return (
            <div>
               <Grid justify="center" container spacing={10}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>

                            <Grid item xs={12}>
                                <SearchBar onFormSubmit={this.handleSubmit} />
                            </Grid>

                            <Grid item xs={8}>
                                <Video />
                            </Grid>

                            <Grid item xs={4}>
                                <RecommendedVideos />
                            </Grid>

                        </Grid>
                    </Grid>
               </Grid>
            </div>
        )
    }
}

export default App;
