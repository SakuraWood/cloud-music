import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export const getSongs = createAction(types.GET_SONGS, result => {
  console.log(result);
  return { result };
});

export const getUser = createAction(types.GET_USERS, () => {
  return {};
});

export const startSearch = createAction(types.START_SEARCH, text => {
  console.log(text);
  return { text };
});
