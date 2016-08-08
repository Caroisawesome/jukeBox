import {
    SET_USER_SONGS,
    SET_SONG_SEARCH_TERM
} from '../action/action_types.js';

const defaultSongState = {
    songs: []
};

export function userSongs(state = defaultSongState, action) {
    switch (action.type) {
    case SET_USER_SONGS:
        return action.payload;
    default:
        return state;
    }
}


export function songSearchTerm(state = "", action) {
    switch (action.type) {
    case SET_SONG_SEARCH_TERM:
        return action.payload;
    default:
        return state;
    }
}