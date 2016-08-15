import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongItem from './SongItem.js';

class SearchResult extends Component {
    render() {
        return (
            <div className="ui basic segment">
              <h1>results...</h1>



              <div className="ui four cards">
                {this.props.songList.map(this.resultMapper)}
              </div>

            </div>
        );
    }

    resultMapper(props, index) {
        return (
              <SongItem key={index} {...props} />
        );
    }
}


const mapStateToProps =  state => {
    return {
        songList: state.songSearchResults
    };
};

export default connect(mapStateToProps)(SearchResult);
