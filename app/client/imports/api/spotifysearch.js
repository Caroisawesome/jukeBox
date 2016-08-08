'use strict';

import { ReactiveVar } from 'meteor/reactive-var';
import { check } from 'meteor/check';

const searchURL = 'https://api.spotify.com/v1/search';

class SpotifySearch {

    constructor() {
        this.results = new ReactiveVar({});
    }

    /**
     * this method performs a fuzzy search on the spotify api.
     * it sets results to an object organized by tracks.
     * @param {string} query -  name of artist, track, and/or album.
     */
    searchTracks(query) {
        check(query, String);

        const searchRes = this.results;
        fetch(`${searchURL}?q=${query}&type=track`)
            .then(data => data.json())
            .then(response => {
                searchRes.set(response);
            });
    }

    /**
     * this method performs a fuzzy search on the spotify api.
     * it sets results to an object organized by albums.
     * @param {string} query -  name of artist, track, and/or album.
     */
    searchAlbums(query) {
        check(query, String);

        const searchRes = this.results;
        fetch(`${searchURL}?q=${query}&type=album`)
            .then(data => data.json())
            .then(response => {
                searchRes.set(response);
            });
    }

    /**
     * get results from search.
     * @returns {object}
     */
    getResults() {
        return this.results.get();
    }
}


const SearchApi = new SpotifySearch();

export default SearchApi;
