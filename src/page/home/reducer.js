import { handleActions } from 'redux-actions';
import * as types from './actionTypes';

const initialState = {
  searchSongsList: [],
  userInfo: {},
};

export default handleActions(
  {
    [types.GET_SONGS]: {
      next(state, action) {
        return Object.assign(state, { searchSongsList: action.payload });
      },
    },
    [types.GET_USERS]: {
      next(state, action) {
        return Object.assign(state, { userInfo: action.payload });
      },
    },
  },
  initialState,
);
