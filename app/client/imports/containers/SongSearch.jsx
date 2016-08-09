import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import { setSongSearchTerm, setSongSearchResults } from '../action';
import { connect } from 'react-redux';
import SearchApi from '../api/spotifysearch';

class SongSearch extends Component {
    render() {
        return (
            <div>
              <SearchBar
                 value={this.props.songSearchTerm}
                 onChange={this.props.setSearchTerm}
                 onSubmit={this.submitHandler.bind(this)}
                 />
            </div>
        );
    }

    submitHandler() {
        this.props.songSearch(this.props.songSearchTerm)
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToPros = dispatch => {
    return {
        setSearchTerm(event) {
            dispatch(setSongSearchTerm(event.target.value));
        },
        songSearch(terms) {
            "use strict";

            SearchApi.getTracks(terms)
                .then(data => {
                    //console.log('track', tracks);
                    dispatch(setSongSearchResults(data.tracks.items))
                });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(SongSearch);
