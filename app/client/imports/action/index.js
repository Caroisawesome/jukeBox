import { SET_USER_SONGS } from './action_types.js';

const payloadActionGen = type => payload => ({ type, payload});
export const setUserSongs = payloadActionGen(SET_USER_SONGS);
