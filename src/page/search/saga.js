import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_SONGS, GET_USERS, START_SEARCH } from './actionTypes';
import { getUser, getSongs, searchSongs } from './actions';

export function* getSongInfo(id) {
  yield id;
}

export function* searchSongList(text) {
  try {
    const response = yield call(
      axios.get,
      `http://localhost:4000/search?keywords= ${text}`,
    );
    yield put(getSongs(JSON.stringify(response)));
  } catch (e) {
    console.log(e);
  }
}

export function* getUserInfo(id) {
  try {
    yield put(getUser(id));
  } catch (e) {
    console.log(e);
  }
}

export default function* search() {
  try {
    yield all([
      takeEvery(GET_SONGS, getSongInfo),
      takeEvery(GET_USERS, getUserInfo),
      takeEvery(START_SEARCH, searchSongList),
    ]);
  } catch (e) {
    console.log(e);
  }
}
