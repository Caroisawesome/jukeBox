import React, { Component } from 'react';
import SongSearch from './SongSearch';
import SearchResult from './SearchResults.js';

class Room extends Component {
    render() {
        return (
            <div>
              <SongSearch />
              <SearchResult />
            </div>
        );
    }
}



export default Room;
