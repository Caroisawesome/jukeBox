import { SET_USER_SONGS } from '../action/action_types.js';

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
