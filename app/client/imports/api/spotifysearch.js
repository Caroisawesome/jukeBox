'use strict';

import { check } from 'meteor/check';

const searchURL = 'https://api.spotify.com/v1/search';

const SearchApi = {


    /**
     * this method performs a fuzzy search on the spotify api.
     * gets results object organized by tracks.
     * @param {string} query -  name of artist, track, and/or album.
     */
    getTracks(query) {
        check(query, String);
        return fetch(`${searchURL}?q=${query}&type=track`)
            .then(data => data.json())
    },

    /**
     * this method performs a fuzzy search on the spotify api.
     * gets results object organized by albums.
     * @param {string} query -  name of artist, track, and/or album.
     */
    getAlbums(query) {
        check(query, String);
        return fetch(`${searchURL}?q=${query}&type=album`)
            .then(data => data.json());
    }
};


export default SearchApi;
