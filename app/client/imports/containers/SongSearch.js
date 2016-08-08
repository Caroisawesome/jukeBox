import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js';
import { setSongSearchTerm } from '../action';
import { connect } from 'react-redux';

class SongSearch extends Component {
    render() {
        return (
            <div>
              <SearchBar
                 value={this.props.songSearchTerm}
                 onChange={this.props.setSearchTerm}
                 />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToPros = dispatch => {
    return {
        setSearchTerm(event) {
            dispatch(setSongSearchTerm(event.target.value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(SongSearch);
