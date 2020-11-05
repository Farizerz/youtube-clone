import React from 'react';

import { Grid } from '@material-ui/core';

import {SearchBar, Video, RecommendedVideos } from './components/';

import youtube from './api/youtube.js';

class App extends React.Component {
    render() {
        return (
            <div>
               <Grid justify="center" container spacing={16}>
                    <Grid item xs={12}>
                        <Grid container spacing={16}>

                            <Grid item xs={12}>
                                <SearchBar />
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
