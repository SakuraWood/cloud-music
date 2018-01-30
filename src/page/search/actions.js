import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export const getSongs = createAction(types.GET_SONGS, async result => {
  return {
    songs: result.songs,
  };
});

export const getUser = createAction(types.GET_USERS, async () => {
  return {};
});

export const startSearch = createAction(types.START_SEARCH, async () => {
  return {};
});
