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
        console.log(`action到底是什么？     ${action}`);
        console.log(action);
        return Object.assign(state, {
          searchSongsList: action.payload.result.songs,
        });
      },
    },
    [types.GET_USERS]: {
      next(state, action) {
        return Object.assign(state, { userInfo: action.payload });
      },
    },
    [types.START_SEARCH]: {
      next(state) {
        console.log('search start');
        return Object.assign(state, {});
      },
    },
  },
  initialState,
);
