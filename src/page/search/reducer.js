import { handleActions } from 'redux-actions';
import * as types from './actionTypes';

const initialState = {
  searchSongsList: [],
  userInfo: {},
};

export default handleActions(
  {
    [types.GET_SONGS]: (state, action) => {
      console.log(`组件action到底是什么？     ${action}`);
      console.log(action);
      return { ...state, searchSongsList: action.payload.result.songs };
    },
    [types.GET_USERS]: (state, action) => {
      return { ...state, userInfo: action.payload };
    },
    [types.START_SEARCH]: state => {
      console.log('search start');
      return state;
    },
  },
  initialState,
);
