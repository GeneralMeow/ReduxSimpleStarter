import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAtAiBU3_dzxt886nqCK4XJNvkcUpkNSrs';



class App extends Component {
    constructor( props ){
        super( props );

    this.state = { videos: [] };
    YTSearch( { key: API_KEY, term: 'baby big cats'}, ( videos ) => {
        this.setState({ videos });
    });
}
    render(){
    return <div> 
            <SearchBar />
            <VideoDetail />
            <VideoList videos={ this.state.videos } />
        </div>
    }
}


ReactDOM.render( <App />, document.querySelector('.container') )