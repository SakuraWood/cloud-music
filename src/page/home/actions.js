import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export const getSongs = createAction(types.GET_SONGS, async () => {
  return {};
});

export const getUser = createAction(types.GET_USERS, async () => {
  return {};
});
