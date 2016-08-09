import {
    SET_USER_SONGS,
    SET_SONG_SEARCH_TERM,
    SET_SONG_SEARCH_RESULTS
} from './action_types';

const payloadActionGen = type => payload => ({ type, payload});

export const setUserSongs = payloadActionGen(SET_USER_SONGS);
export const setSongSearchTerm = payloadActionGen(SET_SONG_SEARCH_TERM);
export const setSongSearchResults = payloadActionGen(SET_SONG_SEARCH_RESULTS);
