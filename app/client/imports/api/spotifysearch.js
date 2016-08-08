'use strict';

import { ReactiveVar } from 'meteor/reactive-var';
import { check } from 'meteor/check';

const searchURL = 'https://api.spotify.com/v1/search';

export class SpotifySearch {

    constructor() {
        this.results = new ReactiveVar({});
    }

    searchTracks(query) {
        check(query, String);

        const searchRes = this.results;
        fetch(`${searchURL}?q=${query}&type=track`)
            .then(data => data.json())
            .then(response => {
                searchRes.set(response);
            });
    }


    searchAlbums(query) {
        check(query, String);

        const searchRes = this.results;
        fetch(`${searchURL}?q=${query}&type=album`)
            .then(data => data.json())
            .then(response => {
                searchRes.set(response);
            });
    }

    getResults() {
        return this.results.get();
    }
}
